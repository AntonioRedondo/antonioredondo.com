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
	}

	o.gca = function(className) {
		return Array.prototype.slice.call(document.getElementsByClassName(className));
	}

	o.qs = function(query) {
		return document.querySelector(query);
	}

	o.qsa = function(query) {
		return Array.prototype.slice.call(document.querySelectorAll(query));
	}

	o.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	}

	o.to = function(callback, time) {
		return window.setTimeout(callback, time);
	}
	
	
	
	o.getRandomInt = function() {
		var min = -50, max = 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	
	
	o.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	}
	
	
	
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
	}

	o.setCookie = function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		} else expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	}

	o.removeCookie = function(name) {
		this.setCookie(name,"",-1);
	}
	
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwidXRpbHMuanMiLCJpbml0SW50cm8uanMiLCJpbml0TWFpbi5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjYgLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5tPWJ8fGE7dGhpcy5jPXRoaXMubS5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiB6KGEpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYS5mKXJldHVybiBhLmY7dmFyIGI9YS5tLmxvY2F0aW9uLnByb3RvY29sO1wiYWJvdXQ6XCI9PWImJihiPWEuYS5sb2NhdGlvbi5wcm90b2NvbCk7cmV0dXJuXCJodHRwczpcIj09Yj9cImh0dHBzOlwiOlwiaHR0cDpcIn1mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5tLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9XG5mdW5jdGlvbiBBKGEsYixjKXtmdW5jdGlvbiBkKCl7ayYmZSYmZiYmKGsoZyksaz1udWxsKX1iPXQoYSxcImxpbmtcIix7cmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YixtZWRpYTpcImFsbFwifSk7dmFyIGU9ITEsZj0hMCxnPW51bGwsaz1jfHxudWxsO2RhPyhiLm9ubG9hZD1mdW5jdGlvbigpe2U9ITA7ZCgpfSxiLm9uZXJyb3I9ZnVuY3Rpb24oKXtlPSEwO2c9RXJyb3IoXCJTdHlsZXNoZWV0IGZhaWxlZCB0byBsb2FkXCIpO2QoKX0pOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlPSEwO2QoKX0sMCk7dShhLFwiaGVhZFwiLGIpfVxuZnVuY3Rpb24gQihhLGIsYyxkKXt2YXIgZT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO2lmKGUpe3ZhciBmPXQoYSxcInNjcmlwdFwiLHtzcmM6Yn0pLGc9ITE7Zi5vbmxvYWQ9Zi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtnfHx0aGlzLnJlYWR5U3RhdGUmJlwibG9hZGVkXCIhPXRoaXMucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT10aGlzLnJlYWR5U3RhdGV8fChnPSEwLGMmJmMobnVsbCksZi5vbmxvYWQ9Zi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcIkhFQURcIj09Zi5wYXJlbnROb2RlLnRhZ05hbWUmJmUucmVtb3ZlQ2hpbGQoZikpfTtlLmFwcGVuZENoaWxkKGYpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtnfHwoZz0hMCxjJiZjKEVycm9yKFwiU2NyaXB0IGxvYWQgdGltZW91dFwiKSkpfSxkfHw1RTMpO3JldHVybiBmfXJldHVybiBudWxsfTtmdW5jdGlvbiBDKCl7dGhpcy5hPTA7dGhpcy5jPW51bGx9ZnVuY3Rpb24gRChhKXthLmErKztyZXR1cm4gZnVuY3Rpb24oKXthLmEtLTtFKGEpfX1mdW5jdGlvbiBGKGEsYil7YS5jPWI7RShhKX1mdW5jdGlvbiBFKGEpezA9PWEuYSYmYS5jJiYoYS5jKCksYS5jPW51bGwpfTtmdW5jdGlvbiBHKGEpe3RoaXMuYT1hfHxcIi1cIn1HLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTA7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliLnB1c2goYXJndW1lbnRzW2NdLnJlcGxhY2UoL1tcXFdfXSsvZyxcIlwiKS50b0xvd2VyQ2FzZSgpKTtyZXR1cm4gYi5qb2luKHRoaXMuYSl9O2Z1bmN0aW9uIEgoYSxiKXt0aGlzLmM9YTt0aGlzLmY9NDt0aGlzLmE9XCJuXCI7dmFyIGM9KGJ8fFwibjRcIikubWF0Y2goL14oW25pb10pKFsxLTldKSQvaSk7YyYmKHRoaXMuYT1jWzFdLHRoaXMuZj1wYXJzZUludChjWzJdLDEwKSl9ZnVuY3Rpb24gZmEoYSl7cmV0dXJuIEkoYSkrXCIgXCIrKGEuZitcIjAwXCIpK1wiIDMwMHB4IFwiK0ooYS5jKX1mdW5jdGlvbiBKKGEpe3ZhciBiPVtdO2E9YS5zcGxpdCgvLFxccyovKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5yZXBsYWNlKC9bJ1wiXS9nLFwiXCIpOy0xIT1kLmluZGV4T2YoXCIgXCIpfHwvXlxcZC8udGVzdChkKT9iLnB1c2goXCInXCIrZCtcIidcIik6Yi5wdXNoKGQpfXJldHVybiBiLmpvaW4oXCIsXCIpfWZ1bmN0aW9uIEsoYSl7cmV0dXJuIGEuYSthLmZ9ZnVuY3Rpb24gSShhKXt2YXIgYj1cIm5vcm1hbFwiO1wib1wiPT09YS5hP2I9XCJvYmxpcXVlXCI6XCJpXCI9PT1hLmEmJihiPVwiaXRhbGljXCIpO3JldHVybiBifVxuZnVuY3Rpb24gZ2EoYSl7dmFyIGI9NCxjPVwiblwiLGQ9bnVsbDthJiYoKGQ9YS5tYXRjaCgvKG5vcm1hbHxvYmxpcXVlfGl0YWxpYykvaSkpJiZkWzFdJiYoYz1kWzFdLnN1YnN0cigwLDEpLnRvTG93ZXJDYXNlKCkpLChkPWEubWF0Y2goLyhbMS05XTAwfG5vcm1hbHxib2xkKS9pKSkmJmRbMV0mJigvYm9sZC9pLnRlc3QoZFsxXSk/Yj03Oi9bMS05XTAwLy50ZXN0KGRbMV0pJiYoYj1wYXJzZUludChkWzFdLnN1YnN0cigwLDEpLDEwKSkpKTtyZXR1cm4gYytifTtmdW5jdGlvbiBoYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1hLm0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3RoaXMuaD1iO3RoaXMuYT1uZXcgRyhcIi1cIik7dGhpcy5qPSExIT09Yi5ldmVudHM7dGhpcy5nPSExIT09Yi5jbGFzc2VzfWZ1bmN0aW9uIGlhKGEpe2EuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildKTtMKGEsXCJsb2FkaW5nXCIpfWZ1bmN0aW9uIE0oYSl7aWYoYS5nKXt2YXIgYj15KGEuZixhLmEuYyhcIndmXCIsXCJhY3RpdmVcIikpLGM9W10sZD1bYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV07Ynx8Yy5wdXNoKGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpKTt3KGEuZixjLGQpfUwoYSxcImluYWN0aXZlXCIpfWZ1bmN0aW9uIEwoYSxiLGMpe2lmKGEuaiYmYS5oW2JdKWlmKGMpYS5oW2JdKGMuYyxLKGMpKTtlbHNlIGEuaFtiXSgpfTtmdW5jdGlvbiBqYSgpe3RoaXMuYz17fX1mdW5jdGlvbiBrYShhLGIsYyl7dmFyIGQ9W10sZTtmb3IoZSBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoZSkpe3ZhciBmPWEuY1tlXTtmJiZkLnB1c2goZihiW2VdLGMpKX1yZXR1cm4gZH07ZnVuY3Rpb24gTihhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT10KHRoaXMuYyxcInNwYW5cIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSx0aGlzLmYpfWZ1bmN0aW9uIE8oYSl7dShhLmMsXCJib2R5XCIsYS5hKX1mdW5jdGlvbiBQKGEpe3JldHVyblwiZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTlweDtsZWZ0Oi05OTk5cHg7Zm9udC1zaXplOjMwMHB4O3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bGluZS1oZWlnaHQ6bm9ybWFsO21hcmdpbjowO3BhZGRpbmc6MDtmb250LXZhcmlhbnQ6bm9ybWFsO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpcIitKKGEuYykrXCI7XCIrKFwiZm9udC1zdHlsZTpcIitJKGEpK1wiO2ZvbnQtd2VpZ2h0OlwiKyhhLmYrXCIwMFwiKStcIjtcIil9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYpe3RoaXMuZz1hO3RoaXMuaj1iO3RoaXMuYT1kO3RoaXMuYz1jO3RoaXMuZj1lfHwzRTM7dGhpcy5oPWZ8fHZvaWQgMH1RLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYy5tLmRvY3VtZW50LGI9dGhpcyxjPXEoKSxkPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGQsZSl7ZnVuY3Rpb24gaygpe3EoKS1jPj1iLmY/ZSgpOmEuZm9udHMubG9hZChmYShiLmEpLGIuaCkudGhlbihmdW5jdGlvbihhKXsxPD1hLmxlbmd0aD9kKCk6c2V0VGltZW91dChrLDI1KX0sZnVuY3Rpb24oKXtlKCl9KX1rKCl9KSxlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsZCl7c2V0VGltZW91dChkLGIuZil9KTtQcm9taXNlLnJhY2UoW2UsZF0pLnRoZW4oZnVuY3Rpb24oKXtiLmcoYi5hKX0sZnVuY3Rpb24oKXtiLmooYi5hKX0pfTtmdW5jdGlvbiBSKGEsYixjLGQsZSxmLGcpe3RoaXMudj1hO3RoaXMuQj1iO3RoaXMuYz1jO3RoaXMuYT1kO3RoaXMucz1nfHxcIkJFU2Jzd3lcIjt0aGlzLmY9e307dGhpcy53PWV8fDNFMzt0aGlzLnU9Znx8bnVsbDt0aGlzLm89dGhpcy5qPXRoaXMuaD10aGlzLmc9bnVsbDt0aGlzLmc9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5oPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMuaj1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLm89bmV3IE4odGhpcy5jLHRoaXMucyk7YT1uZXcgSCh0aGlzLmEuYytcIixzZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuZy5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKHRoaXMuYS5jK1wiLHNhbnMtc2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmguYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSChcInNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5qLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgoXCJzYW5zLXNlcmlmXCIsSyh0aGlzLmEpKTthPVxuUChhKTt0aGlzLm8uYS5zdHlsZS5jc3NUZXh0PWE7Tyh0aGlzLmcpO08odGhpcy5oKTtPKHRoaXMuaik7Tyh0aGlzLm8pfXZhciBTPXtEOlwic2VyaWZcIixDOlwic2Fucy1zZXJpZlwifSxUPW51bGw7ZnVuY3Rpb24gVSgpe2lmKG51bGw9PT1UKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7VD0hIWEmJig1MzY+cGFyc2VJbnQoYVsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGFbMV0sMTApJiYxMT49cGFyc2VJbnQoYVsyXSwxMCkpfXJldHVybiBUfVIucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy5mLnNlcmlmPXRoaXMuai5hLm9mZnNldFdpZHRoO3RoaXMuZltcInNhbnMtc2VyaWZcIl09dGhpcy5vLmEub2Zmc2V0V2lkdGg7dGhpcy5BPXEoKTtsYSh0aGlzKX07XG5mdW5jdGlvbiBtYShhLGIsYyl7Zm9yKHZhciBkIGluIFMpaWYoUy5oYXNPd25Qcm9wZXJ0eShkKSYmYj09PWEuZltTW2RdXSYmYz09PWEuZltTW2RdXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBsYShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1VKCkmJm1hKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VSgpJiZtYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTpuYShhKTpWKGEsYS52KX1mdW5jdGlvbiBuYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtsYSh0aGlzKX0sYSksNTApfWZ1bmN0aW9uIFYoYSxiKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXt2KHRoaXMuZy5hKTt2KHRoaXMuaC5hKTt2KHRoaXMuai5hKTt2KHRoaXMuby5hKTtiKHRoaXMuYSl9LGEpLDApfTtmdW5jdGlvbiBXKGEsYixjKXt0aGlzLmM9YTt0aGlzLmE9Yjt0aGlzLmY9MDt0aGlzLm89dGhpcy5qPSExO3RoaXMucz1jfXZhciBYPW51bGw7Vy5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7Yi5nJiZ3KGIuZixbYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIildLFtiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIiksYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKV0pO0woYixcImZvbnRhY3RpdmVcIixhKTt0aGlzLm89ITA7b2EodGhpcyl9O1xuVy5wcm90b3R5cGUuaD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7aWYoYi5nKXt2YXIgYz15KGIuZixiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKSksZD1bXSxlPVtiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildO2N8fGQucHVzaChiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpKTt3KGIuZixkLGUpfUwoYixcImZvbnRpbmFjdGl2ZVwiLGEpO29hKHRoaXMpfTtmdW5jdGlvbiBvYShhKXswPT0tLWEuZiYmYS5qJiYoYS5vPyhhPWEuYSxhLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJhY3RpdmVcIildLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpLGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpXSksTChhLFwiYWN0aXZlXCIpKTpNKGEuYSkpfTtmdW5jdGlvbiBwYShhKXt0aGlzLmo9YTt0aGlzLmE9bmV3IGphO3RoaXMuaD0wO3RoaXMuZj10aGlzLmc9ITB9cGEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dGhpcy5jPW5ldyBjYSh0aGlzLmosYS5jb250ZXh0fHx0aGlzLmopO3RoaXMuZz0hMSE9PWEuZXZlbnRzO3RoaXMuZj0hMSE9PWEuY2xhc3NlcztxYSh0aGlzLG5ldyBoYSh0aGlzLmMsYSksYSl9O1xuZnVuY3Rpb24gcmEoYSxiLGMsZCxlKXt2YXIgZj0wPT0tLWEuaDsoYS5mfHxhLmcpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGE9ZXx8bnVsbCxrPWR8fG51bGx8fHt9O2lmKDA9PT1jLmxlbmd0aCYmZilNKGIuYSk7ZWxzZXtiLmYrPWMubGVuZ3RoO2YmJihiLmo9Zik7dmFyIGgsbT1bXTtmb3IoaD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgbD1jW2hdLG49a1tsLmNdLHI9Yi5hLHg9bDtyLmcmJncoci5mLFtyLmEuYyhcIndmXCIseC5jLEsoeCkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildKTtMKHIsXCJmb250bG9hZGluZ1wiLHgpO3I9bnVsbDtudWxsPT09WCYmKFg9d2luZG93LkZvbnRGYWNlPyh4PS9HZWNrby4qRmlyZWZveFxcLyhcXGQrKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpPzQyPHBhcnNlSW50KHhbMV0sMTApOiEwOiExKTtYP3I9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGwsYi5zLG4pOnI9bmV3IFIocChiLmcsYikscChiLmgsYiksYi5jLGwsYi5zLGEsXG5uKTttLnB1c2gocil9Zm9yKGg9MDtoPG0ubGVuZ3RoO2grKyltW2hdLnN0YXJ0KCl9fSwwKX1mdW5jdGlvbiBxYShhLGIsYyl7dmFyIGQ9W10sZT1jLnRpbWVvdXQ7aWEoYik7dmFyIGQ9a2EoYS5hLGMsYS5jKSxmPW5ldyBXKGEuYyxiLGUpO2EuaD1kLmxlbmd0aDtiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKylkW2JdLmxvYWQoZnVuY3Rpb24oYixkLGMpe3JhKGEsZixiLGQsYyl9KX07ZnVuY3Rpb24gc2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9eihhLmMpO2E9KGEuYS5hcGl8fFwiZmFzdC5mb250cy5uZXQvanNhcGlcIikucmVwbGFjZSgvXi4qaHR0cChzPyk6KFxcL1xcLyk/LyxcIlwiKTtyZXR1cm4gZCtcIi8vXCIrYStcIi9cIitiK1wiLmpzXCIrKGM/XCI/dj1cIitjOlwiXCIpfVxuc2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe2lmKGZbXCJfX210aV9mbnRMc3RcIitkXSl7dmFyIGM9ZltcIl9fbXRpX2ZudExzdFwiK2RdKCksZT1bXSxoO2lmKGMpZm9yKHZhciBtPTA7bTxjLmxlbmd0aDttKyspe3ZhciBsPWNbbV0uZm9udGZhbWlseTt2b2lkIDAhPWNbbV0uZm9udFN0eWxlJiZ2b2lkIDAhPWNbbV0uZm9udFdlaWdodD8oaD1jW21dLmZvbnRTdHlsZStjW21dLmZvbnRXZWlnaHQsZS5wdXNoKG5ldyBIKGwsaCkpKTplLnB1c2gobmV3IEgobCkpfWEoZSl9ZWxzZSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YigpfSw1MCl9dmFyIGM9dGhpcyxkPWMuYS5wcm9qZWN0SWQsZT1jLmEudmVyc2lvbjtpZihkKXt2YXIgZj1jLmMubTtCKHRoaXMuYyx0YShjLGQsZSksZnVuY3Rpb24oZSl7ZT9hKFtdKTooZltcIl9fTW9ub3R5cGVDb25maWd1cmF0aW9uX19cIitkXT1mdW5jdGlvbigpe3JldHVybiBjLmF9LGIoKSl9KS5pZD1cIl9fTW9ub3R5cGVBUElTY3JpcHRfX1wiK1xuZH1lbHNlIGEoW10pfTtmdW5jdGlvbiB1YShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXVhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmEudXJsc3x8W10sZT10aGlzLmEuZmFtaWxpZXN8fFtdLGY9dGhpcy5hLnRlc3RTdHJpbmdzfHx7fSxnPW5ldyBDO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKUEodGhpcy5jLGRbYl0sRChnKSk7dmFyIGs9W107Yj0wO2ZvcihjPWUubGVuZ3RoO2I8YztiKyspaWYoZD1lW2JdLnNwbGl0KFwiOlwiKSxkWzFdKWZvcih2YXIgaD1kWzFdLnNwbGl0KFwiLFwiKSxtPTA7bTxoLmxlbmd0aDttKz0xKWsucHVzaChuZXcgSChkWzBdLGhbbV0pKTtlbHNlIGsucHVzaChuZXcgSChkWzBdKSk7RihnLGZ1bmN0aW9uKCl7YShrLGYpfSl9O2Z1bmN0aW9uIHZhKGEsYixjKXthP3RoaXMuYz1hOnRoaXMuYz1iK3dhO3RoaXMuYT1bXTt0aGlzLmY9W107dGhpcy5nPWN8fFwiXCJ9dmFyIHdhPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3NcIjtmdW5jdGlvbiB4YShhLGIpe2Zvcih2YXIgYz1iLmxlbmd0aCxkPTA7ZDxjO2QrKyl7dmFyIGU9YltkXS5zcGxpdChcIjpcIik7Mz09ZS5sZW5ndGgmJmEuZi5wdXNoKGUucG9wKCkpO3ZhciBmPVwiXCI7Mj09ZS5sZW5ndGgmJlwiXCIhPWVbMV0mJihmPVwiOlwiKTthLmEucHVzaChlLmpvaW4oZikpfX1cbmZ1bmN0aW9uIHlhKGEpe2lmKDA9PWEuYS5sZW5ndGgpdGhyb3cgRXJyb3IoXCJObyBmb250cyB0byBsb2FkIVwiKTtpZigtMSE9YS5jLmluZGV4T2YoXCJraXQ9XCIpKXJldHVybiBhLmM7Zm9yKHZhciBiPWEuYS5sZW5ndGgsYz1bXSxkPTA7ZDxiO2QrKyljLnB1c2goYS5hW2RdLnJlcGxhY2UoLyAvZyxcIitcIikpO2I9YS5jK1wiP2ZhbWlseT1cIitjLmpvaW4oXCIlN0NcIik7MDxhLmYubGVuZ3RoJiYoYis9XCImc3Vic2V0PVwiK2EuZi5qb2luKFwiLFwiKSk7MDxhLmcubGVuZ3RoJiYoYis9XCImdGV4dD1cIitlbmNvZGVVUklDb21wb25lbnQoYS5nKSk7cmV0dXJuIGJ9O2Z1bmN0aW9uIHphKGEpe3RoaXMuZj1hO3RoaXMuYT1bXTt0aGlzLmM9e319XG52YXIgQWE9e2xhdGluOlwiQkVTYnN3eVwiLFwibGF0aW4tZXh0XCI6XCJcXHUwMGU3XFx1MDBmNlxcdTAwZmNcXHUwMTFmXFx1MDE1ZlwiLGN5cmlsbGljOlwiXFx1MDQzOVxcdTA0NGZcXHUwNDE2XCIsZ3JlZWs6XCJcXHUwM2IxXFx1MDNiMlxcdTAzYTNcIixraG1lcjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwiLEhhbnVtYW46XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIn0sQmE9e3RoaW46XCIxXCIsZXh0cmFsaWdodDpcIjJcIixcImV4dHJhLWxpZ2h0XCI6XCIyXCIsdWx0cmFsaWdodDpcIjJcIixcInVsdHJhLWxpZ2h0XCI6XCIyXCIsbGlnaHQ6XCIzXCIscmVndWxhcjpcIjRcIixib29rOlwiNFwiLG1lZGl1bTpcIjVcIixcInNlbWktYm9sZFwiOlwiNlwiLHNlbWlib2xkOlwiNlwiLFwiZGVtaS1ib2xkXCI6XCI2XCIsZGVtaWJvbGQ6XCI2XCIsYm9sZDpcIjdcIixcImV4dHJhLWJvbGRcIjpcIjhcIixleHRyYWJvbGQ6XCI4XCIsXCJ1bHRyYS1ib2xkXCI6XCI4XCIsdWx0cmFib2xkOlwiOFwiLGJsYWNrOlwiOVwiLGhlYXZ5OlwiOVwiLGw6XCIzXCIscjpcIjRcIixiOlwiN1wifSxDYT17aTpcImlcIixpdGFsaWM6XCJpXCIsbjpcIm5cIixub3JtYWw6XCJuXCJ9LFxuRGE9L14odGhpbnwoPzooPzpleHRyYXx1bHRyYSktPyk/bGlnaHR8cmVndWxhcnxib29rfG1lZGl1bXwoPzooPzpzZW1pfGRlbWl8ZXh0cmF8dWx0cmEpLT8pP2JvbGR8YmxhY2t8aGVhdnl8bHxyfGJ8WzEtOV0wMCk/KG58aXxub3JtYWx8aXRhbGljKT8kLztcbmZ1bmN0aW9uIEVhKGEpe2Zvcih2YXIgYj1hLmYubGVuZ3RoLGM9MDtjPGI7YysrKXt2YXIgZD1hLmZbY10uc3BsaXQoXCI6XCIpLGU9ZFswXS5yZXBsYWNlKC9cXCsvZyxcIiBcIiksZj1bXCJuNFwiXTtpZigyPD1kLmxlbmd0aCl7dmFyIGc7dmFyIGs9ZFsxXTtnPVtdO2lmKGspZm9yKHZhciBrPWsuc3BsaXQoXCIsXCIpLGg9ay5sZW5ndGgsbT0wO208aDttKyspe3ZhciBsO2w9a1ttXTtpZihsLm1hdGNoKC9eW1xcdy1dKyQvKSl7dmFyIG49RGEuZXhlYyhsLnRvTG93ZXJDYXNlKCkpO2lmKG51bGw9PW4pbD1cIlwiO2Vsc2V7bD1uWzJdO2w9bnVsbD09bHx8XCJcIj09bD9cIm5cIjpDYVtsXTtuPW5bMV07aWYobnVsbD09bnx8XCJcIj09biluPVwiNFwiO2Vsc2UgdmFyIHI9QmFbbl0sbj1yP3I6aXNOYU4obik/XCI0XCI6bi5zdWJzdHIoMCwxKTtsPVtsLG5dLmpvaW4oXCJcIil9fWVsc2UgbD1cIlwiO2wmJmcucHVzaChsKX0wPGcubGVuZ3RoJiYoZj1nKTszPT1kLmxlbmd0aCYmKGQ9ZFsyXSxnPVtdLGQ9ZD9kLnNwbGl0KFwiLFwiKTpcbmcsMDxkLmxlbmd0aCYmKGQ9QWFbZFswXV0pJiYoYS5jW2VdPWQpKX1hLmNbZV18fChkPUFhW2VdKSYmKGEuY1tlXT1kKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCs9MSlhLmEucHVzaChuZXcgSChlLGZbZF0pKX19O2Z1bmN0aW9uIEZhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9dmFyIEdhPXtBcmltbzohMCxDb3VzaW5lOiEwLFRpbm9zOiEwfTtGYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj1uZXcgQyxjPXRoaXMuYyxkPW5ldyB2YSh0aGlzLmEuYXBpLHooYyksdGhpcy5hLnRleHQpLGU9dGhpcy5hLmZhbWlsaWVzO3hhKGQsZSk7dmFyIGY9bmV3IHphKGUpO0VhKGYpO0EoYyx5YShkKSxEKGIpKTtGKGIsZnVuY3Rpb24oKXthKGYuYSxmLmMsR2EpfSl9O2Z1bmN0aW9uIEhhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9SGEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLmlkLGM9dGhpcy5jLm07Yj9CKHRoaXMuYywodGhpcy5hLmFwaXx8XCJodHRwczovL3VzZS50eXBla2l0Lm5ldFwiKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7aWYoYilhKFtdKTtlbHNlIGlmKGMuVHlwZWtpdCYmYy5UeXBla2l0LmNvbmZpZyYmYy5UeXBla2l0LmNvbmZpZy5mbil7Yj1jLlR5cGVraXQuY29uZmlnLmZuO2Zvcih2YXIgZT1bXSxmPTA7ZjxiLmxlbmd0aDtmKz0yKWZvcih2YXIgZz1iW2ZdLGs9YltmKzFdLGg9MDtoPGsubGVuZ3RoO2grKyllLnB1c2gobmV3IEgoZyxrW2hdKSk7dHJ5e2MuVHlwZWtpdC5sb2FkKHtldmVudHM6ITEsY2xhc3NlczohMSxhc3luYzohMH0pfWNhdGNoKG0pe31hKGUpfX0sMkUzKTphKFtdKX07ZnVuY3Rpb24gSWEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9W119SWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5mLmlkLGM9dGhpcy5jLm0sZD10aGlzO2I/KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX3x8KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfXz17fSksYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fW2JdPWZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBnPTAsaz1jLmZvbnRzLmxlbmd0aDtnPGs7KytnKXt2YXIgaD1jLmZvbnRzW2ddO2QuYS5wdXNoKG5ldyBIKGgubmFtZSxnYShcImZvbnQtd2VpZ2h0OlwiK2gud2VpZ2h0K1wiO2ZvbnQtc3R5bGU6XCIraC5zdHlsZSkpKX1hKGQuYSl9LEIodGhpcy5jLHoodGhpcy5jKSsodGhpcy5mLmFwaXx8XCIvL2YuZm9udGRlY2suY29tL3MvY3NzL2pzL1wiKStlYSh0aGlzLmMpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtiJiZhKFtdKX0pKTphKFtdKX07dmFyIFk9bmV3IHBhKHdpbmRvdyk7WS5hLmMuY3VzdG9tPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyB1YShiLGEpfTtZLmEuYy5mb250ZGVjaz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgSWEoYixhKX07WS5hLmMubW9ub3R5cGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHNhKGIsYSl9O1kuYS5jLnR5cGVraXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEhhKGIsYSl9O1kuYS5jLmdvb2dsZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRmEoYixhKX07dmFyIFo9e2xvYWQ6cChZLmxvYWQsWSl9O1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIFp9KTpcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9Wjood2luZG93LldlYkZvbnQ9Wix3aW5kb3cuV2ViRm9udENvbmZpZyYmWS5sb2FkKHdpbmRvdy5XZWJGb250Q29uZmlnKSk7fSgpKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rYW5kdXZpc2xhL3BseWdybmRcclxudmFyIFBseWdybmQgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpczsgICAgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHJvb3Qgb2JqZWN0O1xyXG5cdHRoaXMudmlld3MgPSBbXTsgICAgICAgICAgICAgICAgICAgIC8vIEFycmF5IHdpdGggdmlld3NcclxuXHR0aGlzLnRvdGFsVmlld3MgPSBbXTsgICAgICAgICAgICAgICAvLyBDb3VudGVyIHRvIGtlZXAgdHJhY2sgaWYgYWxsIHZpZXdzIGFyZSBsb2FkZWQuXHJcblx0dGhpcy5jdXJyZW50VmlldyA9IDA7ICAgICAgICAgICAgICAgLy8gQ3VycmVudFZpZXdcclxuXHR0aGlzLm1vdXNlUG9zaXRpb24gPSB7eDogKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvMTAwKjIwKSwgeTogKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LzEwMCoyMCl9OyAgLy8gTW91c2UgcG9zaXRpb24gKGNhbiBiZSB1c2VkIGJ5IHZpZXdzKVxyXG5cdHRoaXMuZnJhbWVSYXRlID0gNjA7XHJcblx0dGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHR0aGlzLmNsaWNrID0gZmFsc2U7XHJcblxyXG5cdC8vIENyZWF0ZSBjYW52YXMgb2JqZWN0OlxyXG5cdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmdcIilbMF07XHJcbi8vXHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcblx0Ly8gQ29udGV4dCBPYmplY3Q6XHJcblx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cdC8vIFJlc2l6ZSBmdW5jdGlvbjpcclxuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRfdGhpcy5jdHgud2lkdGggID0gX3RoaXMuY2FudmFzLndpZHRoICA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblx0XHRfdGhpcy5jdHguaGVpZ2h0ID0gX3RoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG5cdH07XHJcblxyXG5cdC8vIEFuZCBiaW5kIGl0IHRvIHRoZSB3aW5kb3c6XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemUpO1xyXG5cdHRoaXMucmVzaXplKCk7XHJcblxyXG5cdC8vIE1vdXNlIHBvc2l0aW9uIChjYW4gYmUgdXNlZCBieSB2aWV3cyk6XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZSl7XHJcblx0XHRfdGhpcy5tb3VzZVBvc2l0aW9uLnggPSBlLmNsaWVudFg7XHJcblx0XHRfdGhpcy5tb3VzZVBvc2l0aW9uLnkgPSBlLmNsaWVudFk7XHJcblx0fSk7XHJcblxyXG5cdC8qXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlUG9zaXRpb24ueCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG5cdCBfdGhpcy5tb3VzZVBvc2l0aW9uLnkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IHRydWU7XHJcblx0IF90aGlzLmNsaWNrID0gdHJ1ZTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHQgX3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG5cdCBfdGhpcy5jbGljayA9IHRydWU7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cdCBfdGhpcy5jbGljayA9IGZhbHNlO1xyXG5cdCB9KTsqL1xyXG5cclxuXHQvLyBBZGQgZXh0cmEgZnVuY3Rpb25zIHRvIHRoZSBjb250ZXh0IG9iamVjdDpcclxuXHR0aGlzLmN0eC5saW5lVGhyb3VnaCA9IGZ1bmN0aW9uKHBvaW50cylcclxuXHR7XHJcblx0XHRmb3IodmFyIGkgaW4gcG9pbnRzKSB7XHJcblx0XHRcdHRoaXMubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguY3VydmVUaHJvdWdoID0gZnVuY3Rpb24ocG9pbnRzKVxyXG5cdHtcclxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDI7IGkgKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciB4YyA9IChwb2ludHNbaV0ueCArIHBvaW50c1tpICsgMV0ueCkgLyAyO1xyXG5cdFx0XHR2YXIgeWMgPSAocG9pbnRzW2ldLnkgKyBwb2ludHNbaSArIDFdLnkpIC8gMjtcclxuXHRcdFx0dGhpcy5xdWFkcmF0aWNDdXJ2ZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSwgeGMsIHljKTtcclxuXHRcdH1cclxuXHRcdC8vIGN1cnZlIHRocm91Z2ggdGhlIGxhc3QgdHdvIHBvaW50c1xyXG5cdFx0dGhpcy5xdWFkcmF0aWNDdXJ2ZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSwgcG9pbnRzW2krMV0ueCxwb2ludHNbaSsxXS55KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5kaXJlY3Rpb24gPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MilcclxuXHR7XHJcblx0XHRyZXR1cm4gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5kaXN0YW5jZSA9IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKVxyXG5cdHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQoXHJcblx0XHRcdE1hdGgucG93KHgyIC0geDEsIDIpICsgTWF0aC5wb3coeTIgLSB5MSwgMilcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZHJhd0NpcmNsZSA9IGZ1bmN0aW9uKHgsIHksIHJhZGl1cylcclxuXHR7XHJcblx0XHR0aGlzLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0LypcdFx0XHRcdC8vIFBhZ2VyIGZ1bmN0aW9uOlxyXG5cdCB0aGlzLnBhZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuXHQgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBhZ2VyKTtcclxuXHJcblx0IHRoaXMuYnVpbGRQYWdlciA9IGZ1bmN0aW9uKClcclxuXHQge1xyXG5cdCBmb3IodmFyIGkgaW4gX3RoaXMudmlld3MpXHJcblx0IHtcclxuXHQgLy8gQ3JlYXRlIGFuIGFuY2hvciwgd2hpY2ggbG9hZHMgdGhlIHNwZWNpZmljIHZpZXc6XHJcblx0IHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHQgYW5jaG9yLmlubmVyVGV4dCA9IHBhcnNlSW50KGkpICsgMTtcclxuXHQgYW5jaG9yLnNldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiLCBpKTtcclxuXHQgYW5jaG9yLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIF90aGlzLnZpZXdzW2ldLm5hbWUpO1xyXG5cdCBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLnBsYXlWaWV3KHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIpKTtcclxuXHQgfSk7XHJcblx0IF90aGlzLnBhZ2VyLmFwcGVuZENoaWxkKGFuY2hvcik7XHJcblx0IH1cclxuXHQgfTsqL1xyXG5cclxuXHQvLyBWaWV3cyBmdW5jdGlvbnM6XHJcblx0dGhpcy5hZGRWaWV3ID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdF90aGlzLnRvdGFsVmlld3MucHVzaCh7XHJcblx0XHRcdG9yZGVyOiBfdGhpcy50b3RhbFZpZXdzLmxlbmd0aCxcclxuXHRcdFx0c2x1ZzogXCJkb3RzLTJcIixcclxuXHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBDaGVjayBpZiBhbGwgaXMgbG9hZGVkIGFuZCBzdGFydCBpZiBzbzpcclxuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0dmFyIGludGVydmFsVGltZW91dCA9IDA7XHJcblx0XHR2YXIgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGludGVydmFsVGltZW91dCsrO1xyXG5cdFx0XHRpZihpbnRlcnZhbFRpbWVvdXQgPT0gMzAwKSB7XHJcblx0XHRcdFx0Ly8gd2FpdGVkIGZvciAzMCBzZWNvbmRzLiBTb21ldGhpbmcgaXMgY2xlYXJseSB3cm9uZy5cclxuXHRcdFx0XHRhbGVydChcIlRpbWUgb3V0ISBJcyB5b3VyIEludGVybmV0IGNvbm5lY3Rpb24gdGjDoXQgc2xvdz8hP1wiKTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIENoZWNrIGlmIGFsbCB2aWV3cyBhcmUgbG9hZGVkOlxyXG5cdFx0XHR2YXIgYWxsTG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0Zm9yKHZhciBpIGluIF90aGlzLnRvdGFsVmlld3MpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZighX3RoaXMudG90YWxWaWV3c1tpXS5sb2FkZWQpIHsgYWxsTG9hZGVkID0gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZihhbGxMb2FkZWQpIHtcclxuXHRcdFx0XHQvLyBBbGwgdmlld3MgYXJlIGxvYWRlZC5cclxuXHRcdFx0XHR2YXIgbmV3Vmlld3MgPSBbXTtcclxuXHRcdFx0XHRmb3IodmFyIGkyIGluIF90aGlzLnRvdGFsVmlld3MpIHtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50U2x1ZyA9IF90aGlzLnRvdGFsVmlld3NbaTJdLnNsdWc7XHJcblx0XHRcdFx0XHRmb3IodmFyIGogaW4gX3RoaXMudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0aWYoX3RoaXMudmlld3Nbal0uc2x1ZyA9PSBjdXJyZW50U2x1Zykge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1ZpZXdzLnB1c2goX3RoaXMudmlld3Nbal0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF90aGlzLnZpZXdzID0gbmV3Vmlld3M7XHJcblxyXG5cdFx0XHRcdC8vIENsZWFyIGludGVydmFsOlxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcblxyXG5cdFx0XHRcdC8vIEJ1aWxkIHRoZSBwYWdlcjpcclxuLy9cdFx0XHRcdFx0XHRcdF90aGlzLmJ1aWxkUGFnZXIoKTtcclxuXHJcblx0XHRcdFx0Ly8gU3RhcnQgdGhlIGFwcDpcclxuXHRcdFx0XHRfdGhpcy5zdGFydCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAyNTApO1xyXG5cdH07XHJcblxyXG5cdC8vIFN0YXJ0IGZ1bmN0aW9uOlxyXG5cdHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gR2V0IHRoZSByaWdodCB2aWV3OlxyXG5cdFx0LypcdFx0XHRcdFx0aWYod2luZG93LmxvY2F0aW9uLmhhc2ggIT0gXCJcIikge1xyXG5cdFx0IHZhciBjdXJyZW50SGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG5cdFx0IGZvcih2YXIgaSBpbiBfdGhpcy52aWV3cykge1xyXG5cdFx0IGlmKF90aGlzLnZpZXdzW2ldLnNsdWcgPT0gY3VycmVudEhhc2gpIHtcclxuXHRcdCBfdGhpcy5jdXJyZW50VmlldyA9IGk7XHJcblx0XHQgfVxyXG5cdFx0IH1cclxuXHRcdCB9IGVsc2UgeyovXHJcblx0XHRfdGhpcy5jdXJyZW50VmlldyA9IF90aGlzLnZpZXdzLmxlbmd0aCAtIDE7XHJcbi8vXHRcdFx0XHRcdH1cclxuXHRcdF90aGlzLnBsYXlWaWV3KF90aGlzLmN1cnJlbnRWaWV3KTtcclxuXHRcdC8vIFNldHVwIHRoZSBsb29wOlxyXG5cdFx0Ly8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gYU5hbWUoKXtcclxuXHRcdChmdW5jdGlvbiBhTmFtZSgpe1xyXG5cdFx0XHQvLyBQYXNzIG9uIHNvbWUgdmFyaWFibGVzOlxyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycy5tb3VzZVBvc2l0aW9uID0gX3RoaXMubW91c2VQb3NpdGlvbjtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMubW91c2VEb3duID0gX3RoaXMubW91c2VEb3duO1xyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycy5jbGljayA9IF90aGlzLmNsaWNrO1xyXG5cdFx0XHRfdGhpcy5jbGljayA9IGZhbHNlO1xyXG5cdFx0XHQvLyBNYWtlIHRoYXQgc3RlcDpcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnN0ZXBGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFOYW1lKTtcclxuXHRcdC8vIH0sIDEwMDAgLyBfdGhpcy5mcmFtZVJhdGUpOyAvLyBkZWZhdWx0ID0gNjAgZnBzLlxyXG5cdFx0XHR9KSgpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucGxheVZpZXcgPSBmdW5jdGlvbih2aWV3TnIpXHJcblx0e1xyXG5cdFx0Ly8gVW4taW5pdGlhbGl6ZSB0aGUgY3VycmVudCB2aWV3OlxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnVuSW5pdEZ1bmN0aW9uKF90aGlzLmN0eCwgX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMpO1xyXG5cdFx0fSBjYXRjaChlKSB7fVxyXG5cdFx0Ly8gR28gZnVydGhlciB3aXRoIHRoZSByZXF1ZXN0ZWQgdmlldyBmcm9tIGhlcmU6XHJcblx0XHRfdGhpcy5jdXJyZW50VmlldyA9IHZpZXdOcjtcclxuXHRcdC8vIFJlbW92ZSB0aGUgY2xhc3Mgb2YgdGhlIGFjdGl2ZSB2aWV3OlxyXG4vL1x0XHRcdFx0XHRpZih0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhLmFjdGl2ZVwiKSkge1xyXG4vL1x0XHRcdFx0XHRcdHRoaXMucGFnZXIucXVlcnlTZWxlY3RvcihcImEuYWN0aXZlXCIpLmNsYXNzTmFtZSA9IFwiXCI7XHJcbi8vXHRcdFx0XHRcdH1cclxuXHRcdC8vIEFuZCBhZGQgaXQgdG8gdGhlIG5ldyB2aWV3IVxyXG4vL1x0XHRcdFx0XHR0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhW2RhdGEtdmlldz1cIlwiICsgX3RoaXMuY3VycmVudFZpZXcgKyBcIlwiXVwiKS5jbGFzc05hbWUgPSBcImFjdGl2ZVwiXHJcblx0XHQvLyBTZXQgdGhlIGhhc2g6XHJcbi8vXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnNsdWc7XHJcblx0XHQvLyBJbml0aWFsaXplIHRoZSBjdXJyZW50IHZpZXc6XHJcblx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10uaW5pdEZ1bmN0aW9uKF90aGlzLmN0eCwgX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMpO1xyXG5cdH07XHJcblxyXG59O1xyXG5cclxudmFyIFN0ZXBHZW5lcmF0b3IgPSBmdW5jdGlvbihjb21wbGV4aXR5LCBtaW5JbmMsIG1heEluYywgbWluTXVsLCBtYXhNdWwpXHJcbntcclxuXHR0aGlzLnN0ZXBzICAgICAgID0gW107XHJcblx0dGhpcy5pbmNzICAgICAgICA9IFtdO1xyXG5cdHRoaXMubXVsdGlwbGllcnMgPSBbXTtcclxuXHR0aGlzLmNvbXBsZXhpdHkgID0gY29tcGxleGl0eTtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHJcblx0Ly8gRGVmYXVsdHM6XHJcblx0aWYobWluSW5jID09PSBudWxsKSB7IG1pbkluYyA9IDA7IH1cclxuXHRpZihtYXhJbmMgPT09IG51bGwpIHsgbWF4SW5jID0gMC4xOyB9XHJcblx0aWYobWluTXVsID09PSBudWxsKSB7IG1pbk11bCA9IDAuNzsgfVxyXG5cdGlmKG1heE11bCA9PT0gbnVsbCkgeyBtYXhNdWwgPSAxLjM7IH1cclxuXHJcblx0Ly8gSW5pdGlhbGlzZTpcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0e1xyXG5cdFx0dGhpcy5zdGVwcy5wdXNoKE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJKTtcclxuXHRcdHRoaXMuaW5jcy5wdXNoKG1pbkluYyArIE1hdGgucmFuZG9tKCkgKiAobWF4SW5jIC0gbWluSW5jKSk7XHJcblx0XHR0aGlzLm11bHRpcGxpZXJzLnB1c2gobWluTXVsICsgTWF0aC5yYW5kb20oKSAqIChtYXhNdWwgLSBtaW5NdWwpKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc3RlcCA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHQvLyBJbmNyZWFzZSB0aGUgY291bnRlcnM6XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3RoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRfdGhpcy5zdGVwc1tpXSArPSBfdGhpcy5pbmNzW2ldO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIFN0ZXAgWFktZnVuY3Rpb246XHJcblx0dGhpcy5nZXRYWSA9IGZ1bmN0aW9uKG9mZnNldCwgdywgaClcclxuXHR7XHJcblx0XHRpZihvZmZzZXQgPT09IG51bGwpIHsgb2Zmc2V0ID0gMDsgfVxyXG5cclxuXHRcdHZhciB4VmFsdWUgPSAwO1xyXG5cdFx0dmFyIHlWYWx1ZSA9IDA7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlIFhZOlxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IF90aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0eFZhbHVlICs9IE1hdGguc2luKF90aGlzLnN0ZXBzW2ldICsgKF90aGlzLmluY3NbaV0gKiBvZmZzZXQpKSAqIHc7XHJcblx0XHRcdHlWYWx1ZSArPSBNYXRoLmNvcygoX3RoaXMuc3RlcHNbaV0gKyAoX3RoaXMuaW5jc1tpXSAqIG9mZnNldCkpICogX3RoaXMubXVsdGlwbGllcnNbaV0pICogaDtcclxuXHRcdH1cclxuXHRcdC8vIFJldHVybiBpdDpcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHg6IHhWYWx1ZSxcclxuXHRcdFx0eTogeVZhbHVlXHJcblx0XHR9O1xyXG5cdH07XHJcbn07XHJcblxuXG5cblxuXHJcbnZhciBwZyA9IG5ldyBQbHlncm5kKCk7XHJcbnBnLnZpZXdzLnB1c2goe1xyXG5cdG5hbWUgICAgICAgICAgICA6IFwiRG90cyAyXCIsXHJcblx0c2x1ZyAgICAgICAgICAgIDogXCJkb3RzLTJcIixcclxuXHQvLyBWYXJpYWJsZXMgdXNlZCBieSB0aGlzIHZpZXc6XHJcblx0dmFycyAgICAgICAgICAgIDoge1xyXG5cdFx0c3RlcHM6IG51bGwsXHJcblx0XHRjdXJyZW50WDogMCxcclxuXHRcdGN1cnJlbnRZOiAwXHJcblx0fSxcclxuXHQvLyBJbml0aWFsaXNhdGlvbjpcclxuXHRpbml0RnVuY3Rpb24gICAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe1xyXG5cdFx0dmFycy5zdGVwcyA9IG5ldyBTdGVwR2VuZXJhdG9yKDQsIDAsIDAuMDIsIDAuNywgMS4zKTtcclxuXHRcdHZhcnMucHJldkRpc3RhbmNlcyA9IHt9O1xyXG5cdH0sXHJcblx0Ly8gVW4taW5pdGlhbGlzYXRpb246XHJcblx0dW5Jbml0RnVuY3Rpb24gIDogZnVuY3Rpb24oY3R4LCB2YXJzKXt9LFxyXG5cdC8vIFN0ZXBwaW5nIGZ1bmN0aW9uOlxyXG5cdHN0ZXBGdW5jdGlvbiAgICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7XHJcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC53aWR0aCwgY3R4LmhlaWdodCk7XHJcblx0XHR2YXIgc3RlcFNpemUgPSBjdHgud2lkdGggLyAzMDtcclxuXHRcdHZhciBzdGVwc1ggPSBjdHgud2lkdGggLyBzdGVwU2l6ZTtcclxuXHRcdHZhciBzdGVwc1kgPSBjdHguaGVpZ2h0IC8gc3RlcFNpemU7XHJcblxyXG4vL1x0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gXCIjMDBkZGZmXCI7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjOGMyNDNlXCI7XHJcblxyXG5cdFx0Ly8gQWRkcyBhIHNpbXBsZSBlYXNlIHRvIHRoZSBtb3VzZTpcclxuXHRcdHZhcnMuY3VycmVudFggKz0gKHZhcnMubW91c2VQb3NpdGlvbi54IC0gdmFycy5jdXJyZW50WCkgLyAyMDtcclxuXHRcdHZhcnMuY3VycmVudFkgKz0gKHZhcnMubW91c2VQb3NpdGlvbi55IC0gdmFycy5jdXJyZW50WSkgLyAyMDtcclxuXHJcblx0XHR2YXJzLnN0ZXBzLnN0ZXAoKTtcclxuXHJcblx0XHR2YXIgc2l6ZSA9IGN0eC53aWR0aC8xLjU7XHJcblxyXG5cdFx0Zm9yKHZhciB5ID0gMDsgeSA8IHN0ZXBzWTsgeSArKylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKHZhciB4ID0gMDsgeCA8IHN0ZXBzWDsgeCArKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBjWCA9ICh5JTIgKiBzdGVwU2l6ZSAvIDIpICsgKHggKiBzdGVwU2l6ZSk7XHJcblx0XHRcdFx0dmFyIGNZID0geSAqIHN0ZXBTaXplO1xyXG5cclxuXHRcdFx0XHQvLyBvdXRzaWRlOlxyXG5cdFx0XHRcdHZhciByYWQgPSBNYXRoLmF0YW4yKGNYIC0gdmFycy5jdXJyZW50WCwgY1kgLSB2YXJzLmN1cnJlbnRZKTtcclxuXHJcblx0XHRcdFx0Ly8gZGlzdGFuY2U6XHJcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG5cdFx0XHRcdFx0TWF0aC5wb3codmFycy5jdXJyZW50WCAtIGNYLCAyKSArIE1hdGgucG93KHZhcnMuY3VycmVudFkgLSBjWSwgMilcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR2YXIgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgKHNpemUvMikgLSBkaXN0YW5jZSk7XHJcblx0XHRcdFx0dmFyIHAgPSBvZmZzZXQvc2l6ZTtcclxuXHRcdFx0XHRwKj0xLXA7XHJcblx0XHRcdFx0b2Zmc2V0ID0gKHNpemUvMikgKiBwO1xyXG5cclxuXHRcdFx0XHR2YXIgc3RlcFhZID0gdmFycy5zdGVwcy5nZXRYWSgoeSpzdGVwc1gpKyh4KjMpLCBvZmZzZXQsIG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdHZhciBkWCA9IHN0ZXBYWS54ICsgY1ggKyBNYXRoLnNpbihyYWQpICogKG9mZnNldCk7XHJcblx0XHRcdFx0dmFyIGRZID0gc3RlcFhZLnkgKyBjWSArIE1hdGguY29zKHJhZCkgKiAob2Zmc2V0KTtcclxuXHRcdFx0XHQvLyB2YXIgZFggPSBjWDtcclxuXHRcdFx0XHQvLyB2YXIgZFkgPSBjWSArIE1hdGguY29zKHJhZCkgKiAob2Zmc2V0KTtcclxuXHJcblx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGN0eC5kcmF3Q2lyY2xlKGRYLCBkWSwgZGlzdGFuY2UvODApO1xyXG5cdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxucGcuYWRkVmlldygpO1xyXG4vLyBwZy5sb2FkKCk7XHJcbiIsIi8vIDIwMTYgKEMpIEFudG9uaW8gUmVkb25kbyAvIGFudG9uaW9yZWRvbmRvLmNvbVxyXG4vLyBcIm9cIiBpcyBhIG1pY3JvLWxpYnJhcnkgd2hpY2ggY29udGFpbnMgYmFzaWMgRE9NIGZ1bmN0aW9ucyB3aXRoIGEgc29ydGVyIG5hbWUuXHJcbi8vIEl0IGFsc28gY29udGFpbnMgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aCBjb29raWVzLCBhbmQgc29tZSBvdGhlciBtZXRob2RzLlxyXG5cclxuKGZ1bmN0aW9uKG8pIHtcclxuXHJcblx0by5nYyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcclxuXHR9XHJcblxyXG5cdG8uZ2NhID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKTtcclxuXHR9XHJcblxyXG5cdG8ucXMgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG5cdH1cclxuXHJcblx0by5xc2EgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuXHR9XHJcblxyXG5cdG8uYWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG5cdH1cclxuXHJcblx0by50byA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHRvLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG1pbiA9IC01MCwgbWF4ID0gNTA7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5jaGVja1RyYW5zZm9ybXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcInRyYW5zZm9ybVwiO1xyXG5cdFx0ZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiLFxyXG5cdFx0XHRcdGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuXHRcdGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdHZhciBjID0gY2FbaV07XHJcblx0XHRcdHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIilcclxuXHRcdFx0XHRjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XHJcblx0XHRcdGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdG8uc2V0Q29va2llID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIGRheXMpIHtcclxuXHRcdHZhciBleHBpcmVzO1xyXG5cdFx0aWYgKGRheXMpIHtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcblx0XHRcdGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9HTVRTdHJpbmcoKTtcclxuXHRcdH0gZWxzZSBleHBpcmVzID0gXCJcIjtcclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxuXHR9XHJcblxyXG5cdG8ucmVtb3ZlQ29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dGhpcy5zZXRDb29raWUobmFtZSxcIlwiLC0xKTtcclxuXHR9XHJcblx0XHJcbn0od2luZG93Lm8gPSB3aW5kb3cubyB8fCB7fSkpO1xyXG4iLCJcclxuZnVuY3Rpb24gc2hvd0Nvb2tpZU1lc3NhZ2UoKSB7XHJcblx0by5nYyhcImNvb2tpZXNcIikuY2xhc3NMaXN0LmFkZChcImNvb2tpZXMtLWluXCIpO1xyXG5cdG8uZ2MoXCJjb29raWVzX19jbG9zZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0by5nYyhcImNvb2tpZXNcIikuY2xhc3NMaXN0LnJlbW92ZShcImNvb2tpZXMtLWluXCIpO1xyXG5cdFx0by5zZXRDb29raWUoXCJjb29raWVNZXNzYWdlXCIsIGZhbHNlLCAzNjUpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvb2tpZXMgY2xvc2VcIik7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUludHJvKHR5cGUpIHtcclxuXHR2YXIgbW9kaWZpZXIgPSBcIm91dFwiLFxyXG5cdFx0dGltZSA9IDQwMDA7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIDI6IG1vZGlmaWVyID0gXCJvdXQyXCI7IHRpbWUgPSAxMDAwO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoby5nZXRDb29raWUoXCJjb29raWVNZXNzYWdlXCIpID09PSBudWxsKVxyXG5cdFx0by50byhzaG93Q29va2llTWVzc2FnZSwgdGltZSk7XHJcblx0XHJcblx0dmFyIGludHJvID0gby5nYyhcImludHJvXCIpLFxyXG5cdFx0aW50cm9EYXJrZW5lciA9IG8uZ2MoXCJpbnRyby1kYXJrZW5lclwiKTtcclxuXHRpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm8tLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImludHJvXCIpKVxyXG5cdFx0XHRpbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fSk7XHJcblx0aW50cm9EYXJrZW5lci5jbGFzc0xpc3QuYWRkKFwiaW50cm8tZGFya2VuZXItLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvRGFya2VuZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW50cm8tZGFya2VuZXJcIikpXHJcblx0XHRcdGludHJvRGFya2VuZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH0pO1xyXG5cdFxyXG5cdG8uZ2MoXCJhcl9fbG9nby1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImFyX19sb2dvLWNvbnRhaW5lci0taW5cIik7XHJcblx0by5nYyhcImFyX190ZXh0XCIpLmNsYXNzTGlzdC5hZGQoXCJhcl9fdGV4dC0taW5cIik7XHJcblx0by5nYyhcIm1haW4tYmdcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tYmctLWluXCIpO1xyXG5cdG8uZ2MoXCJjaG9vc2UtcHJvZmlsZS10ZXh0XCIpLmNsYXNzTGlzdC5hZGQoXCJjaG9vc2UtcHJvZmlsZS10ZXh0LS1pblwiKTtcclxuXHRcclxuXHRvLmdjKFwicHJvZmlsZS0tMVwiKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tMWluXCIpO1xyXG5cdG8uZ2MoXCJwcm9maWxlLS0yXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS0yaW5cIik7XHJcblx0by5nYyhcInByb2ZpbGUtLTNcIikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLTNpblwiKTtcclxuXHRvLnRvKGZ1bmN0aW9uKCkge1xyXG5cdFx0by5xc2EoXCIucHJvZmlsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHsgaXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tbm8tZGVsYXlcIik7IH0gKTtcclxuXHR9LCAyMDApO1xyXG5cdFxyXG5cdG8uZ2MoXCJmb290ZXJcIikuY2xhc3NMaXN0LmFkZChcImZvb3Rlci0taW5cIik7XHJcblx0by50byhmdW5jdGlvbigpIHsgby5nYyhcImZvb3RlclwiKS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLS1uby1kZWxheVwiKTsgfSwgMjAwMCk7XHJcblx0XHJcblx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCA+PSA4MTApIHtcclxuXHRcdHBnLmxvYWQoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdEludHJvKCkge1xyXG5cdG8uZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24tLWJvdHRvbVwiKTtcclxuXHRvLmdjKFwic2Nyb2xsLWRvd25fX2lubmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bl9faW5uZXItLW91dFwiKTtcclxuXHRcclxuXHR2YXIgdmlld1BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcclxuXHRcdHdoZWVsTGV2ZWwgPSAwLFxyXG5cdFx0d2hlZWxMZXZlbEZvcm1lciA9IDAsXHJcblx0XHRwaHJhc2VzID0gby5nY2EoXCJwaHJhc2VzX19waHJhc2VcIiksXHJcblx0XHRidWJibGVzID0gby5nY2EoXCJidWJibGVzX19sYXllclwiKSxcclxuXHRcdHZpc2libGVQaHJhc2VzID0gW10sXHJcblx0XHR2aXNpYmxlQnViYmxlcyA9IFtdLFxyXG5cdFx0eVN0YXJ0LFxyXG5cdFx0eUVuZCxcclxuXHRcdHRyYW5zZm9ybSA9IG8uY2hlY2tUcmFuc2Zvcm1zU3VwcG9ydGVkKCksXHJcblx0XHRtb3VzZU1vdmVMaXN0ZW5lcixcclxuXHRcdG1vdXNlV2hlZWxMaXN0ZW5lcixcclxuXHRcdHRvdWNoU3RhcnRMaXN0ZW5lcixcclxuXHRcdHRvdWNoRW5kTGlzdGVuZXIsXHJcblx0XHRrZXlEb3duTGlzdGVuZXIsXHJcblx0XHR0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCxcclxuXHRcdHRvSGludHM7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0Ly8gT24gZGVza3RvcCB2ZXJzaW9uIGl0IG1vdmVzIHRoZSBwaHJhc2VzIGFuZCBidWJibGVzIG9uIHRoZSAzZCBzcGFjZSBkZXBlbmRpbmcgb24gdGhlIG1vdXNlIHBvc2l0aW9uXHJcblx0aWYgKHZpZXdQb3J0V2lkdGggPj0gODEwKVxyXG5cdFx0by5hZShcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhWjogXCIgKyBlLmRlbHRhWik7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJkZWx0YU1vZGU6IFwiICsgZS5kZWx0YU1vZGUpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiY2xpZW50WDogXCIgKyBlLmNsaWVudFgpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiY2xpZW50WTogXCIgKyBlLmNsaWVudFkpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwicm90YXRlWChcIiArIC0oMC4wMiplLmNsaWVudFktMTApICtcImRlZylcIik7XHJcblx0XHRcdHZhciBwaHJhc2VzID0gby5nYyhcInBocmFzZXNcIiksIFxyXG5cdFx0XHRcdGJ1YmJsZXMgPSBvLmdjKFwiYnViYmxlc1wiKTtcclxuXHRcdFx0cGhyYXNlcy5zdHlsZVt0cmFuc2Zvcm1dID0gXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgKyBcImRlZykgcm90YXRlWShcIiArICgwLjAyKmUuY2xpZW50WC0yNSkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyAoLTAuMDUqZS5jbGllbnRYKzEwMCkgKyBcInB4LCAwLCAwKVwiO1xyXG5cdFx0XHRidWJibGVzLnN0eWxlW3RyYW5zZm9ybV0gPSBwaHJhc2VzLnN0eWxlW3RyYW5zZm9ybV07XHJcblx0XHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBTaG93cyBhIHRleHQgaGludCBpZiB0aGUgaW50cm8gZG9lc24ndCBzdGFydCBzY3JvbGxpbmcgZG93biBpbiAzIHNlY29uZHNcclxuXHR0b0hpbnRzID0gby50byhmdW5jdGlvbigpIHtcclxuXHRcdGlmICh3aGVlbExldmVsID09PSAwKVxyXG5cdFx0XHRpZiAodmlld1BvcnRXaWR0aCA+PSA4MTApXHJcblx0XHRcdFx0by5nYyhcInNjcm9sbC1kb3duLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLWhpbnQtLWluXCIpO1xyXG5cdFx0XHRlbHNlIG8uZ2MoXCJzd2lwZS11cC1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzd2lwZS11cC1oaW50LS1pblwiKTtcclxuXHR9LCAzMDAwKTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBDb3VudHMgd2hlZWwgc2Nyb2xsIG1vdmVtZW50cyBhbmQgbW92ZXMgcGhyYXNlcyBhbmQgYnViYmxlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVQaHJhc2VzKGxldmVsKSB7XHJcblx0XHRpZiAoKGxldmVsPjAgJiYgd2hlZWxMZXZlbDw1KSB8fCAobGV2ZWw8MCAmJiB3aGVlbExldmVsPjApKVxyXG5cdFx0XHR3aGVlbExldmVsICs9IGxldmVsO1xyXG5cdFx0ZWxzZSByZXR1cm47XHJcblx0XHRcclxuXHRcdGlmICh3aGVlbExldmVsID09PSAxKSB7XHJcblx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93bi1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi1oaW50LS1vdXRcIik7XHJcblx0XHRcdG8uZ2MoXCJzd2lwZS11cC1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzd2lwZS11cC1oaW50LS1vdXRcIik7XHJcblx0XHR9IFxyXG5cdFx0XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gNSkge1xyXG5cdFx0XHRvLnRvKGZ1bmN0aW9uKCkgeyBvLmdjKFwiZW50ZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJlbnRlci1idXR0b24tLWluXCIpOyB9LCAxMDAwKTtcclxuXHRcdFx0by5nYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi0tb3V0XCIpO1xyXG5cdFx0XHRvLmdjKFwic2tpcC1pbnRyb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2tpcC1pbnRyby0taW5cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvLmdjKFwiZW50ZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJlbnRlci1idXR0b24tLWluXCIpO1xyXG5cdFx0XHRvLmdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbC1kb3duLS1vdXRcIik7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID4gMClcclxuXHRcdFx0XHRvLmdjKFwic2tpcC1pbnRyb1wiKS5jbGFzc0xpc3QuYWRkKFwic2tpcC1pbnRyby0taW5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPiB3aGVlbExldmVsRm9ybWVyKSB7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLnNwbGljZSgwLCAwLCAocGhyYXNlc1t3aGVlbExldmVsLTFdKSk7XHJcblx0XHRcdHZpc2libGVCdWJibGVzLnNwbGljZSgwLCAwLCAoYnViYmxlc1t3aGVlbExldmVsLTFdKSk7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcInBocmFzZXNfX3BocmFzZS0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0XHR2aXNpYmxlQnViYmxlc1tpXS5jbGFzc0xpc3QuYWRkKFwiYnViYmxlc19fbGF5ZXItLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmICh3aGVlbExldmVsIDwgd2hlZWxMZXZlbEZvcm1lcikge1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwaHJhc2VzX19waHJhc2UtLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdFx0dmlzaWJsZUJ1YmJsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZXNfX2xheWVyLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuc3BsaWNlKDAsIDEpO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlcy5zcGxpY2UoMCwgMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2hlZWxMZXZlbEZvcm1lciA9IHdoZWVsTGV2ZWw7XHJcblx0fVxyXG5cdFxyXG5cdG8uYWUoXCJ3aGVlbFwiLCBtb3VzZVdoZWVsTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUuZGVsdGFZID4gMClcclxuXHRcdFx0bW92ZVBocmFzZXMoMSk7XHJcblx0XHRlbHNlIGlmIChlLmRlbHRhWSA8IDApXHJcblx0XHRcdG1vdmVQaHJhc2VzKC0xKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNjQwNzIvZGV0ZWN0LWEtZmluZ2VyLXN3aXBlLXRocm91Z2gtamF2YXNjcmlwdC1vbi10aGUtaXBob25lLWFuZC1hbmRyb2lkXHJcblx0by5hZShcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydExpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0eVN0YXJ0ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0fSk7XHJcblx0XHJcblx0by5hZShcInRvdWNoZW5kXCIsIHRvdWNoRW5kTGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XHJcblx0XHR5RW5kID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdFx0aWYgKHlFbmQgLSB5U3RhcnQgPCAtNjApXHJcblx0XHRcdG1vdmVQaHJhc2VzKDEpO1xyXG5cdFx0ZWxzZSBpZiAoeUVuZCAtIHlTdGFydCA+IDYwKVxyXG5cdFx0XHRtb3ZlUGhyYXNlcygtMSk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgcmFuZG9tbHkgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IHRoZSBidWJibGUgbGF5ZXJzXHJcblx0KGZ1bmN0aW9uIGNvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCgpIHtcclxuXHRcdGZvciAodmFyIG49MDsgbjx2aXNpYmxlQnViYmxlcy5sZW5ndGg7ICsrbikge1xyXG5cdFx0XHQvL3ZhciB6VHJhbnMgPSAvXFwuKnRyYW5zbGF0ZVpcXCgoLiopcHhcXCkvaS5leGVjKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHZcIikuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpWzFdO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlc1tuXS5maXJzdENoaWxkLnN0eWxlW3RyYW5zZm9ybV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIDApXCI7XHJcblx0XHRcdHZpc2libGVCdWJibGVzW25dLmZpcnN0Q2hpbGQuc3R5bGVbdHJhbnNmb3JtXSA9IFwidHJhbnNsYXRlM2QoXCIgKyBvLmdldFJhbmRvbUludCgpICsgXCJweCwgXCIgKyBvLmdldFJhbmRvbUludCgpICsgXCJweCwgMClcIjtcclxuXHRcdH1cclxuXHRcdHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50ID0gby50byhjb250cm9sbGVkUmFuZG9tTW92ZW1lbnQsIDMwMDApO1xyXG5cdH0pKCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gSGlkZXMgdGhlIEludHJvIHNjcmVlblxyXG5cdGZ1bmN0aW9uIHNraXBJbnRybyhnYUxhYmVsKSB7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVMaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG1vdXNlV2hlZWxMaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRMaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkxpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodG9Db250cm9sbGVkUmFuZG9tTW92ZW1lbnQpO1xyXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0b0hpbnRzKTtcclxuXHRcdFxyXG5cdFx0aGlkZUludHJvKCk7XHJcblx0XHRcclxuXHRcdG8uc2V0Q29va2llKFwiZmlyc3RUaW1lXCIsIGZhbHNlLCAzNjUpO1xyXG5cdFx0XHRcclxuXHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJTa2lwIEludHJvXCIsIGdhTGFiZWwpO1xyXG5cdH1cclxuXHRcclxuXHRvLmdjKFwiZW50ZXItYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7IHNraXBJbnRybyhcIkVudGVyIGJ1dHRvblwiKTsgfSk7XHJcblx0by5nYyhcInNraXAtaW50cm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHsgc2tpcEludHJvKFwiU2tpcCBpbnRybyBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdG8uYWUoXCJrZXlkb3duXCIsIGtleURvd25MaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcdFx0XHRcclxuXHRcdHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcblx0XHRcdGNhc2UgMzk6XHJcblx0XHRcdGNhc2UgNDA6IG1vdmVQaHJhc2VzKDEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAzNzpcclxuXHRcdFx0Y2FzZSAzODogbW92ZVBocmFzZXMoLTEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAyNzogc2tpcEludHJvKFwiRXNjIGtleVwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxufVxyXG4iLCJcclxuZnVuY3Rpb24gaW5pdE1haW4oKSB7XHJcblx0XHJcblx0dmFyIHRvUmVtb3ZlQ2xhc3NlcyxcclxuXHRcdHByZXZpb3VzU3RhdGUsXHJcblx0XHRwcm9maWxlU2VsZWN0ZWQgPSAwLFxyXG5cdFx0YW5pbUR1cmF0aW9uID0gNDAwLFxyXG5cdFx0YW5pbUR1cmF0aW9uTW9yZUluZm8gPSAzMDAsXHJcblx0XHRkZXNjcmlwdGlvblBhbmVsID0gby5nYyhcImRlc2NyaXB0aW9uLXBhbmVsXCIpLFxyXG5cdFx0bW9yZUluZm9QYW5lbCA9IG8uZ2MoXCJtb3JlLWluZm8tcGFuZWxcIiksXHJcblx0XHRtb3JlSW5mb0ltYWdlID0gby5nYyhcIm1vcmUtaW5mby1pbWFnZVwiKTtcclxuXHRcclxuXHRvLmdjKFwibWFpblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9zZW5kaW5nLWhpdHNcclxuXHRvLnFzKFwiLmJsb2NrX19jb250YWN0LWljb24uZW1haWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiRW1haWxcIik7IH0pO1xyXG5cdG8ucXMoXCIuYmxvY2tfX2NvbnRhY3QtaWNvbi5saW5rZWRpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJMaW5rZWRJblwiKTsgfSk7XHJcblx0by5xcyhcIi5ibG9ja19fY29udGFjdC1pY29uLmdpdGh1YlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJHaXRIdWJcIik7IH0pO1xyXG5cdG8ucXMoXCIubW9yZS1pbmZvLXBhbmVsX19jb250YWN0LWljb24uZW1haWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiRW1haWwgTUlcIik7IH0pO1xyXG5cdG8ucXMoXCIubW9yZS1pbmZvLXBhbmVsX19jb250YWN0LWljb24ubGlua2VkaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiTGlua2VkSW4gTUlcIik7IH0pO1xyXG5cdG8ucXMoXCIubW9yZS1pbmZvLXBhbmVsX19jb250YWN0LWljb24uZ2l0aHViXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvbnRhY3QgaWNvblwiLCBcIkdpdEh1YiBNSVwiKTsgfSk7XHJcblx0by5nYyhcIm1vcmUtaW5mby1wYW5lbF9fc291cmNlLWNvZGUtbGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJTb3VyY2UgY29kZSBsaW5rXCIpOyB9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBBZGRzIG5lY2Vzc2FyeSBsb2dpYyB0byBzaG93IHRoZSBEZXNjcmlwdGlvbiBwYW5lbCBmb3Igc29tZSBwcm9maWxlXHRcclxuXHRmdW5jdGlvbiBzaG93RGVzY3JpcHRpb25QYW5lbChuZXdQcm9maWxlKSB7XHJcblx0XHRwcmV2aW91c1N0YXRlID0gXCJkZXNjcmlwdGlvblBhbmVsXCI7XHJcblx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1wYW5lbC0taW5cIiwgXCJzXCIgKyBuZXdQcm9maWxlKTtcclxuXHRcdFxyXG5cdFx0dmFyIG5Qcm9maWxlID0gby5nYyhcInByb2ZpbGUtLVwiICsgbmV3UHJvZmlsZSk7XHJcblx0XHRuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tei1pbmRleFwiKTtcclxuXHRcdG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZFwiKTtcclxuXHRcdHN3aXRjaCAobmV3UHJvZmlsZSkge1xyXG5cdFx0XHRjYXNlIDE6IG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1sZWZ0XCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAyOiBuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAzOiBuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtcmlnaHRcIik7XHJcblx0XHR9XHJcblx0XHRuUHJvZmlsZS50aXRsZSA9IFwiQmFja1wiO1xyXG5cdFx0blByb2ZpbGUuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGVfX3RpdGxlLWJnLS1pblwiKTtcclxuXHRcdG5Qcm9maWxlLmNoaWxkcmVuWzNdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlX190aXRsZS10ZXh0LS1pblwiKTtcclxuXHRcdFxyXG5cdFx0by5nYyhcImRhcmtlbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJkYXJrZW5lci0taW5cIik7XHJcblxyXG5cdFx0Zm9yICh2YXIgbj0xOyBuPD0zOyArK24pXHJcblx0XHRcdGlmIChuZXdQcm9maWxlICE9PSBuKSB7XHJcblx0XHRcdFx0by5nYyhcInByb2ZpbGUtLVwiICsgbikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLW5vdC1zZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRzd2l0Y2ggKG4pIHtcclxuXHRcdFx0XHRcdGNhc2UgMTogby5nYyhcInByb2ZpbGUtLVwiICsgbikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkLWxlZnRcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAyOiBvLmdjKFwicHJvZmlsZS0tXCIgKyBuKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMzogby5nYyhcInByb2ZpbGUtLVwiICsgbikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkLXJpZ2h0XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRvLmdjYShcImRlc2MtcHJvZmlsZS0tXCIgKyBuZXdQcm9maWxlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0aXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0b1JlbW92ZUNsYXNzZXMpO1xyXG5cdFx0by50byhmdW5jdGlvbigpIHtcclxuXHRcdFx0blByb2ZpbGUuY2hpbGRyZW5bNF0uY2xhc3NMaXN0LmFkZChcInByb2ZpbGVfX2JhY2stYnV0dG9uLS1pblwiKTtcclxuXHRcdFx0by5nYyhcInByb2ZpbGUtc2VsZWN0ZWQtYmctLVwiICsgbmV3UHJvZmlsZSkuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtc2VsZWN0ZWQtYmctLWluXCIpO1xyXG5cdFx0XHRvLnFzKFwiLnByb2ZpbGUtc2VsZWN0ZWQtcGxhY2UtLVwiICsgbmV3UHJvZmlsZSArIFwiIC5wcm9maWxlLXNlbGVjdGVkLXBsYWNlX190aXRsZVwiKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1zZWxlY3RlZC1wbGFjZV9fdGl0bGUtLWluXCIpO1xyXG5cdFx0fSwgYW5pbUR1cmF0aW9uKTtcclxuXHRcdFxyXG5cdFx0by5nYyhcImRlc2NyaXB0aW9uLXBhbmVsX19vdmVyZmxvdy1oaWRlXCIpLnNjcm9sbFRvcCA9IDA7XHJcblx0XHRwcm9maWxlU2VsZWN0ZWQgPSBuZXdQcm9maWxlO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIlByb2ZpbGUgZGVzY3JpcHRpb24gcGFuZWwgb3BlblwiLCBcIlByb2ZpbGUgXCIgKyBuZXdQcm9maWxlKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gaGlkZURlc2NyaXB0aW9uUGFuZWwoKSB7XHJcblx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjcmlwdGlvbi1wYW5lbC0taW5cIik7XHJcblx0XHRcclxuXHRcdHZhciBzUHJvZmlsZSA9IG8uZ2MoXCJwcm9maWxlLS1cIiArIHByb2ZpbGVTZWxlY3RlZCk7XHJcblx0XHRzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWRcIik7XHJcblx0XHRzd2l0Y2ggKHByb2ZpbGVTZWxlY3RlZCkge1xyXG5cdFx0XHRjYXNlIDE6IHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1sZWZ0XCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAyOiBzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAzOiBzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtcmlnaHRcIik7XHJcblx0XHR9XHJcblx0XHRzUHJvZmlsZS50aXRsZSA9IFwiXCI7XHJcblx0XHRzUHJvZmlsZS5jaGlsZHJlbls0XS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZV9fYmFjay1idXR0b24tLWluXCIpO1xyXG5cdFx0XHJcblx0XHRvLmdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtlbmVyLS1pblwiKTtcclxuXHJcblx0XHRmb3IgKHZhciBuMj0xOyBuMjw9MzsgKytuMilcclxuXHRcdFx0aWYgKHByb2ZpbGVTZWxlY3RlZCAhPT0gbjIpIHtcclxuXHRcdFx0XHRvLmdjKFwicHJvZmlsZS0tXCIgKyBuMikuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLW5vdC1zZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRzd2l0Y2ggKG4yKSB7XHJcblx0XHRcdFx0XHRjYXNlIDE6IG8uZ2MoXCJwcm9maWxlLS1cIiArIG4yKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtbGVmdFwiKTsgYnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDI6IG8uZ2MoXCJwcm9maWxlLS1cIiArIG4yKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMzogby5nYyhcInByb2ZpbGUtLVwiICsgbjIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1yaWdodFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRvLmdjKFwicHJvZmlsZS1zZWxlY3RlZC1iZy0tXCIgKyBwcm9maWxlU2VsZWN0ZWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLXNlbGVjdGVkLWJnLS1pblwiKTtcclxuXHRcdG8ucXMoXCIucHJvZmlsZS1zZWxlY3RlZC1wbGFjZS0tXCIgKyBwcm9maWxlU2VsZWN0ZWQgKyBcIiAucHJvZmlsZS1zZWxlY3RlZC1wbGFjZV9fdGl0bGVcIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtc2VsZWN0ZWQtcGxhY2VfX3RpdGxlLS1pblwiKTtcclxuXHRcdFxyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIlByb2ZpbGUgZGVzY3JpcHRpb24gcGFuZWwgY2xvc2VcIiwgXCJQcm9maWxlIFwiICsgcHJvZmlsZVNlbGVjdGVkKTtcclxuXHJcblx0XHR2YXIgcmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzXCIgKyBwcm9maWxlU2VsZWN0ZWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0by5nY2EoXCJkZXNjLXByb2ZpbGUtLVwiICsgcHJvZmlsZVNlbGVjdGVkKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0XHRpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS16LWluZGV4XCIpO1xyXG5cclxuXHRcdFx0cHJvZmlsZVNlbGVjdGVkID0gMDtcclxuXHRcdH07XHJcblx0XHR0b1JlbW92ZUNsYXNzZXMgPSBvLnRvKHJlbW92ZUNsYXNzZXMsIGFuaW1EdXJhdGlvbik7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKG5ld1Byb2ZpbGUpIHtcclxuXHRcdGlmICghZGVzY3JpcHRpb25QYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXNjcmlwdGlvbi1wYW5lbC0taW5cIikpIHtcclxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtuZXdQcm9maWxlOiBuZXdQcm9maWxlfSwgXCJQcm9maWxlIFwiICsgbmV3UHJvZmlsZSwgXCIjcHJvZmlsZVwiICsgbmV3UHJvZmlsZSk7XHJcblx0XHRcdHNob3dEZXNjcmlwdGlvblBhbmVsKG5ld1Byb2ZpbGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdFx0aGlkZURlc2NyaXB0aW9uUGFuZWwoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0by5nYyhcInByb2ZpbGUtLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgxKTsgfSk7XHJcblx0by5nYyhcInByb2ZpbGUtLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgyKTsgfSk7XHJcblx0by5nYyhcInByb2ZpbGUtLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgzKTsgfSk7XHJcblx0by5nYyhcInByb2ZpbGUtbS0tMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKDEpOyB9KTtcclxuXHRvLmdjKFwicHJvZmlsZS1tLS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgc2hvd09yaGlkZURlc2NyaXB0aW9uUGFuZWwoMik7IH0pO1xyXG5cdG8uZ2MoXCJwcm9maWxlLW0tLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgzKTsgfSk7XHJcblx0by5nYyhcImJhY2stYnV0dG9uLW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgpOyB9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBBZGRzIGZ1bmN0aW9uYWxpdHkgdG8gXCJNb3JlIGluZm9cIiBidXR0b25cclxuXHRmdW5jdGlvbiBtb3JlSW5mb0V2ZW50TGlzdGVuZXIoZ2FMYWJlbCkge1xyXG5cdFx0cHJldmlvdXNTdGF0ZSA9IFwibW9yZUluZm9QYW5lbFwiO1xyXG5cdFx0XHJcblx0XHRtb3JlSW5mb1BhbmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cclxuXHRcdG1vcmVJbmZvUGFuZWwub2Zmc2V0SGVpZ2h0OyAvLyBUaGlzIGNhdXNlcyByZWZsb3cgYmVmb3JlIGFkZGluZyBuZXh0IGNsYXNzXHJcblx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xyXG5cdFx0bW9yZUluZm9QYW5lbC5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLXBhbmVsLS1pblwiKTtcclxuXHRcdFxyXG5cdFx0bW9yZUluZm9JbWFnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXHJcblx0XHRtb3JlSW5mb0ltYWdlLm9mZnNldEhlaWdodDtcclxuXHRcdC8qIGpzaGludCBpZ25vcmU6ZW5kICovXHJcblx0XHRtb3JlSW5mb0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8taW1hZ2UtLWluXCIpO1xyXG5cdFx0XHJcblx0XHRvLmdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LmFkZChcImRhcmtlbmVyLS1pbjJcIik7XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiTW9yZSBpbmZvXCIsIGdhTGFiZWwpO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBtb3JlSW5mb0Nsb3NlKGdhTGFiZWwpIHtcclxuXHRcdG1vcmVJbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vcmUtaW5mby1wYW5lbC0taW5cIik7XHJcblx0XHRtb3JlSW5mb0ltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJtb3JlLWluZm8taW1hZ2UtLWluXCIpO1xyXG5cdFx0by50byhmdW5jdGlvbigpIHtcclxuXHRcdFx0bW9yZUluZm9QYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdFx0bW9yZUluZm9JbWFnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdH0sIGFuaW1EdXJhdGlvbk1vcmVJbmZvKTtcclxuXHRcdFxyXG5cdFx0by5nYyhcImRhcmtlbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrZW5lci0taW4yXCIpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIk1vcmUgaW5mbyBjbG9zZVwiLCBnYUxhYmVsKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gbW9yZUluZm9DbG9zZUV2ZW50TGlzdGVuZXIoZ2FMYWJlbCkge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdG1vcmVJbmZvQ2xvc2UoZ2FMYWJlbCk7XHJcblx0fVxyXG5cdFxyXG5cdG8uZ2MoXCJmb290ZXJfX21vcmUtaW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe21vcmVJbmZvOiB0cnVlfSwgXCJNb3JlIEluZm9cIiwgXCIjbW9yZUluZm9cIik7XHJcblx0XHRtb3JlSW5mb0V2ZW50TGlzdGVuZXIoXCJGb290ZXIgYnV0dG9uXCIpO1xyXG5cdH0pO1xyXG5cdG8uZ2MoXCJmb290ZXItbV9fbW9yZS1pbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7bW9yZUluZm86IHRydWV9LCBcIk1vcmUgSW5mb1wiLCBcIiNtb3JlSW5mb1wiKTtcclxuXHRcdG1vcmVJbmZvRXZlbnRMaXN0ZW5lcihcIkZvb3RlciBtb2JpbGUgYnV0dG9uXCIpO1xyXG5cdH0pO1xyXG5cdG8uZ2MoXCJtb3JlLWluZm8taW1hZ2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBtb3JlSW5mb0Nsb3NlRXZlbnRMaXN0ZW5lcihcIkltYWdlIGNsaWNrXCIpOyB9KTtcclxuXHRvLmdjKFwibW9yZS1pbmZvLWltYWdlX19iYWNrLWJ1dHRvbi1tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgbW9yZUluZm9DbG9zZUV2ZW50TGlzdGVuZXIoXCJNb2JpbGUgYmFjayBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byBcIlNob3cgaW50cm8gYWdhaW5cIiBidXR0b25cclxuXHRmdW5jdGlvbiBzaG93SW50cm9BZ2FpbihnYUxhYmVsKSB7XHJcblx0XHRvLnJlbW92ZUNvb2tpZShcImZpcnN0VGltZVwiKTtcclxuXHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJTaG93IGludHJvIGFnYWluXCIsIGdhTGFiZWwpO1xyXG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0fVxyXG5cdG8uZ2MoXCJmb290ZXJfX3Nob3ctaW50cm8tYWdhaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93SW50cm9BZ2FpbihcIkZvb3RlciBidXR0b25cIik7IH0pO1xyXG5cdG8uZ2MoXCJmb290ZXItbV9fc2hvdy1pbnRyby1hZ2FpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dJbnRyb0FnYWluKFwiRm9vdGVyIG1vYmlsZSBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdG8uYWUoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiKSAmJiBlLmtleUNvZGUgPT09IDI3KVxyXG5cdFx0XHRzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgpO1xyXG5cdFx0ZWxzZSBpZiAobW9yZUluZm9QYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb3JlLWluZm8tcGFuZWwtLWluXCIpICYmIGUua2V5Q29kZSA9PT0gMjcpXHJcblx0XHRcdG1vcmVJbmZvQ2xvc2VFdmVudExpc3RlbmVyKFwiRXNjIGtleVwiKTtcclxuXHR9KTtcclxuXHRcclxuXHRvLmFlKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGUuc3RhdGUpIHtcclxuXHRcdFx0aWYgKGUuc3RhdGUubmV3UHJvZmlsZSlcclxuXHRcdFx0XHRzaG93RGVzY3JpcHRpb25QYW5lbChlLnN0YXRlLm5ld1Byb2ZpbGUpO1xyXG5cdFx0XHRlbHNlIGlmIChlLnN0YXRlLm1vcmVJbmZvKVxyXG5cdFx0XHRcdG1vcmVJbmZvRXZlbnRMaXN0ZW5lcihcIlB1c2ggc3RhdGVcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzd2l0Y2ggKHByZXZpb3VzU3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFwiZGVzY3JpcHRpb25QYW5lbFwiOiBoaWRlRGVzY3JpcHRpb25QYW5lbCgpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIFwibW9yZUluZm9QYW5lbFwiOiBtb3JlSW5mb0Nsb3NlKFwiUHVzaCBzdGF0ZVwiKTsgYnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJldmlvdXNTdGF0ZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBTaG93cyBvciBoaWRlcyB0aGUgc2Nyb2xsIGJ1dHRvbnMgb24gdGhlIGRlc2NyaXB0aW9uIHBhbmVsXHJcblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODk4MTMwL2NoZWNrLWlmLWEtdXNlci1oYXMtc2Nyb2xsZWQtdG8tdGhlLWJvdHRvbS8zNDU1MDE3MSMzNDU1MDE3MVxyXG5cdHZhciBkUFNjcm9sbCA9IG8uZ2MoXCJkZXNjcmlwdGlvbi1wYW5lbF9fb3ZlcmZsb3ctaGlkZVwiKSxcclxuXHRcdHVwQnV0dG9uID0gby5nYyhcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLXVwXCIpLFxyXG5cdFx0ZG93bkJ1dHRvbiA9IG8uZ2MoXCJkZXNjcmlwdGlvbi1wYW5lbF9fc2Nyb2xsLS1kb3duXCIpO1xyXG5cdFx0XHJcblx0ZFBTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoZFBTY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gZFBTY3JvbGwuc2Nyb2xsVG9wID09PSBkUFNjcm9sbC5jbGllbnRIZWlnaHQgJiZcclxuXHRcdFx0XHRkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiKSkgeyAvLyBBIHNjcm9sbCBldmVudCBpcyBmaXJlZCBhdCB0aGUgbWFpbiBzY3JlZW5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRkb3duQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1wYW5lbF9fc2Nyb2xsLS1kb3duLWhpZGRlblwiKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBlbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzMVwiKSkge1xyXG5cdFx0XHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJEZXNjcmlwdGlvbiBwYW5lbCBib3R0b20gcmVhY2hlZFwiLCBcIlByb2ZpbGUgMVwiKTtcclxuXHRcdFx0fSBlbHNlIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiczJcIikpIHtcclxuXHRcdFx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiRGVzY3JpcHRpb24gcGFuZWwgYm90dG9tIHJlYWNoZWRcIiwgXCJQcm9maWxlIDJcIik7XHJcblx0XHRcdH0gZWxzZSBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInMzXCIpKSB7XHJcblx0XHRcdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkRlc2NyaXB0aW9uIHBhbmVsIGJvdHRvbSByZWFjaGVkXCIsIFwiUHJvZmlsZSAzXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIGRvd25CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLWRvd24taGlkZGVuXCIpO1xyXG5cdFx0XHJcblx0XHRpZiAoZFBTY3JvbGwuc2Nyb2xsVG9wIDw9IDUpIHtcclxuXHRcdFx0dXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLXVwLWhpZGRlblwiKTtcclxuXHRcdH0gZWxzZSB1cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb24tcGFuZWxfX3Njcm9sbC0tdXAtaGlkZGVuXCIpO1xyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkUFNjcm9sbC5zY3JvbGxIZWlnaHQpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZFBTY3JvbGwuc2Nyb2xsVG9wKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRQU2Nyb2xsLmNsaWVudEhlaWdodCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkUFNjcm9sbC5zY3JvbGxIZWlnaHQgLSBkUFNjcm9sbC5zY3JvbGxUb3ApO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBodHRwczovL2NvZGVyd2FsbC5jb20vcC9odWpsaGcvc21vb3RoLXNjcm9sbGluZy13aXRob3V0LWpxdWVyeVxyXG5cdC8vIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvdDFkdjFyYm9cclxuXHRmdW5jdGlvbiBzY3JvbGxCeShlbGVtZW50LCB0YXJnZXQsIGR1cmF0aW9uKSB7XHJcblx0XHR0YXJnZXQgPSBNYXRoLnJvdW5kKHRhcmdldCk7XHJcblx0XHRkdXJhdGlvbiA9IE1hdGgucm91bmQoZHVyYXRpb24pO1xyXG5cdFx0XHJcblx0XHRpZiAoZHVyYXRpb24gPCAwKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJiYWQgZHVyYXRpb25cIik7XHJcblx0XHRcdFxyXG5cdFx0aWYgKGR1cmF0aW9uID09PSAwKSB7XHJcblx0XHRcdGVsZW1lbnQuc2Nyb2xsVG9wID0gdGFyZ2V0O1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cdFx0dmFyIGVuZFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcclxuXHRcdFxyXG5cdFx0dmFyIHN0YXJ0VG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHR2YXIgZGlzdGFuY2UgPSB0YXJnZXQgLSBzdGFydFRvcDtcclxuXHRcdFxyXG5cdFx0Ly8gYmFzZWQgb24gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbW9vdGhzdGVwXHJcblx0XHR2YXIgc21vb3RoU3RlcCA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHBvaW50KSB7XHJcblx0XHRcdGlmKHBvaW50IDw9IHN0YXJ0KSB7IHJldHVybiAwOyB9XHJcblx0XHRcdGlmKHBvaW50ID49IGVuZCkgeyByZXR1cm4gMTsgfVxyXG5cdFx0XHR2YXIgeCA9IChwb2ludCAtIHN0YXJ0KSAvIChlbmQgLSBzdGFydCk7IC8vIGludGVycG9sYXRpb25cclxuXHRcdFx0cmV0dXJuIHgqeCooMyAtIDIqeCk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRcdC8vIFRoaXMgaXMgdG8ga2VlcCB0cmFjayBvZiB3aGVyZSB0aGUgZWxlbWVudFwicyBzY3JvbGxUb3AgaXNcclxuXHRcdFx0Ly8gc3VwcG9zZWQgdG8gYmUsIGJhc2VkIG9uIHdoYXQgd2VcInJlIGRvaW5nXHJcblx0XHRcdHZhciBwcmV2aW91c1RvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gVGhpcyBpcyBsaWtlIGEgdGhpbmsgZnVuY3Rpb24gZnJvbSBhIGdhbWUgbG9vcFxyXG5cdFx0XHR2YXIgc2Nyb2xsRnJhbWUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZihlbGVtZW50LnNjcm9sbFRvcCAhPSBwcmV2aW91c1RvcCkge1xyXG5cdFx0XHRcdFx0cmVqZWN0KFwiaW50ZXJydXB0ZWRcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIHNldCB0aGUgc2Nyb2xsVG9wIGZvciB0aGlzIGZyYW1lXHJcblx0XHRcdFx0dmFyIG5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0dmFyIHBvaW50ID0gc21vb3RoU3RlcChzdGFydFRpbWUsIGVuZFRpbWUsIG5vdyk7XHJcblx0XHRcdFx0dmFyIGZyYW1lVG9wID0gTWF0aC5yb3VuZChzdGFydFRvcCArIChkaXN0YW5jZSAqIHBvaW50KSk7XHJcblx0XHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSBmcmFtZVRvcDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBjaGVjayBpZiB3ZVwicmUgZG9uZSFcclxuXHRcdFx0XHRpZihub3cgPj0gZW5kVGltZSkge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBJZiB3ZSB3ZXJlIHN1cHBvc2VkIHRvIHNjcm9sbCBidXQgZGlkblwidCwgdGhlbiB3ZVxyXG5cdFx0XHRcdC8vIHByb2JhYmx5IGhpdCB0aGUgbGltaXQsIHNvIGNvbnNpZGVyIGl0IGRvbmU7IG5vdFxyXG5cdFx0XHRcdC8vIGludGVycnVwdGVkLlxyXG5cdFx0XHRcdGlmKGVsZW1lbnQuc2Nyb2xsVG9wID09PSBwcmV2aW91c1RvcCAmJiBlbGVtZW50LnNjcm9sbFRvcCAhPT0gZnJhbWVUb3ApIHtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cHJldmlvdXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBzY2hlZHVsZSBuZXh0IGZyYW1lIGZvciBleGVjdXRpb25cclxuXHRcdFx0XHRzZXRUaW1lb3V0KHNjcm9sbEZyYW1lLCAwKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGJvb3N0cmFwIHRoZSBhbmltYXRpb24gcHJvY2Vzc1xyXG5cdFx0XHRzZXRUaW1lb3V0KHNjcm9sbEZyYW1lLCAwKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHR1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRzY3JvbGxCeShkUFNjcm9sbCwgZFBTY3JvbGwuc2Nyb2xsVG9wIC0gNDAwLCAzMDApO1xyXG5cdH0pO1xyXG5cdGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0c2Nyb2xsQnkoZFBTY3JvbGwsIGRQU2Nyb2xsLnNjcm9sbFRvcCArIDQwMCwgMzAwKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBJZiBhdCBsb2FkaW5nIHRpbWUgdGhlIFVSTCBjb250YWlucyBhIGhhc2ggdGhlIHN0YXRlIHdpbGwgYmUgdXBkYXRlZCBhY2NvcmRpbmdseVxyXG5cdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiBvLmdldENvb2tpZShcImZpcnN0VGltZVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0c3dpdGNoICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG5cdFx0XHRjYXNlIFwiI3Byb2ZpbGUxXCI6XHJcblx0XHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgbmV3UHJvZmlsZTogMSB9LCBcIlByb2ZpbGUgMVwiLCBcIiNwcm9maWxlMVwiKTtcclxuXHRcdFx0XHRzaG93RGVzY3JpcHRpb25QYW5lbCgxKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIiNwcm9maWxlMlwiOlxyXG5cdFx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IG5ld1Byb2ZpbGU6IDIgfSwgXCJQcm9maWxlIDJcIiwgXCIjcHJvZmlsZTJcIik7XHJcblx0XHRcdFx0c2hvd0Rlc2NyaXB0aW9uUGFuZWwoMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCIjcHJvZmlsZTNcIjpcclxuXHRcdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBuZXdQcm9maWxlOiAzIH0sIFwiUHJvZmlsZSAzXCIsIFwiI3Byb2ZpbGUzXCIpO1xyXG5cdFx0XHRcdHNob3dEZXNjcmlwdGlvblBhbmVsKDMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiI21vcmVJbmZvXCI6XHJcblx0XHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgbW9yZUluZm86IHRydWUgfSwgXCJNb3JlIEluZm9cIiwgXCIjbW9yZUluZm9cIik7XHJcblx0XHRcdFx0bW9yZUluZm9FdmVudExpc3RlbmVyKFwiUHVzaCBzdGF0ZVwiKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIG8uZ2V0Q29va2llKFwiZmlyc3RUaW1lXCIpID09PSBudWxsKVxyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgXCJBbnRvbmlvIFJlZG9uZG9cIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxufVxyXG4iLCJcbldlYkZvbnQubG9hZCh7XHJcblx0Z29vZ2xlOiB7XHJcblx0XHRmYW1pbGllczogW1wiT3BlbiBTYW5zOjMwMCw4MDBcIiwgXCJPcGVuIFNhbnMgQ29uZGVuc2VkOjMwMFwiLCBcIlRyaXJvbmc6NDAwXCJdXHJcblx0fSxcclxuXHRhY3RpdmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKG8uZ2V0Q29va2llKFwiZmlyc3RUaW1lXCIpID09PSBudWxsKSB7XHJcblx0XHRcdGluaXRJbnRybygpO1xyXG5cdFx0fSBlbHNlIGhpZGVJbnRybygyKTtcclxuXHRcdFxyXG5cdFx0aW5pdE1haW4oKTtcclxuXHR9LFxyXG5cdGluYWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9LFxyXG5cdGNsYXNzZXM6IGZhbHNlLFxyXG5cdHRpbWVvdXQ6IDgwMDBcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
