var riot = require('riot');
var riotcontrol = require('riotcontrol');
var ItemDetail = require('item-detail.tag');

<item-app>
	
	<h3>Gadget Browser <a href="https://github.com/jimsparkman/RiotControl">(GitHub)</a></h3>
	<div>Notice the URL routing, back button works as expected.</div>
	<br/>
	<div if={ !edit }>
		<span>Search:</span>
		<br/>
		<br/>
		<input name='input' onkeyup={ search }>
		<form onsubmit={ clear }>
			<button disabled={ !txt }>Clear</button>
		</form>
		<ul>
			<li each={ items }>
				<a href={ '#view/' + id }>{ title }</a>
			</li>
		</ul>

		<item-detail item={ detail }></item-detail>
		<div if={ !detail }>
			<span>Choose a product.</span>
		</div>
		<br/>
		<div>
			<button onclick={ add }>Add</button>
		</div>
	</div>
	<div if={ edit }>
		<form onsubmit={ submit }>
			<input name='title'>
			<button>Submit</button>
		</form>
		<button onclick={ cancel }>Cancel</button>
	</div>

	// This is essentially the equivalent of the Flux view-controller.
	// Could be broken down further into more sub-componenets, if you wished to re-use views.
	
	this.items = [];
	this.txt = null;
	this.detail = null;
	this.edit = false;
	
	search(e) {
		this.txt = e.target.value;
		riotcontrol.trigger('item_list_search', this.txt);
	}

	clear(e) {
		this.txt = '';
		this.input.value = '';
		riotcontrol.trigger('item_list_search','');
	}

	add(e) {
		riot.route('add');
	}

	submit(e) {
		riotcontrol.trigger('item_detail_add', this.title.value);
		this.title.value = '';
		this.edit = false;
		riot.route('view');
	}

	cancel(e) {
		this.title.value = '';
		this.edit = false;
		riot.route('view');
	}
	
	this.on('mount', function() {
		riotcontrol.trigger('item_list_init');
	}.bind(this));

	riotcontrol.on('item_list_changed', function(items) {
		this.items = items;
		this.update();
		console.log('item_list_changed');
	}.bind(this));

	riotcontrol.on('item_detail_changed', function(item) {
		this.edit = false;
	    this.detail = item;
	    riot.update();
	    console.log('item_detail_changed');
	}.bind(this));

	riotcontrol.on('item_detail_create', function() {
		this.edit = true;
		this.update();
		console.log('item_detail_create');
	}.bind(this));
	
</item-app>
