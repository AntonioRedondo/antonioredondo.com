# antonioredondo.com


This is the repository of my portfolio website currently [online](http://antonioredondo.com).

<img src="https://github.com/AntonioRedondo/antonioredondo.com/raw/master/readmeImages/1.jpg" width="900px" />
<img src="https://github.com/AntonioRedondo/antonioredondo.com/raw/master/readmeImages/2.jpg" width="900px" />
<img src="https://github.com/AntonioRedondo/antonioredondo.com/raw/master/readmeImages/3.jpg" width="900px" />
<img src="https://github.com/AntonioRedondo/antonioredondo.com/raw/master/readmeImages/m.jpg" width="900px" />

## Table of Contents

1. [Introduction](#introduction)
1. [JavaScript](#javascript)
1. [CSS](#css)
1. [SPA and routing](#spa-and-routing)
1. [Speed and size optimisation](#speed-and-size-optimisation)
1. [Google Analytics](#google-analytics)
1. [Installing, running and modifying the code locally](#installing-running-and-modifying-the-code-locally)
1. [Hosting](#hosting)


## Introduction

Here you can check all the source code involved in the creation of the site explained step by step.

The site is implemented as a [single-page application](https://en.wikipedia.org/wiki/Single-page_application). It's a web app focused on visual attractiveness and navigation effectiveness. It doesn't retrieve information from databases, nor it uses reusable widgets or forms. Web frameworks like Angular or React are hence not the best approach for the implementation. Instead vanilla ES5 JavaScript with no frameworks is used. jQuery isn't needed either. Check [`package.json`](package.json) to see all dependencies.

There are several goals I've pursued when coding the page:
- Avoiding Flashes Of Unstyled Content ([FOUCs](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)) at any cost. Modern browsers allow creation of smooth transitions while loading style, fonts and images.
- Loading fast.
- Using animations.
- Being strikingly responsive.
- Being original. Most modern pages use the vertical minimalistic blocky design with images used as background with some text on top of them. It's an effective design easy to adapt to both desktop and mobile screens but definitively not the most original. I decided to depart from this design.

This is the version 3 of my personal portfolio. There is [v1](http://antonioredondo.com/v1) and [v2](http://antonioredondo.com/v2). The source code is not available for these versions –though unlike v3 there was not much to show–. v1 was online from November 2014 to March 2015. v2 was online from March 2015 to September 2016.

See bellow the technical description of the website:

HTML with inlined JS and CSS (Kb) | JS imports | CSS imports | Images | Front-end framework | Routing | Animations | Other libraries | CSS framework | Linter | Building tools | Server | Readme file | Ready out of the box
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
719 (minified), 227 (gzipped) | 1 async ([Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs)) | 0 (plus 4 fonts [18.7 Kb] loaded with Web Font Loader) | 6 (574 Kb in total) | - (HTML attached to nodes) | [`history.pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) | Native CSS transitions and animations | [Web Font Loader](https://www.npmjs.com/package/webfontloader) | [PostCSS](https://www.npmjs.com/package/postcss) (using BEM pattern) | [ESLint](https://www.npmjs.com/package/eslint), [stylelint](https://www.npmjs.com/package/stylelint) and [HTMLHint](https://www.npmjs.com/package/gulp-htmlhint) | npm, Gulp | Node.js | Yes, comprehensive `README.md` file | On [`docs`](docs) folder

In order to allow maximum customization and size optimisation I decided not to use any [template pack](https://startbootstrap.com/). Templates are powerful tools to create attractive and tested websites in a fast way. But at the same time this comes to the expense of [originality](http://adventurega.me/bootstrap/) and refined code. Most template packs follow the blocky design of image boxes with text on top. I decided not to follow this structure and create a more unique site flow with full viewport lateral panels.

The site is ultraresponsive in a very dynamic way. This is thanks to the [`vw`, `vh` and `vmin` units](https://www.sitepoint.com/new-css3-relative-font-size/). The desktop version is active from a viewport width of 800px to 2560px (even with a wider viewport the website behaves decently). Unlike many websites which have a fixed width this site takes all width available and adapts to it. This is specially relevant with high resolution screens (width bigger than 1600px) since it avoids to have ugly lateral empty space. The mobile version is active when the viewport width is lower than 800px. The site has four `@media` breakpoints at 800px, 1100px, 1470px and 2000px.


## JavaScript

The [project JavaScript](https://github.com/AntonioRedondo/antonioredondo.com/tree/master/src/js) is arranged in several ES5 JavaScript files which are concatenated with Gulp at building time. Slicing the code in different files creates a neater organisation when the JS code reaches several hundred lines.

Since the project isn’t a reusable library, in order to have minimum length names functions haven't been embedded within a namespace object. Instead they have been declared in the global `window` namespace. However a set of basic functions like `document.getElementsByClassName()`, functions which check that a CSS property is supported by a browser or functions which manage cookies are grouped on the `o` namespace and written on its own [file](https://github.com/AntonioRedondo/antonioredondo.com/blob/master/src/js/o.js). On this namespace names are considerably sorter. For example `addEventListener()` is shorted to `o.ae()`.

Although ES6 features are handy I decided to used ES5 in order to have a minimum file size. Transpiling generates more code than native ES5. ES6 is used on `gulpfile.js`.

The project doesn’t depend on any front-end framework. Only two JavaScript dependencies are used:
- [Web Font Loader](https://www.npmjs.com/package/webfontloader): script which notifies once fonts from Google Fonts have been loaded. Ideal to avoid [FOUCs](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).
- [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs): used to track clicks around elements in the page. Further explained below.


## CSS

To generate advanced CSS [PostCSS](https://www.npmjs.com/package/postcss) is used. Unlike SASS PostCSS allows simple feature extensibility with the help of plug-ins. Since PostCSS isn't monolithic new features can be added with plug-ins without waiting for a new PostCSS release. The deal-breaker plug-in which make me switch from SASS to PostCSS was [Autoprefixer](https://www.npmjs.com/package/autoprefixer), tool which takes on adding vendor prefixes to CSS properties for a given browser and version so that you don't have to worry about.

[CSS](https://github.com/AntonioRedondo/antonioredondo.com/tree/master/src/style) has been written using the [BEM pattern](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax). Together with the PostCSS nesting capabilities and the [`&` parent selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-script) BEM allows very neat and organised CSS with a shallow nesting hierarchy.

BEM has been implemented in the following way:

    .block {
        ...
        @media(...) { }
        &:pseudo-class { }
        &--modifier { }
        &::pseudo-element { }
        &__element {
            ...
            @media(...) { }
            &:pseudo-class { }
            &--modifier { }
            &::pseudo-element { }
            
            /*
               No more children/sub-elements.
               If the HTML contains more children with its own class
               on the CSS they will appear as siblings and not as children of element.
               See below explanation.
            */
        }
    }

In order to avoid deep nesting and to foster simple element hierarchies, if an element hosts another element, on the CSS the element child won't appear as child but as sibling. That is:

    <div class="block block--big">
        <div class="block__element-1">
            <h1 class="block__element-2">Header</h1>
            <p class="block__element-3">Some text</p>
        </div>
        <div class="block__element-4">...</div>
    </div>
    
will have a CSS like below:

    .block {
        ...
        @media(...)  }
        &--big { }
        &__element-1 { }
        &__element-2 { } 
        &__element-3 {
            ...
            &::first-letter { }
        }
        ...
    }

As you can see, on the CSS `element-2` and `element-3` aren't inside `element-1` as it happens on the HTML.

The BEM pattern has proved very effective for this webpage. Only on [some `&:hover` pseudo-classes](https://github.com/AntonioRedondo/antonioredondo.com/blob/master/src/style/profile.scss#L35) it was necessary to add children within children. Also, sparingly you will see that some elements where selected directly instead of adding a class: `& span`. This was so because adding a class was adding too much complexity to the existing BEM structure for the number of CSS properties that were used.

Also, CSS properties order is kept among classes. On the [CSS source code](https://github.com/AntonioRedondo/antonioredondo.com/tree/master/src/style) you can see properties are always declared on the following way:

    .class {
        width:
        height:
        margin:
        padding:
        display:
        
        position:
        top:
        left:
        
        flex:
        
        background:
        border:
        
        color:
        font-size:
        font-weight:
        text-shadow:
        line-height:
        
        animation:
        
        transition:
        /* any property using transition will be declared after transition */
        opacity:
        transform:
    }

I was thinking of adding *CSS modules* support to the project with [`postcss-modules`](https://www.npmjs.com/package/postcss-modules) so that every CSS class would receive its unique hash string added to the name. But due to the fact the project is small and class name collision doesn’t happen makes adding this extra task unnecessary.


## SPA and routing

The site is a SPA. What in a web 1.0 site profile descriptions would be different page loads, on this 2.0 site is just a hide `<section>` which is made visible when the user pushes the profile button. However, when the corresponding profile button is pressed the URL is updated with a hash and the profile number selected: `#profile1`, `#profile2` or `#profile3`. If the page is accessed straight from the URL and hash the page will directly show the corresponding section. Also you can navigate through the different sections going back and forth with the browser. Sections will load and unload accordingly. To implement this behaviour the [`history.pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) API is [used](https://github.com/AntonioRedondo/antonioredondo.com/blob/master/src/js/initMain.js#L117).


## Speed and size optimisation

The website is optimised to load ultrafast. It follows the best performance, accessibility and rest of web practices. It gets the below [Lighthouse](https://github.com/GoogleChrome/lighthouse) score. You can check it yourself! Just open the Dev Tools on Chrome, click the Audits tab and generate a new report.

<img src="https://github.com/AntonioRedondo/antonioredondo.com/raw/master/readmeImages/Lighthouse.png" width="900px" />

When deployed on production the `build` npm script minifies JavaScript, HTML and CSS.

Also, to avoid unnecessary extra HTTP requests JavaScript, CSS and SVG images which are referenced from HTML code are inlined with the [`gulp-inline`](https://www.npmjs.com/package/gulp-inline) module.

There is more inlining. On SCSS files the [`postcss-assets`](https://www.npmjs.com/package/postcss-assets) module is used to inline SVG and some PNG images (small ones, see [example](https://github.com/AntonioRedondo/antonioredondo.com/blob/master/src/style/intro.scss#L69)) within CSS code. This avoid more HTTP requests made from CSS code.

**Inlining is a technique very powerful**. You must be careful with it though. On HTML code if a same SVG image is used several times among the page the image must not be inlined as the SVG code will be repeated for every time the image is inlined. Instead the image must be inlined as a `background-image` CSS property for a `<div>` or similar element. When using inlined images on SCSS code be careful about the transpiled CSS code doesn’t duplicate any inlined content in generated classes. Inspect the generated CSS file and if duplication happens CSS selectors and nesting must be rearranged.

Non-SVG images have been merged together to avoid extra HTTP requests. They are used as `background-image` CSS properties and placed with `background-position` (see [example](https://github.com/AntonioRedondo/antonioredondo.com/blob/master/src/style/profile.scss#L72)). The final production build only makes use of [6 image files](https://github.com/AntonioRedondo/antonioredondo.com/tree/master/docs/img) (plus another one for the Facebook preview not used on the website). Below you can see a set of images combined into one single file and used with `background-image` and `background-position` CSS properties:

<img align="center" src="https://github.com/AntonioRedondo/antonioredondo.com/raw/master/src/img/logos.png" width="600px" height="157px" />

[SVG images](https://github.com/AntonioRedondo/antonioredondo.com/tree/master/src/img) are used all around the page. They take little space, scale up beautifully on high density screens and can easily be inlined and gzipped. The big _“Who you are”_, _“The knowledge I can provide you”_ and _“What you get”_ texts and rest of SVGs around the page were created and edited with [Inkscape](http://www.inkscape.org). Inkscape allows exporting vector images to optimised SVGs.

Many of the SVG images are black silhouettes that are later coloured with the CSS `fill` property. This allows reuse of images and customisation from CSS. On this [official GitHub blog post](https://github.com/blog/2112-delivering-octicons-with-svg) this technique is better explained.

Thanks to the above optimisations the whole app is composed by only one HTML file with no CSS imports, only one online async JS import (Google Analytics) and just [six images](https://github.com/AntonioRedondo/antonioredondo.com/tree/master/docs/img) downloaded from the same domain. The inlined HTML file minified weights 719 Kb (227 gzipped) and the six images together weight 574 Kb. All this together with 18.7 Kb of downloaded fonts makes a **total size of 819.7 Kb**, less than 1 Mb to load the whole page.


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


All these tracking events are made with the `gtag()` function call. For example:

    gtag("send", "event", "v3", "Description panel bottom reached", "Profile 1");

You’re more than welcome to use your favourite ad/tracker blocker to avoid the collecting of these user events.


## Installing, running and modifying the code locally

The built site is available for distribution on the `docs` folder. This folder doesn't contain any documentation, it should actually be called `dist`. But by calling the distribution folder `docs` the process of online deployment from GitHub Pages is [much easier](https://github.com/blog/2228-simpler-github-pages-publishing). Read more on [Hosting](#hosting).

After downloading the project:

    git clone https://github.com/AntonioRedondo/antonioredondo.com.git

start the `dev` server:

    cd antonioredondo.com
    npm i
    npm run dev

and automatically the default system browser will open showing the website.

To build the site ready for production deployment:

    npm run build

The available npm scripts are:
 - `npm run dev`: builds the app while watching source files. It also starts a simple Node.js server and opens a tab on the browser on `http://localhost:3000`. This script are just `npm start` and `npm run build` scripts running in parallel.
 - `npm run lint`: lints source files.
 - `npm run build`: builds and deploys the inlined and minimised version of the project onto the `docs` folder ready for production. This is what is actually deployed on [antonioredondo.com](http://antonioredondo.com).
 - `npm start`: starts a simple Node.js [server](server.js) pointing to the `docs` folder and opens the default system browser at [`http://localhost:3000`](http://localhost:3000). Everytime there is a change on the source code it refreshes the browser automatically thanks to [Live.js](http://livejs.com) [[1](https://github.com/AntonioRedondo/antonioredondo.com/blob/master/src/htm/index.htm#L92)]. Server exclusively for development purposes. See [Hosting](#hosting) to find out how is deployed on production.
 - `npm run clean`: removes the `docs` folder.
 
 
 ## Hosting
 
The whole website is hosted on [GitHub Pages](https://pages.github.com/). GitHub Pages provide free hosting for server-less applications like this page, with a [generous storage and bandwidth limit](https://help.github.com/articles/what-is-github-pages/#usage-limits) and the possibility of [using your own DNS domain](https://help.github.com/articles/using-a-custom-domain-with-github-pages/). The [`docs`](https://github.com/AntonioRedondo/antonioredondo.com/tree/master/docs) folder is the final distributable page that is delivered when visiting [antonioredondo.com](http://antonioredondo.com).
 
