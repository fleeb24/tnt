import random
from util import adict, xset, tdict, tlist, tset, idict, PhaseComplete, PhaseInterrupt, GameEnds
from tnt_cards import discard_cards
from tnt_units import add_unit, move_unit, remove_unit, remove_from_play
from tnt_util import encode_tuple_key, travel_options, add_next_phase, switch_phase
from government import check_revealable, reveal_tech
from diplomacy import declaration_of_war, violation_of_neutrality, convert_to_armed_minor, USA_becomes_satellite
from victory import set_game_won,check_victory_by_military

def encode_command_card_phase(G):

	code = adict()

	player = G.temp.active_players[G.temp.active_idx]
	options = xset()
	options.add('pass')

	options.update(G.players[player].hand)
	# options.update(cid for cid in G.players[player].hand if 'action' in G.objects.table[cid].obj_type)

	code[player] = (options,)

	return code

def check_declarations(G, player):

	options = xset()

	# wars
	options.add((xset(
	    name for name, war in G.players[player].stats.at_war_with.items() if not war and not name in G.temp.threats),))

	# neutral
	nations = xset(nat for nat, info in G.nations.status.items() if not info.is_armed and not nat in G.temp.threats)
	# nations -= G.players[player].diplomacy.violations
	#print('check_declarations nations ', nations)
	options.add((nations,))

	return options

def planning_phase(G, player, action):

	if action is None:
		if 'temp' in G:
			del G.temp

		G.temp = tdict()
		G.temp.season = G.game.sequence[G.game.index]

		G.temp.active_idx = 0
		G.temp.active_players = G.game.turn_order.copy()
		if G.temp.season == 'Winter':
			G.temp.active_players = tlist(p for p in G.game.turn_order if G.players[p].stats.enable_Winter)

		G.temp.decision = tdict()
		G.temp.passes = 0

		G.temp.borders = tdict({p: tdict() for p in G.players})

		return encode_command_card_phase(G)

	faction = G.players[player]

	head, *tail = action

	if head == 'pass':
		G.temp.passes += 1
		G.temp.active_idx += 1
		G.temp.active_idx %= len(G.temp.active_players)

		G.logger.write('{} passes'.format(player))

	elif head in faction.hand:
		G.temp.passes = 0
		card = G.objects.table[head]
		del card.owner
		G.objects.updated[head] = card

		G.temp.decision[player] = card

		faction.hand.remove(head)

		G.logger.write('{} plays a card'.format(player))

		G.temp.active_players.remove(player)
		if len(G.temp.active_players):
			G.temp.active_idx %= len(G.temp.active_players)

	if len(G.temp.active_players) > G.temp.passes:
		return encode_command_card_phase(G)

	# evaluate card choices

	G.temp.commands = tdict()

	for p, card in G.temp.decision.items():  # RULE OVERRULED: emergency priority tie breaks are automatic
		if 'season' in card:
			cmd = tdict()
			cmd.priority = card.priority
			cmd.moved = tset()

			if card.season == G.temp.season:
				val = card.value
				msg = ' {} command: {} {}'.format(card.season, card.priority, val)
			else:
				cmd.emergency = True
				val = G.players[p].stats.emergency_command
				msg = 'n emergency command: {} {}'.format(card.priority, val)

			cmd.value = val
			G.temp.commands[p] = cmd

		else:
			msg = ' bluff (investment card)'

		G.logger.write('{} has played a{}'.format(p, msg))

		discard_cards(G, card._id)

	if len(G.temp.commands):
		##someone played cmd card
		##players put in order of cards: G.temp.order contains players
		G.temp.order = tlist(k for k, v in sorted(
		    [(k, v.priority + ('e' if 'emergency' in v else '')) for k, v in G.temp.commands.items()], key=lambda x: x[1]))
		G.logger.write('Play order is: {}'.format(', '.join(G.temp.order)))

		G.temp.active_idx = 0

		add_next_phase(G, 'Movement')

	else:
		G.logger.write('No player played a command card during {}'.format(G.temp.season))

	raise PhaseComplete

#################
# Movement phase

def powers_present(G, tile):
	powers = xset()
	for uid in tile.units:
		unit = G.objects.table[uid]
		owner = G.nations.designations[unit.nationality]
		powers.add(owner)
	return powers

def get_enemies(G, player):
	enemies = xset(['Minor', 'Major'])
	wars = G.players[player].stats.at_war_with
	enemies.update([p for p in wars if wars[p]])
	return enemies

def get_group(G, unit):
	return G.units.rules[unit.type].type

def isANS(G, unit):
	return get_group(G, unit) in ['A', 'N', 'S']

def conflict_present(G, tile):
	powers = powers_present(G, tile)

	disputed = False
	if len(powers) > 1:
		for p1 in powers:
			if p1 not in G.players:
				disputed = True
			else:
				wars = G.players[p1].stats.at_war_with
				for p2 in powers:
					if p2 in wars and wars[p2]:
						disputed = True
						break
			if disputed:
				break
	return disputed

def check_issue(G, player, other):
	if player == other:
		return False
	if other not in G.players:
		return True
	return G.players[player].stats.at_war_with[other]

def make_disputed(G, tile, aggressor):
	tile.disputed = True
	tile.aggressors = tlist()
	tile.aggressors.append(aggressor)
	G.objects.updated[tile._id] = tile

def make_undisputed(G, tile):
	# remove disputed
	del tile.disputed
	del tile.aggressors
	G.objects.updated[tile._id] = tile

def switch_ownership(G, tile, owner):

	G.objects.updated[tile._id] = tile

	if 'disputed' in tile:

		if owner in tile.aggressors:
			tile.aggressors.remove(owner)

		if len(tile.aggressors) == 0:
			make_undisputed(G, tile)

	pop = tile['pop']
	res = tile['res']
	msg = ''

	if 'owner' in tile and tile.owner in G.players:
		G.players[tile.owner].territory.remove(tile._id)

		G.players[tile.owner].tracks.POP -= pop
		G.players[tile.owner].tracks.RES -= res

	if pop > 0 or res > 0:
		msg = ' (gaining POP={} RES={})'.format(pop, res)

	G.logger.write('{} has taken control of {}{}'.format(owner, tile._id, msg))

	if 'blockaded' in tile:
		del tile.blockaded

	if 'unsupplied' in tile:
		del tile.unsupplied

	G.players[owner].territory.add(tile._id)
	G.players[owner].tracks.POP += pop
	G.players[owner].tracks.RES += res

	if 'capital' in tile:
		owner_info = G.players[owner]
		nation = tile.alligence

		# take control of all unoccupied tiles in nation
		for tilename in G.nations.territories[nation]:
			other = G.tiles[tilename]
			if other._id != tile._id and len(other.units) == 0:
				switch_ownership(G, other, owner)

		if nation in G.nations.status:  # minor switches side

			if tile.owner in G.players:
				G.players[tile.owner].satellites.remove(nation)
			owner_info.diplomacy.satellites.add(nation)

			G.nations.groups[G.nations.designations[nation]].remove(nation)
			G.nations.designations[nation] = owner
			G.nations.groups[owner].add(nation)
		else:  # something bigger -> major/great power
			flag = False
			for rival in G.players:
				faction = G.players[rival]
				if nation in faction.members:
					flag = True
					if nation == faction.stats.great_power:
						# MainCapital

						if rival == owner:
							del faction.stats.fallen
							G.logger.write('{} has been liberated!'.format(tile._id))

						else:
							G.logger.write('{} has fallen! ({} production is zero)'.format(tile._id, tile.owner))
							faction.stats.fallen = owner

							# TODO: maybe add conquered great power to satellites???
							# rule 2.21 defeat of Major Power's Capital: permanently remove 
							# all national units from play
							for tilename in G.nations.territories[nation]:
								other = G.tiles[tilename]
								u_remove = []
								for uid in other.units:
									if uid in G.players[rival].units:
										u_remove.append(uid)
								for uid in u_remove:
									remove_from_play(G,uid)

					else:
						# SubCapital from MajorPower

						# TODO: liberating Great Powers or satellites adds them back properly (not just satellite)

						assert rival != owner, 'regaining great powers is not supported currently'

						G.logger.write('{} has fallen.'.format(nation))

						# wipe out all major power units (nation)
						for uid, unit in faction.units.items():
							if unit.nationality == nation:
								remove_unit(G, unit)

						# turn all colonies into armed minors
						for colony in faction.members[nation]:
							if colony != nation:
								G.nations.status[colony] = tdict()
								G.nations.status[colony].units = tdict()

								convert_to_armed_minor(G, colony)

						# add major power as satellite
						del faction.homeland[nation]
						G.nations.groups[rival].remove(nation)
						G.nations.designations[nation] = owner
						G.nations.groups[owner].add(nation)
				else:
					for member in faction.members:
						states = faction.members[member]
						if nation in states:  # colony
							flag = True
							# colony becomes a satellite

							states.remove(nation)
							G.logger.write('{} captures {}'.format(owner, nation))

							owner_info.diplomacy.satellites.add(nation)
							G.nations.groups[G.nations.designations[nation]].remove(nation)
							G.nations.designations[nation] = owner
							G.nations.groups[owner].add(nation)

							break
			assert flag, 'No nation was captured: {}'.format(nation, tile._id)

	tile.owner = owner
	if check_victory_by_military(G, owner):
		set_game_won(G,owner,'military')
		raise GameEnds

# check for new battle and update disputed/aggressor flags
def eval_movement(G, source, unit, dest):  # usually done when a unit leaves a tile
	player = G.nations.designations[unit.nationality]
	new_battle, engaging, disengaging = False, False, False

	# update source
	enemies = get_enemies(G, player)
	source_powers = powers_present(G, source)
	if 'disputed' in source and len(enemies.intersection(source_powers)):  # there were enemies in source
		disengaging = True

		if not conflict_present(G, source):
			make_undisputed(G, source)
			G.logger.write('{} is no longer disputed'.format(source._id))
		elif player not in source_powers and player in source.aggressors:  # player no longer present
			source.aggressors.remove(player)
			G.objects.updated[source._id] = source

			G.logger.write('{} has left {}'.format(player, source._id))

		if 'owner' in source and source.owner not in source_powers:  # owner no longer present
			new_owner = source.aggressors[0]
			switch_ownership(G, source, new_owner)

	dest_powers = powers_present(G, dest)

	if len(enemies.intersection(dest_powers)):  # enemy in destination -> engaging
		engaging = True
		if 'disputed' not in dest:
			new_battle = True
			make_disputed(G, dest, player)
		elif player not in dest.aggressors:
			dest.aggressors.append(player)

	elif 'owner' in dest and dest.owner != player:  # unoccupied enemy territory
		switch_ownership(G, dest, player)

	# TODO: interventions
	
	#track battle groups
	if isANS(G,unit) and engaging:
		#TODO: only if dest is a Sea tile!?
		sourceName = source._id
		destName = dest._id
		if not destName in G.temp.battle_groups:
			G.temp.battle_groups[destName]=tdict()
		G.temp.battle_groups[destName][unit._id]=sourceName

	# TODO: Sea Invasions -> unit can't fight in current battle
	#
	
	# TODO: Check for realizations of threats (violations)
	
	# Axis entering Canada -> USA becomes West satellite
	if player == 'Axis' and dest._id == 'Ottawa' and 'USA' not in G.player.West.members:
		USA_becomes_satellite(G, 'West')

	return new_battle, engaging, disengaging

def encode_movement(G):
	player = G.temp.order[G.temp.active_idx]
	faction = G.players[player]
	cmd = G.temp.commands[player]

	assert cmd.value > 0, 'No more commands - shouldve moved on to next player'

	options = xset()
	options.add(('pass',))

	if len(G.temp.has_moved) == 0 and not ('emergency' in cmd):  # no units have been moved yet -> can make declarations
		options.update(check_declarations(G, player))

	for uid, unit in faction.units.items():
		if uid in G.temp.has_moved:
			continue
		locs = travel_options(G, unit)
		if len(locs):
			options.add((unit._id, locs))

	# reveal techs in secret vault
	options.update(check_revealable(G, player))

	code = adict()
	code[player] = options
	return code

def new_movement(G, player):
	G.temp.battles = tdict()  # track new battles due to engaging
	G.temp.has_moved = tdict()  # units can only move once per movement phase
	G.temp.threats = tset()
	G.temp.battle_groups = tdict()

	active = G.temp.order[G.temp.active_idx]
	G.logger.write('{} has {} command points for movement'.format(active, G.temp.commands[active].value))

def movement_phase(G, player=None, action=None):

	if 'battles' not in G.temp:  # pseudo prephase
		new_movement(G, player)

	if player is None:  # when returning from some interrupting phase
		return encode_movement(G)

	faction = G.players[player]
	cmd = G.temp.commands[player]

	head, *tail = action

	if head in faction.secret_vault:
		reveal_tech(G, player, head)

	elif head in faction.stats.rivals:  # TODO: use lazy threats - declarations only take effect when aggressing
		# declaration_of_war(G, player, head)
		G.temp.threats.add(head)

		G.logger.write('{} has declared war on {}'.format(player, head))

	elif head in G.diplomacy.neutrals:  # TODO: use lazy threats - declarations only take effect when aggressing
		# violation_of_neutrality(G, player, head)
		G.temp.threats.add(head)

		G.logger.write('{} has threatened to violate the neutrality of {}'.format(player, head))

	elif head in faction.units:

		destination, *border = tail

		if len(border):
			a = destination
			b = border[0]
			key = encode_tuple_key(a, b) if a < b else encode_tuple_key(b, a)

			if key not in G.temp.borders[player]:
				G.temp.borders[player][key] = 0
			G.temp.borders[player][key] += 1
			# if border[0] not in G.temp.borders[player]:
			# 	G.temp.borders[player][border[0]] = 0
			# G.temp.borders[player][border[0]] += 1

		unit = faction.units[head]

		G.temp.has_moved[head] = unit.tile

		source = G.tiles[unit.tile]
		source.units.remove(unit._id)

		dest = G.tiles[destination]

		if 'threats' in G.temp:
			if 'alligence' in dest:
				owner = ''
				if 'owner' in dest and dest.owner in G.temp.threats:  # controlled by player
					owner = dest.owner
					assert owner in G.players, 'how can {} be in threats'.format(owner)

					declaration_of_war(G, player, owner)

					G.temp.threats.remove(owner)
				else:
					owner = dest.alligence
					if owner in G.temp.threats:  # nation
						assert owner in G.nations.status, '{} mistaken as minor/major'.format(owner)

						violation_of_neutrality(G, player, owner)

						G.temp.threats.remove(owner)
			
			elif dest.type in ['Sea','Ocean']:
				pp = powers_present(G,dest)
				for p in pp:
					if p in G.temp.threats:
						declaration_of_war(G, player, p)
						G.temp.threats.remove(p)
						break


		new_battle, engaging, disengaging = eval_movement(G, source, unit, dest)

		if new_battle:
			G.temp.battles[destination] = player

		if engaging or disengaging:
			assert len(border) or G.units.rules[unit.type].type != 'G', 'no border was tracked, but unit is {}'.format(
			    'engaging' if engaging else 'disengaging')

		move_unit(G, unit, destination)

		# decrement command points
		cmd.value -= 1

		G.logger.write('{} moves a unit from {} to {} ({} command points remaining)'.format(
		    player, source._id, destination, cmd.value))

	elif head == 'pass':
		cmd.value = 0  #-= 1 relinquish restl commands TODO: change back if fe
		G.logger.write('{} passes ({} command points remaining)'.format(player, cmd.value))

	if cmd.value > 0:  # continue movement
		return encode_movement(G)

	# movement complete
	del G.temp.commands[player]

	G.logger.write('{} movement is complete'.format(player))

	conflicts = tset()
	for uid, unit in faction.units.items():
		tile = G.tiles[unit.tile]
		if 'disputed' in tile:
			conflicts.add(unit.tile)
		elif tile.type in {'Sea', 'Ocean'}:
			#check if faction and enemy on same tile!
			#in that case, add this tile to battles
			powers = powers_present(G, tile)
			for p in powers:
				if p in G.temp.threats:
					G.temp.battles[tile._id] = player

	G.temp.active_idx += 1

	if len(G.temp.battles) or len(conflicts):  # add combat phase

		G.temp.potential_battles = conflicts
		G.temp.attacker = player

		# either interrupt or add next
		if len(G.temp.commands):  # theres another movement phase after this
			raise PhaseInterrupt('Combat')
		else:
			add_next_phase(G, 'Combat')
			raise PhaseComplete
	else:
		del G.temp.battles

	if not len(G.temp.commands):  # this season is complete
		add_next_phase(G, 'Supply')
		raise PhaseComplete

	new_movement(G, player)
	return encode_movement(G)

def end_phase(G):

	# check blockades
	raise NotImplementedError

	raise PhaseComplete
