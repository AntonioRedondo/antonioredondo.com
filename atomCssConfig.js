module.exports = {
	// Gulp plugin
	cssDest: "src/style/z_atoms.scss",
	acssConfig: {
		breakPoints: {
			bi: "@media (min-width: 2000px)",
			me: "@media (max-width: 1470px)",
			sm: "@media (max-width: 1100px)",
			mo: "@media (max-width: 810px)"
		}
	},
	// webpack loader
	outfile: "z_atoms.scss",
	configs: {
		breakPoints: {
			mo: "@media (max-width: 810px)",
			sm: "@media (max-width: 1100px)",
			me: "@media (max-width: 1470px)",
			bi: "@media (min-width: 2000px)",
		}
	}
};
