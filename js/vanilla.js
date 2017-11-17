define(function(require) {
	
	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var ThemeBlock = require('theme/adapt-contrib-vanilla/js/theme-block');

	// Block View
	// ==========

	Adapt.on('blockView:postRender', function(view) {
		var theme = view.model.get('_theme');
		$('.article').css('height','calc(100vh - 124px)');
		$('.component').css('height','calc(100vh - 124px)');
		$('.editor').css('height','calc(100vh - 128px - 177px');	
		$('html').css('overflow-y','hidden');
		if (theme) {
			new ThemeBlock({
				model: new Backbone.Model({
					_themeBlockConfig: theme
				}),
				el: view.$el
			});
		}
	});
});
