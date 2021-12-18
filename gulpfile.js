// Basics
const gulp = require("gulp");
const newer = require("gulp-newer");
const sourcemaps = require("gulp-sourcemaps");

// Build
const concat = require("gulp-concat");
const include = require("gulp-file-include");
const replace = require("gulp-replace");
const inline = require("gulp-inline");
const postCss = require("gulp-postcss");
const preCss = require("precss");
const atomizer = require("gulp-atomizer");
const atomCssConfig = require("./atomCssConfig.js");
const assets = require("postcss-assets");

// Production
const htmlMin = require("gulp-htmlmin");


const SRC = "src";
const DEST = "docs";


// ---------- BUILD ---------- //

const buildJsTask = () =>
	gulp.src([
		"node_modules/webfontloader/webfontloader.js",
		`${SRC}/js/plygrnd.js`,
		`${SRC}/js/DOMTools.js`,
		`${SRC}/js/initIntro.js`,
		`${SRC}/js/initMain.js`,
		`${SRC}/js/index.js`
	])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));

const buildHtmlTask = () =>
	gulp.src([`${SRC}/html/index.html`])
		.pipe(include())
		.pipe(gulp.dest(DEST));

const buildCssAtomsTask = () =>
	gulp.src([`${SRC}/**/*.html`])
		.pipe(atomizer(atomCssConfig))
		.pipe(gulp.dest(`${SRC}/style`));

const buildCssTask = () =>
	gulp.src([
		`${SRC}/style/_variables.scss`,
		`${SRC}/style/common.scss`,
		`${SRC}/style/!(_atoms)*.scss`,
		`${SRC}/style/z_atoms.scss`
	])
		.pipe(sourcemaps.init())
		.pipe(concat("style.css"))
		.pipe(postCss([
			preCss({ features: { "color-mod-function": { unresolved: "warn" } } }),
			assets({ loadPaths: [SRC] })
		]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));

const copyAssetsTask = () => {
	gulp.src([`${SRC}/favicon.ico`, `${SRC}/CNAME`, "*v1/**", "*v2/**"])
		.pipe(newer(DEST))
		.pipe(gulp.dest(DEST));
	return gulp.src([`${SRC}/img/*`])
		.pipe(newer(`${DEST}/img`))
		.pipe(gulp.dest(`${DEST}/img`));
};


// ---------- PRODUCTION ---------- //

const prodTask = () =>
	gulp.src([`${DEST}/index.html`])
		.pipe(inline({
			// base: DEST,
			disabledTypes: ["img"/*, "svg", "js", "css"*/]
		}))
		.pipe(replace(/(<!-- buildDev:start -->)[\s\S]+(<!-- buildDev:end -->)/, ""))
		.pipe(htmlMin({
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeRedundantAttributes: true
		}))
		.pipe(gulp.dest(DEST));


const buildTask = gulp.parallel(buildJsTask, buildHtmlTask, gulp.series(buildCssAtomsTask, buildCssTask), copyAssetsTask);

exports.dev = gulp.series(buildTask, function watchTask() {
	gulp.watch([`${SRC}/js/*.js`], buildJsTask);
	gulp.watch([`${SRC}/**/*.html`], buildHtmlTask);
	gulp.watch([`${SRC}/style/*.scss`, `!${SRC}/style/z_atoms.scss`, `${SRC}/**/*.html`], gulp.series(buildCssAtomsTask, buildCssTask));
	gulp.watch([`${SRC}/img/**`], gulp.parallel(copyAssetsTask));
});
exports.build = gulp.series(buildTask, prodTask);
exports.default = exports.build;
