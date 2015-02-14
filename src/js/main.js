var ItemStore = require('ItemStore');
var RiotControl = require('riotcontrol');

var itemStore = new ItemStore();

RiotControl.addStore(itemStore);

riot.mount('item-app'); // Kickoff the Riot app.

// Riot router
riot.route(function(page,id) {
	if (page == 'add'){
		RiotControl.trigger('route_item_add');
	}
	else {
		RiotControl.trigger('route_item', id);
	}
});