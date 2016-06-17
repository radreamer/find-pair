var fp = fp || {};

fp.MessageView = Backbone.View.extend({
	tagName: 'div',
	className: 'msg',
	template: _.template( $('#msg-tpl').html() ),

	events: {
		'click #new-game': 'startGame',
		'click #github': 'goToGithub',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template);
		$('html').append(this.$el);
	},

	startGame: function(e) {
		e.preventDefault();
		this.remove();
		var newGame = new fp.TilesView(fp.collection);
	},

	goToGithub: function() {
		window.location.href = 'https://github.com/radreamer/find-pair';
	}
});