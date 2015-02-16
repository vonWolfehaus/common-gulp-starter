var riot = require('riot');
var riotcontrol = require('riotcontrol');

var ItemStore = require('ItemStore');
var ItemApp = require('item-app.tag');

console.log('Running');
var itemStore = new ItemStore();

riotcontrol.addStore(itemStore);

riot.mount('item-app'); // Kickoff the Riot app

// Riot router
riot.route(function(page, id) {
	if (page == 'add') {
		riotcontrol.trigger('route_item_add');
	}
	else {
		riotcontrol.trigger('route_item', id);
	}
});
