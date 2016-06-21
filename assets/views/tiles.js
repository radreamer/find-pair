var fp = fp || {};

fp.TilesView = Backbone.View.extend({
	tagName: 'section',

	initialize: function(update) {
		this.collection = new fp.Tiles(fp.list);
		this.render();
	},

	render: function() {
		$('main').html( this.$el );
		this.collection.each(this.renderOne, this);
	},

	renderOne: function(model) {
		new fp.TileView(model);
	}
})