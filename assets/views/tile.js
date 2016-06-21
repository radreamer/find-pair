var fp = fp || {};

fp.TileView = Backbone.View.extend({
	tagName: 'div',
	className: 'tile',

	events: {
		'click': 'showBack'
	},

	initialize: function(model) {
		this.model = model;
		this.render();
	},

	render: function() {
		$('section').append(this.$el);
	},

	showBack: function(e) {
		e.target.style.backgroundColor = this.attributes.color;
		if (fp.currentColor === this.attributes.color) {
			fp.currentColor = '';

		} else {

			if (fp.currentColor === '') {
				fp.currentId = this.el.id;
				fp.currentColor = this.attributes.color;
			} else {
				fp.currentColor = '';
				setTimeout(this.closeAll, 500);
			}
		}
		this.checkEnd();
	},

	closeAll: function() {
		new fp.TilesView();
	},

	checkEnd: function() {
		var tiles = document.querySelectorAll('.tile'),
			allOpened;

		allOpened = _.every(tiles, function(el) {
			return el.style.backgroundColor !== '';
		});

		if (allOpened ) {
			this.end();
		}
	},

	end: function() {
		new fp.MessageView();
	}
});