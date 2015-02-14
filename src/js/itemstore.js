var riot = require('riot');

// Manages our item data locally, for now.
function ItemStore() {  
	riot.observable(this);

	// Could pull this from a server API.
	this.items = [
		{ id: 1, title: 'Foobar' },
		{ id: 2, title: 'Foobaz' },
		{ id: 3, title: 'Barbar' }
	];

	// Init our list view.
	this.on('item_list_init', function() {
		this.trigger('item_list_changed', this.items);
	}.bind(this));

	// Search our item collection.
	this.on('item_list_search', function(txt) {
		var list = this.items;
		if (txt.length > 0) {
			list = this.items.filter(function(el) {
				if (el.title.toLowerCase().search(new RegExp(txt.toLowerCase())) == -1) {
					return false;
				}
				else {
					return true;
				}
			});
		}
		this.trigger('item_list_changed', list);
	}.bind(this));

	// Add to our item collection.
	// Could push this to a server API.
	this.on('item_detail_add', function(title) {
		this.items.push({ id: this.items.length+1, title: title });
		this.trigger('item_list_changed', this.items);
	}.bind(this));

	// Pull item for URL route. (id)
	this.on('route_item', function(id) {      
		var item = null;
		this.items.forEach(function(el) {
			if (el.id == id) {
				item = el;
			}
		});
		this.trigger('item_detail_changed', item);
	}.bind(this));

	// Emit event for add item route.
	this.on('route_item_add', function() {
		this.trigger('item_detail_create');
	}.bind(this));
}

module.exports = ItemStore;
