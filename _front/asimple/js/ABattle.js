class ABattle {
	constructor(assets, loc, b, stage) {
		this.assets = assets;
		this.location = loc;
		this.b = b;
		this.stage = stage;
		this.roundCounter = 0; //index of current battle round

		this.factions = [b.attacker, b.defender];
		this.allUnitTypes = Array.from(new Set(b.fire_order.map(x => x.unit.type)));

		this.ms = {}; //ms per id
		this.selected = false;
		this.msFire = null;

		this.nColsPerFaction = this.calcMaxUnitTypePerFaction();

		//vertical dimensions:
		let hTitle = 25 * 2; //title of battle, names of factions
		let usz = assets.SZ.cadreDetail;
		let hGap = 4;
		let hRow = usz + hGap;
		let hTotal = hRow * this.allUnitTypes.length + hTitle + 2 * hGap;

		if (b.isSeaBattle) {
			hTotal += 30; //for battle group line under unit lineups
		}

		//horizontal dimensions:
		let wGap = hGap;
		let wFactionGap = 10 * hGap;
		let wCol = usz + wGap;
		let wColTotal = Object.values(this.nColsPerFaction).reduce((a, b) => a + b, 0);

		let wColsPerFaction = {};
		let xStartPerFaction = {};
		let xAkku = wGap;
		for (const f of this.factions) {
			wColsPerFaction[f] = this.nColsPerFaction[f] * wCol;
			xStartPerFaction[f] = xAkku;
			xAkku += wColsPerFaction[f] + wFactionGap;
		}

		let yStartPerUnitType = {};
		let yAkku = hGap + 25;
		for (const t of this.allUnitTypes) {
			yStartPerUnitType[t] = yAkku;
			yAkku += hRow;
		}

		this.xStartPerFaction = xStartPerFaction;
		this.yStartPerUnitType = yStartPerUnitType;
		this.wColsPerFaction = wColsPerFaction;

		let wTotal = wGap + wColTotal * wCol + wFactionGap * this.factions.length + wGap;

		this.size = {w: wTotal, h: hTotal};
		this.unitSize = {w: wCol, h: hRow};
		this.gap = {w: wGap, h: hGap, col: wFactionGap};
	}
	highlightBattleGroups(b) {
		//console.log('highlightBattleGroups!!!!!!!!!!!!');
		let units = b.fire_order;
		//let colors = ['limegreen', 'springGreen', 'green', 'seagreen', 'olive', 'darkgreen'];
		let battleGroups = b.battle_groups;
		for (const u of units) {
			//console.log('b', b, 'battleGroups', battleGroups, 'u', u, 'u.battle_group', u.battle_group);
			let bgIndex = battleGroups.indexOf(u.battle_group);
			if (bgIndex >= 0) {
				let c = getpal(2, 0, 'b', this.battleGroupPalette);
				//console.log('color fuer selKeyColor', c);
				//let c = colors[bgIndex];
				//console.log('highlight battle_group', u.battle_group, 'in', c);
				let ms = this.ms[u.id];
				ms.selKeyColor(c, 'bg' + bgIndex, 0.2);
			}
		}
	}
	coverBattleGroup(bg, b) {
		//console.log('coverBattleGroups!',bg,b);
		for (const u of b.fire_order) {
			if (u.battle_group == bg) {
				let ms = this.ms[u.id];
				let sz = this.assets.SZ.cadreDetail;
				ms.cover('grey');
			}
		}
	}
	uncoverBattleGroup(bg, b) {
		//console.log('uncoverBattleGroup',bg,b);
		for (const u of b.fire_order) {
			if (u.battle_group == b.battle_group) {
				let ms = this.ms[u.id];
				ms.uncover();
			}
		}
	}
	selectBattle() {
		this.battleDiv.style.border = '4px solid yellow';
	}
	unselectBattle() {
		this.battleDiv.style.border = '1px solid ' + getpal(6);
	}
	selectFireUnit() {
		if (this.msFire) this.msFire.unhighlight();
		this.msFire = this.ms[this.b.fire.id];
		this.msFire.highlight();
	}
	unhighlightUnits() {
		for (const id in this.ms) {
			let ms = this.ms[id];
			if (ms.getTag('dead')||ms.getTag('removed')) continue;
			//console.log('unhighlighting', ms.getTag('owner'), ms.getTag('type'));
			ms.unhighlight();
			ms.unselKeyColor();
		}
	}
	highlightANS(pl) {
		for (const id in this.ms) {
			let ms = this.ms[id];
			let type = ms.getTag('type');
			let owner = ms.getTag('owner');
			if (owner == pl && isANS(type)) {
				if (!ms.getTag('dead') && !ms.getTag('removed')) {
					ms.highlight();
				}
			}
		}
	}
	highlightTargetClass() {
		for (const u of this.b.target_units) {
			let ms = this.ms[u.id];
			ms.highlight();
		}
	}
	unhighlightTargetClass() {
		for (const u of this.b.target_units) {
			let ms = this.ms[u.id];
			ms.unhighlight();
		}
	}
	markMandatoryRebased(b_old, b) {
		//check if any units have rebased?
		//is any unit not in b.fire_order that was in b_old.fire_order?
		for (const u of b_old.fire_order) {
			let id = u.id;
			let unitInB = firstCond(b.fire_order, x => x.id == id);
			if (!unitInB) {
				this.markAsRetreated(id);
			}
		}
	}
	markAsRetreated(id) {
		let ms = this.ms[id];
		//console.log('RETREATED:',ms)
		ms.unhighlight();
		ms.selKeyColor('darkSlateGrey', 'retreated', 0.7);
		ms.tag('removed', true);
	}
	selectTheDead(b_old, b_new) {
		let degraded = '';
		let removed = '';
		let message = '';
		for (const u of b_old.fire_order) {
			let id = u.id;
			let ms = this.ms[id];
			//ms.unhighlight(); //clear all highlighting!
			let uNew = firstCond(b_new.fire_order, x => x.id == id);
			if (uNew) {
				let cv_old = u.unit.cv;
				let cv_new = uNew.unit.cv;
				if (cv_old != cv_new) {
					this.updateCv(ms, cv_new);
					degraded += ' ' + id.toString();
				}
			} else {
				this.updateCv(ms, 0);
				ms.selColor('black', 0.8);
				ms.tag('dead', true);
				removed += ' ' + id.toString();
			}
		}
		if (!empty(degraded)) message += degraded + ' degraded. ';
		if (!empty(removed)) message += removed + ' removed. ';

		message += 'Please accept!';
		return message;
	}
	selectUnitsHit(b) {
		//TODO: mach das lieber mit frame! sonst wird zu confusing!
		//console.log(b.units_hit);
		for (const u of b.units_hit) {
			let id = u.id;
			let ms = this.ms[id];
			ms.selKeyColor('red'); //,'red',.5);
		}
	}
	startDiceAnimation(fire) {
		this.fire = fire;
		let dDice = fire.owner == this.b.attacker ? this.attackerDiceDiv : this.defenderDiceDiv;
		this.diceRolling = true;
		dDice.classList.add('pulseOn');
	}
	stopDiceAnimation(fire) {
		let dDice = fire.owner == this.b.attacker ? this.attackerDiceDiv : this.defenderDiceDiv;
		dDice.classList.remove('pulseOn');
		this.diceRolling = false;
	}
	showHits(hits) {
		let dDice = this.b.fire.owner == this.b.attacker ? this.attackerDiceDiv : this.defenderDiceDiv;
		let html = dDice.innerHTML;
		dDice.innerHTML = html + '<br>' + hits;
		divscrolldown(dDice.id);
	}
	createUnit(u, id, gName, type, nationality) {
		// let type = 'Infantry';
		// let nationality = 'France';

		let owner = getUnitOwner(nationality);
		let imagePath = '/a/assets/images/' + type + '.svg';
		//console.log(id,gName,type,nationality,this.assets.troopColors)
		let isMinorColor = !(nationality in this.assets.troopColors);
		let color = isMinorColor ? this.assets.troopColors['Minor'] : this.assets.troopColors[nationality];
		let darker = darkerColor(color[0], color[1], color[2]);

		if (this.b.isSeaBattle) {
			let bgroup = u.battle_group;
			if (bgroup) {
				let ibg = this.battleGroups.indexOf(bgroup);
				darker = getpal(ibg, 0, 'b', this.battleGroupPalette);
			}
		}

		let sz = this.assets.SZ.cadreDetail;
		let sz80 = sz * 0.86;
		let szImage = sz / 1.5;
		let y = szImage / 6;

		let ms = new MS(id, gName)
			.roundedRect({className: 'ground', w: sz, h: sz, fill: color, rounding: sz * 0.1})
			.roundedRect({w: sz80, h: sz80, fill: darker, rounding: sz * 0.1})
			.image({path: imagePath, y: y, w: szImage, h: szImage})
			.roundedRect({className: 'unit overlay', w: sz, h: sz, fill: darker, rounding: sz * 0.1});
		ms.tag('type', type);
		ms.tag('owner', owner);
		ms.tag('nationality', nationality);
		return ms;
	}
	calcMaxUnitTypePerFaction() {
		let unitTypeCountPerFaction = {};
		let byTypeAndFaction = new Counter(this.b.fire_order, x => x.unit.type + '_' + x.owner);

		for (let g of cartesian(this.allUnitTypes, this.factions)) {
			let type = stringBefore(g, '_');
			let faction = stringAfter(g, '_');

			if (!(faction in unitTypeCountPerFaction)) unitTypeCountPerFaction[faction] = {};
			let count = byTypeAndFaction.get(g);
			unitTypeCountPerFaction[faction][type] = count ? count : 0;
		}
		let nColsPerFaction = {};
		for (const f of this.factions) {
			nColsPerFaction[f] = getItemWithMaxValue(unitTypeCountPerFaction[f])[1];
		}
		return nColsPerFaction;
	}
	mirror_units(data, H) {
		unitTestMirrorBattle('new data:', data);
		unitTestMirrorBattle('H:', H);
		for (const u of data.battle.fire_order) {
			let o = H.objects[u.id];
			if (u.unit.cv != o.cv) {
				this.updateCv(this.ms[u.id], o.cv);
			}
		}
		if ('dead' in data.battle) {
			for (const u of data.battle.dead) {
				if (u.id in H.objects) {
					//this dead unit needs to be removed
					unitTestMirrorBattle('H still contains dead unit', u.id);
				} else {
					unitTestMirrorBattle('dead unit', u.id, 'has been removed from H');
					if (u.id in this.ms) {
						let ms = this.ms[u.id];
						if (!ms.getTag('dead')) {
							this.updateCv(ms, 0);
							ms.unhighlight();
							ms.select();
							ms.tag('dead', true);
						} else {
							unitTestMirrorBattle('unit', u.id, 'has already been marked dead!!!');
						}
					} else {
						unitTestMirrorBattle('ERROR!!! dead unit', u.id, 'not in ms!!!!');
					}
				}
			}
		}
	}
	populate(dBattleOuter, gid, bg, fg) {
		let dBattleLeft = addDivClass(dBattleOuter, 'dBattleLeft', 'battleLeft');
		let dBattleRight = addDivClass(dBattleOuter, 'dBattleRight', 'battleRight');
		let dBattleMiddle = addDivClass(dBattleOuter, 'dBattleMiddle', 'battleMiddle');

		let dBattleTitle = addDivClass(dBattleMiddle, 'dBattleTitle', 'battleTitle');
		dBattleTitle.innerHTML = this.location;

		let dBattleFactions = addDivClass(dBattleMiddle, 'dBattleFactions', 'battleFactions');
		dBattleFactions.style.width = this.size.w + 'px';
		let topBottom = 25 + this.b.isSeaBattle ? 30 : 0; ////sea
		dBattleFactions.style.height = this.size.h - topBottom + 'px';

		let g1 = addSvgg(dBattleFactions, gid);

		if (this.b.isSeaBattle) {
			this.battleGroups = this.b.battle_groups;
			let dBattleGroups = addDivClass(dBattleMiddle, 'dBattleGroups', 'battleGroups');
			let n = this.battleGroups.length;
			this.battleGroupPalette = paletteFromRGBArray(assets.troopColors[this.b.attacker]);
			//console.log('palette', this.battleGroupPalette);
			//this.battleGroupColors = getNColors(n);
			for (const gr of this.battleGroups) {
				let i = this.battleGroups.indexOf(gr);
				// let bg = this.assets.troopColors[this.b.attacker];//getpal(i,0,'b',this.battleGroupPalette);
				let bg = getpal(i, 0, 'b', this.battleGroupPalette);
				let fg = getpal(i, 0, 'f', this.battleGroupPalette);
				let sp = addSpanColor(dBattleGroups, 'sp' + gr, bg, fg);
				sp.innerHTML = gr;
			}
		}

		this.gid = gid;
		this.battleDiv = dBattleOuter;
		this.attackerDiceDiv = dBattleLeft;
		this.defenderDiceDiv = dBattleRight;

		let i = 0;
		for (const f of this.factions) {
			let id = 't' + i;
			i += 1;
			let x = this.xStartPerFaction[f] + this.wColsPerFaction[f] / 2;
			let msTitle = new MS(id, gid)
				.text({txt: f, fill: fg})
				.setPos(x, 15)
				.draw();
		}

		let xStart = this.gap.w;
		let yStart = this.gap.h;
		let x = xStart;
		let y = yStart;
		let curFaction = null;
		let curType = null;
		for (const u of this.b.fire_order) {
			let type = u.unit.type;
			let faction = u.owner;
			if (faction != curFaction) {
				x = this.xStartPerFaction[faction];
			}

			if (type != curType) {
				y = this.yStartPerUnitType[type];
				x = this.xStartPerFaction[faction];
			}
			//place unit
			let usz = this.unitSize.w / 2;
			//let ums = addUnit('u' + u.id, gid, type, u.unit.nationality, u.unit.cv, x + usz, y + usz);

			//console.log(u.owner,u.unit.nationality)
			let ms = this.createUnit(u, 'u' + u.id, gid, type, u.unit.nationality);
			ms.setPos(x + usz, y + usz).draw();
			this.updateCv(ms, u.unit.cv);
			this.ms[u.id] = ms;

			curType = type;
			curFaction = faction;

			x += this.unitSize.w + this.gap.w;
		}
	}
	roundEnding() {
		unitTestCombatStage('roundEnding!!!');
		for (const id in this.ms) {
			this.ms[id].unhighlight();
		}
	}
	update(data, H) {
		let c = data.temp.combat;
		let b_old = this.b;
		this.b = c.battle;
		let b = this.b;
		unitTestBattle('_______b.stage:', b.stage, b);
		console.log('b.stage', b.stage);
		let message = '';

		if (b.stage == 'battle_start_ack') {
			message = 'Battle starting in ' + b.tilename.toUpperCase() + ': please accept!';
			this.selectBattle();
		} else if (b.stage == 'battle_round_start_ack') {
			message = b.attacker + ', please select active battle group!';
			this.unhighlightUnits();
			if (b.isSeaBattle) {
				for (const bg of b.battle_groups) {
					//console.log('covering',bg)
					this.coverBattleGroup(bg, b);
				}
				this.battleGroupsCovered = true;
			}
		} else if (b.stage == 'select_combat_action_ack') {
			this.unhighlightUnits();
			message = b.fire.owner + ', please select combat action!';
			if (b.isSeaBattle && this.battleGroupsCovered) {
				//this.coverBattleGroup(b_old.battle_group,b);
				//console.log('un-covering',b.battle_group)
				this.uncoverBattleGroup(b.battle_group, b);
				this.battleGroupsCovered = false;
			}
			this.selectFireUnit(b);
		} else if (b.stage == 'hit_ack') {
			message = b.fire.owner + ' targeting class ' + b.target_class + ': PLEASE ACCEPT!';
			this.highlightTargetClass();
			this.startDiceAnimation(b.fire);
		} else if (b.stage == 'have_hits_ack' || b.stage == 'no_hits_ack') {
			message = b.hits + ' hits left! (accept or select type)';
			this.stopDiceAnimation(b.fire);
			//console.log('hits:', b.hits, 'outcome', b.outcome);
			if (b.hits == b.outcome) this.showHits(b.outcome);
			// } else if (b.stage == 'more_hits_ack' || b.stage =='no_more_hits_ack'){
			// 	message = b.outcome + ' HITS! accept or select type';
			// 	this.stopDiceAnimation(b.fire);
			// 	this.showHits(b.outcome);
		} else if (b.stage == 'damage_ack') {
			this.unhighlightTargetClass(b_old);
			this.selectUnitsHit(b);
			message = this.selectTheDead(b_old, b);
		} else if (b.stage == 'battle_ends_ack') {
			this.unhighlightUnits();
			this.selectTheDead(b_old, b);
			this.markMandatoryRebased(b_old, b);
			message = 'Battle ends!!';
		} else if (b.stage == 'mandatory_rebase_ack') {
			this.unhighlightUnits();
			this.highlightANS(H.player);
			message = 'Select mandatory rebase option!!';
		} else if (b.stage == 'retreat_ack') {
			message = b.selectedRetreatUnit + ' HAS RETREATED TO ' + b.selectedRetreatTile;
			//retreated unit is file
			this.markAsRetreated(b.fire.id);
		} else {
			return 'NOT IMPLEMENTED!!!!!';
		}
		unitTestBattle('____________');
		return message;
	}
	update_dep(data, H) {
		let c = data.temp.combat;
		if (c.battle.isSeaBattle) return this.updateSeaBattle(data, H);

		let b_old = this.b;
		let b = (this.b = c.battle);
		unitTestBattle('_______b.stage:', b.stage, b);

		let message = '';
		if (b.stage == 'battle_start_ack') {
			message = 'BATTLE STARTING IN ' + b.tilename.toUpperCase() + ': PLEASE ACCEPT!';
			this.selectBattle();
			// } else if (b.stage == 'action_start_ack') {
			// 	message = 'NEXT ACTIVE UNIT:'+b.fire.id+'('+b.fire.type+'). please accept!';
		} else if (b.stage == 'select_command') {
			message = 'SELECT TARGET CLASS OR RETREAT OPTIONS OR ACCEPT!!!';
			this.selectFireUnit();
		} else if (b.stage == 'ack_combat_action') {
			this.selectFireUnit();
			if (b.combat_action == 'hit') {
				message = b.fire.owner + ' TARGETING CLASS ' + b.target_class + ': PLEASE ACCEPT!';
				this.highlightTargetClass();
				this.startDiceAnimation(b.fire);
			} else {
				message = b.fire.owner + ' RETREATING TO ' + b.retreat_options[0][1] + ': PLEASE ACCEPT!';
			}
		} else if (b.stage == 'select_hit_type') {
			message = b.outcome + ' HITS, PLEASE SELECT TYPE TO HIT FIRST!';
			this.stopDiceAnimation(b.fire);
			this.showHits(b.outcome);
		} else if (b.stage == 'ack_retreat') {
			message = b.selectedRetreatUnit + ' HAS RETREATED TO ' + b.selectedRetreatTile;
			//retreated unit is file
			this.markAsRetreated(b.fire.id);
		} else if (b.stage == 'select_mandatory_rebase') {
			this.markMandatoryRebased(b_old, b);
			message = H.player + ', SELECT MANDATORY REBASE OPTION';
			//unhighlight all units,
			this.unhighlightUnits();
			//highlight all units that belong to H.player
			this.highlightANS(H.player);
		} else if (b.stage == 'accept_outcome') {
			if (this.diceRolling) {
				message = b.outcome + ' HITS HITTING ' + b.units_hit.map(u => u.id + '(' + u.type + ')').join(' ') + ': PLEASE ACCEPT!';
				this.stopDiceAnimation(b.fire);
				this.showHits(b.outcome);
				//console.log('b.idx='+b.idx)
				let f = b.fire_order[b.idx];
				//console.log(f.owner,f.type)
				//console.log(b.fire_order.length,'units remaining in fire_order!')
			} else {
				message = this.selectTheDead(b_old, b);
			}
		} else if (b.stage == 'ack_combat_action_done') {
			//compare each unit in b_old.fire_order to units in b.fire_order;
			//if unit has been removed from fire_order, set cv to 0 and select it in red
			//if unit has lower cv than before, reflect that
			//if unit has been moved b retreat (attacker's unit in fire order missing!), remove it from battle
			this.unhighlightTargetClass(b_old);
			if (b.combat_action == 'hit') {
				message = this.selectTheDead(b_old, b);
			} else {
				message = b.fire.id + ' has retreated. Please accept!';
			}
		} else if (b.stage == 'ack_battle_interrupted_no_enemy_units_left') {
			//compare each unit in b_old.fire_order to units in b.fire_order;
			//if unit has been removed from fire_order, set cv to 0 and select it in red
			//if unit has lower cv than before, reflect that
			//if unit has been moved b retreat (attacker's unit in fire order missing!), remove it from battle
			if (b.combat_action == 'hit') {
				this.selectTheDead(b_old, b);
			}
			message = 'BATTLE ENDS HERE: NO ENEMY UNITS LEFT!!!';
		} else if (b.stage == 'ack_battle_decided') {
			if (b.winner == b.owner) {
				message = b.winner + ' has defended his territory! please accept!';
			} else {
				message = b.winner + ' has conquered new territory!!! please accept!';
			}
			this.selectTheDead(b_old, b);
		} else if (b.stage == 'ack_cleanup_battle') {
			message = 'battle in ' + b.tilename + ' is ending! please accept!';
			this.unhighlightUnits();
			this.markMandatoryRebased(b_old, b);
			this.unselectBattle();
		}

		//sea battle
		if (b.stage == 'battle_round_start_ack') {
			//if get here, attacker is firing and need to select battle group
			//
			message = b.attacker + ', please select active battle group!';
			this.highlightBattleGroups(b);
		}

		unitTestBattle('____________');
		return message;
	}
	updateSeaBattle(data, H) {
		let c = data.temp.combat;
		let b_old = this.b;
		this.b = c.battle;
		let b = this.b;
		unitTestBattle('_______b.stage:', b.stage, b);

		let message = '';

		if (b.stage == 'battle_start_ack') {
			message = 'BATTLE STARTING IN ' + b.tilename.toUpperCase() + ': PLEASE ACCEPT!';
			this.selectBattle();
		} else if (b.stage == 'battle_round_start_ack') {
			message = b.attacker + ', please select active battle group!';
			//TODO: instead of next line, decider should highlight battle group on hover!!!
			this.highlightBattleGroups(b);
		} else if (b.stage == 'select_combat_action_ack') {
			message = b.attacker + ', please select combat action!';
			this.coverOtherBattleGroups(b);
			this.selectFireUnit(b);
		}

		if (b.stage == 'ack_combat_action') {
			this.selectFireUnit();
			if (b.combat_action == 'hit') {
				message = b.fire.owner + ' TARGETING CLASS ' + b.target_class + ': PLEASE ACCEPT!';
				this.highlightTargetClass();
				this.startDiceAnimation(b.fire);
			} else {
				message = b.fire.owner + ' RETREATING TO ' + b.retreat_options[0][1] + ': PLEASE ACCEPT!';
			}
		} else if (b.stage == 'select_hit_type') {
			message = b.outcome + ' HITS, PLEASE SELECT TYPE TO HIT FIRST!';
			this.stopDiceAnimation(b.fire);
			//console.log()
			this.showHits(b.outcome);
		} else if (b.stage == 'ack_retreat') {
			message = b.selectedRetreatUnit + ' HAS RETREATED TO ' + b.selectedRetreatTile;
			//retreated unit is file
			this.markAsRetreated(b.fire.id);
		} else if (b.stage == 'select_mandatory_rebase') {
			this.markMandatoryRebased(b_old, b);
			message = H.player + ', SELECT MANDATORY REBASE OPTION';
			//unhighlight all units,
			this.unhighlightUnits();
			//highlight all units that belong to H.player
			this.highlightANS(H.player);
		} else if (b.stage == 'accept_outcome') {
			if (this.diceRolling) {
				message = b.outcome + ' HITS HITTING ' + b.units_hit.map(u => u.id + '(' + u.type + ')').join(' ') + ': PLEASE ACCEPT!';
				this.stopDiceAnimation(b.fire);
				this.showHits(b.outcome);
				//console.log('b.idx='+b.idx)
				let f = b.fire_order[b.idx];
				//console.log(f.owner,f.type)
				//console.log(b.fire_order.length,'units remaining in fire_order!')
			} else {
				message = this.selectTheDead(b_old, b);
			}
		} else if (b.stage == 'ack_combat_action_done') {
			//compare each unit in b_old.fire_order to units in b.fire_order;
			//if unit has been removed from fire_order, set cv to 0 and select it in red
			//if unit has lower cv than before, reflect that
			//if unit has been moved b retreat (attacker's unit in fire order missing!), remove it from battle
			this.unhighlightTargetClass(b_old);
			if (b.combat_action == 'hit') {
				message = this.selectTheDead(b_old, b);
			} else {
				message = b.fire.id + ' has retreated. Please accept!';
			}
		} else if (b.stage == 'ack_battle_interrupted_no_enemy_units_left') {
			//compare each unit in b_old.fire_order to units in b.fire_order;
			//if unit has been removed from fire_order, set cv to 0 and select it in red
			//if unit has lower cv than before, reflect that
			//if unit has been moved b retreat (attacker's unit in fire order missing!), remove it from battle
			if (b.combat_action == 'hit') {
				this.selectTheDead(b_old, b);
			}
			message = 'BATTLE ENDS HERE: NO ENEMY UNITS LEFT!!!';
		} else if (b.stage == 'ack_battle_decided') {
			if (b.winner == b.owner) {
				message = b.winner + ' has defended his territory! please accept!';
			} else {
				message = b.winner + ' has conquered new territory!!! please accept!';
			}
			this.selectTheDead(b_old, b);
		} else if (b.stage == 'ack_cleanup_battle') {
			message = 'battle in ' + b.tilename + ' is ending! please accept!';
			this.unhighlightUnits();
			this.markMandatoryRebased(b_old, b);
			this.unselectBattle();
		}

		unitTestBattle('____________');
		return message;
	}
	updateCv(ms, cv) {
		ms.removeFromChildIndex(5);
		let sz = this.assets.SZ.cadreDetail;
		let dx = sz / (cv + 1);
		let xStart = -sz / 2;
		let y = -sz / 3.2;
		let diam = Math.min(dx / 1.5, sz / 5);
		let x = dx + xStart;
		for (let i = 0; i < cv; i++) {
			ms.circle({sz: diam, x: x, y: y, fill: 'white'});
			x += dx;
		}

		ms.tag('cv', cv);
	}
}
