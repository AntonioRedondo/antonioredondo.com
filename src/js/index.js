
WebFont.load({
	google: {
		families: ["Open Sans:300,800", "Open Sans Condensed:300", "Trirong:400"]
	},
	active: function() {
		if (d.getCookie("firstTime") === null) {
			initIntro();
		} else hideIntro(2);
		
		initMain();
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});
