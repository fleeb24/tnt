from passive_backend import *
from flask import Flask, render_template, send_from_directory
from flask_cors import CORS
from flask import request
from flask_util import ActionConverter
import json
app = Flask(__name__, static_folder='_front/front_1')
CORS(app)

#init
@app.route('/initWest')
def initWest():
	out = FORMAT_MSG(start_new_game('West', debug=True), 'West')
	return out
@app.route('/initUSSR')
def initUSSR():
	out = FORMAT_MSG(start_new_game('USSR', debug=True), 'West')
	return out
@app.route('/initAxis')
def initAxis():
	out = FORMAT_MSG(start_new_game('Axis', debug=True), 'West')
	return out
#load
@app.route('/load01')
def load01():
	load_gamestate('saves/_gs01.json')
	return ('saves/_gs03.json')
@app.route('/load02')
def load02():
	load_gamestate('saves/_gs02.json')
	return ('saves/_gs03.json')
@app.route('/load03')
def load03():
	load_gamestate('saves/_gs03.json')
	return ('saves/_gs03.json')
@app.route('/prod')
def prod():
	load_gamestate('saves/prodAgent.json')
	action=('none',)
	player='West'
	take_action(player,action)
	return FORMAT_MSG(get_object_table(), player)
#save
@app.route('/save01')
def save01():
	return save_gamestate('_gs01.json')
@app.route('/save02')
def save02():
	return save_gamestate('_gs02.json')
@app.route('/save03')
def save03():
	return save_gamestate('_gs03.json')
#no action
@app.route('/noWest')
def noWest():
	out = FORMAT_MSG(step('West', 'none'), 'West')
	return out
#change turn
@app.route('/changeToWest')
def changeToWest():
	faction='West'
	out = FORMAT_MSG(pull_msg(faction), faction)
	return out
@app.route('/changeToUSSR')
def changeToUSSR():
	faction='USSR'
	out = FORMAT_MSG(pull_msg(faction), faction)
	return out
@app.route('/changeToAxis')
def changeToAxis():
	faction='Axis'
	out = FORMAT_MSG(pull_msg(faction), faction)
	return out

@app.route('/postTest', methods=['POST'])
def postTest():
	data = request.json
	with open("C:\\test.txt", 'w') as f:
		f.write(json.dumps(data))


@app.route('/1')
def root():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/css/<filename>')
def rootcss(filename):
    return send_from_directory(app.static_folder, 'css/'+filename)

@app.route('/js/<filename>')
def rootjs(filename):
    return send_from_directory(app.static_folder, 'js/'+filename)

@app.route('/assets/<path:path>')
def rootassets(path):
    return send_from_directory(app.static_folder, 'assets/'+path)

@app.route('/myload/<data>')
def myload(data):
	load_gamestate('saves/'+data)  
	return('loaded: saves/'+data)  
	#res=FORMAT_MSG(get_G(), 'Axis')
	#print(res)
	#return FORMAT_MSG(get_object_table(), 'Axis')




app.url_map.converters['action'] = ActionConverter


def convert_jsonable(msg):

	if isinstance(msg, dict):
		return {convert_jsonable(k): convert_jsonable(v) for k, v in msg.items()}
	if isinstance(msg, (list, tuple)):
		return [convert_jsonable(el) for el in msg]
	if isinstance(msg, set):
		return {'set': [convert_jsonable(el) for el in msg]}
	# if not isinstance(msg, str):
	# 	return str(msg)
	return msg

_visible_attrs = {  # attributes seen by all players even if obj isn't visible to the player
	'unit': {'nationality', 'tile', },
	'card': {'owner'},
}

def hide_objects(objects, player=None, cond=None):
	if cond is None:
		def cond(obj, player): return player not in obj.visible
	if player is None:
		return
	for obj in objects.values():
		if cond(obj, player):
			for k in list(obj.keys()):
				if k in obj and k not in {'visible', 'obj_type'} and \
						(obj['obj_type'] not in _visible_attrs or k not in _visible_attrs[obj['obj_type']]):
					del obj[k]


def format_msg_for_frontend(msg, player=None):

	msg = convert_jsonable(msg)

	def cond(obj, player): return player not in obj['visible']['set']

	if 'created' in msg:
		hide_objects(msg['created'], player=player, cond=cond)
	if 'updated' in msg:
		hide_objects(msg['updated'], player=player, cond=cond)
	if 'removed' in msg:
		hide_objects(msg['removed'], player=player, cond=cond)

	msg = json.dumps(msg)

	return msg


def unjsonify(msg):
	if isinstance(msg, dict):
		if len(msg) == 1 and 'set' in msg:
			return xset(unjsonify(el) for el in msg['set'])
		return adict({unjsonify(k): unjsonify(v) for k, v in msg.items()})
	if isinstance(msg, list):
		return tuple(unjsonify(el) for el in msg)
	# if not isinstance(msg, str):
	# 	return str(msg)
	return msg


def format_msg_to_python(msg):
	msg = unjsonify(json.loads(msg))
	return msg


FORMAT_MSG = format_msg_for_frontend

@app.route("/")
def ping():
	return 'Backend active: use "init" to init game'

@app.route('/save/<filename>')
def save1(filename=None):
	return save_gamestate(filename)

@app.route('/load/<data>')
def load1(data):
	return load_gamestate(data)

@app.route('/reset/<player>')
def reset(player):
	return FORMAT_MSG(get_object_table(), player)

@app.route('/init/<game_type>/<player>')
def init_game(game_type='hotseat', player='Axis', debug=False):
	
	if not game_type == 'hotseat':
		return 'Error: Game type must be hotseat'
	out = FORMAT_MSG(start_new_game(player, debug=debug), player)
	return out

@app.route('/info/<faction>')
def get_info(faction):
	return FORMAT_MSG(get_game_info(faction))

@app.route('/status/<faction>')
def get_status(faction):
	out = FORMAT_MSG(pull_msg(faction), faction)
	return out

# action values are delimited by "+"
@app.route('/action/<faction>/<action:vals>')
def take_action(faction, vals):
	
	out = FORMAT_MSG(step(faction, vals), faction)
	return out

if __name__ == "__main__":
	app.run(host='localhost',port=5000)