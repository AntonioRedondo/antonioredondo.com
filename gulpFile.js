"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const runSequence = require('run-sequence');

// Lint
const jsHint = require("gulp-jshint");
const htmlLint = require("gulp-htmllint");
const cssLint = require("gulp-stylelint");

// Build
const concat = require("gulp-concat");
const inline = require("gulp-inline");
const postCss = require("gulp-postcss");
const preCss = require("precss");
const autoprefixer = require("autoprefixer");
const assets = require("postcss-assets");

// Minify
const jsMin = require("gulp-uglify");
const htmlMin = require("gulp-htmlmin");
const cssMin = require("gulp-clean-css");




const src = "src";
const dest = "dist";





gulp.task("default", ["watch"]);
gulp.task("lint", ["jsHint", "htmlLint", "cssLint"]);
gulp.task("build", ["buildJs", "buildHtml", "buildCss"/*, "copyAssets"*/]);
// gulp.task("min", ["build", "allMin"]); // This needs to be synchronous. Waiting for Gulp 4. Using "run-sequence" module in the meanwhile. Check "min" task at the bottom.





gulp.task("watch", [/*"lint", */"build"], () => {
	// http://stackoverflow.com/questions/21608480/gulp-js-watch-task-runs-twice-when-saving-files
	gulp.watch(`${src}/**`, { awaitWriteFinish: true }, ["build"]);
});





gulp.task("clean", () => {
	return del([`${dest}`]);
});





gulp.task("jsHint", () => {
	return gulp.src(`${src}/js/*.js`)
		.pipe(jsHint({
			lookup: false,

			// http://jshint.com/docs/options
			// https://github.com/jshint/jshint/blob/master/examples/.jshintrc
			camelcase: true,
			devel: true,
			esversion: 6,
			immed: true,
			latedef: true,
			newcap: true,
			nonew: true,
			quotmark: true,
			
			globals: { "WebFont": true, "ga": true, "o": true, "pg": true },
			predef: ["initIntro", "hideIntro", "initMain"],
			browser: true,
			jasmine: true,
			node: true
		}))
		.pipe(jsHint.reporter("jshint-stylish"))
		.pipe(jsHint.reporter("fail"));
});

gulp.task("htmlLint", () => {
	return gulp.src([`${src}/*.htm`])
		.pipe(htmlLint()); // https://github.com/htmllint/htmllint/wiki/Options
});

gulp.task("cssLint", () => {
	return gulp.src([`${src}/style/*.scss`])
		.pipe(cssLint( // http://stylelint.io/user-guide/rules
			{ reporters: [ {formatter: "string", console: true} ] }
		));
});





gulp.task("buildJs", () => {
	return gulp.src([`node_modules/webfontloader/webfontloader.js`,
			`${src}/js/plygrnd.js`,
			`${src}/js/utils.js`,
			`${src}/js/initIntro.js`,
			`${src}/js/initMain.js`,
			`${src}/js/main.js`,
			`!${src}/js/*.spec.js`])
		// Remember to comment out generation of sourcemaps when running "allMin"
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(`${src}`)) // Because 'base' doesn't work for 'inline' module. This file is ignored in .gitignore
		.pipe(gulp.dest(`${dest}`));
});

gulp.task("buildHtml", () => {
	return gulp.src([`${src}/index.htm`])
		.pipe(inline({
			base: `${dest}`, // Doesn't work. Value ignored
			// js: () => jsMin({mangle: true}),
			// css: cssMin,
			disabledTypes: ["img", "js", "css"/*, "svg"*/],
			// ignore: [""]
		}))
		.pipe(gulp.dest(`${dest}`));
});

gulp.task("buildCss", function () {
	return gulp.src([`${src}/style/*.scss`])
		.pipe(sourcemaps.init())
		.pipe(postCss([
			preCss({extension: "scss"}),
			autoprefixer({ browsers: ["safari 8", "ie 10"] }), // https://github.com/ai/browserslist
			assets({ loadPaths: [`${src}`] })
		]))
		.pipe(concat("style.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(`${src}`)) // Because 'base' doesn't work for 'inline' module. This file is ignored in .gitignore
		.pipe(gulp.dest(`${dest}`));
});

gulp.task("copyAssets", () => {
	gulp.src([`${src}/favicon.ico`])
		.pipe(gulp.dest(`${dest}`));
	return gulp.src([
			`${src}/img/bgs.jpg`,
			`${src}/img/moreInfo.jpg`,
			`${src}/img/preview.jpg`,
			`${src}/img/testimonials.jpg`,
			`${src}/img/descBg.png`,
			`${src}/img/logos.png`,
			`${src}/img/profiles.png`])
		.pipe(gulp.dest(`${dest}/img`));
});





gulp.task("min", () => {
    runSequence("build", () => {
		return gulp.src([`${src}/index.htm`])
			.pipe(htmlMin({
				collapseWhitespace: true,
				minifyCSS: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeRedundantAttributes: true
			}))
			.pipe(inline({
				base: `${dest}`, // Doesn't work. Value ignored
				js: () => jsMin({mangle: true}),
				css: cssMin,
				svg: () => htmlMin({collapseWhitespace: true,
						minifyCSS: true,
						removeAttributeQuotes: true,
						removeComments: true,
						removeRedundantAttributes: true}),
				disabledTypes: ["img"/*, "svg", "js", "css"*/],
				// ignore: [""]
			}))
			.pipe(gulp.dest(`${dest}`));
    });
});





// Minimising tasks when JavaScript and CSS isn't inlined. Currently not in use.

// gulp.task("jsMin", () => {
// 	return gulp.src([`${src}/js/*.js`, `!${src}/js/*.spec.js`])
// 		.pipe(jsMin())
// 		.pipe(concat("app.js"))
// 		.pipe(gulp.dest(`${dest}`));
// });

// gulp.task("cssMin", () => {
// 	return gulp.src([`${src}/style/*.scss`])
// 		.pipe(postCss([
// 			preCss({extension: "scss"}),
// 			autoprefixer({browsers: ["safari 8", "ie 10"]}),
// 			inlineOnCss({path: `${src}`})
// 		]))
// 		.pipe(concat("style.css"))
// 		.pipe(cssMin())
// 		.pipe(gulp.dest(`${dest}`));
// });
