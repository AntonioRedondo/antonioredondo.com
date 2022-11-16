async function loadFonts() {
	window.document.fonts.onloadingerror = (event) => {
		console.error(event); // eslint-disable-line no-console
		window.location.reload();
	};
	// https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;800&family=Open+Sans+Condensed:wght@300;900&family=Trirong:wght@400
	const fonts = await Promise.all([
		(new FontFace("Open Sans", "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2)", { weight: "300" })).load(),
		(new FontFace("Open Sans", "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2)", { weight: "800" })).load(),
		(new FontFace("Open Sans", "url(https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObjz2VZyOOSr4dVJWUgsiH0B4gaVI.woff2)",{
			weight: "300",
			stretch: "75%",
		})).load(),
		(new FontFace("Open Sans", "url(https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObjz2VZyOOSr4dVJWUgshZ1x4gaVI.woff2)", {
			weight: "800",
			stretch: "75%"
		})).load(),
		(new FontFace("Trirong", "url(https://fonts.gstatic.com/s/trirong/v11/7r3GqXNgp8wxdOdOn4so2A.woff2)")).load()
	]);
	fonts?.forEach(font => window.document.fonts.add(font));
	window.document.fonts.ready.then(() => d.runWhenAllLoaded(() => {
		if (d.getCookie("firstTime") === null) {
			initIntro();
		} else hideIntro(2);

		initMain();
	}));
}
loadFonts();
