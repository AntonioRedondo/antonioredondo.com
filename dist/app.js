/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;null===X&&(X=window.FontFace?(x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(x[1],10):!0:!1);X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,
n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function ya(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function za(a){this.f=a;this.a=[];this.c={}}
var Aa={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ba={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ca={i:"i",italic:"i",n:"n",normal:"n"},
Da=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Ea(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Da.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Ca[l];n=n[1];if(null==n||""==n)n="4";else var r=Ba[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Aa[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Aa[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Fa(a,b){this.c=a;this.a=b}var Ga={Arimo:!0,Cousine:!0,Tinos:!0};Fa.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new za(e);Ea(f);A(c,ya(d),D(b));F(b,function(){a(f.a,f.c,Ga)})};function Ha(a,b){this.c=a;this.a=b}Ha.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ia(a,b){this.c=a;this.f=b;this.a=[]}Ia.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ia(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ha(b,a)};Y.a.c.google=function(a,b){return new Fa(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

// https://github.com/kanduvisla/plygrnd
var Plygrnd = function() {

	var _this = this;                   // Reference to root object;
	this.views = [];                    // Array with views
	this.totalViews = [];               // Counter to keep track if all views are loaded.
	this.currentView = 0;               // CurrentView
	this.mousePosition = {x: (document.body.clientWidth/100*20), y: (document.body.clientHeight/100*20)};  // Mouse position (can be used by views)
	this.frameRate = 60;
	this.mouseDown = false;
	this.click = false;

	// Create canvas object:
	this.canvas = document.getElementsByClassName("main-bg")[0];
//				document.body.appendChild(this.canvas);

	// Context Object:
	this.ctx = this.canvas.getContext("2d");

	// Resize function:
	this.resize = function(){
		_this.ctx.width  = _this.canvas.width  = document.body.clientWidth;
		_this.ctx.height = _this.canvas.height = document.body.clientHeight;
	};

	// And bind it to the window:
	window.addEventListener("resize", this.resize);
	this.resize();

	// Mouse position (can be used by views):
	window.addEventListener("mousemove", function(e){
		_this.mousePosition.x = e.clientX;
		_this.mousePosition.y = e.clientY;
	});

	/*				this.canvas.addEventListener("touchmove", function(e){
	 e.preventDefault();
	 _this.mousePosition.x = e.touches[0].clientX;
	 _this.mousePosition.y = e.touches[0].clientY;
	 });

	 this.canvas.addEventListener("mousedown", function(e){
	 e.preventDefault();
	 _this.mouseDown = true;
	 _this.click = true;
	 });

	 this.canvas.addEventListener("mouseup", function(e){
	 e.preventDefault();
	 _this.mouseDown = false;
	 _this.click = false;
	 });

	 this.canvas.addEventListener("touchstart", function(e){
	 e.preventDefault();
	 _this.mouseDown = true;
	 _this.click = true;
	 });

	 this.canvas.addEventListener("touchend", function(e){
	 e.preventDefault();
	 _this.mouseDown = false;
	 _this.click = false;
	 });*/

	// Add extra functions to the context object:
	this.ctx.lineThrough = function(points)
	{
		for(var i in points) {
			this.lineTo(points[i].x, points[i].y);
		}
	};

	this.ctx.curveThrough = function(points)
	{
		for (var i = 1; i < points.length - 2; i ++)
		{
			var xc = (points[i].x + points[i + 1].x) / 2;
			var yc = (points[i].y + points[i + 1].y) / 2;
			this.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
		}
		// curve through the last two points
		this.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
	};

	this.ctx.direction = function(x1, y1, x2, y2)
	{
		return Math.atan2(y2 - y1, x2 - x1);
	};

	this.ctx.distance = function(x1, y1, x2, y2)
	{
		return Math.sqrt(
			Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
		);
	};

	this.ctx.drawCircle = function(x, y, radius)
	{
		this.arc(x, y, radius, 0, Math.PI*2, true);
	};

	/*				// Pager function:
	 this.pager = document.createElement("nav");
	 document.body.appendChild(this.pager);

	 this.buildPager = function()
	 {
	 for(var i in _this.views)
	 {
	 // Create an anchor, which loads the specific view:
	 var anchor = document.createElement("a");
	 anchor.innerText = parseInt(i) + 1;
	 anchor.setAttribute("data-view", i);
	 anchor.setAttribute("title", _this.views[i].name);
	 anchor.addEventListener("click", function(e){
	 e.preventDefault();
	 _this.playView(this.getAttribute("data-view"));
	 });
	 _this.pager.appendChild(anchor);
	 }
	 };*/

	// Views functions:
	this.addView = function()
	{
		_this.totalViews.push({
			order: _this.totalViews.length,
			slug: "dots-2",
			loaded: true
		});
	};

	// Check if all is loaded and start if so:
	this.load = function()
	{
		var intervalTimeout = 0;
		var intervalID = setInterval(function(){
			intervalTimeout++;
			if(intervalTimeout == 300) {
				// waited for 30 seconds. Something is clearly wrong.
				alert("Time out! Is your Internet connection thát slow?!?");
				clearInterval(intervalID);
			}
			// Check if all views are loaded:
			var allLoaded = true;
			for(var i in _this.totalViews)
			{
				if(!_this.totalViews[i].loaded) { allLoaded = false; }
			}
			if(allLoaded) {
				// All views are loaded.
				var newViews = [];
				for(var i2 in _this.totalViews) {
					var currentSlug = _this.totalViews[i2].slug;
					for(var j in _this.views) {
						if(_this.views[j].slug == currentSlug) {
							newViews.push(_this.views[j]);
						}
					}
				}
				_this.views = newViews;

				// Clear interval:
				clearInterval(intervalID);

				// Build the pager:
//							_this.buildPager();

				// Start the app:
				_this.start();
			}
		}, 250);
	};

	// Start function:
	this.start = function()
	{
		// Get the right view:
		/*					if(window.location.hash != "") {
		 var currentHash = window.location.hash.replace("#", "");
		 for(var i in _this.views) {
		 if(_this.views[i].slug == currentHash) {
		 _this.currentView = i;
		 }
		 }
		 } else {*/
		_this.currentView = _this.views.length - 1;
//					}
		_this.playView(_this.currentView);
		// Setup the loop:
		// setInterval(function aName(){
		(function aName(){
			// Pass on some variables:
			_this.views[_this.currentView].vars.mousePosition = _this.mousePosition;
			_this.views[_this.currentView].vars.mouseDown = _this.mouseDown;
			_this.views[_this.currentView].vars.click = _this.click;
			_this.click = false;
			// Make that step:
			_this.views[_this.currentView].stepFunction(_this.ctx, _this.views[_this.currentView].vars);
			requestAnimationFrame(aName);
		// }, 1000 / _this.frameRate); // default = 60 fps.
			})();
	};

	this.playView = function(viewNr)
	{
		// Un-initialize the current view:
		try {
			_this.views[_this.currentView].unInitFunction(_this.ctx, _this.views[_this.currentView].vars);
		} catch(e) {}
		// Go further with the requested view from here:
		_this.currentView = viewNr;
		// Remove the class of the active view:
//					if(this.pager.querySelector("a.active")) {
//						this.pager.querySelector("a.active").className = "";
//					}
		// And add it to the new view!
//					this.pager.querySelector("a[data-view="" + _this.currentView + ""]").className = "active"
		// Set the hash:
//					window.location.hash = _this.views[_this.currentView].slug;
		// Initialize the current view:
		_this.views[_this.currentView].initFunction(_this.ctx, _this.views[_this.currentView].vars);
	};

};

var StepGenerator = function(complexity, minInc, maxInc, minMul, maxMul)
{
	this.steps       = [];
	this.incs        = [];
	this.multipliers = [];
	this.complexity  = complexity;

	var _this = this;

	// Defaults:
	if(minInc === null) { minInc = 0; }
	if(maxInc === null) { maxInc = 0.1; }
	if(minMul === null) { minMul = 0.7; }
	if(maxMul === null) { maxMul = 1.3; }

	// Initialise:
	for(var i = 0; i < this.complexity; i++)
	{
		this.steps.push(Math.random() * Math.PI);
		this.incs.push(minInc + Math.random() * (maxInc - minInc));
		this.multipliers.push(minMul + Math.random() * (maxMul - minMul));
	}

	this.step = function()
	{
		// Increase the counters:
		for(var i = 0; i < _this.complexity; i++)
		{
			_this.steps[i] += _this.incs[i];
		}
	};

	// Step XY-function:
	this.getXY = function(offset, w, h)
	{
		if(offset === null) { offset = 0; }

		var xValue = 0;
		var yValue = 0;

		// Calculate XY:
		for(var i = 0; i < _this.complexity; i++)
		{
			xValue += Math.sin(_this.steps[i] + (_this.incs[i] * offset)) * w;
			yValue += Math.cos((_this.steps[i] + (_this.incs[i] * offset)) * _this.multipliers[i]) * h;
		}
		// Return it:
		return {
			x: xValue,
			y: yValue
		};
	};
};





var pg = new Plygrnd();
pg.views.push({
	name            : "Dots 2",
	slug            : "dots-2",
	// Variables used by this view:
	vars            : {
		steps: null,
		currentX: 0,
		currentY: 0
	},
	// Initialisation:
	initFunction    : function(ctx, vars){
		vars.steps = new StepGenerator(4, 0, 0.02, 0.7, 1.3);
		vars.prevDistances = {};
	},
	// Un-initialisation:
	unInitFunction  : function(ctx, vars){},
	// Stepping function:
	stepFunction    : function(ctx, vars){
		ctx.clearRect(0, 0, ctx.width, ctx.height);
		var stepSize = ctx.width / 30;
		var stepsX = ctx.width / stepSize;
		var stepsY = ctx.height / stepSize;

//					ctx.fillStyle = "#00ddff";
		ctx.fillStyle = "#8c243e";

		// Adds a simple ease to the mouse:
		vars.currentX += (vars.mousePosition.x - vars.currentX) / 20;
		vars.currentY += (vars.mousePosition.y - vars.currentY) / 20;

		vars.steps.step();

		var size = ctx.width/1.5;

		for(var y = 0; y < stepsY; y ++)
		{
			for(var x = 0; x < stepsX; x ++)
			{
				var cX = (y%2 * stepSize / 2) + (x * stepSize);
				var cY = y * stepSize;

				// outside:
				var rad = Math.atan2(cX - vars.currentX, cY - vars.currentY);

				// distance:
				var distance = Math.sqrt(
					Math.pow(vars.currentX - cX, 2) + Math.pow(vars.currentY - cY, 2)
				);

				var offset = Math.max(0, (size/2) - distance);
				var p = offset/size;
				p*=1-p;
				offset = (size/2) * p;

				var stepXY = vars.steps.getXY((y*stepsX)+(x*3), offset, offset);

				var dX = stepXY.x + cX + Math.sin(rad) * (offset);
				var dY = stepXY.y + cY + Math.cos(rad) * (offset);
				// var dX = cX;
				// var dY = cY + Math.cos(rad) * (offset);

				ctx.beginPath();
				ctx.drawCircle(dX, dY, distance/80);
				ctx.fill();
			}
		}
	}
});

pg.addView();
// pg.load();

// 2016 (C) Antonio Redondo / antonioredondo.com
// "o" is a micro-library which contains basic DOM functions with a sorter name.
// It also contains functions to deal with cookies, and some other methods.

(function(o) {

	o.gc = function(className) {
		return document.getElementsByClassName(className)[0];
	};

	o.gca = function(className) {
		return Array.prototype.slice.call(document.getElementsByClassName(className));
	};

	o.qs = function(query) {
		return document.querySelector(query);
	};

	o.qsa = function(query) {
		return Array.prototype.slice.call(document.querySelectorAll(query));
	};

	o.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	};

	o.to = function(callback, time) {
		return window.setTimeout(callback, time);
	};
	
	
	
	o.getRandomInt = function() {
		var min = -50, max = 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	
	
	o.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	};
	
	
	
	o.getCookie = function(name) {
		var nameEQ = name + "=",
				ca = document.cookie.split(";");
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0) == " ")
				c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) === 0)
				return c.substring(nameEQ.length,c.length);
		}
		return null;
	};

	o.setCookie = function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		} else expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	};

	o.removeCookie = function(name) {
		this.setCookie(name,"",-1);
	};
	
}(window.o = window.o || {}));


function showCookieMessage() {
	o.gc("cookies").classList.add("cookies--in");
	o.gc("cookies__close-button").addEventListener("click", function() {
		o.gc("cookies").classList.remove("cookies--in");
		o.setCookie("cookieMessage", false, 365);
		ga("send", "event", "v3", "Cookies close");
	});
}



function hideIntro(type) {
	var modifier = "out",
		time = 4000;
	switch (type) {
		case 2: modifier = "out2"; time = 1000;
	}
	
	if (o.getCookie("cookieMessage") === null)
		o.to(showCookieMessage, time);
	
	var intro = o.gc("intro"),
		introDarkener = o.gc("intro-darkener");
	intro.classList.add("intro--" + modifier);
	intro.addEventListener("transitionend", function(e) {
		if(e.target.classList.contains("intro"))
			intro.style.display = "none";
	});
	introDarkener.classList.add("intro-darkener--" + modifier);
	introDarkener.addEventListener("transitionend", function(e) {
		if(e.target.classList.contains("intro-darkener"))
			introDarkener.style.display = "none";
	});
	
	o.gc("ar__logo-container").classList.add("ar__logo-container--in");
	o.gc("ar__text").classList.add("ar__text--in");
	o.gc("main-bg").classList.add("main-bg--in");
	o.gc("choose-profile-text").classList.add("choose-profile-text--in");
	
	o.gc("profile--1").classList.add("profile--1in");
	o.gc("profile--2").classList.add("profile--2in");
	o.gc("profile--3").classList.add("profile--3in");
	o.to(function() {
		o.qsa(".profile").forEach(function(item) { item.classList.add("profile--no-delay"); } );
	}, 200);
	
	o.gc("footer").classList.add("footer--in");
	o.to(function() { o.gc("footer").classList.add("footer--no-delay"); }, 2000);
	
	if (document.documentElement.offsetWidth >= 810) {
		pg.load();
	}
}



function initIntro() {
	o.gc("scroll-down").classList.add("scroll-down--bottom");
	o.gc("scroll-down__inner").classList.add("scroll-down__inner--out");
	
	var viewPortWidth = document.documentElement.offsetWidth,
		wheelLevel = 0,
		wheelLevelFormer = 0,
		phrases = o.gca("phrases__phrase"),
		bubbles = o.gca("bubbles__layer"),
		visiblePhrases = [],
		visibleBubbles = [],
		yStart,
		yEnd,
		transform = o.checkTransformsSupported(),
		mouseMoveListener,
		mouseWheelListener,
		touchStartListener,
		touchEndListener,
		keyDownListener,
		toControlledRandomMovement,
		toHints;
		
		
		
	// On desktop version it moves the phrases and bubbles on the 3d space depending on the mouse position
	if (viewPortWidth >= 810)
		o.ae("mousemove", mouseMoveListener = function(e) {
			//console.log("deltaZ: " + e.deltaZ);
			//console.log("deltaMode: " + e.deltaMode);
			//console.log("clientX: " + e.clientX);
			//console.log("clientY: " + e.clientY);
			//console.log("rotateX(" + -(0.02*e.clientY-10) +"deg)");
			var phrases = o.gc("phrases"), 
				bubbles = o.gc("bubbles");
			phrases.style[transform] = "rotateX(" + -(0.02*e.clientY-10) + "deg) rotateY(" + (0.02*e.clientX-25) + "deg) translate3d(" + (-0.05*e.clientX+100) + "px, 0, 0)";
			bubbles.style[transform] = phrases.style[transform];
		});
	
	
	
	// Shows a text hint if the intro doesn't start scrolling down in 3 seconds
	toHints = o.to(function() {
		if (wheelLevel === 0)
			if (viewPortWidth >= 810)
				o.gc("scroll-down-hint").classList.add("scroll-down-hint--in");
			else o.gc("swipe-up-hint").classList.add("swipe-up-hint--in");
	}, 3000);
	
	
	
	// Counts wheel scroll movements and moves phrases and bubbles accordingly
	function movePhrases(level) {
		if ((level>0 && wheelLevel<5) || (level<0 && wheelLevel>0))
			wheelLevel += level;
		else return;
		
		if (wheelLevel === 1) {
			o.gc("scroll-down-hint").classList.add("scroll-down-hint--out");
			o.gc("swipe-up-hint").classList.add("swipe-up-hint--out");
		} 
		
		if (wheelLevel === 5) {
			o.to(function() { o.gc("enter-button").classList.add("enter-button--in"); }, 1000);
			o.gc("scroll-down").classList.add("scroll-down--out");
			o.gc("skip-intro").classList.remove("skip-intro--in");
		} else {
			o.gc("enter-button").classList.remove("enter-button--in");
			o.gc("scroll-down").classList.remove("scroll-down--out");
			if (wheelLevel > 0)
				o.gc("skip-intro").classList.add("skip-intro--in");
		}

		if (wheelLevel > wheelLevelFormer) {
			visiblePhrases.splice(0, 0, (phrases[wheelLevel-1]));
			visibleBubbles.splice(0, 0, (bubbles[wheelLevel-1]));
			visiblePhrases.forEach(function(item, i) {
				item.classList.add("phrases__phrase--pos" + (i + 1));
				visibleBubbles[i].classList.add("bubbles__layer--pos" + (i + 1));
			});
		} else if (wheelLevel < wheelLevelFormer) {
			visiblePhrases.forEach(function(item, i) {
				item.classList.remove("phrases__phrase--pos" + (i + 1));
				visibleBubbles[i].classList.remove("bubbles__layer--pos" + (i + 1));
			});
			visiblePhrases.splice(0, 1);
			visibleBubbles.splice(0, 1);
		}

		wheelLevelFormer = wheelLevel;
	}
	
	o.ae("wheel", mouseWheelListener = function (e) {
		if (e.deltaY > 0)
			movePhrases(1);
		else if (e.deltaY < 0)
			movePhrases(-1);
	});
	
	// http://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
	o.ae("touchstart", touchStartListener = function(e) {
		yStart = e.touches[0].clientY;
	});
	
	o.ae("touchend", touchEndListener = function(e) {
		yEnd = e.changedTouches[0].clientY;
		if (yEnd - yStart < -60)
			movePhrases(1);
		else if (yEnd - yStart > 60)
			movePhrases(-1);
	});
	
	
	
	// Moves randomly horizontally and vertically the bubble layers
	(function controlledRandomMovement() {
		for (var n=0; n<visibleBubbles.length; ++n) {
			//var zTrans = /\.*translateZ\((.*)px\)/i.exec(document.getElementById("dv").getAttribute("style"))[1];
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + o.getRandomInt() + "px, " + o.getRandomInt() + "px, 0)";
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + o.getRandomInt() + "px, " + o.getRandomInt() + "px, 0)";
		}
		toControlledRandomMovement = o.to(controlledRandomMovement, 3000);
	})();
	
	
	
	// Hides the Intro screen
	function skipIntro(gaLabel) {
		window.removeEventListener("mousemove", mouseMoveListener);
		window.removeEventListener("wheel", mouseWheelListener);
		window.removeEventListener("touchstart", touchStartListener);
		window.removeEventListener("touchend", touchEndListener);
		window.removeEventListener("keydown", keyDownListener);
		window.clearTimeout(toControlledRandomMovement);
		window.clearTimeout(toHints);
		
		hideIntro();
		
		o.setCookie("firstTime", false, 365);
			
		ga("send", "event", "v3", "Skip Intro", gaLabel);
	}
	
	o.gc("enter-button").addEventListener("click", function(e) { skipIntro("Enter button"); });
	o.gc("skip-intro").addEventListener("click", function(e) { skipIntro("Skip intro button"); });
	
	o.ae("keydown", keyDownListener = function(e) {			
		switch (e.keyCode) {
			case 39:
			case 40: movePhrases(1); break;
			case 37:
			case 38: movePhrases(-1); break;
			case 27: skipIntro("Esc key");
		}
	});
	
}


function initMain() {
	
	var toRemoveClasses,
		previousState,
		profileSelected = 0,
		animDuration = 400,
		animDurationMoreInfo = 300,
		descriptionPanel = o.gc("description-panel"),
		moreInfoPanel = o.gc("more-info-panel"),
		moreInfoImage = o.gc("more-info-image");
	
	o.gc("main").style.display = "block";
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	o.qs(".block__contact-icon.email").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Email"); });
	o.qs(".block__contact-icon.linkedin").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "LinkedIn"); });
	o.qs(".block__contact-icon.github").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "GitHub"); });
	o.qs(".more-info-panel__contact-icon.email").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Email MI"); });
	o.qs(".more-info-panel__contact-icon.linkedin").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "LinkedIn MI"); });
	o.qs(".more-info-panel__contact-icon.github").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "GitHub MI"); });
	o.gc("more-info-panel__source-code-link").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Source code link"); });
	
	
	
	// Adds necessary logic to show the Description panel for some profile	
	function showDescriptionPanel(newProfile) {
		previousState = "descriptionPanel";
		descriptionPanel.classList.add("description-panel--in", "s" + newProfile);
		
		var nProfile = o.gc("profile--" + newProfile);
		nProfile.classList.add("profile--z-index");
		nProfile.classList.add("profile--selected");
		switch (newProfile) {
			case 1: nProfile.classList.add("profile--selected-left"); break;
			case 2: nProfile.classList.add("profile--selected-center"); break;
			case 3: nProfile.classList.add("profile--selected-right");
		}
		nProfile.title = "Back";
		nProfile.children[2].classList.remove("profile__title-bg--in");
		nProfile.children[3].firstElementChild.classList.remove("profile__title-text--in");
		
		o.gc("darkener").classList.add("darkener--in");

		for (var n=1; n<=3; ++n)
			if (newProfile !== n) {
				o.gc("profile--" + n).classList.add("profile--not-selected");
				switch (n) {
					case 1: o.gc("profile--" + n).classList.add("profile--selected-left"); break;
					case 2: o.gc("profile--" + n).classList.add("profile--selected-center"); break;
					case 3: o.gc("profile--" + n).classList.add("profile--selected-right");
				}
			}
		
		o.gca("desc-profile--" + newProfile).forEach(function(item) {
			item.style.display = "inline-block";
		});
				
		window.clearTimeout(toRemoveClasses);
		o.to(function() {
			nProfile.children[4].classList.add("profile__back-button--in");
			o.gc("profile-selected-bg--" + newProfile).classList.add("profile-selected-bg--in");
			o.qs(".profile-selected-place--" + newProfile + " .profile-selected-place__title").classList.add("profile-selected-place__title--in");
		}, animDuration);
		
		o.gc("description-panel__overflow-hide").scrollTop = 0;
		profileSelected = newProfile;
		ga("send", "event", "v3", "Profile description panel open", "Profile " + newProfile);
	}
	
	function hideDescriptionPanel() {
		descriptionPanel.classList.remove("description-panel--in");
		
		var sProfile = o.gc("profile--" + profileSelected);
		sProfile.classList.remove("profile--selected");
		switch (profileSelected) {
			case 1: sProfile.classList.remove("profile--selected-left"); break;
			case 2: sProfile.classList.remove("profile--selected-center"); break;
			case 3: sProfile.classList.remove("profile--selected-right");
		}
		sProfile.title = "";
		sProfile.children[4].classList.remove("profile__back-button--in");
		
		o.gc("darkener").classList.remove("darkener--in");

		for (var n2=1; n2<=3; ++n2)
			if (profileSelected !== n2) {
				o.gc("profile--" + n2).classList.remove("profile--not-selected");
				switch (n2) {
					case 1: o.gc("profile--" + n2).classList.remove("profile--selected-left"); break;
					case 2: o.gc("profile--" + n2).classList.remove("profile--selected-center"); break;
					case 3: o.gc("profile--" + n2).classList.remove("profile--selected-right");
				}
			}

		o.gc("profile-selected-bg--" + profileSelected).classList.remove("profile-selected-bg--in");
		o.qs(".profile-selected-place--" + profileSelected + " .profile-selected-place__title").classList.remove("profile-selected-place__title--in");
		
		ga("send", "event", "v3", "Profile description panel close", "Profile " + profileSelected);

		var removeClasses = function() {
			descriptionPanel.classList.remove("s" + profileSelected);
			
			o.gca("desc-profile--" + profileSelected).forEach(function(item) {
				item.style.display = "none";
			});
				
			sProfile.classList.remove("profile--z-index");

			profileSelected = 0;
		};
		toRemoveClasses = o.to(removeClasses, animDuration);
	}
	
	function showOrhideDescriptionPanel(newProfile) {
		if (!descriptionPanel.classList.contains("description-panel--in")) {
			window.history.pushState({newProfile: newProfile}, "Profile " + newProfile, "#profile" + newProfile);
			showDescriptionPanel(newProfile);
		} else {
			window.history.pushState(undefined, "Antonio Redondo", window.location.pathname);
			hideDescriptionPanel();
		}
	}
	
	o.gc("profile--1").addEventListener("click", function() { showOrhideDescriptionPanel(1); });
	o.gc("profile--2").addEventListener("click", function() { showOrhideDescriptionPanel(2); });
	o.gc("profile--3").addEventListener("click", function() { showOrhideDescriptionPanel(3); });
	o.gc("profile-m--1").addEventListener("click", function() { showOrhideDescriptionPanel(1); });
	o.gc("profile-m--2").addEventListener("click", function() { showOrhideDescriptionPanel(2); });
	o.gc("profile-m--3").addEventListener("click", function() { showOrhideDescriptionPanel(3); });
	o.gc("back-button-m").addEventListener("click", function() { showOrhideDescriptionPanel(); });
	
	
	
	// Adds functionality to "More info" button
	function moreInfoEventListener(gaLabel) {
		previousState = "moreInfoPanel";
		
		moreInfoPanel.style.visibility = "visible";
		/* jshint ignore:start */
		moreInfoPanel.offsetHeight; // This causes reflow before adding next class
		/* jshint ignore:end */
		moreInfoPanel.classList.add("more-info-panel--in");
		
		moreInfoImage.style.visibility = "visible";
		/* jshint ignore:start */
		moreInfoImage.offsetHeight;
		/* jshint ignore:end */
		moreInfoImage.classList.add("more-info-image--in");
		
		o.gc("darkener").classList.add("darkener--in2");
		ga("send", "event", "v3", "More info", gaLabel);
	}
	
	function moreInfoClose(gaLabel) {
		moreInfoPanel.classList.remove("more-info-panel--in");
		moreInfoImage.classList.remove("more-info-image--in");
		o.to(function() {
			moreInfoPanel.style.visibility = "hidden";
			moreInfoImage.style.visibility = "hidden";
		}, animDurationMoreInfo);
		
		o.gc("darkener").classList.remove("darkener--in2");
		ga("send", "event", "v3", "More info close", gaLabel);
	}
	
	function moreInfoCloseEventListener(gaLabel) {
		window.history.pushState(undefined, "Antonio Redondo", window.location.pathname);
		moreInfoClose(gaLabel);
	}
	
	o.gc("footer__more-info").addEventListener("click", function() {
		window.history.pushState({moreInfo: true}, "More Info", "#moreInfo");
		moreInfoEventListener("Footer button");
	});
	o.gc("footer-m__more-info").addEventListener("click", function() {
		window.history.pushState({moreInfo: true}, "More Info", "#moreInfo");
		moreInfoEventListener("Footer mobile button");
	});
	o.gc("more-info-image").addEventListener("click", function() { moreInfoCloseEventListener("Image click"); });
	o.gc("more-info-image__back-button-m").addEventListener("click", function() { moreInfoCloseEventListener("Mobile back button"); });
	
	
	
	// Adds functionality to "Show intro again" button
	function showIntroAgain(gaLabel) {
		o.removeCookie("firstTime");
		ga("send", "event", "v3", "Show intro again", gaLabel);
		location.reload();
	}
	o.gc("footer__show-intro-again").addEventListener("click", function() { showIntroAgain("Footer button"); });
	o.gc("footer-m__show-intro-again").addEventListener("click", function() { showIntroAgain("Footer mobile button"); });
	
	
	
	o.ae("keydown", function(e) {
		if (descriptionPanel.classList.contains("description-panel--in") && e.keyCode === 27)
			showOrhideDescriptionPanel();
		else if (moreInfoPanel.classList.contains("more-info-panel--in") && e.keyCode === 27)
			moreInfoCloseEventListener("Esc key");
	});
	
	o.ae("popstate", function(e) {
		if (e.state) {
			if (e.state.newProfile)
				showDescriptionPanel(e.state.newProfile);
			else if (e.state.moreInfo)
				moreInfoEventListener("Push state");
		} else {
			switch (previousState) {
				case "descriptionPanel": hideDescriptionPanel(); break;
				case "moreInfoPanel": moreInfoClose("Push state"); break;
			}
			previousState = undefined;
		}
	});
	
	
	
	// Shows or hides the scroll buttons on the description panel
	// http://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom/34550171#34550171
	var dPScroll = o.gc("description-panel__overflow-hide"),
		upButton = o.gc("description-panel__scroll--up"),
		downButton = o.gc("description-panel__scroll--down");
		
	dPScroll.addEventListener("scroll", function(e) {
		if (dPScroll.scrollHeight - dPScroll.scrollTop === dPScroll.clientHeight &&
				descriptionPanel.classList.contains("description-panel--in")) { // A scroll event is fired at the main screen
					
			downButton.classList.add("description-panel__scroll--down-hidden");
			
			var element = e.target.parentNode.parentNode;
			if (element.classList.contains("s1")) {
				ga("send", "event", "v3", "Description panel bottom reached", "Profile 1");
			} else if(element.classList.contains("s2")) {
				ga("send", "event", "v3", "Description panel bottom reached", "Profile 2");
			} else if(element.classList.contains("s3")) {
				ga("send", "event", "v3", "Description panel bottom reached", "Profile 3");
			}
			
		} else downButton.classList.remove("description-panel__scroll--down-hidden");
		
		if (dPScroll.scrollTop <= 5) {
			upButton.classList.add("description-panel__scroll--up-hidden");
		} else upButton.classList.remove("description-panel__scroll--up-hidden");
		
		// console.log(dPScroll.scrollHeight);
		// console.log(dPScroll.scrollTop);
		// console.log(dPScroll.clientHeight);
		// console.log(dPScroll.scrollHeight - dPScroll.scrollTop);
	});

	// https://coderwall.com/p/hujlhg/smooth-scrolling-without-jquery
	// http://jsfiddle.net/t1dv1rbo
	function scrollBy(element, target, duration) {
		target = Math.round(target);
		duration = Math.round(duration);
		
		if (duration < 0)
			return Promise.reject("bad duration");
			
		if (duration === 0) {
			element.scrollTop = target;
			return Promise.resolve();
		}
		
		var startTime = Date.now();
		var endTime = startTime + duration;
		
		var startTop = element.scrollTop;
		var distance = target - startTop;
		
		// based on http://en.wikipedia.org/wiki/Smoothstep
		var smoothStep = function(start, end, point) {
			if(point <= start) { return 0; }
			if(point >= end) { return 1; }
			var x = (point - start) / (end - start); // interpolation
			return x*x*(3 - 2*x);
		};
		
		return new Promise(function(resolve, reject) {
			// This is to keep track of where the element"s scrollTop is
			// supposed to be, based on what we"re doing
			var previousTop = element.scrollTop;
			
			// This is like a think function from a game loop
			var scrollFrame = function() {
				if(element.scrollTop != previousTop) {
					reject("interrupted");
					return;
				}
				
				// set the scrollTop for this frame
				var now = Date.now();
				var point = smoothStep(startTime, endTime, now);
				var frameTop = Math.round(startTop + (distance * point));
				element.scrollTop = frameTop;
				
				// check if we"re done!
				if(now >= endTime) {
					resolve();
					return;
				}
				
				// If we were supposed to scroll but didn"t, then we
				// probably hit the limit, so consider it done; not
				// interrupted.
				if(element.scrollTop === previousTop && element.scrollTop !== frameTop) {
					resolve();
					return;
				}
				previousTop = element.scrollTop;
				
				// schedule next frame for execution
				setTimeout(scrollFrame, 0);
			};
			
			// boostrap the animation process
			setTimeout(scrollFrame, 0);
		});
	}
	
	upButton.addEventListener("click", function() {
		scrollBy(dPScroll, dPScroll.scrollTop - 400, 300);
	});
	downButton.addEventListener("click", function() {
		scrollBy(dPScroll, dPScroll.scrollTop + 400, 300);
	});
	
	
	
	// If at loading time the URL contains a hash the state will be updated accordingly
	if (window.location.hash && o.getCookie("firstTime") !== null) {
		switch (window.location.hash) {
			case "#profile1":
				window.history.pushState({ newProfile: 1 }, "Profile 1", "#profile1");
				showDescriptionPanel(1);
				break;
			case "#profile2":
				window.history.pushState({ newProfile: 2 }, "Profile 2", "#profile2");
				showDescriptionPanel(2);
				break;
			case "#profile3":
				window.history.pushState({ newProfile: 3 }, "Profile 3", "#profile3");
				showDescriptionPanel(3);
				break;
			case "#moreInfo":
				window.history.pushState({ moreInfo: true }, "More Info", "#moreInfo");
				moreInfoEventListener("Push state");
				break;
			default: window.history.replaceState(undefined, "Antonio Redondo", window.location.pathname);
		}
	}
	
	if (window.location.hash && o.getCookie("firstTime") === null)
		window.history.replaceState(undefined, "Antonio Redondo", window.location.pathname);
}


WebFont.load({
	google: {
		families: ["Open Sans:300,800", "Open Sans Condensed:300", "Trirong:400"]
	},
	active: function() {
		if (o.getCookie("firstTime") === null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwidXRpbHMuanMiLCJpbml0SW50cm8uanMiLCJpbml0TWFpbi5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdlYiBGb250IExvYWRlciB2MS42LjI2IC0gKGMpIEFkb2JlIFN5c3RlbXMsIEdvb2dsZS4gTGljZW5zZTogQXBhY2hlIDIuMCAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGFhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHAoYSxiLGMpe3A9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9hYTpiYTtyZXR1cm4gcC5hcHBseShudWxsLGFyZ3VtZW50cyl9dmFyIHE9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfTtmdW5jdGlvbiBjYShhLGIpe3RoaXMuYT1hO3RoaXMubT1ifHxhO3RoaXMuYz10aGlzLm0uZG9jdW1lbnR9dmFyIGRhPSEhd2luZG93LkZvbnRGYWNlO2Z1bmN0aW9uIHQoYSxiLGMsZCl7Yj1hLmMuY3JlYXRlRWxlbWVudChiKTtpZihjKWZvcih2YXIgZSBpbiBjKWMuaGFzT3duUHJvcGVydHkoZSkmJihcInN0eWxlXCI9PWU/Yi5zdHlsZS5jc3NUZXh0PWNbZV06Yi5zZXRBdHRyaWJ1dGUoZSxjW2VdKSk7ZCYmYi5hcHBlbmRDaGlsZChhLmMuY3JlYXRlVGV4dE5vZGUoZCkpO3JldHVybiBifWZ1bmN0aW9uIHUoYSxiLGMpe2E9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGIpWzBdO2F8fChhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7YS5pbnNlcnRCZWZvcmUoYyxhLmxhc3RDaGlsZCl9ZnVuY3Rpb24gdihhKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX1cbmZ1bmN0aW9uIHcoYSxiLGMpe2I9Ynx8W107Yz1jfHxbXTtmb3IodmFyIGQ9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxlPTA7ZTxiLmxlbmd0aDtlKz0xKXtmb3IodmFyIGY9ITEsZz0wO2c8ZC5sZW5ndGg7Zys9MSlpZihiW2VdPT09ZFtnXSl7Zj0hMDticmVha31mfHxkLnB1c2goYltlXSl9Yj1bXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSs9MSl7Zj0hMTtmb3IoZz0wO2c8Yy5sZW5ndGg7Zys9MSlpZihkW2VdPT09Y1tnXSl7Zj0hMDticmVha31mfHxiLnB1c2goZFtlXSl9YS5jbGFzc05hbWU9Yi5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKX1mdW5jdGlvbiB5KGEsYil7Zm9yKHZhciBjPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylpZihjW2RdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24geihhKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEuZilyZXR1cm4gYS5mO3ZhciBiPWEubS5sb2NhdGlvbi5wcm90b2NvbDtcImFib3V0OlwiPT1iJiYoYj1hLmEubG9jYXRpb24ucHJvdG9jb2wpO3JldHVyblwiaHR0cHM6XCI9PWI/XCJodHRwczpcIjpcImh0dHA6XCJ9ZnVuY3Rpb24gZWEoYSl7cmV0dXJuIGEubS5sb2NhdGlvbi5ob3N0bmFtZXx8YS5hLmxvY2F0aW9uLmhvc3RuYW1lfVxuZnVuY3Rpb24gQShhLGIsYyl7ZnVuY3Rpb24gZCgpe2smJmUmJmYmJihrKGcpLGs9bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLGs9Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEIoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQygpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEQoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RShhKX19ZnVuY3Rpb24gRihhLGIpe2EuYz1iO0UoYSl9ZnVuY3Rpb24gRShhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRyhhKXt0aGlzLmE9YXx8XCItXCJ9Ry5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBIKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBJKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitKKGEuYyl9ZnVuY3Rpb24gSihhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBLKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEkoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5tLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEcoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7TChhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBNKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1MKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBMKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSyhjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE4oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBPKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gUChhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSihhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSShhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBRKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMubS5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGsoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoaywyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9aygpfSksZT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGQpe3NldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtlLGRdKS50aGVuKGZ1bmN0aW9uKCl7Yi5nKGIuYSl9LGZ1bmN0aW9uKCl7Yi5qKGIuYSl9KX07ZnVuY3Rpb24gUihhLGIsYyxkLGUsZixnKXt0aGlzLnY9YTt0aGlzLkI9Yjt0aGlzLmM9Yzt0aGlzLmE9ZDt0aGlzLnM9Z3x8XCJCRVNic3d5XCI7dGhpcy5mPXt9O3RoaXMudz1lfHwzRTM7dGhpcy51PWZ8fG51bGw7dGhpcy5vPXRoaXMuaj10aGlzLmg9dGhpcy5nPW51bGw7dGhpcy5nPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMuaD1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLmo9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5vPW5ldyBOKHRoaXMuYyx0aGlzLnMpO2E9bmV3IEgodGhpcy5hLmMrXCIsc2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmcuYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSCh0aGlzLmEuYytcIixzYW5zLXNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5oLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgoXCJzZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuai5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKFwic2Fucy1zZXJpZlwiLEsodGhpcy5hKSk7YT1cblAoYSk7dGhpcy5vLmEuc3R5bGUuY3NzVGV4dD1hO08odGhpcy5nKTtPKHRoaXMuaCk7Tyh0aGlzLmopO08odGhpcy5vKX12YXIgUz17RDpcInNlcmlmXCIsQzpcInNhbnMtc2VyaWZcIn0sVD1udWxsO2Z1bmN0aW9uIFUoKXtpZihudWxsPT09VCl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1Q9ISFhJiYoNTM2PnBhcnNlSW50KGFbMV0sMTApfHw1MzY9PT1wYXJzZUludChhWzFdLDEwKSYmMTE+PXBhcnNlSW50KGFbMl0sMTApKX1yZXR1cm4gVH1SLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3RoaXMuZi5zZXJpZj10aGlzLmouYS5vZmZzZXRXaWR0aDt0aGlzLmZbXCJzYW5zLXNlcmlmXCJdPXRoaXMuby5hLm9mZnNldFdpZHRoO3RoaXMuQT1xKCk7bGEodGhpcyl9O1xuZnVuY3Rpb24gbWEoYSxiLGMpe2Zvcih2YXIgZCBpbiBTKWlmKFMuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbU1tkXV0mJmM9PT1hLmZbU1tkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbGEoYSl7dmFyIGI9YS5nLmEub2Zmc2V0V2lkdGgsYz1hLmguYS5vZmZzZXRXaWR0aCxkOyhkPWI9PT1hLmYuc2VyaWYmJmM9PT1hLmZbXCJzYW5zLXNlcmlmXCJdKXx8KGQ9VSgpJiZtYShhLGIsYykpO2Q/cSgpLWEuQT49YS53P1UoKSYmbWEoYSxiLGMpJiYobnVsbD09PWEudXx8YS51Lmhhc093blByb3BlcnR5KGEuYS5jKSk/VihhLGEudik6VihhLGEuQik6bmEoYSk6VihhLGEudil9ZnVuY3Rpb24gbmEoYSl7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7bGEodGhpcyl9LGEpLDUwKX1mdW5jdGlvbiBWKGEsYil7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7dih0aGlzLmcuYSk7dih0aGlzLmguYSk7dih0aGlzLmouYSk7dih0aGlzLm8uYSk7Yih0aGlzLmEpfSxhKSwwKX07ZnVuY3Rpb24gVyhhLGIsYyl7dGhpcy5jPWE7dGhpcy5hPWI7dGhpcy5mPTA7dGhpcy5vPXRoaXMuaj0hMTt0aGlzLnM9Y312YXIgWD1udWxsO1cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2IuZyYmdyhiLmYsW2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpXSxbYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpLGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIildKTtMKGIsXCJmb250YWN0aXZlXCIsYSk7dGhpcy5vPSEwO29hKHRoaXMpfTtcblcucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2lmKGIuZyl7dmFyIGM9eShiLmYsYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIikpLGQ9W10sZT1bYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXTtjfHxkLnB1c2goYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKSk7dyhiLmYsZCxlKX1MKGIsXCJmb250aW5hY3RpdmVcIixhKTtvYSh0aGlzKX07ZnVuY3Rpb24gb2EoYSl7MD09LS1hLmYmJmEuaiYmKGEubz8oYT1hLmEsYS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpXSxbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKSxhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKV0pLEwoYSxcImFjdGl2ZVwiKSk6TShhLmEpKX07ZnVuY3Rpb24gcGEoYSl7dGhpcy5qPWE7dGhpcy5hPW5ldyBqYTt0aGlzLmg9MDt0aGlzLmY9dGhpcy5nPSEwfXBhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3RoaXMuYz1uZXcgY2EodGhpcy5qLGEuY29udGV4dHx8dGhpcy5qKTt0aGlzLmc9ITEhPT1hLmV2ZW50czt0aGlzLmY9ITEhPT1hLmNsYXNzZXM7cWEodGhpcyxuZXcgaGEodGhpcy5jLGEpLGEpfTtcbmZ1bmN0aW9uIHJhKGEsYixjLGQsZSl7dmFyIGY9MD09LS1hLmg7KGEuZnx8YS5nKSYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPWV8fG51bGwsaz1kfHxudWxsfHx7fTtpZigwPT09Yy5sZW5ndGgmJmYpTShiLmEpO2Vsc2V7Yi5mKz1jLmxlbmd0aDtmJiYoYi5qPWYpO3ZhciBoLG09W107Zm9yKGg9MDtoPGMubGVuZ3RoO2grKyl7dmFyIGw9Y1toXSxuPWtbbC5jXSxyPWIuYSx4PWw7ci5nJiZ3KHIuZixbci5hLmMoXCJ3ZlwiLHguYyxLKHgpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXSk7TChyLFwiZm9udGxvYWRpbmdcIix4KTtyPW51bGw7bnVsbD09PVgmJihYPXdpbmRvdy5Gb250RmFjZT8oeD0vR2Vja28uKkZpcmVmb3hcXC8oXFxkKykvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKT80MjxwYXJzZUludCh4WzFdLDEwKTohMDohMSk7WD9yPW5ldyBRKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxuKTpyPW5ldyBSKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxhLFxubik7bS5wdXNoKHIpfWZvcihoPTA7aDxtLmxlbmd0aDtoKyspbVtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcWEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtyYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPXooYS5jKTthPShhLmEuYXBpfHxcImZhc3QuZm9udHMubmV0L2pzYXBpXCIpLnJlcGxhY2UoL14uKmh0dHAocz8pOihcXC9cXC8pPy8sXCJcIik7cmV0dXJuIGQrXCIvL1wiK2ErXCIvXCIrYitcIi5qc1wiKyhjP1wiP3Y9XCIrYzpcIlwiKX1cbnNhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtpZihmW1wiX19tdGlfZm50THN0XCIrZF0pe3ZhciBjPWZbXCJfX210aV9mbnRMc3RcIitkXSgpLGU9W10saDtpZihjKWZvcih2YXIgbT0wO208Yy5sZW5ndGg7bSsrKXt2YXIgbD1jW21dLmZvbnRmYW1pbHk7dm9pZCAwIT1jW21dLmZvbnRTdHlsZSYmdm9pZCAwIT1jW21dLmZvbnRXZWlnaHQ/KGg9Y1ttXS5mb250U3R5bGUrY1ttXS5mb250V2VpZ2h0LGUucHVzaChuZXcgSChsLGgpKSk6ZS5wdXNoKG5ldyBIKGwpKX1hKGUpfWVsc2Ugc2V0VGltZW91dChmdW5jdGlvbigpe2IoKX0sNTApfXZhciBjPXRoaXMsZD1jLmEucHJvamVjdElkLGU9Yy5hLnZlcnNpb247aWYoZCl7dmFyIGY9Yy5jLm07Qih0aGlzLmMsdGEoYyxkLGUpLGZ1bmN0aW9uKGUpe2U/YShbXSk6KGZbXCJfX01vbm90eXBlQ29uZmlndXJhdGlvbl9fXCIrZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitcbmR9ZWxzZSBhKFtdKX07ZnVuY3Rpb24gdWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn11YS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5hLnVybHN8fFtdLGU9dGhpcy5hLmZhbWlsaWVzfHxbXSxmPXRoaXMuYS50ZXN0U3RyaW5nc3x8e30sZz1uZXcgQztiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKylBKHRoaXMuYyxkW2JdLEQoZykpO3ZhciBrPVtdO2I9MDtmb3IoYz1lLmxlbmd0aDtiPGM7YisrKWlmKGQ9ZVtiXS5zcGxpdChcIjpcIiksZFsxXSlmb3IodmFyIGg9ZFsxXS5zcGxpdChcIixcIiksbT0wO208aC5sZW5ndGg7bSs9MSlrLnB1c2gobmV3IEgoZFswXSxoW21dKSk7ZWxzZSBrLnB1c2gobmV3IEgoZFswXSkpO0YoZyxmdW5jdGlvbigpe2EoayxmKX0pfTtmdW5jdGlvbiB2YShhLGIsYyl7YT90aGlzLmM9YTp0aGlzLmM9Yit3YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1jfHxcIlwifXZhciB3YT1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24geGEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB5YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB6YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIEFhPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEJhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQ2E9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkRhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBFYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBrPWRbMV07Zz1bXTtpZihrKWZvcih2YXIgaz1rLnNwbGl0KFwiLFwiKSxoPWsubGVuZ3RoLG09MDttPGg7bSsrKXt2YXIgbDtsPWtbbV07aWYobC5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPURhLmV4ZWMobC50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWw9XCJcIjtlbHNle2w9blsyXTtsPW51bGw9PWx8fFwiXCI9PWw/XCJuXCI6Q2FbbF07bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUJhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7bD1bbCxuXS5qb2luKFwiXCIpfX1lbHNlIGw9XCJcIjtsJiZnLnB1c2gobCl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPUFhW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD1BYVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEgoZSxmW2RdKSl9fTtmdW5jdGlvbiBGYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBHYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RmEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEMsYz10aGlzLmMsZD1uZXcgdmEodGhpcy5hLmFwaSx6KGMpLHRoaXMuYS50ZXh0KSxlPXRoaXMuYS5mYW1pbGllczt4YShkLGUpO3ZhciBmPW5ldyB6YShlKTtFYShmKTtBKGMseWEoZCksRChiKSk7RihiLGZ1bmN0aW9uKCl7YShmLmEsZi5jLEdhKX0pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifUhhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5pZCxjPXRoaXMuYy5tO2I/Qih0aGlzLmMsKHRoaXMuYS5hcGl8fFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXRcIikrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2lmKGIpYShbXSk7ZWxzZSBpZihjLlR5cGVraXQmJmMuVHlwZWtpdC5jb25maWcmJmMuVHlwZWtpdC5jb25maWcuZm4pe2I9Yy5UeXBla2l0LmNvbmZpZy5mbjtmb3IodmFyIGU9W10sZj0wO2Y8Yi5sZW5ndGg7Zis9Milmb3IodmFyIGc9YltmXSxrPWJbZisxXSxoPTA7aDxrLmxlbmd0aDtoKyspZS5wdXNoKG5ldyBIKGcsa1toXSkpO3RyeXtjLlR5cGVraXQubG9hZCh7ZXZlbnRzOiExLGNsYXNzZXM6ITEsYXN5bmM6ITB9KX1jYXRjaChtKXt9YShlKX19LDJFMyk6YShbXSl9O2Z1bmN0aW9uIElhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPVtdfUlhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZi5pZCxjPXRoaXMuYy5tLGQ9dGhpcztiPyhjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX198fChjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX189e30pLGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX1tiXT1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZz0wLGs9Yy5mb250cy5sZW5ndGg7ZzxrOysrZyl7dmFyIGg9Yy5mb250c1tnXTtkLmEucHVzaChuZXcgSChoLm5hbWUsZ2EoXCJmb250LXdlaWdodDpcIitoLndlaWdodCtcIjtmb250LXN0eWxlOlwiK2guc3R5bGUpKSl9YShkLmEpfSxCKHRoaXMuYyx6KHRoaXMuYykrKHRoaXMuZi5hcGl8fFwiLy9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBwYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgdWEoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IElhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBzYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBIYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEZhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20va2FuZHV2aXNsYS9wbHlncm5kXHJcbnZhciBQbHlncm5kID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7ICAgICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byByb290IG9iamVjdDtcclxuXHR0aGlzLnZpZXdzID0gW107ICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSB3aXRoIHZpZXdzXHJcblx0dGhpcy50b3RhbFZpZXdzID0gW107ICAgICAgICAgICAgICAgLy8gQ291bnRlciB0byBrZWVwIHRyYWNrIGlmIGFsbCB2aWV3cyBhcmUgbG9hZGVkLlxyXG5cdHRoaXMuY3VycmVudFZpZXcgPSAwOyAgICAgICAgICAgICAgIC8vIEN1cnJlbnRWaWV3XHJcblx0dGhpcy5tb3VzZVBvc2l0aW9uID0ge3g6IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLzEwMCoyMCksIHk6IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodC8xMDAqMjApfTsgIC8vIE1vdXNlIHBvc2l0aW9uIChjYW4gYmUgdXNlZCBieSB2aWV3cylcclxuXHR0aGlzLmZyYW1lUmF0ZSA9IDYwO1xyXG5cdHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0dGhpcy5jbGljayA9IGZhbHNlO1xyXG5cclxuXHQvLyBDcmVhdGUgY2FudmFzIG9iamVjdDpcclxuXHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJnXCIpWzBdO1xyXG4vL1x0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG5cdC8vIENvbnRleHQgT2JqZWN0OlxyXG5cdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHQvLyBSZXNpemUgZnVuY3Rpb246XHJcblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbigpe1xyXG5cdFx0X3RoaXMuY3R4LndpZHRoICA9IF90aGlzLmNhbnZhcy53aWR0aCAgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cdFx0X3RoaXMuY3R4LmhlaWdodCA9IF90aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuXHR9O1xyXG5cclxuXHQvLyBBbmQgYmluZCBpdCB0byB0aGUgd2luZG93OlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplKTtcclxuXHR0aGlzLnJlc2l6ZSgpO1xyXG5cclxuXHQvLyBNb3VzZSBwb3NpdGlvbiAoY2FuIGJlIHVzZWQgYnkgdmlld3MpOlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi54ID0gZS5jbGllbnRYO1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS5jbGllbnRZO1xyXG5cdH0pO1xyXG5cclxuXHQvKlx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZVBvc2l0aW9uLnggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuXHQgX3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG5cdCBfdGhpcy5jbGljayA9IHRydWU7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0IF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuXHQgX3RoaXMuY2xpY2sgPSB0cnVlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHQgX3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHQgfSk7Ki9cclxuXHJcblx0Ly8gQWRkIGV4dHJhIGZ1bmN0aW9ucyB0byB0aGUgY29udGV4dCBvYmplY3Q6XHJcblx0dGhpcy5jdHgubGluZVRocm91Z2ggPSBmdW5jdGlvbihwb2ludHMpXHJcblx0e1xyXG5cdFx0Zm9yKHZhciBpIGluIHBvaW50cykge1xyXG5cdFx0XHR0aGlzLmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmN1cnZlVGhyb3VnaCA9IGZ1bmN0aW9uKHBvaW50cylcclxuXHR7XHJcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpICsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgeGMgPSAocG9pbnRzW2ldLnggKyBwb2ludHNbaSArIDFdLngpIC8gMjtcclxuXHRcdFx0dmFyIHljID0gKHBvaW50c1tpXS55ICsgcG9pbnRzW2kgKyAxXS55KSAvIDI7XHJcblx0XHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHhjLCB5Yyk7XHJcblx0XHR9XHJcblx0XHQvLyBjdXJ2ZSB0aHJvdWdoIHRoZSBsYXN0IHR3byBwb2ludHNcclxuXHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHBvaW50c1tpKzFdLngscG9pbnRzW2krMV0ueSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlyZWN0aW9uID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlzdGFuY2UgPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MilcclxuXHR7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KFxyXG5cdFx0XHRNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRyYXdDaXJjbGUgPSBmdW5jdGlvbih4LCB5LCByYWRpdXMpXHJcblx0e1xyXG5cdFx0dGhpcy5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG5cdH07XHJcblxyXG5cdC8qXHRcdFx0XHQvLyBQYWdlciBmdW5jdGlvbjpcclxuXHQgdGhpcy5wYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcblx0IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wYWdlcik7XHJcblxyXG5cdCB0aGlzLmJ1aWxkUGFnZXIgPSBmdW5jdGlvbigpXHJcblx0IHtcclxuXHQgZm9yKHZhciBpIGluIF90aGlzLnZpZXdzKVxyXG5cdCB7XHJcblx0IC8vIENyZWF0ZSBhbiBhbmNob3IsIHdoaWNoIGxvYWRzIHRoZSBzcGVjaWZpYyB2aWV3OlxyXG5cdCB2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0IGFuY2hvci5pbm5lclRleHQgPSBwYXJzZUludChpKSArIDE7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIiwgaSk7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBfdGhpcy52aWV3c1tpXS5uYW1lKTtcclxuXHQgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5wbGF5Vmlldyh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKSk7XHJcblx0IH0pO1xyXG5cdCBfdGhpcy5wYWdlci5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG5cdCB9XHJcblx0IH07Ki9cclxuXHJcblx0Ly8gVmlld3MgZnVuY3Rpb25zOlxyXG5cdHRoaXMuYWRkVmlldyA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHRfdGhpcy50b3RhbFZpZXdzLnB1c2goe1xyXG5cdFx0XHRvcmRlcjogX3RoaXMudG90YWxWaWV3cy5sZW5ndGgsXHJcblx0XHRcdHNsdWc6IFwiZG90cy0yXCIsXHJcblx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly8gQ2hlY2sgaWYgYWxsIGlzIGxvYWRlZCBhbmQgc3RhcnQgaWYgc286XHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdHZhciBpbnRlcnZhbFRpbWVvdXQgPSAwO1xyXG5cdFx0dmFyIGludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRpbnRlcnZhbFRpbWVvdXQrKztcclxuXHRcdFx0aWYoaW50ZXJ2YWxUaW1lb3V0ID09IDMwMCkge1xyXG5cdFx0XHRcdC8vIHdhaXRlZCBmb3IgMzAgc2Vjb25kcy4gU29tZXRoaW5nIGlzIGNsZWFybHkgd3JvbmcuXHJcblx0XHRcdFx0YWxlcnQoXCJUaW1lIG91dCEgSXMgeW91ciBJbnRlcm5ldCBjb25uZWN0aW9uIHRow6F0IHNsb3c/IT9cIik7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDaGVjayBpZiBhbGwgdmlld3MgYXJlIGxvYWRlZDpcclxuXHRcdFx0dmFyIGFsbExvYWRlZCA9IHRydWU7XHJcblx0XHRcdGZvcih2YXIgaSBpbiBfdGhpcy50b3RhbFZpZXdzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIV90aGlzLnRvdGFsVmlld3NbaV0ubG9hZGVkKSB7IGFsbExvYWRlZCA9IGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoYWxsTG9hZGVkKSB7XHJcblx0XHRcdFx0Ly8gQWxsIHZpZXdzIGFyZSBsb2FkZWQuXHJcblx0XHRcdFx0dmFyIG5ld1ZpZXdzID0gW107XHJcblx0XHRcdFx0Zm9yKHZhciBpMiBpbiBfdGhpcy50b3RhbFZpZXdzKSB7XHJcblx0XHRcdFx0XHR2YXIgY3VycmVudFNsdWcgPSBfdGhpcy50b3RhbFZpZXdzW2kyXS5zbHVnO1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBqIGluIF90aGlzLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdGlmKF90aGlzLnZpZXdzW2pdLnNsdWcgPT0gY3VycmVudFNsdWcpIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdWaWV3cy5wdXNoKF90aGlzLnZpZXdzW2pdKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdGhpcy52aWV3cyA9IG5ld1ZpZXdzO1xyXG5cclxuXHRcdFx0XHQvLyBDbGVhciBpbnRlcnZhbDpcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG5cclxuXHRcdFx0XHQvLyBCdWlsZCB0aGUgcGFnZXI6XHJcbi8vXHRcdFx0XHRcdFx0XHRfdGhpcy5idWlsZFBhZ2VyKCk7XHJcblxyXG5cdFx0XHRcdC8vIFN0YXJ0IHRoZSBhcHA6XHJcblx0XHRcdFx0X3RoaXMuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMjUwKTtcclxuXHR9O1xyXG5cclxuXHQvLyBTdGFydCBmdW5jdGlvbjpcclxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdC8vIEdldCB0aGUgcmlnaHQgdmlldzpcclxuXHRcdC8qXHRcdFx0XHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiXCIpIHtcclxuXHRcdCB2YXIgY3VycmVudEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuXHRcdCBmb3IodmFyIGkgaW4gX3RoaXMudmlld3MpIHtcclxuXHRcdCBpZihfdGhpcy52aWV3c1tpXS5zbHVnID09IGN1cnJlbnRIYXNoKSB7XHJcblx0XHQgX3RoaXMuY3VycmVudFZpZXcgPSBpO1xyXG5cdFx0IH1cclxuXHRcdCB9XHJcblx0XHQgfSBlbHNlIHsqL1xyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSBfdGhpcy52aWV3cy5sZW5ndGggLSAxO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHRfdGhpcy5wbGF5VmlldyhfdGhpcy5jdXJyZW50Vmlldyk7XHJcblx0XHQvLyBTZXR1cCB0aGUgbG9vcDpcclxuXHRcdC8vIHNldEludGVydmFsKGZ1bmN0aW9uIGFOYW1lKCl7XHJcblx0XHQoZnVuY3Rpb24gYU5hbWUoKXtcclxuXHRcdFx0Ly8gUGFzcyBvbiBzb21lIHZhcmlhYmxlczpcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMubW91c2VQb3NpdGlvbiA9IF90aGlzLm1vdXNlUG9zaXRpb247XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLm1vdXNlRG93biA9IF90aGlzLm1vdXNlRG93bjtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMuY2xpY2sgPSBfdGhpcy5jbGljaztcclxuXHRcdFx0X3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHRcdFx0Ly8gTWFrZSB0aGF0IHN0ZXA6XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zdGVwRnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhTmFtZSk7XHJcblx0XHQvLyB9LCAxMDAwIC8gX3RoaXMuZnJhbWVSYXRlKTsgLy8gZGVmYXVsdCA9IDYwIGZwcy5cclxuXHRcdFx0fSkoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnBsYXlWaWV3ID0gZnVuY3Rpb24odmlld05yKVxyXG5cdHtcclxuXHRcdC8vIFVuLWluaXRpYWxpemUgdGhlIGN1cnJlbnQgdmlldzpcclxuXHRcdHRyeSB7XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS51bkluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHRcdH0gY2F0Y2goZSkge31cclxuXHRcdC8vIEdvIGZ1cnRoZXIgd2l0aCB0aGUgcmVxdWVzdGVkIHZpZXcgZnJvbSBoZXJlOlxyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSB2aWV3TnI7XHJcblx0XHQvLyBSZW1vdmUgdGhlIGNsYXNzIG9mIHRoZSBhY3RpdmUgdmlldzpcclxuLy9cdFx0XHRcdFx0aWYodGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYS5hY3RpdmVcIikpIHtcclxuLy9cdFx0XHRcdFx0XHR0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhLmFjdGl2ZVwiKS5jbGFzc05hbWUgPSBcIlwiO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHQvLyBBbmQgYWRkIGl0IHRvIHRoZSBuZXcgdmlldyFcclxuLy9cdFx0XHRcdFx0dGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYVtkYXRhLXZpZXc9XCJcIiArIF90aGlzLmN1cnJlbnRWaWV3ICsgXCJcIl1cIikuY2xhc3NOYW1lID0gXCJhY3RpdmVcIlxyXG5cdFx0Ly8gU2V0IHRoZSBoYXNoOlxyXG4vL1x0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zbHVnO1xyXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgY3VycmVudCB2aWV3OlxyXG5cdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLmluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHR9O1xyXG5cclxufTtcclxuXHJcbnZhciBTdGVwR2VuZXJhdG9yID0gZnVuY3Rpb24oY29tcGxleGl0eSwgbWluSW5jLCBtYXhJbmMsIG1pbk11bCwgbWF4TXVsKVxyXG57XHJcblx0dGhpcy5zdGVwcyAgICAgICA9IFtdO1xyXG5cdHRoaXMuaW5jcyAgICAgICAgPSBbXTtcclxuXHR0aGlzLm11bHRpcGxpZXJzID0gW107XHJcblx0dGhpcy5jb21wbGV4aXR5ICA9IGNvbXBsZXhpdHk7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdC8vIERlZmF1bHRzOlxyXG5cdGlmKG1pbkluYyA9PT0gbnVsbCkgeyBtaW5JbmMgPSAwOyB9XHJcblx0aWYobWF4SW5jID09PSBudWxsKSB7IG1heEluYyA9IDAuMTsgfVxyXG5cdGlmKG1pbk11bCA9PT0gbnVsbCkgeyBtaW5NdWwgPSAwLjc7IH1cclxuXHRpZihtYXhNdWwgPT09IG51bGwpIHsgbWF4TXVsID0gMS4zOyB9XHJcblxyXG5cdC8vIEluaXRpYWxpc2U6XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdHtcclxuXHRcdHRoaXMuc3RlcHMucHVzaChNYXRoLnJhbmRvbSgpICogTWF0aC5QSSk7XHJcblx0XHR0aGlzLmluY3MucHVzaChtaW5JbmMgKyBNYXRoLnJhbmRvbSgpICogKG1heEluYyAtIG1pbkluYykpO1xyXG5cdFx0dGhpcy5tdWx0aXBsaWVycy5wdXNoKG1pbk11bCArIE1hdGgucmFuZG9tKCkgKiAobWF4TXVsIC0gbWluTXVsKSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnN0ZXAgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gSW5jcmVhc2UgdGhlIGNvdW50ZXJzOlxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IF90aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0X3RoaXMuc3RlcHNbaV0gKz0gX3RoaXMuaW5jc1tpXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBTdGVwIFhZLWZ1bmN0aW9uOlxyXG5cdHRoaXMuZ2V0WFkgPSBmdW5jdGlvbihvZmZzZXQsIHcsIGgpXHJcblx0e1xyXG5cdFx0aWYob2Zmc2V0ID09PSBudWxsKSB7IG9mZnNldCA9IDA7IH1cclxuXHJcblx0XHR2YXIgeFZhbHVlID0gMDtcclxuXHRcdHZhciB5VmFsdWUgPSAwO1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSBYWTpcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHhWYWx1ZSArPSBNYXRoLnNpbihfdGhpcy5zdGVwc1tpXSArIChfdGhpcy5pbmNzW2ldICogb2Zmc2V0KSkgKiB3O1xyXG5cdFx0XHR5VmFsdWUgKz0gTWF0aC5jb3MoKF90aGlzLnN0ZXBzW2ldICsgKF90aGlzLmluY3NbaV0gKiBvZmZzZXQpKSAqIF90aGlzLm11bHRpcGxpZXJzW2ldKSAqIGg7XHJcblx0XHR9XHJcblx0XHQvLyBSZXR1cm4gaXQ6XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiB4VmFsdWUsXHJcblx0XHRcdHk6IHlWYWx1ZVxyXG5cdFx0fTtcclxuXHR9O1xyXG59O1xyXG5cblxuXG5cblxyXG52YXIgcGcgPSBuZXcgUGx5Z3JuZCgpO1xyXG5wZy52aWV3cy5wdXNoKHtcclxuXHRuYW1lICAgICAgICAgICAgOiBcIkRvdHMgMlwiLFxyXG5cdHNsdWcgICAgICAgICAgICA6IFwiZG90cy0yXCIsXHJcblx0Ly8gVmFyaWFibGVzIHVzZWQgYnkgdGhpcyB2aWV3OlxyXG5cdHZhcnMgICAgICAgICAgICA6IHtcclxuXHRcdHN0ZXBzOiBudWxsLFxyXG5cdFx0Y3VycmVudFg6IDAsXHJcblx0XHRjdXJyZW50WTogMFxyXG5cdH0sXHJcblx0Ly8gSW5pdGlhbGlzYXRpb246XHJcblx0aW5pdEZ1bmN0aW9uICAgIDogZnVuY3Rpb24oY3R4LCB2YXJzKXtcclxuXHRcdHZhcnMuc3RlcHMgPSBuZXcgU3RlcEdlbmVyYXRvcig0LCAwLCAwLjAyLCAwLjcsIDEuMyk7XHJcblx0XHR2YXJzLnByZXZEaXN0YW5jZXMgPSB7fTtcclxuXHR9LFxyXG5cdC8vIFVuLWluaXRpYWxpc2F0aW9uOlxyXG5cdHVuSW5pdEZ1bmN0aW9uICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7fSxcclxuXHQvLyBTdGVwcGluZyBmdW5jdGlvbjpcclxuXHRzdGVwRnVuY3Rpb24gICAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe1xyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjdHgud2lkdGgsIGN0eC5oZWlnaHQpO1xyXG5cdFx0dmFyIHN0ZXBTaXplID0gY3R4LndpZHRoIC8gMzA7XHJcblx0XHR2YXIgc3RlcHNYID0gY3R4LndpZHRoIC8gc3RlcFNpemU7XHJcblx0XHR2YXIgc3RlcHNZID0gY3R4LmhlaWdodCAvIHN0ZXBTaXplO1xyXG5cclxuLy9cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwZGRmZlwiO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzhjMjQzZVwiO1xyXG5cclxuXHRcdC8vIEFkZHMgYSBzaW1wbGUgZWFzZSB0byB0aGUgbW91c2U6XHJcblx0XHR2YXJzLmN1cnJlbnRYICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueCAtIHZhcnMuY3VycmVudFgpIC8gMjA7XHJcblx0XHR2YXJzLmN1cnJlbnRZICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueSAtIHZhcnMuY3VycmVudFkpIC8gMjA7XHJcblxyXG5cdFx0dmFycy5zdGVwcy5zdGVwKCk7XHJcblxyXG5cdFx0dmFyIHNpemUgPSBjdHgud2lkdGgvMS41O1xyXG5cclxuXHRcdGZvcih2YXIgeSA9IDA7IHkgPCBzdGVwc1k7IHkgKyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCBzdGVwc1g7IHggKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY1ggPSAoeSUyICogc3RlcFNpemUgLyAyKSArICh4ICogc3RlcFNpemUpO1xyXG5cdFx0XHRcdHZhciBjWSA9IHkgKiBzdGVwU2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gb3V0c2lkZTpcclxuXHRcdFx0XHR2YXIgcmFkID0gTWF0aC5hdGFuMihjWCAtIHZhcnMuY3VycmVudFgsIGNZIC0gdmFycy5jdXJyZW50WSk7XHJcblxyXG5cdFx0XHRcdC8vIGRpc3RhbmNlOlxyXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChcclxuXHRcdFx0XHRcdE1hdGgucG93KHZhcnMuY3VycmVudFggLSBjWCwgMikgKyBNYXRoLnBvdyh2YXJzLmN1cnJlbnRZIC0gY1ksIDIpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dmFyIG9mZnNldCA9IE1hdGgubWF4KDAsIChzaXplLzIpIC0gZGlzdGFuY2UpO1xyXG5cdFx0XHRcdHZhciBwID0gb2Zmc2V0L3NpemU7XHJcblx0XHRcdFx0cCo9MS1wO1xyXG5cdFx0XHRcdG9mZnNldCA9IChzaXplLzIpICogcDtcclxuXHJcblx0XHRcdFx0dmFyIHN0ZXBYWSA9IHZhcnMuc3RlcHMuZ2V0WFkoKHkqc3RlcHNYKSsoeCozKSwgb2Zmc2V0LCBvZmZzZXQpO1xyXG5cclxuXHRcdFx0XHR2YXIgZFggPSBzdGVwWFkueCArIGNYICsgTWF0aC5zaW4ocmFkKSAqIChvZmZzZXQpO1xyXG5cdFx0XHRcdHZhciBkWSA9IHN0ZXBYWS55ICsgY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblx0XHRcdFx0Ly8gdmFyIGRYID0gY1g7XHJcblx0XHRcdFx0Ly8gdmFyIGRZID0gY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguZHJhd0NpcmNsZShkWCwgZFksIGRpc3RhbmNlLzgwKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbnBnLmFkZFZpZXcoKTtcclxuLy8gcGcubG9hZCgpO1xyXG4iLCIvLyAyMDE2IChDKSBBbnRvbmlvIFJlZG9uZG8gLyBhbnRvbmlvcmVkb25kby5jb21cclxuLy8gXCJvXCIgaXMgYSBtaWNyby1saWJyYXJ5IHdoaWNoIGNvbnRhaW5zIGJhc2ljIERPTSBmdW5jdGlvbnMgd2l0aCBhIHNvcnRlciBuYW1lLlxyXG4vLyBJdCBhbHNvIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGggY29va2llcywgYW5kIHNvbWUgb3RoZXIgbWV0aG9kcy5cclxuXHJcbihmdW5jdGlvbihvKSB7XHJcblxyXG5cdG8uZ2MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XHJcblx0fTtcclxuXHJcblx0by5nY2EgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpO1xyXG5cdH07XHJcblxyXG5cdG8ucXMgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG5cdH07XHJcblxyXG5cdG8ucXNhID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcblx0fTtcclxuXHJcblx0by5hZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcblx0fTtcclxuXHJcblx0by50byA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBtaW4gPSAtNTAsIG1heCA9IDUwO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRvLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIFwidHJhbnNmb3JtXCI7XHJcblx0XHRlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcIndlYmtpdFRyYW5zZm9ybVwiO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiLFxyXG5cdFx0XHRcdGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuXHRcdGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdHZhciBjID0gY2FbaV07XHJcblx0XHRcdHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIilcclxuXHRcdFx0XHRjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XHJcblx0XHRcdGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9O1xyXG5cclxuXHRvLnNldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcblx0XHR2YXIgZXhwaXJlcztcclxuXHRcdGlmIChkYXlzKSB7XHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG5cdFx0XHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0XHR9IGVsc2UgZXhwaXJlcyA9IFwiXCI7XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0fTtcclxuXHJcblx0by5yZW1vdmVDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR0aGlzLnNldENvb2tpZShuYW1lLFwiXCIsLTEpO1xyXG5cdH07XHJcblx0XHJcbn0od2luZG93Lm8gPSB3aW5kb3cubyB8fCB7fSkpO1xyXG4iLCJcclxuZnVuY3Rpb24gc2hvd0Nvb2tpZU1lc3NhZ2UoKSB7XHJcblx0by5nYyhcImNvb2tpZXNcIikuY2xhc3NMaXN0LmFkZChcImNvb2tpZXMtLWluXCIpO1xyXG5cdG8uZ2MoXCJjb29raWVzX19jbG9zZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0by5nYyhcImNvb2tpZXNcIikuY2xhc3NMaXN0LnJlbW92ZShcImNvb2tpZXMtLWluXCIpO1xyXG5cdFx0by5zZXRDb29raWUoXCJjb29raWVNZXNzYWdlXCIsIGZhbHNlLCAzNjUpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvb2tpZXMgY2xvc2VcIik7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUludHJvKHR5cGUpIHtcclxuXHR2YXIgbW9kaWZpZXIgPSBcIm91dFwiLFxyXG5cdFx0dGltZSA9IDQwMDA7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIDI6IG1vZGlmaWVyID0gXCJvdXQyXCI7IHRpbWUgPSAxMDAwO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoby5nZXRDb29raWUoXCJjb29raWVNZXNzYWdlXCIpID09PSBudWxsKVxyXG5cdFx0by50byhzaG93Q29va2llTWVzc2FnZSwgdGltZSk7XHJcblx0XHJcblx0dmFyIGludHJvID0gby5nYyhcImludHJvXCIpLFxyXG5cdFx0aW50cm9EYXJrZW5lciA9IG8uZ2MoXCJpbnRyby1kYXJrZW5lclwiKTtcclxuXHRpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm8tLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImludHJvXCIpKVxyXG5cdFx0XHRpbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fSk7XHJcblx0aW50cm9EYXJrZW5lci5jbGFzc0xpc3QuYWRkKFwiaW50cm8tZGFya2VuZXItLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvRGFya2VuZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW50cm8tZGFya2VuZXJcIikpXHJcblx0XHRcdGludHJvRGFya2VuZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH0pO1xyXG5cdFxyXG5cdG8uZ2MoXCJhcl9fbG9nby1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImFyX19sb2dvLWNvbnRhaW5lci0taW5cIik7XHJcblx0by5nYyhcImFyX190ZXh0XCIpLmNsYXNzTGlzdC5hZGQoXCJhcl9fdGV4dC0taW5cIik7XHJcblx0by5nYyhcIm1haW4tYmdcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tYmctLWluXCIpO1xyXG5cdG8uZ2MoXCJjaG9vc2UtcHJvZmlsZS10ZXh0XCIpLmNsYXNzTGlzdC5hZGQoXCJjaG9vc2UtcHJvZmlsZS10ZXh0LS1pblwiKTtcclxuXHRcclxuXHRvLmdjKFwicHJvZmlsZS0tMVwiKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tMWluXCIpO1xyXG5cdG8uZ2MoXCJwcm9maWxlLS0yXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS0yaW5cIik7XHJcblx0by5nYyhcInByb2ZpbGUtLTNcIikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLTNpblwiKTtcclxuXHRvLnRvKGZ1bmN0aW9uKCkge1xyXG5cdFx0by5xc2EoXCIucHJvZmlsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHsgaXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tbm8tZGVsYXlcIik7IH0gKTtcclxuXHR9LCAyMDApO1xyXG5cdFxyXG5cdG8uZ2MoXCJmb290ZXJcIikuY2xhc3NMaXN0LmFkZChcImZvb3Rlci0taW5cIik7XHJcblx0by50byhmdW5jdGlvbigpIHsgby5nYyhcImZvb3RlclwiKS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLS1uby1kZWxheVwiKTsgfSwgMjAwMCk7XHJcblx0XHJcblx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCA+PSA4MTApIHtcclxuXHRcdHBnLmxvYWQoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdEludHJvKCkge1xyXG5cdG8uZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24tLWJvdHRvbVwiKTtcclxuXHRvLmdjKFwic2Nyb2xsLWRvd25fX2lubmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bl9faW5uZXItLW91dFwiKTtcclxuXHRcclxuXHR2YXIgdmlld1BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcclxuXHRcdHdoZWVsTGV2ZWwgPSAwLFxyXG5cdFx0d2hlZWxMZXZlbEZvcm1lciA9IDAsXHJcblx0XHRwaHJhc2VzID0gby5nY2EoXCJwaHJhc2VzX19waHJhc2VcIiksXHJcblx0XHRidWJibGVzID0gby5nY2EoXCJidWJibGVzX19sYXllclwiKSxcclxuXHRcdHZpc2libGVQaHJhc2VzID0gW10sXHJcblx0XHR2aXNpYmxlQnViYmxlcyA9IFtdLFxyXG5cdFx0eVN0YXJ0LFxyXG5cdFx0eUVuZCxcclxuXHRcdHRyYW5zZm9ybSA9IG8uY2hlY2tUcmFuc2Zvcm1zU3VwcG9ydGVkKCksXHJcblx0XHRtb3VzZU1vdmVMaXN0ZW5lcixcclxuXHRcdG1vdXNlV2hlZWxMaXN0ZW5lcixcclxuXHRcdHRvdWNoU3RhcnRMaXN0ZW5lcixcclxuXHRcdHRvdWNoRW5kTGlzdGVuZXIsXHJcblx0XHRrZXlEb3duTGlzdGVuZXIsXHJcblx0XHR0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCxcclxuXHRcdHRvSGludHM7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0Ly8gT24gZGVza3RvcCB2ZXJzaW9uIGl0IG1vdmVzIHRoZSBwaHJhc2VzIGFuZCBidWJibGVzIG9uIHRoZSAzZCBzcGFjZSBkZXBlbmRpbmcgb24gdGhlIG1vdXNlIHBvc2l0aW9uXHJcblx0aWYgKHZpZXdQb3J0V2lkdGggPj0gODEwKVxyXG5cdFx0by5hZShcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhWjogXCIgKyBlLmRlbHRhWik7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJkZWx0YU1vZGU6IFwiICsgZS5kZWx0YU1vZGUpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiY2xpZW50WDogXCIgKyBlLmNsaWVudFgpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiY2xpZW50WTogXCIgKyBlLmNsaWVudFkpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicm90YXRlWChcIiArIC0oMC4wMiplLmNsaWVudFktMTApICtcImRlZylcIik7XHJcblx0XHRcdHZhciBwaHJhc2VzID0gby5nYyhcInBocmFzZXNcIiksIFxyXG5cdFx0XHRcdGJ1YmJsZXMgPSBvLmdjKFwiYnViYmxlc1wiKTtcclxuXHRcdFx0cGhyYXNlcy5zdHlsZVt0cmFuc2Zvcm1dID0gXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgKyBcImRlZykgcm90YXRlWShcIiArICgwLjAyKmUuY2xpZW50WC0yNSkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyAoLTAuMDUqZS5jbGllbnRYKzEwMCkgKyBcInB4LCAwLCAwKVwiO1xyXG5cdFx0XHRidWJibGVzLnN0eWxlW3RyYW5zZm9ybV0gPSBwaHJhc2VzLnN0eWxlW3RyYW5zZm9ybV07XHJcblx0XHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBTaG93cyBhIHRleHQgaGludCBpZiB0aGUgaW50cm8gZG9lc24ndCBzdGFydCBzY3JvbGxpbmcgZG93biBpbiAzIHNlY29uZHNcclxuXHR0b0hpbnRzID0gby50byhmdW5jdGlvbigpIHtcclxuXHRcdGlmICh3aGVlbExldmVsID09PSAwKVxyXG5cdFx0XHRpZiAodmlld1BvcnRXaWR0aCA+PSA4MTApXHJcblx0XHRcdFx0by5nYyhcInNjcm9sbC1kb3duLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLWhpbnQtLWluXCIpO1xyXG5cdFx0XHRlbHNlIG8uZ2MoXCJzd2lwZS11cC1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzd2lwZS11cC1oaW50LS1pblwiKTtcclxuXHR9LCAzMDAwKTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBDb3VudHMgd2hlZWwgc2Nyb2xsIG1vdmVtZW50cyBhbmQgbW92ZXMgcGhyYXNlcyBhbmQgYnViYmxlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVQaHJhc2VzKGxldmVsKSB7XHJcblx0XHRpZiAoKGxldmVsPjAgJiYgd2hlZWxMZXZlbDw1KSB8fCAobGV2ZWw8MCAmJiB3aGVlbExldmVsPjApKVxyXG5cdFx0XHR3aGVlbExldmVsICs9IGxldmVsO1xyXG5cdFx0ZWxzZSByZXR1cm47XHJcblx0XHRcclxuXHRcdGlmICh3aGVlbExldmVsID09PSAxKSB7XHJcblx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93bi1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi1oaW50LS1vdXRcIik7XHJcblx0XHRcdG8uZ2MoXCJzd2lwZS11cC1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzd2lwZS11cC1oaW50LS1vdXRcIik7XHJcblx0XHR9IFxyXG5cdFx0XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gNSkge1xyXG5cdFx0XHRvLnRvKGZ1bmN0aW9uKCkgeyBvLmdjKFwiZW50ZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJlbnRlci1idXR0b24tLWluXCIpOyB9LCAxMDAwKTtcclxuXHRcdFx0by5nYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi0tb3V0XCIpO1xyXG5cdFx0XHRvLmdjKFwic2tpcC1pbnRyb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2tpcC1pbnRyby0taW5cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvLmdjKFwiZW50ZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJlbnRlci1idXR0b24tLWluXCIpO1xyXG5cdFx0XHRvLmdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbC1kb3duLS1vdXRcIik7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID4gMClcclxuXHRcdFx0XHRvLmdjKFwic2tpcC1pbnRyb1wiKS5jbGFzc0xpc3QuYWRkKFwic2tpcC1pbnRyby0taW5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPiB3aGVlbExldmVsRm9ybWVyKSB7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLnNwbGljZSgwLCAwLCAocGhyYXNlc1t3aGVlbExldmVsLTFdKSk7XHJcblx0XHRcdHZpc2libGVCdWJibGVzLnNwbGljZSgwLCAwLCAoYnViYmxlc1t3aGVlbExldmVsLTFdKSk7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcInBocmFzZXNfX3BocmFzZS0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0XHR2aXNpYmxlQnViYmxlc1tpXS5jbGFzc0xpc3QuYWRkKFwiYnViYmxlc19fbGF5ZXItLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmICh3aGVlbExldmVsIDwgd2hlZWxMZXZlbEZvcm1lcikge1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwaHJhc2VzX19waHJhc2UtLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdFx0dmlzaWJsZUJ1YmJsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZXNfX2xheWVyLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuc3BsaWNlKDAsIDEpO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlcy5zcGxpY2UoMCwgMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2hlZWxMZXZlbEZvcm1lciA9IHdoZWVsTGV2ZWw7XHJcblx0fVxyXG5cdFxyXG5cdG8uYWUoXCJ3aGVlbFwiLCBtb3VzZVdoZWVsTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUuZGVsdGFZID4gMClcclxuXHRcdFx0bW92ZVBocmFzZXMoMSk7XHJcblx0XHRlbHNlIGlmIChlLmRlbHRhWSA8IDApXHJcblx0XHRcdG1vdmVQaHJhc2VzKC0xKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNjQwNzIvZGV0ZWN0LWEtZmluZ2VyLXN3aXBlLXRocm91Z2gtamF2YXNjcmlwdC1vbi10aGUtaXBob25lLWFuZC1hbmRyb2lkXHJcblx0by5hZShcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydExpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0eVN0YXJ0ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0fSk7XHJcblx0XHJcblx0by5hZShcInRvdWNoZW5kXCIsIHRvdWNoRW5kTGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XHJcblx0XHR5RW5kID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdFx0aWYgKHlFbmQgLSB5U3RhcnQgPCAtNjApXHJcblx0XHRcdG1vdmVQaHJhc2VzKDEpO1xyXG5cdFx0ZWxzZSBpZiAoeUVuZCAtIHlTdGFydCA+IDYwKVxyXG5cdFx0XHRtb3ZlUGhyYXNlcygtMSk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgcmFuZG9tbHkgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IHRoZSBidWJibGUgbGF5ZXJzXHJcblx0KGZ1bmN0aW9uIGNvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCgpIHtcclxuXHRcdGZvciAodmFyIG49MDsgbjx2aXNpYmxlQnViYmxlcy5sZW5ndGg7ICsrbikge1xyXG5cdFx0XHQvL3ZhciB6VHJhbnMgPSAvXFwuKnRyYW5zbGF0ZVpcXCgoLiopcHhcXCkvaS5leGVjKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHZcIikuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpWzFdO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlc1tuXS5maXJzdENoaWxkLnN0eWxlW3RyYW5zZm9ybV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIDApXCI7XHJcblx0XHRcdHZpc2libGVCdWJibGVzW25dLmZpcnN0Q2hpbGQuc3R5bGVbdHJhbnNmb3JtXSA9IFwidHJhbnNsYXRlM2QoXCIgKyBvLmdldFJhbmRvbUludCgpICsgXCJweCwgXCIgKyBvLmdldFJhbmRvbUludCgpICsgXCJweCwgMClcIjtcclxuXHRcdH1cclxuXHRcdHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50ID0gby50byhjb250cm9sbGVkUmFuZG9tTW92ZW1lbnQsIDMwMDApO1xyXG5cdH0pKCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gSGlkZXMgdGhlIEludHJvIHNjcmVlblxyXG5cdGZ1bmN0aW9uIHNraXBJbnRybyhnYUxhYmVsKSB7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVMaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG1vdXNlV2hlZWxMaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRMaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkxpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodG9Db250cm9sbGVkUmFuZG9tTW92ZW1lbnQpO1xyXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0b0hpbnRzKTtcclxuXHRcdFxyXG5cdFx0aGlkZUludHJvKCk7XHJcblx0XHRcclxuXHRcdG8uc2V0Q29va2llKFwiZmlyc3RUaW1lXCIsIGZhbHNlLCAzNjUpO1xyXG5cdFx0XHRcclxuXHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJTa2lwIEludHJvXCIsIGdhTGFiZWwpO1xyXG5cdH1cclxuXHRcclxuXHRvLmdjKFwiZW50ZXItYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7IHNraXBJbnRybyhcIkVudGVyIGJ1dHRvblwiKTsgfSk7XHJcblx0by5nYyhcInNraXAtaW50cm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHsgc2tpcEludHJvKFwiU2tpcCBpbnRybyBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdG8uYWUoXCJrZXlkb3duXCIsIGtleURvd25MaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcdFx0XHRcclxuXHRcdHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcblx0XHRcdGNhc2UgMzk6XHJcblx0XHRcdGNhc2UgNDA6IG1vdmVQaHJhc2VzKDEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAzNzpcclxuXHRcdFx0Y2FzZSAzODogbW92ZVBocmFzZXMoLTEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAyNzogc2tpcEludHJvKFwiRXNjIGtleVwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxufVxyXG4iLCJcclxuZnVuY3Rpb24gaW5pdE1haW4oKSB7XHJcblx0XHJcblx0dmFyIHRvUmVtb3ZlQ2xhc3NlcyxcclxuXHRcdHByZXZpb3VzU3RhdGUsXHJcblx0XHRwcm9maWxlU2VsZWN0ZWQgPSAwLFxyXG5cdFx0YW5pbUR1cmF0aW9uID0gNDAwLFxyXG5cdFx0YW5pbUR1cmF0aW9uTW9yZUluZm8gPSAzMDAsXHJcblx0XHRkZXNjcmlwdGlvblBhbmVsID0gby5nYyhcImRlc2NyaXB0aW9uLXBhbmVsXCIpLFxyXG5cdFx0bW9yZUluZm9QYW5lbCA9IG8uZ2MoXCJtb3JlLWluZm8tcGFuZWxcIiksXHJcblx0XHRtb3JlSW5mb0ltYWdlID0gby5nYyhcIm1vcmUtaW5mby1pbWFnZVwiKTtcclxuXHRcclxuXHRvLmdjKFwibWFpblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9zZW5kaW5nLWhpdHNcclxuXHRvLnFzKFwiLmJsb2NrX19jb250YWN0LWljb24uZW1haWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiRW1haWxcIik7IH0pO1xyXG5cdG8ucXMoXCIuYmxvY2tfX2NvbnRhY3QtaWNvbi5saW5rZWRpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJMaW5rZWRJblwiKTsgfSk7XHJcblx0by5xcyhcIi5ibG9ja19fY29udGFjdC1pY29uLmdpdGh1YlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJHaXRIdWJcIik7IH0pO1xyXG5cdG8ucXMoXCIubW9yZS1pbmZvLXBhbmVsX19jb250YWN0LWljb24uZW1haWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiRW1haWwgTUlcIik7IH0pO1xyXG5cdG8ucXMoXCIubW9yZS1pbmZvLXBhbmVsX19jb250YWN0LWljb24ubGlua2VkaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiTGlua2VkSW4gTUlcIik7IH0pO1xyXG5cdG8ucXMoXCIubW9yZS1pbmZvLXBhbmVsX19jb250YWN0LWljb24uZ2l0aHViXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvbnRhY3QgaWNvblwiLCBcIkdpdEh1YiBNSVwiKTsgfSk7XHJcblx0by5nYyhcIm1vcmUtaW5mby1wYW5lbF9fc291cmNlLWNvZGUtbGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJTb3VyY2UgY29kZSBsaW5rXCIpOyB9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBBZGRzIG5lY2Vzc2FyeSBsb2dpYyB0byBzaG93IHRoZSBEZXNjcmlwdGlvbiBwYW5lbCBmb3Igc29tZSBwcm9maWxlXHRcclxuXHRmdW5jdGlvbiBzaG93RGVzY3JpcHRpb25QYW5lbChuZXdQcm9maWxlKSB7XHJcblx0XHRwcmV2aW91c1N0YXRlID0gXCJkZXNjcmlwdGlvblBhbmVsXCI7XHJcblx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1wYW5lbC0taW5cIiwgXCJzXCIgKyBuZXdQcm9maWxlKTtcclxuXHRcdFxyXG5cdFx0dmFyIG5Qcm9maWxlID0gby5nYyhcInByb2ZpbGUtLVwiICsgbmV3UHJvZmlsZSk7XHJcblx0XHRuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tei1pbmRleFwiKTtcclxuXHRcdG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZFwiKTtcclxuXHRcdHN3aXRjaCAobmV3UHJvZmlsZSkge1xyXG5cdFx0XHRjYXNlIDE6IG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1sZWZ0XCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAyOiBuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAzOiBuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtcmlnaHRcIik7XHJcblx0XHR9XHJcblx0XHRuUHJvZmlsZS50aXRsZSA9IFwiQmFja1wiO1xyXG5cdFx0blByb2ZpbGUuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGVfX3RpdGxlLWJnLS1pblwiKTtcclxuXHRcdG5Qcm9maWxlLmNoaWxkcmVuWzNdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlX190aXRsZS10ZXh0LS1pblwiKTtcclxuXHRcdFxyXG5cdFx0by5nYyhcImRhcmtlbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJkYXJrZW5lci0taW5cIik7XHJcblxyXG5cdFx0Zm9yICh2YXIgbj0xOyBuPD0zOyArK24pXHJcblx0XHRcdGlmIChuZXdQcm9maWxlICE9PSBuKSB7XHJcblx0XHRcdFx0by5nYyhcInByb2ZpbGUtLVwiICsgbikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLW5vdC1zZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRzd2l0Y2ggKG4pIHtcclxuXHRcdFx0XHRcdGNhc2UgMTogby5nYyhcInByb2ZpbGUtLVwiICsgbikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkLWxlZnRcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAyOiBvLmdjKFwicHJvZmlsZS0tXCIgKyBuKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMzogby5nYyhcInByb2ZpbGUtLVwiICsgbikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkLXJpZ2h0XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRvLmdjYShcImRlc2MtcHJvZmlsZS0tXCIgKyBuZXdQcm9maWxlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0aXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0b1JlbW92ZUNsYXNzZXMpO1xyXG5cdFx0by50byhmdW5jdGlvbigpIHtcclxuXHRcdFx0blByb2ZpbGUuY2hpbGRyZW5bNF0uY2xhc3NMaXN0LmFkZChcInByb2ZpbGVfX2JhY2stYnV0dG9uLS1pblwiKTtcclxuXHRcdFx0by5nYyhcInByb2ZpbGUtc2VsZWN0ZWQtYmctLVwiICsgbmV3UHJvZmlsZSkuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtc2VsZWN0ZWQtYmctLWluXCIpO1xyXG5cdFx0XHRvLnFzKFwiLnByb2ZpbGUtc2VsZWN0ZWQtcGxhY2UtLVwiICsgbmV3UHJvZmlsZSArIFwiIC5wcm9maWxlLXNlbGVjdGVkLXBsYWNlX190aXRsZVwiKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1zZWxlY3RlZC1wbGFjZV9fdGl0bGUtLWluXCIpO1xyXG5cdFx0fSwgYW5pbUR1cmF0aW9uKTtcclxuXHRcdFxyXG5cdFx0by5nYyhcImRlc2NyaXB0aW9uLXBhbmVsX19vdmVyZmxvdy1oaWRlXCIpLnNjcm9sbFRvcCA9IDA7XHJcblx0XHRwcm9maWxlU2VsZWN0ZWQgPSBuZXdQcm9maWxlO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIlByb2ZpbGUgZGVzY3JpcHRpb24gcGFuZWwgb3BlblwiLCBcIlByb2ZpbGUgXCIgKyBuZXdQcm9maWxlKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gaGlkZURlc2NyaXB0aW9uUGFuZWwoKSB7XHJcblx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjcmlwdGlvbi1wYW5lbC0taW5cIik7XHJcblx0XHRcclxuXHRcdHZhciBzUHJvZmlsZSA9IG8uZ2MoXCJwcm9maWxlLS1cIiArIHByb2ZpbGVTZWxlY3RlZCk7XHJcblx0XHRzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWRcIik7XHJcblx0XHRzd2l0Y2ggKHByb2ZpbGVTZWxlY3RlZCkge1xyXG5cdFx0XHRjYXNlIDE6IHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1sZWZ0XCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAyOiBzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAzOiBzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtcmlnaHRcIik7XHJcblx0XHR9XHJcblx0XHRzUHJvZmlsZS50aXRsZSA9IFwiXCI7XHJcblx0XHRzUHJvZmlsZS5jaGlsZHJlbls0XS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZV9fYmFjay1idXR0b24tLWluXCIpO1xyXG5cdFx0XHJcblx0XHRvLmdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtlbmVyLS1pblwiKTtcclxuXHJcblx0XHRmb3IgKHZhciBuMj0xOyBuMjw9MzsgKytuMilcclxuXHRcdFx0aWYgKHByb2ZpbGVTZWxlY3RlZCAhPT0gbjIpIHtcclxuXHRcdFx0XHRvLmdjKFwicHJvZmlsZS0tXCIgKyBuMikuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLW5vdC1zZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRzd2l0Y2ggKG4yKSB7XHJcblx0XHRcdFx0XHRjYXNlIDE6IG8uZ2MoXCJwcm9maWxlLS1cIiArIG4yKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtbGVmdFwiKTsgYnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDI6IG8uZ2MoXCJwcm9maWxlLS1cIiArIG4yKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMzogby5nYyhcInByb2ZpbGUtLVwiICsgbjIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1yaWdodFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRvLmdjKFwicHJvZmlsZS1zZWxlY3RlZC1iZy0tXCIgKyBwcm9maWxlU2VsZWN0ZWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLXNlbGVjdGVkLWJnLS1pblwiKTtcclxuXHRcdG8ucXMoXCIucHJvZmlsZS1zZWxlY3RlZC1wbGFjZS0tXCIgKyBwcm9maWxlU2VsZWN0ZWQgKyBcIiAucHJvZmlsZS1zZWxlY3RlZC1wbGFjZV9fdGl0bGVcIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtc2VsZWN0ZWQtcGxhY2VfX3RpdGxlLS1pblwiKTtcclxuXHRcdFxyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIlByb2ZpbGUgZGVzY3JpcHRpb24gcGFuZWwgY2xvc2VcIiwgXCJQcm9maWxlIFwiICsgcHJvZmlsZVNlbGVjdGVkKTtcclxuXHJcblx0XHR2YXIgcmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzXCIgKyBwcm9maWxlU2VsZWN0ZWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0by5nY2EoXCJkZXNjLXByb2ZpbGUtLVwiICsgcHJvZmlsZVNlbGVjdGVkKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0XHRpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS16LWluZGV4XCIpO1xyXG5cclxuXHRcdFx0cHJvZmlsZVNlbGVjdGVkID0gMDtcclxuXHRcdH07XHJcblx0XHR0b1JlbW92ZUNsYXNzZXMgPSBvLnRvKHJlbW92ZUNsYXNzZXMsIGFuaW1EdXJhdGlvbik7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKG5ld1Byb2ZpbGUpIHtcclxuXHRcdGlmICghZGVzY3JpcHRpb25QYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXNjcmlwdGlvbi1wYW5lbC0taW5cIikpIHtcclxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtuZXdQcm9maWxlOiBuZXdQcm9maWxlfSwgXCJQcm9maWxlIFwiICsgbmV3UHJvZmlsZSwgXCIjcHJvZmlsZVwiICsgbmV3UHJvZmlsZSk7XHJcblx0XHRcdHNob3dEZXNjcmlwdGlvblBhbmVsKG5ld1Byb2ZpbGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdFx0aGlkZURlc2NyaXB0aW9uUGFuZWwoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0by5nYyhcInByb2ZpbGUtLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgxKTsgfSk7XHJcblx0by5nYyhcInByb2ZpbGUtLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgyKTsgfSk7XHJcblx0by5nYyhcInByb2ZpbGUtLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgzKTsgfSk7XHJcblx0by5nYyhcInByb2ZpbGUtbS0tMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKDEpOyB9KTtcclxuXHRvLmdjKFwicHJvZmlsZS1tLS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgc2hvd09yaGlkZURlc2NyaXB0aW9uUGFuZWwoMik7IH0pO1xyXG5cdG8uZ2MoXCJwcm9maWxlLW0tLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgzKTsgfSk7XHJcblx0by5nYyhcImJhY2stYnV0dG9uLW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgpOyB9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBBZGRzIGZ1bmN0aW9uYWxpdHkgdG8gXCJNb3JlIGluZm9cIiBidXR0b25cclxuXHRmdW5jdGlvbiBtb3JlSW5mb0V2ZW50TGlzdGVuZXIoZ2FMYWJlbCkge1xyXG5cdFx0cHJldmlvdXNTdGF0ZSA9IFwibW9yZUluZm9QYW5lbFwiO1xyXG5cdFx0XHJcblx0XHRtb3JlSW5mb1BhbmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cclxuXHRcdG1vcmVJbmZvUGFuZWwub2Zmc2V0SGVpZ2h0OyAvLyBUaGlzIGNhdXNlcyByZWZsb3cgYmVmb3JlIGFkZGluZyBuZXh0IGNsYXNzXHJcblx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xyXG5cdFx0bW9yZUluZm9QYW5lbC5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLXBhbmVsLS1pblwiKTtcclxuXHRcdFxyXG5cdFx0bW9yZUluZm9JbWFnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXHJcblx0XHRtb3JlSW5mb0ltYWdlLm9mZnNldEhlaWdodDtcclxuXHRcdC8qIGpzaGludCBpZ25vcmU6ZW5kICovXHJcblx0XHRtb3JlSW5mb0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8taW1hZ2UtLWluXCIpO1xyXG5cdFx0XHJcblx0XHRvLmdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LmFkZChcImRhcmtlbmVyLS1pbjJcIik7XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiTW9yZSBpbmZvXCIsIGdhTGFiZWwpO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBtb3JlSW5mb0Nsb3NlKGdhTGFiZWwpIHtcclxuXHRcdG1vcmVJbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vcmUtaW5mby1wYW5lbC0taW5cIik7XHJcblx0XHRtb3JlSW5mb0ltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJtb3JlLWluZm8taW1hZ2UtLWluXCIpO1xyXG5cdFx0by50byhmdW5jdGlvbigpIHtcclxuXHRcdFx0bW9yZUluZm9QYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdFx0bW9yZUluZm9JbWFnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdH0sIGFuaW1EdXJhdGlvbk1vcmVJbmZvKTtcclxuXHRcdFxyXG5cdFx0by5nYyhcImRhcmtlbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrZW5lci0taW4yXCIpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIk1vcmUgaW5mbyBjbG9zZVwiLCBnYUxhYmVsKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gbW9yZUluZm9DbG9zZUV2ZW50TGlzdGVuZXIoZ2FMYWJlbCkge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdG1vcmVJbmZvQ2xvc2UoZ2FMYWJlbCk7XHJcblx0fVxyXG5cdFxyXG5cdG8uZ2MoXCJmb290ZXJfX21vcmUtaW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe21vcmVJbmZvOiB0cnVlfSwgXCJNb3JlIEluZm9cIiwgXCIjbW9yZUluZm9cIik7XHJcblx0XHRtb3JlSW5mb0V2ZW50TGlzdGVuZXIoXCJGb290ZXIgYnV0dG9uXCIpO1xyXG5cdH0pO1xyXG5cdG8uZ2MoXCJmb290ZXItbV9fbW9yZS1pbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7bW9yZUluZm86IHRydWV9LCBcIk1vcmUgSW5mb1wiLCBcIiNtb3JlSW5mb1wiKTtcclxuXHRcdG1vcmVJbmZvRXZlbnRMaXN0ZW5lcihcIkZvb3RlciBtb2JpbGUgYnV0dG9uXCIpO1xyXG5cdH0pO1xyXG5cdG8uZ2MoXCJtb3JlLWluZm8taW1hZ2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBtb3JlSW5mb0Nsb3NlRXZlbnRMaXN0ZW5lcihcIkltYWdlIGNsaWNrXCIpOyB9KTtcclxuXHRvLmdjKFwibW9yZS1pbmZvLWltYWdlX19iYWNrLWJ1dHRvbi1tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgbW9yZUluZm9DbG9zZUV2ZW50TGlzdGVuZXIoXCJNb2JpbGUgYmFjayBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byBcIlNob3cgaW50cm8gYWdhaW5cIiBidXR0b25cclxuXHRmdW5jdGlvbiBzaG93SW50cm9BZ2FpbihnYUxhYmVsKSB7XHJcblx0XHRvLnJlbW92ZUNvb2tpZShcImZpcnN0VGltZVwiKTtcclxuXHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJTaG93IGludHJvIGFnYWluXCIsIGdhTGFiZWwpO1xyXG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0fVxyXG5cdG8uZ2MoXCJmb290ZXJfX3Nob3ctaW50cm8tYWdhaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93SW50cm9BZ2FpbihcIkZvb3RlciBidXR0b25cIik7IH0pO1xyXG5cdG8uZ2MoXCJmb290ZXItbV9fc2hvdy1pbnRyby1hZ2FpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dJbnRyb0FnYWluKFwiRm9vdGVyIG1vYmlsZSBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdG8uYWUoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiKSAmJiBlLmtleUNvZGUgPT09IDI3KVxyXG5cdFx0XHRzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgpO1xyXG5cdFx0ZWxzZSBpZiAobW9yZUluZm9QYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb3JlLWluZm8tcGFuZWwtLWluXCIpICYmIGUua2V5Q29kZSA9PT0gMjcpXHJcblx0XHRcdG1vcmVJbmZvQ2xvc2VFdmVudExpc3RlbmVyKFwiRXNjIGtleVwiKTtcclxuXHR9KTtcclxuXHRcclxuXHRvLmFlKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGUuc3RhdGUpIHtcclxuXHRcdFx0aWYgKGUuc3RhdGUubmV3UHJvZmlsZSlcclxuXHRcdFx0XHRzaG93RGVzY3JpcHRpb25QYW5lbChlLnN0YXRlLm5ld1Byb2ZpbGUpO1xyXG5cdFx0XHRlbHNlIGlmIChlLnN0YXRlLm1vcmVJbmZvKVxyXG5cdFx0XHRcdG1vcmVJbmZvRXZlbnRMaXN0ZW5lcihcIlB1c2ggc3RhdGVcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzd2l0Y2ggKHByZXZpb3VzU3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFwiZGVzY3JpcHRpb25QYW5lbFwiOiBoaWRlRGVzY3JpcHRpb25QYW5lbCgpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIFwibW9yZUluZm9QYW5lbFwiOiBtb3JlSW5mb0Nsb3NlKFwiUHVzaCBzdGF0ZVwiKTsgYnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJldmlvdXNTdGF0ZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBTaG93cyBvciBoaWRlcyB0aGUgc2Nyb2xsIGJ1dHRvbnMgb24gdGhlIGRlc2NyaXB0aW9uIHBhbmVsXHJcblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODk4MTMwL2NoZWNrLWlmLWEtdXNlci1oYXMtc2Nyb2xsZWQtdG8tdGhlLWJvdHRvbS8zNDU1MDE3MSMzNDU1MDE3MVxyXG5cdHZhciBkUFNjcm9sbCA9IG8uZ2MoXCJkZXNjcmlwdGlvbi1wYW5lbF9fb3ZlcmZsb3ctaGlkZVwiKSxcclxuXHRcdHVwQnV0dG9uID0gby5nYyhcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLXVwXCIpLFxyXG5cdFx0ZG93bkJ1dHRvbiA9IG8uZ2MoXCJkZXNjcmlwdGlvbi1wYW5lbF9fc2Nyb2xsLS1kb3duXCIpO1xyXG5cdFx0XHJcblx0ZFBTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoZFBTY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gZFBTY3JvbGwuc2Nyb2xsVG9wID09PSBkUFNjcm9sbC5jbGllbnRIZWlnaHQgJiZcclxuXHRcdFx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiKSkgeyAvLyBBIHNjcm9sbCBldmVudCBpcyBmaXJlZCBhdCB0aGUgbWFpbiBzY3JlZW5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRkb3duQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1wYW5lbF9fc2Nyb2xsLS1kb3duLWhpZGRlblwiKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBlbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzMVwiKSkge1xyXG5cdFx0XHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJEZXNjcmlwdGlvbiBwYW5lbCBib3R0b20gcmVhY2hlZFwiLCBcIlByb2ZpbGUgMVwiKTtcclxuXHRcdFx0fSBlbHNlIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiczJcIikpIHtcclxuXHRcdFx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiRGVzY3JpcHRpb24gcGFuZWwgYm90dG9tIHJlYWNoZWRcIiwgXCJQcm9maWxlIDJcIik7XHJcblx0XHRcdH0gZWxzZSBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInMzXCIpKSB7XHJcblx0XHRcdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkRlc2NyaXB0aW9uIHBhbmVsIGJvdHRvbSByZWFjaGVkXCIsIFwiUHJvZmlsZSAzXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIGRvd25CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLWRvd24taGlkZGVuXCIpO1xyXG5cdFx0XHJcblx0XHRpZiAoZFBTY3JvbGwuc2Nyb2xsVG9wIDw9IDUpIHtcclxuXHRcdFx0dXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLXVwLWhpZGRlblwiKTtcclxuXHRcdH0gZWxzZSB1cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb24tcGFuZWxfX3Njcm9sbC0tdXAtaGlkZGVuXCIpO1xyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkUFNjcm9sbC5zY3JvbGxIZWlnaHQpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZFBTY3JvbGwuc2Nyb2xsVG9wKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRQU2Nyb2xsLmNsaWVudEhlaWdodCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkUFNjcm9sbC5zY3JvbGxIZWlnaHQgLSBkUFNjcm9sbC5zY3JvbGxUb3ApO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBodHRwczovL2NvZGVyd2FsbC5jb20vcC9odWpsaGcvc21vb3RoLXNjcm9sbGluZy13aXRob3V0LWpxdWVyeVxyXG5cdC8vIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvdDFkdjFyYm9cclxuXHRmdW5jdGlvbiBzY3JvbGxCeShlbGVtZW50LCB0YXJnZXQsIGR1cmF0aW9uKSB7XHJcblx0XHR0YXJnZXQgPSBNYXRoLnJvdW5kKHRhcmdldCk7XHJcblx0XHRkdXJhdGlvbiA9IE1hdGgucm91bmQoZHVyYXRpb24pO1xyXG5cdFx0XHJcblx0XHRpZiAoZHVyYXRpb24gPCAwKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJiYWQgZHVyYXRpb25cIik7XHJcblx0XHRcdFxyXG5cdFx0aWYgKGR1cmF0aW9uID09PSAwKSB7XHJcblx0XHRcdGVsZW1lbnQuc2Nyb2xsVG9wID0gdGFyZ2V0O1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cdFx0dmFyIGVuZFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcclxuXHRcdFxyXG5cdFx0dmFyIHN0YXJ0VG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHR2YXIgZGlzdGFuY2UgPSB0YXJnZXQgLSBzdGFydFRvcDtcclxuXHRcdFxyXG5cdFx0Ly8gYmFzZWQgb24gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbW9vdGhzdGVwXHJcblx0XHR2YXIgc21vb3RoU3RlcCA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHBvaW50KSB7XHJcblx0XHRcdGlmKHBvaW50IDw9IHN0YXJ0KSB7IHJldHVybiAwOyB9XHJcblx0XHRcdGlmKHBvaW50ID49IGVuZCkgeyByZXR1cm4gMTsgfVxyXG5cdFx0XHR2YXIgeCA9IChwb2ludCAtIHN0YXJ0KSAvIChlbmQgLSBzdGFydCk7IC8vIGludGVycG9sYXRpb25cclxuXHRcdFx0cmV0dXJuIHgqeCooMyAtIDIqeCk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRcdC8vIFRoaXMgaXMgdG8ga2VlcCB0cmFjayBvZiB3aGVyZSB0aGUgZWxlbWVudFwicyBzY3JvbGxUb3AgaXNcclxuXHRcdFx0Ly8gc3VwcG9zZWQgdG8gYmUsIGJhc2VkIG9uIHdoYXQgd2VcInJlIGRvaW5nXHJcblx0XHRcdHZhciBwcmV2aW91c1RvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gVGhpcyBpcyBsaWtlIGEgdGhpbmsgZnVuY3Rpb24gZnJvbSBhIGdhbWUgbG9vcFxyXG5cdFx0XHR2YXIgc2Nyb2xsRnJhbWUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZihlbGVtZW50LnNjcm9sbFRvcCAhPSBwcmV2aW91c1RvcCkge1xyXG5cdFx0XHRcdFx0cmVqZWN0KFwiaW50ZXJydXB0ZWRcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIHNldCB0aGUgc2Nyb2xsVG9wIGZvciB0aGlzIGZyYW1lXHJcblx0XHRcdFx0dmFyIG5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0dmFyIHBvaW50ID0gc21vb3RoU3RlcChzdGFydFRpbWUsIGVuZFRpbWUsIG5vdyk7XHJcblx0XHRcdFx0dmFyIGZyYW1lVG9wID0gTWF0aC5yb3VuZChzdGFydFRvcCArIChkaXN0YW5jZSAqIHBvaW50KSk7XHJcblx0XHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSBmcmFtZVRvcDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBjaGVjayBpZiB3ZVwicmUgZG9uZSFcclxuXHRcdFx0XHRpZihub3cgPj0gZW5kVGltZSkge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBJZiB3ZSB3ZXJlIHN1cHBvc2VkIHRvIHNjcm9sbCBidXQgZGlkblwidCwgdGhlbiB3ZVxyXG5cdFx0XHRcdC8vIHByb2JhYmx5IGhpdCB0aGUgbGltaXQsIHNvIGNvbnNpZGVyIGl0IGRvbmU7IG5vdFxyXG5cdFx0XHRcdC8vIGludGVycnVwdGVkLlxyXG5cdFx0XHRcdGlmKGVsZW1lbnQuc2Nyb2xsVG9wID09PSBwcmV2aW91c1RvcCAmJiBlbGVtZW50LnNjcm9sbFRvcCAhPT0gZnJhbWVUb3ApIHtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cHJldmlvdXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBzY2hlZHVsZSBuZXh0IGZyYW1lIGZvciBleGVjdXRpb25cclxuXHRcdFx0XHRzZXRUaW1lb3V0KHNjcm9sbEZyYW1lLCAwKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGJvb3N0cmFwIHRoZSBhbmltYXRpb24gcHJvY2Vzc1xyXG5cdFx0XHRzZXRUaW1lb3V0KHNjcm9sbEZyYW1lLCAwKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHR1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRzY3JvbGxCeShkUFNjcm9sbCwgZFBTY3JvbGwuc2Nyb2xsVG9wIC0gNDAwLCAzMDApO1xyXG5cdH0pO1xyXG5cdGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0c2Nyb2xsQnkoZFBTY3JvbGwsIGRQU2Nyb2xsLnNjcm9sbFRvcCArIDQwMCwgMzAwKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBJZiBhdCBsb2FkaW5nIHRpbWUgdGhlIFVSTCBjb250YWlucyBhIGhhc2ggdGhlIHN0YXRlIHdpbGwgYmUgdXBkYXRlZCBhY2NvcmRpbmdseVxyXG5cdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiBvLmdldENvb2tpZShcImZpcnN0VGltZVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0c3dpdGNoICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG5cdFx0XHRjYXNlIFwiI3Byb2ZpbGUxXCI6XHJcblx0XHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgbmV3UHJvZmlsZTogMSB9LCBcIlByb2ZpbGUgMVwiLCBcIiNwcm9maWxlMVwiKTtcclxuXHRcdFx0XHRzaG93RGVzY3JpcHRpb25QYW5lbCgxKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIiNwcm9maWxlMlwiOlxyXG5cdFx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IG5ld1Byb2ZpbGU6IDIgfSwgXCJQcm9maWxlIDJcIiwgXCIjcHJvZmlsZTJcIik7XHJcblx0XHRcdFx0c2hvd0Rlc2NyaXB0aW9uUGFuZWwoMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCIjcHJvZmlsZTNcIjpcclxuXHRcdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBuZXdQcm9maWxlOiAzIH0sIFwiUHJvZmlsZSAzXCIsIFwiI3Byb2ZpbGUzXCIpO1xyXG5cdFx0XHRcdHNob3dEZXNjcmlwdGlvblBhbmVsKDMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiI21vcmVJbmZvXCI6XHJcblx0XHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgbW9yZUluZm86IHRydWUgfSwgXCJNb3JlIEluZm9cIiwgXCIjbW9yZUluZm9cIik7XHJcblx0XHRcdFx0bW9yZUluZm9FdmVudExpc3RlbmVyKFwiUHVzaCBzdGF0ZVwiKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIG8uZ2V0Q29va2llKFwiZmlyc3RUaW1lXCIpID09PSBudWxsKVxyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxufVxyXG4iLCJcbldlYkZvbnQubG9hZCh7XHJcblx0Z29vZ2xlOiB7XHJcblx0XHRmYW1pbGllczogW1wiT3BlbiBTYW5zOjMwMCw4MDBcIiwgXCJPcGVuIFNhbnMgQ29uZGVuc2VkOjMwMFwiLCBcIlRyaXJvbmc6NDAwXCJdXHJcblx0fSxcclxuXHRhY3RpdmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKG8uZ2V0Q29va2llKFwiZmlyc3RUaW1lXCIpID09PSBudWxsKSB7XHJcblx0XHRcdGluaXRJbnRybygpO1xyXG5cdFx0fSBlbHNlIGhpZGVJbnRybygyKTtcclxuXHRcdFxyXG5cdFx0aW5pdE1haW4oKTtcclxuXHR9LFxyXG5cdGluYWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9LFxyXG5cdGNsYXNzZXM6IGZhbHNlLFxyXG5cdHRpbWVvdXQ6IDgwMDBcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
