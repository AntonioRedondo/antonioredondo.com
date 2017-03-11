"use strict";

const del = require("del");
const runSequence = require("run-sequence");
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");

// Lint
const jsHint = require("gulp-jshint");
const htmlLint = require("gulp-htmllint");
const cssLint = require("gulp-stylelint");

// Build
const concat = require("gulp-concat");
const replace = require("gulp-replace");
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
const dest = "docs";




gulp.task("default", ["watch"]);
gulp.task("lint", ["jsHint", "htmlLint", "cssLint"]);
gulp.task("build", ["buildJs", "buildHtml", "buildCss"/*, "copyAssets"*/]);





gulp.task("clean", () => {
	return del([`${dest}`]);
});





gulp.task("watch", ["lint", "build"], () => {
	gulp.watch([`${src}/**`], ["lint", "build"]);
});





// ---------- LINT ---------- //

gulp.task("jsHint", () => {
	return gulp.src([`${src}/js/*.js`])
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
		.pipe(cssLint({ // http://stylelint.io/user-guide/rules
				failAfterError: false,
				reporters: [ {formatter: "string", console: true} ]
		}));
});





// ---------- BUILD ---------- //

gulp.task("buildJs", () => {
	return gulp.src([`node_modules/webfontloader/webfontloader.js`,
			`${src}/js/plygrnd.js`,
			`${src}/js/o.js`,
			`${src}/js/initIntro.js`,
			`${src}/js/initMain.js`,
			`${src}/js/index.js`,
			`!${src}/js/*.spec.js`])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(`${dest}`));
});

gulp.task("buildHtml", () => {
	return gulp.src([`${src}/index.htm`])
		.pipe(inline({
			disabledTypes: ["img", "js", "css"/*, "svg"*/]
		}))
		.pipe(gulp.dest(`${dest}`));
});

gulp.task("buildCss", function () {
	return gulp.src([`${src}/style/*.scss`])
		.pipe(sourcemaps.init())
		.pipe(concat("style.css"))
		.pipe(postCss([
			preCss({extension: "scss"}),
			autoprefixer({ browsers: ["safari 8", "ie 10"] }), // https://github.com/ai/browserslist
			assets({ loadPaths: [`${src}`] })
		]))
		.pipe(sourcemaps.write())
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





// ---------- MINIFY ---------- //

gulp.task("min", () => {
	runSequence("build", () => {
		return gulp.src([`${dest}/index.htm`])
			.pipe(replace(/(<!-- buildDev:start -->)[\s\S]+(<!-- buildDev:end -->)/, "")) // Removes Dev code on Production
			.pipe(inline({
				// base: `${dest}`,
				// ignore: [""],
				disabledTypes: ["img"/*, "svg", "js", "css"*/],
				js: () => jsMin({mangle: true})
			}))
			.pipe(htmlMin({
				collapseWhitespace: true,
				minifyCSS: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeRedundantAttributes: true
			}))
			.pipe(gulp.dest(`${dest}`));
		});
});
