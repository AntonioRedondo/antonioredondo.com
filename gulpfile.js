// Basics
const del = require("del");
const gulp = require("gulp");
const newer = require("gulp-newer");
const sourcemaps = require("gulp-sourcemaps");

// Lint
const esLint = require("gulp-eslint");
const htmlHint = require("gulp-htmlHint");
const cssLint = require("gulp-stylelint");

// Build
const concat = require("gulp-concat");
const include = require("gulp-file-include");
const replace = require("gulp-replace");
const inline = require("gulp-inline");
const postCss = require("gulp-postcss");
const preCss = require("precss");
const autoprefixer = require("autoprefixer");
const assets = require("postcss-assets");

// Minify
const htmlMin = require("gulp-htmlmin");




const SRC = "src";
const DEST = "docs";




gulp.task("watch", ["lint", "build"], () => {
	gulp.watch([`${SRC}/js/*.js`, ".eslintrc.json"], ["esLint", "buildJs"]);
	gulp.watch([`${SRC}/**/*.htm`, ".htmlhintrc"], ["htmlHint", "buildHtml"]);
	gulp.watch([`${SRC}/style/*.scss`, ".stylelintrc.json"], ["styleLint", "buildCss"]);
	gulp.watch([`${SRC}/img/**`, `${SRC}/favicon.ico`, `${SRC}/CNAME`, "*v1/**", "*v2/**"], ["copyAssets"]);
});
gulp.task("lint", ["esLint", "htmlHint", "styleLint"]);
gulp.task("build", ["buildJs", "buildHtml", "buildCss", "copyAssets"]);
gulp.task("default", ["watch"]);

gulp.task("clean", () => del(DEST));





// ---------- LINT ---------- //

gulp.task("esLint", () => {
	return gulp.src([`${SRC}/js/*.js`, "gulpfile.js"])
		.pipe(esLint())
		.pipe(esLint.format())
		.pipe(esLint.failAfterError());
});

gulp.task("htmlHint", () => {
	return gulp.src([`${SRC}/*.htm`])
		.pipe(htmlHint(".htmlhintrc"))
		// .pipe(htmlHint.reporter())
		.pipe(htmlHint.failReporter());
});

gulp.task("styleLint", () => {
	return gulp.src([`${SRC}/style/*.scss`])
		.pipe(cssLint({
			// failAfterError: false, // It defaults to true
			reporters: [{ formatter: "string", console: true }]
		}));
});





// ---------- BUILD ---------- //

gulp.task("buildJs", () => {
	return gulp.src(
		[
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
});

gulp.task("buildHtml", () => {
	return gulp.src([`${SRC}/index.htm`])
		.pipe(include())
		.pipe(inline({
			disabledTypes: ["img", "js", "css"/*, "svg"*/]
		}))
		.pipe(gulp.dest(DEST));
});

gulp.task("buildCss", () => {
	return gulp.src([`${SRC}/style/*.scss`])
		.pipe(sourcemaps.init())
		.pipe(concat("style.css"))
		.pipe(postCss([
			preCss({ extension: "scss" }),
			autoprefixer({ browsers: ["safari 9", "ie 11"] }), // https://github.com/ai/browserslist
			assets({ loadPaths: [`${SRC}`] })
		]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST));
});

gulp.task("copyAssets", () => {
	gulp.src([`${SRC}/favicon.ico`, `${SRC}/CNAME`, "*v1/**", "*v2/**"])
		.pipe(newer(DEST))
		.pipe(gulp.dest(DEST));
	return gulp.src(
		[
			`${SRC}/img/bgs.jpg`,
			`${SRC}/img/moreInfo.jpg`,
			`${SRC}/img/preview.jpg`,
			`${SRC}/img/testimonials.jpg`,
			`${SRC}/img/descBg.png`,
			`${SRC}/img/logos.png`,
			`${SRC}/img/profiles.png`
		])
		.pipe(newer(`${DEST}/img`))
		.pipe(gulp.dest(`${DEST}/img`));
});





// ---------- MINIFY ---------- //

gulp.task("min", ["build"], () => {
	return gulp.src([`${DEST}/index.htm`])
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
});
