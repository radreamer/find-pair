var fp = fp || {};

fp.TilesView = Backbone.View.extend({
	tagName: 'section',

	initialize: function(collection) {
		this.collection = collection;
		this.render();
	},

	render: function() {
		$('main').html( this.$el );
		this.collection.each(this.renderOne, this);
	},

	renderOne: function(model) {
		var tile = new fp.TileView(model);
	}
})