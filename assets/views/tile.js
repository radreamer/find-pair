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

		if (fp.currentColor === this.attributes.color) {
			e.target.style.backgroundColor = this.attributes.color;
			fp.currentColor = '';

		} else {

			if (fp.currentColor === '') {
				fp.currentId = this.el.id;
				fp.currentColor = this.attributes.color;
				e.target.style.backgroundColor = this.attributes.color;
			} else {
				fp.currentColor = '';
				e.target.style.backgroundColor = this.attributes.color;
				setTimeout(this.closeAll, 500);
			}
		}

		this.checkEnd();
	},

	closeAll: function() {
		var newGame = new fp.TilesView(fp.collection);
	},

	checkEnd: function() {
		var arr = document.querySelectorAll('.tile'),
			flag = 0;
		_.each(arr, function(el) {
			if (el.style.backgroundColor === '') {
				flag++;
			}
		})
		if (flag === 0) {
			this.end();
		}
	},

	end: function() {
		var endMessage = new fp.MessageView();
	}
});