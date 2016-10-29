# antonioredondo.com v3


This is the repository of my portfolio website currently [online](http://antonioredondo.com).

<img align="center" src="http://i.imgur.com/yL7uFOl.jpg" width="900px" height="459px" />

<img align="center" src="http://i.imgur.com/c6XiGcL.jpg" width="900px" height="459px" />

<img align="center" src="http://i.imgur.com/cLYslvy.jpg" width="900px" height="459px" />

<img align="center" src="http://i.imgur.com/Xcoy2Nm.jpg" width="292px" />
<img align="center" src="http://i.imgur.com/t7Dvign.jpg" width="292px" />
<img align="center" src="http://i.imgur.com/7B2GXEn.jpg" width="292px" />

Here you can check all the source code involved in the creation of the site explained step by step.

The site is implemented as a [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application). It is a web app focused on visual attractiveness and navigation effectiveness. It doesn't retrieve information from databases, nor it uses reusable widgets or forms. Web frameworks like Angular or React are hence not the best approach for the implementation. Instead vanilla ES5 JavaScript with no frameworks is used. jQuery isn't needed either.

There are several goals I've pursued when coding the page:
- Avoiding Flashes Of Unstyled Content ([FOUCs](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)) at any cost. Modern browsers allow creation of smooth transitions while loading style, fonts and images.
- Loading fast.
- Using animations.
- Being strikingly responsive.
- Being original. Most modern pages use the vertical minimalistic blocky design with images used as background with some text on top of them. It's an effective design easy to adapt to both desktop and mobile screens but definitively not the most original. I decided to depart from this design.

This is the version 3 of my personal portfolio. There is [v1](http://antonioredondo.com/v1) and [v2](http://antonioredondo.com/v2). The source code is not available for these versions however -though unlike on v3 there was not much to show-. v1 was online from November 2014 to March 2015. v2 was online from March 2015 to September 2016.

See bellow the technical description of the website:

| HTML with inlined JS and CSS (Kb) | JS imports | CSS imports | Images | Front-end framework | Routing | Animations | Other libraries | CSS framework | Building tools | Server |  Readme file | Ready out of the box
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 717 (minified), 227 (gzipped) | 1 async (Google Analytics) | 0 (plus fonts loaded with Web Font Loader) | 6 (574 Kb in total) | - (HTML attached to nodes) | [`history.pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) | Natice CSS transitions and animations | Web Font Loader, Google Analytics | PostCSS (with BEM) | NPM, Gulp | Node.js | HTML | On Dist folder |

In order to allow maximum customization and size optimisation I decided not to use any [template pack](https://startbootstrap.com/). Templates are powerful tools to create attractive and tested websites in a fast way. But at the same time this comes to the expense of [originality](http://adventurega.me/bootstrap/) and refined code. Most template packs follow the blocky design of image boxes with text on top. I decided not to follow this structure and create a more unique site flow with full screen lateral panels.

The site is ultraresponsive in a very dynamic way. This is thanks to the [`vw`, `vh` and `vmin` units](https://www.sitepoint.com/new-css3-relative-font-size/). The desktop version is active from a viewport width of 800px to 2560px (even with a wider viewport the website behaves decently). Unlike many websites which have a fixed width this site takes all width available and adapts to it. This is specially relevant with high resolution screens (width bigger than 1600px) since it avoids to have ugly lateral empty space. The mobile version is active when the viewport width is lower than 800px. The site has 4 `@media` breakpoints at 800px, 1100px, 1470px and 2000px.


## JavaScript

The [project JavaScript](https://github.com/AntonioRedondo/antonioredondo.com-v3/tree/master/src/js) is arranged in several ES5 JavaScript files which are concatenated with Gulp during building time. Slicing the code in different files creates a neater organisation when the JS code reaches several hundred lines.

Since the project isn’t a reusable library, in order to have minimum length names functions haven't been embedded within a namespace object. Instead they have been declared in the global `window` namespace.

Although ES6 features are handy I decided to used ES5 in order to have a minimum file size. Transpiling generates more code than native ES5. ES6 is used on `gulpfile.js`.

The project doesn’t depend on any front-end framework. Only two JavaScript dependencies are used:
- [Web Font Loader](https://www.npmjs.com/package/webfontloader): script which notifies once webfonts from Google Fonts have been loaded. Ideal to avoid [FOUCs](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).
- [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs): used to track clicks around elements in the page. Further explained below.

A set of basic function like `document.getElementsByClassName()`, functions which check a CSS property is supported by the browser or functions which manage cookies are grouped on the `o` namespace and written on its own [file](https://github.com/AntonioRedondo/antonioredondo.com-v3/blob/master/src/js/o.js). In addition, on this namespace names are considerably sorter: `addEventListener()` to `o.ae()`.


## CSS

To generate advanced CSS [PostCSS](https://www.npmjs.com/package/postcss) is used. Unlike SASS PostCSS allows simple feature extensibility with the help of plug-ins. Since PostCSS isn't monolithic new features can be added with plug-ins without waiting for a new PostCSS release. The deal-breaker plug-in which make me switch from SASS to PostCSS was [Autoprefixer](https://www.npmjs.com/package/autoprefixer), amazing tool which take on adding vendor prefixes to css properties for a given browser and version so that you don't have to worry about this, allowing cleaner CSS.

[CSS](https://github.com/AntonioRedondo/antonioredondo.com-v3/tree/master/src/style) has been written using the [BEM pattern](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax). Together with the PostCSS nesting capabilities and the [`&` parent selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-script) BEM allows very neat and organised CSS with a shallow nesting hierarchy.

I was thinking of adding *CSS modules* support to the project with [`postcss-modules`](https://www.npmjs.com/package/postcss-modules) so that every CSS class would receive its unique hash string added to the name. But due to the fact the project is small and class name collision doesn’t happen makes adding this extra task unnecessary.


## SPA and routing

The site is a SPA. What in a site of the web 1.0 the profile descriptions would be different page loads on this site is just a hide `<section>` which is made visible when the user pushes the profile button. However, the URL bar adds a hash with the profile number: `#profile1`, `#profile2` or `#profile3`. If the page is accessed straight from the URL with hash the page will directly show the corresponding section. Also you can navigate through the different sections going back and forth, sections will be load and unload properly. To implement this behaviour the [`history.pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) API is [used](https://github.com/AntonioRedondo/antonioredondo.com-v3/blob/master/src/js/initMain.js#L117).


## Speed and size optimisation

When deployed on production the Gulp `min` task minifies JavaScript, HTML and CSS.

Also, to avoid unnecessary extra HTTP calls JavaScript, CSS and SVG images which are referenced from HTML code are inlined with the [`gulp-inline`](https://www.npmjs.com/package/gulp-inline) module.

There is more inlining. On SCSS files the [`postcss-assets`](https://www.npmjs.com/package/postcss-assets) module is used to inline SVG and some PNG images (small ones, see [example](https://github.com/AntonioRedondo/antonioredondo.com-v3/blob/master/src/style/intro.scss#L69)) within CSS code. This avoid more HTTP calls made from CSS code.

As you can see **inlining is a technique I find very powerful**. You must be careful with it however. On HTML code if a same image is used several times among the page the image must not be inlined on the HTML since the code will be repeated for every time the image is used. Instead the image must be inlined as a `background-image` CSS property in a `<div>` or similar element. When using inlined images on SCSS code be careful about the transpiled CSS code doesn’t duplicate any inlined content in generated classes. Inspect the generated CSS file and if duplication happens CSS selectors and nesting must be rearranged.

Images have been also merged together to avoid more HTTP calls. Then they are used as `background-image` CSS properties and placed with `background-position` (see [example](https://github.com/AntonioRedondo/antonioredondo.com-v3/blob/master/src/style/profile.scss#L72)). The final production build only makes use of [6 image files](https://github.com/AntonioRedondo/antonioredondo.com-v3/tree/master/dist/img) (plus another one for the Facebook preview but not used on the website). Below you can see a set of images combined into one single file and used with `background-image` and `background-position` CSS properties:

<img align="center" src="https://github.com/AntonioRedondo/antonioredondo.com-v3/raw/master/src/img/logos.png" width="600px" height="157px" />

[SVG images](https://github.com/AntonioRedondo/antonioredondo.com-v3/tree/master/src/img) are used all around the page. They take little space, scale up perfectly on high density screens and can easily be inlined and compressed. The big _“Who you are”_, _“The knowledge I can provide you”_ and _“What you get”_ texts and rest of SVGs around the page were created or edited with [Inkscape](http://www.inkscape.org). Inkscape allows exporting vectorial images to SVG files in a lightweight and minimal XML format.

Many of the SVG images are black silhouettes that are later coloured with the CSS `fill` property. This allows reuse of images and customisation from CSS. On this [official GitHub blog post](https://github.com/blog/2112-delivering-octicons-with-svg) this technique is better explained.

Thanks to the above optimisations the whole app is composed by only one HTML file with no CSS imports, only one online async JS import (Google Analytics) and just [six images](https://github.com/AntonioRedondo/antonioredondo.com-v3/tree/master/dist/img) downloaded from the same domain. The inlined HTML file minified weights 717 Kb (227 gzipped) and the six images together weight 574 Kb. All this together with 18.7 Kb of downloaded fonts makes a **total size of 819.7 Kb**, less than 1 Mb to load the whole page.


## Google Analytics

The page makes uses of [Google Analytics](https://www.google.com/analytics) to track user events and provide insight about how the page is used. Specifically the page tracks when the user clicks on page buttons:
- Enter button
- Skip button
- Close cookies button
- Profile 1 description panel open button
- Profile 2 description panel open button
- Profile 3 description panel open button
- Profile 1 description panel close button
- Profile 2 description panel close button
- Profile 3 description panel close button
- Profile contact email button
- Profile contact LinkedIn button
- Profile contact GitHub button
- More info button
- More info back button
- More info contact email button
- More info contact LinkedIn button
- More info contact GitHub button
- Show intro again button


I also tracks when the user has scrolled to the end of the profile description panel:
- Profile 1 bottom reached
- Profile 2 bottom reached
- Profile 3 bottom reached


All these tracking events are made with the `ga()` function call. For example:

    ga("send", "event", "v3", "Description panel bottom reached", "Profile 1");

You’re more than welcome to use your favourite ad/tracker blocker to avoid the collecting of these user events.
