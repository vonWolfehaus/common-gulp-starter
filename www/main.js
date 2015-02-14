(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"../src/js/main.js":[function(require,module,exports){
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
},{"ItemStore":"D:\\git\\common-gulp-starter\\src\\js\\ItemStore.js","riotcontrol":"D:\\git\\common-gulp-starter\\src\\js\\riotcontrol.js"}],"D:\\git\\common-gulp-starter\\src\\js\\ItemStore.js":[function(require,module,exports){
// Manages our item data locally, for now.
function ItemStore() {  
  riot.observable(this)

  var self = this

  // Could pull this from a server API.
  self.items = [
    { id: 1, title: 'Foobar' },
    { id: 2, title: 'Foobaz' },
    { id: 3, title: 'Barbar' }
  ]

  // Init our list view.
  self.on('item_list_init', function() {
    self.trigger('item_list_changed', self.items)
  })

  // Search our item collection.
  self.on('item_list_search', function(txt) {
    var list = self.items
    if (txt.length > 0)
      list = self.items.filter(function(el) {
        if (el.title.toLowerCase().search(new RegExp(txt.toLowerCase())) == -1)
          return false
        else
          return true
      })

    self.trigger('item_list_changed', list)
  })

  // Add to our item collection.
  // Could push this to a server API.
  self.on('item_detail_add', function(title) {
    self.items.push({ id: self.items.length+1, title: title })
    self.trigger('item_list_changed', self.items)
  })

  // Pull item for URL route. (id)
  self.on('route_item', function(id) {      
    var item = null
    self.items.forEach(function(el) {
      if (el.id == id)
        item = el
    })
    self.trigger('item_detail_changed', item)
  })

  // Emit event for add item route.
  self.on('route_item_add', function() {
    self.trigger('item_detail_create')
  })

}
},{}],"D:\\git\\common-gulp-starter\\src\\js\\riotcontrol.js":[function(require,module,exports){
// https://github.com/jimsparkman/RiotControl
var _RiotControlApi = ['on','one','off','trigger']
var RiotControl = {
  _stores: [],
  addStore: function(store) {
    this._stores.push(store)
  }
}
_RiotControlApi.forEach(function(api){
	RiotControl[api] = function() {
		var args = [].slice.call(arguments)
		this._stores.forEach(function(el){
	      el[api].apply(null, args)
	    })
	}
})

},{}]},{},["../src/js/main.js"])


//# sourceMappingURL=main.js.map