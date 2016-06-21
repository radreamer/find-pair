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
		$('body').append(this.$el);
	},

	startGame: function(e) {
		e.preventDefault();
		this.remove();
		fp.update();
		new fp.TilesView();
	},

	goToGithub: function() {
		window.location.href = 'https://github.com/radreamer/find-pair';
	}
});