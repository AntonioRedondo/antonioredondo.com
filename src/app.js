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

"use strict";

function gc(className) {
	return document.getElementsByClassName(className)[0];
}

function gca(className) {
	return Array.prototype.slice.call(document.getElementsByClassName(className));
}

function qs(query) {
	return document.querySelector(query);
}

function qsa(query) {
	return Array.prototype.slice.call(document.querySelectorAll(query));
}

function ae(event, callback) {
	return window.addEventListener(event, callback);
}

function to(callback, time) {
	return window.setTimeout(callback, time);
}

function getRandomInt() {
	var min = -50, max = 50;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



function checkTransformsSupported() {
	if (document.documentElement.style.transform !== undefined)
		return "transform";
	else if (document.documentElement.style.webkitTransform !== undefined)
		return "webkitTransform";
}



function getCookie(name) {
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

function setCookie(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toGMTString();
	} else expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function removeCookie(name) {
	setCookie(name,"",-1);
}



function showCookieMessage() {
	gc("cookies").classList.add("cookies--in");
	gc("cookies__close-button").addEventListener("click", function() {
		gc("cookies").classList.remove("cookies--in");
		setCookie("cookieMessage", false, 365);
		ga("send", "event", "v3", "Cookies close");
	});
}



function hideIntro(type) {
	var modifier = "out",
		time = 2000;
	switch (type) {
		case 2: modifier = "out2"; time = 400; break;
	}
	gc("intro").classList.add("intro--" + modifier);
	gc("intro-darkener").classList.add("intro-darkener--" + modifier);
	
	to(function() { gc("intro-darkener").style.display = "none"; }, time);
	to(function() { gc("intro").style.display = "none"; }, time);
	
	gc("ar__logo-container").classList.add("ar__logo-container--in");
	gc("ar__text").classList.add("ar__text--in");
	gc("main-bg").classList.add("main-bg--in");
	gc("choose-profile-text").classList.add("choose-profile-text--in");
	
	gc("footer").classList.add("footer--in");
	to(function() { gc("footer").classList.add("footer--no-delay"); }, 2000);
	
	gc("profile--1").classList.add("profile--1in");
	gc("profile--2").classList.add("profile--2in");
	gc("profile--3").classList.add("profile--3in");
		to(function() {
			qsa(".profile").forEach(function(item) { item.classList.add("profile--no-delay"); } );
		}, 200);
	
	if (document.documentElement.offsetWidth >= 810) {
		pg.load();
	}
}





function initIntro() {
	gc("scroll-down").classList.add("scroll-down--bottom");
	gc("scroll-down__inner").classList.add("scroll-down__inner--out");
	
	var viewPortWidth = document.documentElement.offsetWidth,
		wheelLevel = 0,
		wheelLevelFormer = 0,
		phrases = gca("phrases__phrase"),
		bubbles = gca("bubbles__layer"),
		visiblePhrases = [],
		visibleBubbles = [],
		yStart,
		yEnd,
		transform = checkTransformsSupported(),
		mouseMoveListener,
		mouseWheelListener,
		touchStartListener,
		touchEndListener,
		keyDownListener,
		toControlledRandomMovement;
		
		
		
	// On desktop version it moves on the 3d space the phrases and bubbles depending on the mouse placement on screen
	if (viewPortWidth >= 810)
		ae("mousemove", mouseMoveListener = function(e) {
			//console.log("deltaZ: " + e.deltaZ);
			//console.log("deltaMode: " + e.deltaMode);
			//console.log("clientX: " + e.clientX);
			//console.log("clientY: " + e.clientY);
			//console.log("rotateX(" + -(0.02*e.clientY-10) +"deg)");
			var phrases = gc("phrases"), 
				bubbles = gc("bubbles");
			phrases.style[transform] = "rotateX(" + -(0.02*e.clientY-10) + "deg) rotateY(" + (0.02*e.clientX-25) + "deg) translate3d(" + (-0.05*e.clientX+100) + "px, 0, 0)";
			bubbles.style[transform] = phrases.style[transform];
		});
		
		
		
	to(function() {
		if (wheelLevel === 0)
			if (viewPortWidth >= 810)
				gc("scroll-down-hint").classList.add("scroll-down-hint--in");
			else gc("swipe-up-hint").classList.add("swipe-up-hint--in");
	}, 3000);
	
	
	
	// Counts wheel scroll movements and moves phrases and bubbles accordingly
	function movePhrases(level) {
		if ((level>0 && wheelLevel<5) || (level<0 && wheelLevel>0))
			wheelLevel += level;
		else return;
		
		if (wheelLevel === 1) {
			gc("scroll-down-hint").classList.add("scroll-down-hint--out");
			gc("swipe-up-hint").classList.add("swipe-up-hint--out");
			console.log("hey");
		} 
		
		if (wheelLevel === 5) {
			to(function() { gc("enter-button").classList.add("enter-button--in"); }, 1000);
			gc("scroll-down").classList.add("scroll-down--out");
			gc("skip-intro").classList.remove("skip-intro--in");
		} else {
			gc("enter-button").classList.remove("enter-button--in");
			gc("scroll-down").classList.remove("scroll-down--out");
			if (wheelLevel > 0)
				gc("skip-intro").classList.add("skip-intro--in");
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
	
	ae("wheel", mouseWheelListener = function (e) {
		if (e.deltaY > 0)
			movePhrases(1);
		else if (e.deltaY < 0)
			movePhrases(-1);
	});
	
	// http://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
	ae("touchstart", touchStartListener = function(e) {
		yStart = e.touches[0].clientY;
	});
	
	ae("touchend", touchEndListener = function(e) {
		yEnd = e.changedTouches[0].clientY;
		if (yEnd - yStart < -60)
			movePhrases(1);
		else if (yEnd - yStart > 60)
			movePhrases(-1);
	});
	
	
	
	// Hides the Intro screen
	function skipIntro(gaLabel) {
		window.removeEventListener("mousemove", mouseMoveListener);
		window.removeEventListener("wheel", mouseWheelListener);
		window.removeEventListener("touchstart", touchStartListener);
		window.removeEventListener("touchend", touchEndListener);
		window.removeEventListener("keydown", keyDownListener);
		window.clearTimeout(toControlledRandomMovement);
		
		hideIntro();
		
		setCookie("firstTime", false, 365);
		
		if (getCookie("cookieMessage") === null)
			to(showCookieMessage, 3000);
			
		ga("send", "event", "v3", "Skip Intro", gaLabel);
	}
	
	gc("enter-button").addEventListener("click", function(e) { skipIntro("Enter button"); });
	gc("skip-intro").addEventListener("click", function(e) { skipIntro("Skip intro button"); });
	
	ae("keydown", keyDownListener = function(e) {			
		switch (e.keyCode) {
			case 39:
			case 40: movePhrases(1); break;
			case 37:
			case 38: movePhrases(-1); break;
			case 27: skipIntro("Esc key");
		}
	});
	
	
	
	// Moves randomly horizontally and vertically the bubble layers
	(function controlledRandomMovement() {
		for (var n=0; n<visibleBubbles.length; ++n) {
			//var zTrans = /\.*translateZ\((.*)px\)/i.exec(document.getElementById("dv").getAttribute("style"))[1];
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + getRandomInt() + "px, " + getRandomInt() + "px, 0)";
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + getRandomInt() + "px, " + getRandomInt() + "px, 0)";
		}
		toControlledRandomMovement = to(controlledRandomMovement, 3000);
	})();
	
}





function initMain() {
	
	var toRemoveClasses,
		profileSelected = 0,
		animDurationMoreInfo = 200,
		animDuration = 400,
		descriptionPanel = gc("description-panel"),
		moreInfoPanel = gc("more-info-panel"),
		moreInfoImage = gc("more-info-image");
	
	gc("main").style.display = "block";
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	qs(".block__contact-icon.email").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Email"); });
	qs(".block__contact-icon.linkedin").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "LinkedIn"); });
	qs(".block__contact-icon.github").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "GitHub"); });
	qs(".more-info-panel__contact-icon.email").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Email MI"); });
	qs(".more-info-panel__contact-icon.linkedin").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "LinkedIn MI"); });
	qs(".more-info-panel__contact-icon.github").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "GitHub MI"); });
	gc("more-info-panel__source-code-link").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Source code link"); });
	
	
	
	// Adds functionality to "Show intro again" button
	function showIntroAgain(gaLabel) {
		removeCookie("firstTime");
		ga("send", "event", "v3", "Show intro again", gaLabel);
		location.reload();
	}
	gc("footer__show-intro-again").addEventListener("click", function() { showIntroAgain("Footer button"); });
	gc("footer-m__show-intro-again").addEventListener("click", function() { showIntroAgain("Footer mobile button"); });
	
	
	
	// Adds functionality to "More info" button
	function moreInfoEventListener(gaLabel) {
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
		gc("darkener").classList.add("darkener--in2");
		ga("send", "event", "v3", "More info", gaLabel);
	}
	function moreInfoCloseEventListener(gaLabel) {
		to(function() {
			moreInfoPanel.style.visibility = "hidden";
			moreInfoImage.style.visibility = "hidden";
		}, animDurationMoreInfo);
		moreInfoPanel.classList.remove("more-info-panel--in");
		moreInfoImage.classList.remove("more-info-image--in");
		gc("darkener").classList.remove("darkener--in2");
		ga("send", "event", "v3", "More info close", gaLabel);
	}
	gc("footer__more-info").addEventListener("click", function() { moreInfoEventListener("Footer button"); });
	gc("footer-m__more-info").addEventListener("click", function() { moreInfoEventListener("Footer mobile button"); });
	gc("more-info-image").addEventListener("click", function() { moreInfoCloseEventListener("Image click"); });
	gc("more-info-image__back-button-m").addEventListener("click", function() { moreInfoCloseEventListener("Back button mobile"); });
	
	
	
	// Adds necessary logic to show the Description panel for some profile
	function showOrHideDescriptionBar(newProfile) {
		if (!descriptionPanel.classList.contains("description-panel--in")) {
			descriptionPanel.classList.add("description-panel--in", "s" + newProfile);
			
			var nProfile = gc("profile--" + newProfile);
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
			
			gc("darkener").classList.add("darkener--in");

			for (var n=1; n<=3; ++n)
				if (newProfile !== n) {
					gc("profile--" + n).classList.add("profile--not-selected");
					switch (n) {
						case 1: gc("profile--" + n).classList.add("profile--selected-left"); break;
						case 2: gc("profile--" + n).classList.add("profile--selected-center"); break;
						case 3: gc("profile--" + n).classList.add("profile--selected-right");
					}
				}
			
			gca("desc-profile--" + newProfile).forEach(function(item) {
				item.style.display = "inline-block";
			});
					
			window.clearTimeout(toRemoveClasses);
			to(function() {
				nProfile.children[4].classList.add("profile__back-button--in");
				gc("profile-selected-bg--" + newProfile).classList.add("profile-selected-bg--in");
				qs(".profile-selected-place--" + newProfile + " .profile-selected-place__title").classList.add("profile-selected-place__title--in");
			}, animDuration);
			
			gc("description-panel__overflow-hide").scrollTop = 0;
			profileSelected = newProfile;
			ga("send", "event", "v3", "Profile description panel open", "Profile " + newProfile);
		} else {
			descriptionPanel.classList.remove("description-panel--in");
			
			var sProfile = gc("profile--" + profileSelected);
			sProfile.classList.remove("profile--selected");
			switch (newProfile) {
				case 1: sProfile.classList.remove("profile--selected-left"); break;
				case 2: sProfile.classList.remove("profile--selected-center"); break;
				case 3: sProfile.classList.remove("profile--selected-right");
			}
			sProfile.title = "";
			sProfile.children[4].classList.remove("profile__back-button--in");
			
			gc("darkener").classList.remove("darkener--in");

			for (var n2=1; n2<=3; ++n2)
				if (profileSelected !== n2) {
					gc("profile--" + n2).classList.remove("profile--not-selected");
					switch (n2) {
						case 1: gc("profile--" + n2).classList.remove("profile--selected-left"); break;
						case 2: gc("profile--" + n2).classList.remove("profile--selected-center"); break;
						case 3: gc("profile--" + n2).classList.remove("profile--selected-right");
					}
				}

			gc("profile-selected-bg--" + profileSelected).classList.remove("profile-selected-bg--in");
			qs(".profile-selected-place--" + profileSelected + " .profile-selected-place__title").classList.remove("profile-selected-place__title--in");
			
			ga("send", "event", "v3", "Profile description panel close", "Profile " + profileSelected);

			var removeClasses = function() {
				descriptionPanel.classList.remove("s" + profileSelected);
				
				gca("desc-profile--" + profileSelected).forEach(function(item) {
					item.style.display = "none";
				});
					
				sProfile.classList.remove("profile--z-index");

				profileSelected = 0;
			};
			toRemoveClasses = to(removeClasses, animDuration);
		}
	}
	
	gc("profile--1").addEventListener("click", function() { showOrHideDescriptionBar(1); });
	gc("profile--2").addEventListener("click", function() { showOrHideDescriptionBar(2); });
	gc("profile--3").addEventListener("click", function() { showOrHideDescriptionBar(3); });
	gc("profile-m--1").addEventListener("click", function() { showOrHideDescriptionBar(1); });
	gc("profile-m--2").addEventListener("click", function() { showOrHideDescriptionBar(2); });
	gc("profile-m--3").addEventListener("click", function() { showOrHideDescriptionBar(3); });
	
	gc("back-button-m").addEventListener("click", function() { showOrHideDescriptionBar(1); }); // It doesn't matter which profiled is clicked
	
	ae("keydown", function(e) {
		if (descriptionPanel.classList.contains("description-panel--in") && e.keyCode === 27)
			showOrHideDescriptionBar(1);
		else if (moreInfoPanel.classList.contains("more-info-panel--in") && e.keyCode === 27)
			moreInfoCloseEventListener("Esc key");
	});
	
	
	
	// Shows or hides the scroll buttons on the description panel
	// http://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom/34550171#34550171
	var dPScroll = gc("description-panel__overflow-hide"),
		upButton = gc("description-panel__scroll--up"),
		downButton = gc("description-panel__scroll--down");
		
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
}





function init() {
	if (getCookie("firstTime") === null) {
		initIntro();
	} else {
		hideIntro(2);
		if (getCookie("cookieMessage") === null)
			to(showCookieMessage, 1500);
	}
	
	initMain();
}





WebFont.load({
	google: {
		families: ["Open Sans:300,800", "Open Sans Condensed:300", "Trirong:400"]
	},
	active: function() {
		init();
	},
	inactive: function() {
		init();
	},
	classes: false,
	timeout: 8000
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdlYiBGb250IExvYWRlciB2MS42LjI2IC0gKGMpIEFkb2JlIFN5c3RlbXMsIEdvb2dsZS4gTGljZW5zZTogQXBhY2hlIDIuMCAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGFhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHAoYSxiLGMpe3A9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9hYTpiYTtyZXR1cm4gcC5hcHBseShudWxsLGFyZ3VtZW50cyl9dmFyIHE9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfTtmdW5jdGlvbiBjYShhLGIpe3RoaXMuYT1hO3RoaXMubT1ifHxhO3RoaXMuYz10aGlzLm0uZG9jdW1lbnR9dmFyIGRhPSEhd2luZG93LkZvbnRGYWNlO2Z1bmN0aW9uIHQoYSxiLGMsZCl7Yj1hLmMuY3JlYXRlRWxlbWVudChiKTtpZihjKWZvcih2YXIgZSBpbiBjKWMuaGFzT3duUHJvcGVydHkoZSkmJihcInN0eWxlXCI9PWU/Yi5zdHlsZS5jc3NUZXh0PWNbZV06Yi5zZXRBdHRyaWJ1dGUoZSxjW2VdKSk7ZCYmYi5hcHBlbmRDaGlsZChhLmMuY3JlYXRlVGV4dE5vZGUoZCkpO3JldHVybiBifWZ1bmN0aW9uIHUoYSxiLGMpe2E9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGIpWzBdO2F8fChhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7YS5pbnNlcnRCZWZvcmUoYyxhLmxhc3RDaGlsZCl9ZnVuY3Rpb24gdihhKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX1cbmZ1bmN0aW9uIHcoYSxiLGMpe2I9Ynx8W107Yz1jfHxbXTtmb3IodmFyIGQ9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxlPTA7ZTxiLmxlbmd0aDtlKz0xKXtmb3IodmFyIGY9ITEsZz0wO2c8ZC5sZW5ndGg7Zys9MSlpZihiW2VdPT09ZFtnXSl7Zj0hMDticmVha31mfHxkLnB1c2goYltlXSl9Yj1bXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSs9MSl7Zj0hMTtmb3IoZz0wO2c8Yy5sZW5ndGg7Zys9MSlpZihkW2VdPT09Y1tnXSl7Zj0hMDticmVha31mfHxiLnB1c2goZFtlXSl9YS5jbGFzc05hbWU9Yi5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKX1mdW5jdGlvbiB5KGEsYil7Zm9yKHZhciBjPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylpZihjW2RdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24geihhKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEuZilyZXR1cm4gYS5mO3ZhciBiPWEubS5sb2NhdGlvbi5wcm90b2NvbDtcImFib3V0OlwiPT1iJiYoYj1hLmEubG9jYXRpb24ucHJvdG9jb2wpO3JldHVyblwiaHR0cHM6XCI9PWI/XCJodHRwczpcIjpcImh0dHA6XCJ9ZnVuY3Rpb24gZWEoYSl7cmV0dXJuIGEubS5sb2NhdGlvbi5ob3N0bmFtZXx8YS5hLmxvY2F0aW9uLmhvc3RuYW1lfVxuZnVuY3Rpb24gQShhLGIsYyl7ZnVuY3Rpb24gZCgpe2smJmUmJmYmJihrKGcpLGs9bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLGs9Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEIoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQygpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEQoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RShhKX19ZnVuY3Rpb24gRihhLGIpe2EuYz1iO0UoYSl9ZnVuY3Rpb24gRShhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRyhhKXt0aGlzLmE9YXx8XCItXCJ9Ry5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBIKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBJKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitKKGEuYyl9ZnVuY3Rpb24gSihhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBLKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEkoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5tLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEcoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7TChhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBNKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1MKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBMKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSyhjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE4oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBPKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gUChhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSihhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSShhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBRKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMubS5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGsoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoaywyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9aygpfSksZT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGQpe3NldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtlLGRdKS50aGVuKGZ1bmN0aW9uKCl7Yi5nKGIuYSl9LGZ1bmN0aW9uKCl7Yi5qKGIuYSl9KX07ZnVuY3Rpb24gUihhLGIsYyxkLGUsZixnKXt0aGlzLnY9YTt0aGlzLkI9Yjt0aGlzLmM9Yzt0aGlzLmE9ZDt0aGlzLnM9Z3x8XCJCRVNic3d5XCI7dGhpcy5mPXt9O3RoaXMudz1lfHwzRTM7dGhpcy51PWZ8fG51bGw7dGhpcy5vPXRoaXMuaj10aGlzLmg9dGhpcy5nPW51bGw7dGhpcy5nPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMuaD1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLmo9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5vPW5ldyBOKHRoaXMuYyx0aGlzLnMpO2E9bmV3IEgodGhpcy5hLmMrXCIsc2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmcuYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSCh0aGlzLmEuYytcIixzYW5zLXNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5oLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgoXCJzZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuai5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKFwic2Fucy1zZXJpZlwiLEsodGhpcy5hKSk7YT1cblAoYSk7dGhpcy5vLmEuc3R5bGUuY3NzVGV4dD1hO08odGhpcy5nKTtPKHRoaXMuaCk7Tyh0aGlzLmopO08odGhpcy5vKX12YXIgUz17RDpcInNlcmlmXCIsQzpcInNhbnMtc2VyaWZcIn0sVD1udWxsO2Z1bmN0aW9uIFUoKXtpZihudWxsPT09VCl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1Q9ISFhJiYoNTM2PnBhcnNlSW50KGFbMV0sMTApfHw1MzY9PT1wYXJzZUludChhWzFdLDEwKSYmMTE+PXBhcnNlSW50KGFbMl0sMTApKX1yZXR1cm4gVH1SLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3RoaXMuZi5zZXJpZj10aGlzLmouYS5vZmZzZXRXaWR0aDt0aGlzLmZbXCJzYW5zLXNlcmlmXCJdPXRoaXMuby5hLm9mZnNldFdpZHRoO3RoaXMuQT1xKCk7bGEodGhpcyl9O1xuZnVuY3Rpb24gbWEoYSxiLGMpe2Zvcih2YXIgZCBpbiBTKWlmKFMuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbU1tkXV0mJmM9PT1hLmZbU1tkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbGEoYSl7dmFyIGI9YS5nLmEub2Zmc2V0V2lkdGgsYz1hLmguYS5vZmZzZXRXaWR0aCxkOyhkPWI9PT1hLmYuc2VyaWYmJmM9PT1hLmZbXCJzYW5zLXNlcmlmXCJdKXx8KGQ9VSgpJiZtYShhLGIsYykpO2Q/cSgpLWEuQT49YS53P1UoKSYmbWEoYSxiLGMpJiYobnVsbD09PWEudXx8YS51Lmhhc093blByb3BlcnR5KGEuYS5jKSk/VihhLGEudik6VihhLGEuQik6bmEoYSk6VihhLGEudil9ZnVuY3Rpb24gbmEoYSl7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7bGEodGhpcyl9LGEpLDUwKX1mdW5jdGlvbiBWKGEsYil7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7dih0aGlzLmcuYSk7dih0aGlzLmguYSk7dih0aGlzLmouYSk7dih0aGlzLm8uYSk7Yih0aGlzLmEpfSxhKSwwKX07ZnVuY3Rpb24gVyhhLGIsYyl7dGhpcy5jPWE7dGhpcy5hPWI7dGhpcy5mPTA7dGhpcy5vPXRoaXMuaj0hMTt0aGlzLnM9Y312YXIgWD1udWxsO1cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2IuZyYmdyhiLmYsW2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpXSxbYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpLGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIildKTtMKGIsXCJmb250YWN0aXZlXCIsYSk7dGhpcy5vPSEwO29hKHRoaXMpfTtcblcucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2lmKGIuZyl7dmFyIGM9eShiLmYsYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIikpLGQ9W10sZT1bYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXTtjfHxkLnB1c2goYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKSk7dyhiLmYsZCxlKX1MKGIsXCJmb250aW5hY3RpdmVcIixhKTtvYSh0aGlzKX07ZnVuY3Rpb24gb2EoYSl7MD09LS1hLmYmJmEuaiYmKGEubz8oYT1hLmEsYS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpXSxbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKSxhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKV0pLEwoYSxcImFjdGl2ZVwiKSk6TShhLmEpKX07ZnVuY3Rpb24gcGEoYSl7dGhpcy5qPWE7dGhpcy5hPW5ldyBqYTt0aGlzLmg9MDt0aGlzLmY9dGhpcy5nPSEwfXBhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3RoaXMuYz1uZXcgY2EodGhpcy5qLGEuY29udGV4dHx8dGhpcy5qKTt0aGlzLmc9ITEhPT1hLmV2ZW50czt0aGlzLmY9ITEhPT1hLmNsYXNzZXM7cWEodGhpcyxuZXcgaGEodGhpcy5jLGEpLGEpfTtcbmZ1bmN0aW9uIHJhKGEsYixjLGQsZSl7dmFyIGY9MD09LS1hLmg7KGEuZnx8YS5nKSYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPWV8fG51bGwsaz1kfHxudWxsfHx7fTtpZigwPT09Yy5sZW5ndGgmJmYpTShiLmEpO2Vsc2V7Yi5mKz1jLmxlbmd0aDtmJiYoYi5qPWYpO3ZhciBoLG09W107Zm9yKGg9MDtoPGMubGVuZ3RoO2grKyl7dmFyIGw9Y1toXSxuPWtbbC5jXSxyPWIuYSx4PWw7ci5nJiZ3KHIuZixbci5hLmMoXCJ3ZlwiLHguYyxLKHgpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXSk7TChyLFwiZm9udGxvYWRpbmdcIix4KTtyPW51bGw7bnVsbD09PVgmJihYPXdpbmRvdy5Gb250RmFjZT8oeD0vR2Vja28uKkZpcmVmb3hcXC8oXFxkKykvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKT80MjxwYXJzZUludCh4WzFdLDEwKTohMDohMSk7WD9yPW5ldyBRKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxuKTpyPW5ldyBSKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxhLFxubik7bS5wdXNoKHIpfWZvcihoPTA7aDxtLmxlbmd0aDtoKyspbVtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcWEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtyYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPXooYS5jKTthPShhLmEuYXBpfHxcImZhc3QuZm9udHMubmV0L2pzYXBpXCIpLnJlcGxhY2UoL14uKmh0dHAocz8pOihcXC9cXC8pPy8sXCJcIik7cmV0dXJuIGQrXCIvL1wiK2ErXCIvXCIrYitcIi5qc1wiKyhjP1wiP3Y9XCIrYzpcIlwiKX1cbnNhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtpZihmW1wiX19tdGlfZm50THN0XCIrZF0pe3ZhciBjPWZbXCJfX210aV9mbnRMc3RcIitkXSgpLGU9W10saDtpZihjKWZvcih2YXIgbT0wO208Yy5sZW5ndGg7bSsrKXt2YXIgbD1jW21dLmZvbnRmYW1pbHk7dm9pZCAwIT1jW21dLmZvbnRTdHlsZSYmdm9pZCAwIT1jW21dLmZvbnRXZWlnaHQ/KGg9Y1ttXS5mb250U3R5bGUrY1ttXS5mb250V2VpZ2h0LGUucHVzaChuZXcgSChsLGgpKSk6ZS5wdXNoKG5ldyBIKGwpKX1hKGUpfWVsc2Ugc2V0VGltZW91dChmdW5jdGlvbigpe2IoKX0sNTApfXZhciBjPXRoaXMsZD1jLmEucHJvamVjdElkLGU9Yy5hLnZlcnNpb247aWYoZCl7dmFyIGY9Yy5jLm07Qih0aGlzLmMsdGEoYyxkLGUpLGZ1bmN0aW9uKGUpe2U/YShbXSk6KGZbXCJfX01vbm90eXBlQ29uZmlndXJhdGlvbl9fXCIrZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitcbmR9ZWxzZSBhKFtdKX07ZnVuY3Rpb24gdWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn11YS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5hLnVybHN8fFtdLGU9dGhpcy5hLmZhbWlsaWVzfHxbXSxmPXRoaXMuYS50ZXN0U3RyaW5nc3x8e30sZz1uZXcgQztiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKylBKHRoaXMuYyxkW2JdLEQoZykpO3ZhciBrPVtdO2I9MDtmb3IoYz1lLmxlbmd0aDtiPGM7YisrKWlmKGQ9ZVtiXS5zcGxpdChcIjpcIiksZFsxXSlmb3IodmFyIGg9ZFsxXS5zcGxpdChcIixcIiksbT0wO208aC5sZW5ndGg7bSs9MSlrLnB1c2gobmV3IEgoZFswXSxoW21dKSk7ZWxzZSBrLnB1c2gobmV3IEgoZFswXSkpO0YoZyxmdW5jdGlvbigpe2EoayxmKX0pfTtmdW5jdGlvbiB2YShhLGIsYyl7YT90aGlzLmM9YTp0aGlzLmM9Yit3YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1jfHxcIlwifXZhciB3YT1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24geGEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB5YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB6YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIEFhPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEJhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQ2E9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkRhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBFYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBrPWRbMV07Zz1bXTtpZihrKWZvcih2YXIgaz1rLnNwbGl0KFwiLFwiKSxoPWsubGVuZ3RoLG09MDttPGg7bSsrKXt2YXIgbDtsPWtbbV07aWYobC5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPURhLmV4ZWMobC50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWw9XCJcIjtlbHNle2w9blsyXTtsPW51bGw9PWx8fFwiXCI9PWw/XCJuXCI6Q2FbbF07bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUJhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7bD1bbCxuXS5qb2luKFwiXCIpfX1lbHNlIGw9XCJcIjtsJiZnLnB1c2gobCl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPUFhW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD1BYVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEgoZSxmW2RdKSl9fTtmdW5jdGlvbiBGYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBHYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RmEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEMsYz10aGlzLmMsZD1uZXcgdmEodGhpcy5hLmFwaSx6KGMpLHRoaXMuYS50ZXh0KSxlPXRoaXMuYS5mYW1pbGllczt4YShkLGUpO3ZhciBmPW5ldyB6YShlKTtFYShmKTtBKGMseWEoZCksRChiKSk7RihiLGZ1bmN0aW9uKCl7YShmLmEsZi5jLEdhKX0pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifUhhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5pZCxjPXRoaXMuYy5tO2I/Qih0aGlzLmMsKHRoaXMuYS5hcGl8fFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXRcIikrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2lmKGIpYShbXSk7ZWxzZSBpZihjLlR5cGVraXQmJmMuVHlwZWtpdC5jb25maWcmJmMuVHlwZWtpdC5jb25maWcuZm4pe2I9Yy5UeXBla2l0LmNvbmZpZy5mbjtmb3IodmFyIGU9W10sZj0wO2Y8Yi5sZW5ndGg7Zis9Milmb3IodmFyIGc9YltmXSxrPWJbZisxXSxoPTA7aDxrLmxlbmd0aDtoKyspZS5wdXNoKG5ldyBIKGcsa1toXSkpO3RyeXtjLlR5cGVraXQubG9hZCh7ZXZlbnRzOiExLGNsYXNzZXM6ITEsYXN5bmM6ITB9KX1jYXRjaChtKXt9YShlKX19LDJFMyk6YShbXSl9O2Z1bmN0aW9uIElhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPVtdfUlhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZi5pZCxjPXRoaXMuYy5tLGQ9dGhpcztiPyhjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX198fChjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX189e30pLGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX1tiXT1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZz0wLGs9Yy5mb250cy5sZW5ndGg7ZzxrOysrZyl7dmFyIGg9Yy5mb250c1tnXTtkLmEucHVzaChuZXcgSChoLm5hbWUsZ2EoXCJmb250LXdlaWdodDpcIitoLndlaWdodCtcIjtmb250LXN0eWxlOlwiK2guc3R5bGUpKSl9YShkLmEpfSxCKHRoaXMuYyx6KHRoaXMuYykrKHRoaXMuZi5hcGl8fFwiLy9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBwYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgdWEoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IElhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBzYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBIYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEZhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20va2FuZHV2aXNsYS9wbHlncm5kXHJcbnZhciBQbHlncm5kID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7ICAgICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byByb290IG9iamVjdDtcclxuXHR0aGlzLnZpZXdzID0gW107ICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSB3aXRoIHZpZXdzXHJcblx0dGhpcy50b3RhbFZpZXdzID0gW107ICAgICAgICAgICAgICAgLy8gQ291bnRlciB0byBrZWVwIHRyYWNrIGlmIGFsbCB2aWV3cyBhcmUgbG9hZGVkLlxyXG5cdHRoaXMuY3VycmVudFZpZXcgPSAwOyAgICAgICAgICAgICAgIC8vIEN1cnJlbnRWaWV3XHJcblx0dGhpcy5tb3VzZVBvc2l0aW9uID0ge3g6IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLzEwMCoyMCksIHk6IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodC8xMDAqMjApfTsgIC8vIE1vdXNlIHBvc2l0aW9uIChjYW4gYmUgdXNlZCBieSB2aWV3cylcclxuXHR0aGlzLmZyYW1lUmF0ZSA9IDYwO1xyXG5cdHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0dGhpcy5jbGljayA9IGZhbHNlO1xyXG5cclxuXHQvLyBDcmVhdGUgY2FudmFzIG9iamVjdDpcclxuXHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJnXCIpWzBdO1xyXG4vL1x0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG5cdC8vIENvbnRleHQgT2JqZWN0OlxyXG5cdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHQvLyBSZXNpemUgZnVuY3Rpb246XHJcblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbigpe1xyXG5cdFx0X3RoaXMuY3R4LndpZHRoICA9IF90aGlzLmNhbnZhcy53aWR0aCAgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cdFx0X3RoaXMuY3R4LmhlaWdodCA9IF90aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuXHR9O1xyXG5cclxuXHQvLyBBbmQgYmluZCBpdCB0byB0aGUgd2luZG93OlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplKTtcclxuXHR0aGlzLnJlc2l6ZSgpO1xyXG5cclxuXHQvLyBNb3VzZSBwb3NpdGlvbiAoY2FuIGJlIHVzZWQgYnkgdmlld3MpOlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi54ID0gZS5jbGllbnRYO1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS5jbGllbnRZO1xyXG5cdH0pO1xyXG5cclxuXHQvKlx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZVBvc2l0aW9uLnggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuXHQgX3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG5cdCBfdGhpcy5jbGljayA9IHRydWU7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0IF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuXHQgX3RoaXMuY2xpY2sgPSB0cnVlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHQgX3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHQgfSk7Ki9cclxuXHJcblx0Ly8gQWRkIGV4dHJhIGZ1bmN0aW9ucyB0byB0aGUgY29udGV4dCBvYmplY3Q6XHJcblx0dGhpcy5jdHgubGluZVRocm91Z2ggPSBmdW5jdGlvbihwb2ludHMpXHJcblx0e1xyXG5cdFx0Zm9yKHZhciBpIGluIHBvaW50cykge1xyXG5cdFx0XHR0aGlzLmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmN1cnZlVGhyb3VnaCA9IGZ1bmN0aW9uKHBvaW50cylcclxuXHR7XHJcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpICsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgeGMgPSAocG9pbnRzW2ldLnggKyBwb2ludHNbaSArIDFdLngpIC8gMjtcclxuXHRcdFx0dmFyIHljID0gKHBvaW50c1tpXS55ICsgcG9pbnRzW2kgKyAxXS55KSAvIDI7XHJcblx0XHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHhjLCB5Yyk7XHJcblx0XHR9XHJcblx0XHQvLyBjdXJ2ZSB0aHJvdWdoIHRoZSBsYXN0IHR3byBwb2ludHNcclxuXHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHBvaW50c1tpKzFdLngscG9pbnRzW2krMV0ueSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlyZWN0aW9uID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlzdGFuY2UgPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MilcclxuXHR7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KFxyXG5cdFx0XHRNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRyYXdDaXJjbGUgPSBmdW5jdGlvbih4LCB5LCByYWRpdXMpXHJcblx0e1xyXG5cdFx0dGhpcy5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG5cdH07XHJcblxyXG5cdC8qXHRcdFx0XHQvLyBQYWdlciBmdW5jdGlvbjpcclxuXHQgdGhpcy5wYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcblx0IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wYWdlcik7XHJcblxyXG5cdCB0aGlzLmJ1aWxkUGFnZXIgPSBmdW5jdGlvbigpXHJcblx0IHtcclxuXHQgZm9yKHZhciBpIGluIF90aGlzLnZpZXdzKVxyXG5cdCB7XHJcblx0IC8vIENyZWF0ZSBhbiBhbmNob3IsIHdoaWNoIGxvYWRzIHRoZSBzcGVjaWZpYyB2aWV3OlxyXG5cdCB2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0IGFuY2hvci5pbm5lclRleHQgPSBwYXJzZUludChpKSArIDE7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIiwgaSk7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBfdGhpcy52aWV3c1tpXS5uYW1lKTtcclxuXHQgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5wbGF5Vmlldyh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKSk7XHJcblx0IH0pO1xyXG5cdCBfdGhpcy5wYWdlci5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG5cdCB9XHJcblx0IH07Ki9cclxuXHJcblx0Ly8gVmlld3MgZnVuY3Rpb25zOlxyXG5cdHRoaXMuYWRkVmlldyA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHRfdGhpcy50b3RhbFZpZXdzLnB1c2goe1xyXG5cdFx0XHRvcmRlcjogX3RoaXMudG90YWxWaWV3cy5sZW5ndGgsXHJcblx0XHRcdHNsdWc6IFwiZG90cy0yXCIsXHJcblx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly8gQ2hlY2sgaWYgYWxsIGlzIGxvYWRlZCBhbmQgc3RhcnQgaWYgc286XHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdHZhciBpbnRlcnZhbFRpbWVvdXQgPSAwO1xyXG5cdFx0dmFyIGludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRpbnRlcnZhbFRpbWVvdXQrKztcclxuXHRcdFx0aWYoaW50ZXJ2YWxUaW1lb3V0ID09IDMwMCkge1xyXG5cdFx0XHRcdC8vIHdhaXRlZCBmb3IgMzAgc2Vjb25kcy4gU29tZXRoaW5nIGlzIGNsZWFybHkgd3JvbmcuXHJcblx0XHRcdFx0YWxlcnQoXCJUaW1lIG91dCEgSXMgeW91ciBJbnRlcm5ldCBjb25uZWN0aW9uIHRow6F0IHNsb3c/IT9cIik7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDaGVjayBpZiBhbGwgdmlld3MgYXJlIGxvYWRlZDpcclxuXHRcdFx0dmFyIGFsbExvYWRlZCA9IHRydWU7XHJcblx0XHRcdGZvcih2YXIgaSBpbiBfdGhpcy50b3RhbFZpZXdzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIV90aGlzLnRvdGFsVmlld3NbaV0ubG9hZGVkKSB7IGFsbExvYWRlZCA9IGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoYWxsTG9hZGVkKSB7XHJcblx0XHRcdFx0Ly8gQWxsIHZpZXdzIGFyZSBsb2FkZWQuXHJcblx0XHRcdFx0dmFyIG5ld1ZpZXdzID0gW107XHJcblx0XHRcdFx0Zm9yKHZhciBpMiBpbiBfdGhpcy50b3RhbFZpZXdzKSB7XHJcblx0XHRcdFx0XHR2YXIgY3VycmVudFNsdWcgPSBfdGhpcy50b3RhbFZpZXdzW2kyXS5zbHVnO1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBqIGluIF90aGlzLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdGlmKF90aGlzLnZpZXdzW2pdLnNsdWcgPT0gY3VycmVudFNsdWcpIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdWaWV3cy5wdXNoKF90aGlzLnZpZXdzW2pdKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdGhpcy52aWV3cyA9IG5ld1ZpZXdzO1xyXG5cclxuXHRcdFx0XHQvLyBDbGVhciBpbnRlcnZhbDpcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG5cclxuXHRcdFx0XHQvLyBCdWlsZCB0aGUgcGFnZXI6XHJcbi8vXHRcdFx0XHRcdFx0XHRfdGhpcy5idWlsZFBhZ2VyKCk7XHJcblxyXG5cdFx0XHRcdC8vIFN0YXJ0IHRoZSBhcHA6XHJcblx0XHRcdFx0X3RoaXMuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMjUwKTtcclxuXHR9O1xyXG5cclxuXHQvLyBTdGFydCBmdW5jdGlvbjpcclxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdC8vIEdldCB0aGUgcmlnaHQgdmlldzpcclxuXHRcdC8qXHRcdFx0XHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiXCIpIHtcclxuXHRcdCB2YXIgY3VycmVudEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuXHRcdCBmb3IodmFyIGkgaW4gX3RoaXMudmlld3MpIHtcclxuXHRcdCBpZihfdGhpcy52aWV3c1tpXS5zbHVnID09IGN1cnJlbnRIYXNoKSB7XHJcblx0XHQgX3RoaXMuY3VycmVudFZpZXcgPSBpO1xyXG5cdFx0IH1cclxuXHRcdCB9XHJcblx0XHQgfSBlbHNlIHsqL1xyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSBfdGhpcy52aWV3cy5sZW5ndGggLSAxO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHRfdGhpcy5wbGF5VmlldyhfdGhpcy5jdXJyZW50Vmlldyk7XHJcblx0XHQvLyBTZXR1cCB0aGUgbG9vcDpcclxuXHRcdC8vIHNldEludGVydmFsKGZ1bmN0aW9uIGFOYW1lKCl7XHJcblx0XHQoZnVuY3Rpb24gYU5hbWUoKXtcclxuXHRcdFx0Ly8gUGFzcyBvbiBzb21lIHZhcmlhYmxlczpcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMubW91c2VQb3NpdGlvbiA9IF90aGlzLm1vdXNlUG9zaXRpb247XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLm1vdXNlRG93biA9IF90aGlzLm1vdXNlRG93bjtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMuY2xpY2sgPSBfdGhpcy5jbGljaztcclxuXHRcdFx0X3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHRcdFx0Ly8gTWFrZSB0aGF0IHN0ZXA6XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zdGVwRnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhTmFtZSk7XHJcblx0XHQvLyB9LCAxMDAwIC8gX3RoaXMuZnJhbWVSYXRlKTsgLy8gZGVmYXVsdCA9IDYwIGZwcy5cclxuXHRcdFx0fSkoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnBsYXlWaWV3ID0gZnVuY3Rpb24odmlld05yKVxyXG5cdHtcclxuXHRcdC8vIFVuLWluaXRpYWxpemUgdGhlIGN1cnJlbnQgdmlldzpcclxuXHRcdHRyeSB7XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS51bkluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHRcdH0gY2F0Y2goZSkge31cclxuXHRcdC8vIEdvIGZ1cnRoZXIgd2l0aCB0aGUgcmVxdWVzdGVkIHZpZXcgZnJvbSBoZXJlOlxyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSB2aWV3TnI7XHJcblx0XHQvLyBSZW1vdmUgdGhlIGNsYXNzIG9mIHRoZSBhY3RpdmUgdmlldzpcclxuLy9cdFx0XHRcdFx0aWYodGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYS5hY3RpdmVcIikpIHtcclxuLy9cdFx0XHRcdFx0XHR0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhLmFjdGl2ZVwiKS5jbGFzc05hbWUgPSBcIlwiO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHQvLyBBbmQgYWRkIGl0IHRvIHRoZSBuZXcgdmlldyFcclxuLy9cdFx0XHRcdFx0dGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYVtkYXRhLXZpZXc9XCJcIiArIF90aGlzLmN1cnJlbnRWaWV3ICsgXCJcIl1cIikuY2xhc3NOYW1lID0gXCJhY3RpdmVcIlxyXG5cdFx0Ly8gU2V0IHRoZSBoYXNoOlxyXG4vL1x0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zbHVnO1xyXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgY3VycmVudCB2aWV3OlxyXG5cdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLmluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHR9O1xyXG5cclxufTtcclxuXHJcbnZhciBTdGVwR2VuZXJhdG9yID0gZnVuY3Rpb24oY29tcGxleGl0eSwgbWluSW5jLCBtYXhJbmMsIG1pbk11bCwgbWF4TXVsKVxyXG57XHJcblx0dGhpcy5zdGVwcyAgICAgICA9IFtdO1xyXG5cdHRoaXMuaW5jcyAgICAgICAgPSBbXTtcclxuXHR0aGlzLm11bHRpcGxpZXJzID0gW107XHJcblx0dGhpcy5jb21wbGV4aXR5ICA9IGNvbXBsZXhpdHk7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdC8vIERlZmF1bHRzOlxyXG5cdGlmKG1pbkluYyA9PT0gbnVsbCkgeyBtaW5JbmMgPSAwOyB9XHJcblx0aWYobWF4SW5jID09PSBudWxsKSB7IG1heEluYyA9IDAuMTsgfVxyXG5cdGlmKG1pbk11bCA9PT0gbnVsbCkgeyBtaW5NdWwgPSAwLjc7IH1cclxuXHRpZihtYXhNdWwgPT09IG51bGwpIHsgbWF4TXVsID0gMS4zOyB9XHJcblxyXG5cdC8vIEluaXRpYWxpc2U6XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdHtcclxuXHRcdHRoaXMuc3RlcHMucHVzaChNYXRoLnJhbmRvbSgpICogTWF0aC5QSSk7XHJcblx0XHR0aGlzLmluY3MucHVzaChtaW5JbmMgKyBNYXRoLnJhbmRvbSgpICogKG1heEluYyAtIG1pbkluYykpO1xyXG5cdFx0dGhpcy5tdWx0aXBsaWVycy5wdXNoKG1pbk11bCArIE1hdGgucmFuZG9tKCkgKiAobWF4TXVsIC0gbWluTXVsKSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnN0ZXAgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gSW5jcmVhc2UgdGhlIGNvdW50ZXJzOlxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IF90aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0X3RoaXMuc3RlcHNbaV0gKz0gX3RoaXMuaW5jc1tpXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBTdGVwIFhZLWZ1bmN0aW9uOlxyXG5cdHRoaXMuZ2V0WFkgPSBmdW5jdGlvbihvZmZzZXQsIHcsIGgpXHJcblx0e1xyXG5cdFx0aWYob2Zmc2V0ID09PSBudWxsKSB7IG9mZnNldCA9IDA7IH1cclxuXHJcblx0XHR2YXIgeFZhbHVlID0gMDtcclxuXHRcdHZhciB5VmFsdWUgPSAwO1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSBYWTpcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHhWYWx1ZSArPSBNYXRoLnNpbihfdGhpcy5zdGVwc1tpXSArIChfdGhpcy5pbmNzW2ldICogb2Zmc2V0KSkgKiB3O1xyXG5cdFx0XHR5VmFsdWUgKz0gTWF0aC5jb3MoKF90aGlzLnN0ZXBzW2ldICsgKF90aGlzLmluY3NbaV0gKiBvZmZzZXQpKSAqIF90aGlzLm11bHRpcGxpZXJzW2ldKSAqIGg7XHJcblx0XHR9XHJcblx0XHQvLyBSZXR1cm4gaXQ6XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiB4VmFsdWUsXHJcblx0XHRcdHk6IHlWYWx1ZVxyXG5cdFx0fTtcclxuXHR9O1xyXG59O1xyXG5cblxuXG5cblxyXG52YXIgcGcgPSBuZXcgUGx5Z3JuZCgpO1xyXG5wZy52aWV3cy5wdXNoKHtcclxuXHRuYW1lICAgICAgICAgICAgOiBcIkRvdHMgMlwiLFxyXG5cdHNsdWcgICAgICAgICAgICA6IFwiZG90cy0yXCIsXHJcblx0Ly8gVmFyaWFibGVzIHVzZWQgYnkgdGhpcyB2aWV3OlxyXG5cdHZhcnMgICAgICAgICAgICA6IHtcclxuXHRcdHN0ZXBzOiBudWxsLFxyXG5cdFx0Y3VycmVudFg6IDAsXHJcblx0XHRjdXJyZW50WTogMFxyXG5cdH0sXHJcblx0Ly8gSW5pdGlhbGlzYXRpb246XHJcblx0aW5pdEZ1bmN0aW9uICAgIDogZnVuY3Rpb24oY3R4LCB2YXJzKXtcclxuXHRcdHZhcnMuc3RlcHMgPSBuZXcgU3RlcEdlbmVyYXRvcig0LCAwLCAwLjAyLCAwLjcsIDEuMyk7XHJcblx0XHR2YXJzLnByZXZEaXN0YW5jZXMgPSB7fTtcclxuXHR9LFxyXG5cdC8vIFVuLWluaXRpYWxpc2F0aW9uOlxyXG5cdHVuSW5pdEZ1bmN0aW9uICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7fSxcclxuXHQvLyBTdGVwcGluZyBmdW5jdGlvbjpcclxuXHRzdGVwRnVuY3Rpb24gICAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe1xyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjdHgud2lkdGgsIGN0eC5oZWlnaHQpO1xyXG5cdFx0dmFyIHN0ZXBTaXplID0gY3R4LndpZHRoIC8gMzA7XHJcblx0XHR2YXIgc3RlcHNYID0gY3R4LndpZHRoIC8gc3RlcFNpemU7XHJcblx0XHR2YXIgc3RlcHNZID0gY3R4LmhlaWdodCAvIHN0ZXBTaXplO1xyXG5cclxuLy9cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwZGRmZlwiO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzhjMjQzZVwiO1xyXG5cclxuXHRcdC8vIEFkZHMgYSBzaW1wbGUgZWFzZSB0byB0aGUgbW91c2U6XHJcblx0XHR2YXJzLmN1cnJlbnRYICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueCAtIHZhcnMuY3VycmVudFgpIC8gMjA7XHJcblx0XHR2YXJzLmN1cnJlbnRZICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueSAtIHZhcnMuY3VycmVudFkpIC8gMjA7XHJcblxyXG5cdFx0dmFycy5zdGVwcy5zdGVwKCk7XHJcblxyXG5cdFx0dmFyIHNpemUgPSBjdHgud2lkdGgvMS41O1xyXG5cclxuXHRcdGZvcih2YXIgeSA9IDA7IHkgPCBzdGVwc1k7IHkgKyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCBzdGVwc1g7IHggKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY1ggPSAoeSUyICogc3RlcFNpemUgLyAyKSArICh4ICogc3RlcFNpemUpO1xyXG5cdFx0XHRcdHZhciBjWSA9IHkgKiBzdGVwU2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gb3V0c2lkZTpcclxuXHRcdFx0XHR2YXIgcmFkID0gTWF0aC5hdGFuMihjWCAtIHZhcnMuY3VycmVudFgsIGNZIC0gdmFycy5jdXJyZW50WSk7XHJcblxyXG5cdFx0XHRcdC8vIGRpc3RhbmNlOlxyXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChcclxuXHRcdFx0XHRcdE1hdGgucG93KHZhcnMuY3VycmVudFggLSBjWCwgMikgKyBNYXRoLnBvdyh2YXJzLmN1cnJlbnRZIC0gY1ksIDIpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dmFyIG9mZnNldCA9IE1hdGgubWF4KDAsIChzaXplLzIpIC0gZGlzdGFuY2UpO1xyXG5cdFx0XHRcdHZhciBwID0gb2Zmc2V0L3NpemU7XHJcblx0XHRcdFx0cCo9MS1wO1xyXG5cdFx0XHRcdG9mZnNldCA9IChzaXplLzIpICogcDtcclxuXHJcblx0XHRcdFx0dmFyIHN0ZXBYWSA9IHZhcnMuc3RlcHMuZ2V0WFkoKHkqc3RlcHNYKSsoeCozKSwgb2Zmc2V0LCBvZmZzZXQpO1xyXG5cclxuXHRcdFx0XHR2YXIgZFggPSBzdGVwWFkueCArIGNYICsgTWF0aC5zaW4ocmFkKSAqIChvZmZzZXQpO1xyXG5cdFx0XHRcdHZhciBkWSA9IHN0ZXBYWS55ICsgY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblx0XHRcdFx0Ly8gdmFyIGRYID0gY1g7XHJcblx0XHRcdFx0Ly8gdmFyIGRZID0gY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguZHJhd0NpcmNsZShkWCwgZFksIGRpc3RhbmNlLzgwKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbnBnLmFkZFZpZXcoKTtcclxuLy8gcGcubG9hZCgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdjKGNsYXNzTmFtZSkge1xyXG5cdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdjYShjbGFzc05hbWUpIHtcclxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcXMocXVlcnkpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHFzYShxdWVyeSkge1xyXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFlKGV2ZW50LCBjYWxsYmFjaykge1xyXG5cdHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0byhjYWxsYmFjaywgdGltZSkge1xyXG5cdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGltZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUludCgpIHtcclxuXHR2YXIgbWluID0gLTUwLCBtYXggPSA1MDtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja1RyYW5zZm9ybXNTdXBwb3J0ZWQoKSB7XHJcblx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybiBcInRyYW5zZm9ybVwiO1xyXG5cdGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybiBcIndlYmtpdFRyYW5zZm9ybVwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcblx0dmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIixcclxuXHRcdFx0Y2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG5cdGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XHJcblx0XHR2YXIgYyA9IGNhW2ldO1xyXG5cdFx0d2hpbGUgKGMuY2hhckF0KDApID09IFwiIFwiKVxyXG5cdFx0XHRjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XHJcblx0XHRpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApXHJcblx0XHRcdHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG5cdHZhciBleHBpcmVzO1xyXG5cdGlmIChkYXlzKSB7XHJcblx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcblx0XHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0fSBlbHNlIGV4cGlyZXMgPSBcIlwiO1xyXG5cdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29va2llKG5hbWUpIHtcclxuXHRzZXRDb29raWUobmFtZSxcIlwiLC0xKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93Q29va2llTWVzc2FnZSgpIHtcclxuXHRnYyhcImNvb2tpZXNcIikuY2xhc3NMaXN0LmFkZChcImNvb2tpZXMtLWluXCIpO1xyXG5cdGdjKFwiY29va2llc19fY2xvc2UtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdGdjKFwiY29va2llc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY29va2llcy0taW5cIik7XHJcblx0XHRzZXRDb29raWUoXCJjb29raWVNZXNzYWdlXCIsIGZhbHNlLCAzNjUpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvb2tpZXMgY2xvc2VcIik7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUludHJvKHR5cGUpIHtcclxuXHR2YXIgbW9kaWZpZXIgPSBcIm91dFwiLFxyXG5cdFx0dGltZSA9IDIwMDA7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIDI6IG1vZGlmaWVyID0gXCJvdXQyXCI7IHRpbWUgPSA0MDA7IGJyZWFrO1xyXG5cdH1cclxuXHRnYyhcImludHJvXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnRyby0tXCIgKyBtb2RpZmllcik7XHJcblx0Z2MoXCJpbnRyby1kYXJrZW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiaW50cm8tZGFya2VuZXItLVwiICsgbW9kaWZpZXIpO1xyXG5cdFxyXG5cdHRvKGZ1bmN0aW9uKCkgeyBnYyhcImludHJvLWRhcmtlbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgfSwgdGltZSk7XHJcblx0dG8oZnVuY3Rpb24oKSB7IGdjKFwiaW50cm9cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9LCB0aW1lKTtcclxuXHRcclxuXHRnYyhcImFyX19sb2dvLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiYXJfX2xvZ28tY29udGFpbmVyLS1pblwiKTtcclxuXHRnYyhcImFyX190ZXh0XCIpLmNsYXNzTGlzdC5hZGQoXCJhcl9fdGV4dC0taW5cIik7XHJcblx0Z2MoXCJtYWluLWJnXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWJnLS1pblwiKTtcclxuXHRnYyhcImNob29zZS1wcm9maWxlLXRleHRcIikuY2xhc3NMaXN0LmFkZChcImNob29zZS1wcm9maWxlLXRleHQtLWluXCIpO1xyXG5cdFxyXG5cdGdjKFwiZm9vdGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItLWluXCIpO1xyXG5cdHRvKGZ1bmN0aW9uKCkgeyBnYyhcImZvb3RlclwiKS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLS1uby1kZWxheVwiKTsgfSwgMjAwMCk7XHJcblx0XHJcblx0Z2MoXCJwcm9maWxlLS0xXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS0xaW5cIik7XHJcblx0Z2MoXCJwcm9maWxlLS0yXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS0yaW5cIik7XHJcblx0Z2MoXCJwcm9maWxlLS0zXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS0zaW5cIik7XHJcblx0XHR0byhmdW5jdGlvbigpIHtcclxuXHRcdFx0cXNhKFwiLnByb2ZpbGVcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7IGl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLW5vLWRlbGF5XCIpOyB9ICk7XHJcblx0XHR9LCAyMDApO1xyXG5cdFxyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGggPj0gODEwKSB7XHJcblx0XHRwZy5sb2FkKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdEludHJvKCkge1xyXG5cdGdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLS1ib3R0b21cIik7XHJcblx0Z2MoXCJzY3JvbGwtZG93bl9faW5uZXJcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duX19pbm5lci0tb3V0XCIpO1xyXG5cdFxyXG5cdHZhciB2aWV3UG9ydFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLFxyXG5cdFx0d2hlZWxMZXZlbCA9IDAsXHJcblx0XHR3aGVlbExldmVsRm9ybWVyID0gMCxcclxuXHRcdHBocmFzZXMgPSBnY2EoXCJwaHJhc2VzX19waHJhc2VcIiksXHJcblx0XHRidWJibGVzID0gZ2NhKFwiYnViYmxlc19fbGF5ZXJcIiksXHJcblx0XHR2aXNpYmxlUGhyYXNlcyA9IFtdLFxuXHRcdHZpc2libGVCdWJibGVzID0gW10sXHJcblx0XHR5U3RhcnQsXHJcblx0XHR5RW5kLFxyXG5cdFx0dHJhbnNmb3JtID0gY2hlY2tUcmFuc2Zvcm1zU3VwcG9ydGVkKCksXHJcblx0XHRtb3VzZU1vdmVMaXN0ZW5lcixcclxuXHRcdG1vdXNlV2hlZWxMaXN0ZW5lcixcclxuXHRcdHRvdWNoU3RhcnRMaXN0ZW5lcixcclxuXHRcdHRvdWNoRW5kTGlzdGVuZXIsXHJcblx0XHRrZXlEb3duTGlzdGVuZXIsXHJcblx0XHR0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudDtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHQvLyBPbiBkZXNrdG9wIHZlcnNpb24gaXQgbW92ZXMgb24gdGhlIDNkIHNwYWNlIHRoZSBwaHJhc2VzIGFuZCBidWJibGVzIGRlcGVuZGluZyBvbiB0aGUgbW91c2UgcGxhY2VtZW50IG9uIHNjcmVlblxyXG5cdGlmICh2aWV3UG9ydFdpZHRoID49IDgxMClcclxuXHRcdGFlKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGVsdGFaOiBcIiArIGUuZGVsdGFaKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhTW9kZTogXCIgKyBlLmRlbHRhTW9kZSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRYOiBcIiArIGUuY2xpZW50WCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRZOiBcIiArIGUuY2xpZW50WSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgK1wiZGVnKVwiKTtcclxuXHRcdFx0dmFyIHBocmFzZXMgPSBnYyhcInBocmFzZXNcIiksIFxyXG5cdFx0XHRcdGJ1YmJsZXMgPSBnYyhcImJ1YmJsZXNcIik7XHJcblx0XHRcdHBocmFzZXMuc3R5bGVbdHJhbnNmb3JtXSA9IFwicm90YXRlWChcIiArIC0oMC4wMiplLmNsaWVudFktMTApICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyAoMC4wMiplLmNsaWVudFgtMjUpICsgXCJkZWcpIHRyYW5zbGF0ZTNkKFwiICsgKC0wLjA1KmUuY2xpZW50WCsxMDApICsgXCJweCwgMCwgMClcIjtcclxuXHRcdFx0YnViYmxlcy5zdHlsZVt0cmFuc2Zvcm1dID0gcGhyYXNlcy5zdHlsZVt0cmFuc2Zvcm1dO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0dG8oZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gMClcclxuXHRcdFx0aWYgKHZpZXdQb3J0V2lkdGggPj0gODEwKVxyXG5cdFx0XHRcdGdjKFwic2Nyb2xsLWRvd24taGludFwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24taGludC0taW5cIik7XHJcblx0XHRcdGVsc2UgZ2MoXCJzd2lwZS11cC1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzd2lwZS11cC1oaW50LS1pblwiKTtcclxuXHR9LCAzMDAwKTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBDb3VudHMgd2hlZWwgc2Nyb2xsIG1vdmVtZW50cyBhbmQgbW92ZXMgcGhyYXNlcyBhbmQgYnViYmxlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVQaHJhc2VzKGxldmVsKSB7XHJcblx0XHRpZiAoKGxldmVsPjAgJiYgd2hlZWxMZXZlbDw1KSB8fCAobGV2ZWw8MCAmJiB3aGVlbExldmVsPjApKVxyXG5cdFx0XHR3aGVlbExldmVsICs9IGxldmVsO1xyXG5cdFx0ZWxzZSByZXR1cm47XHJcblx0XHRcclxuXHRcdGlmICh3aGVlbExldmVsID09PSAxKSB7XHJcblx0XHRcdGdjKFwic2Nyb2xsLWRvd24taGludFwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24taGludC0tb3V0XCIpO1xyXG5cdFx0XHRnYyhcInN3aXBlLXVwLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInN3aXBlLXVwLWhpbnQtLW91dFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJoZXlcIik7XHJcblx0XHR9IFxyXG5cdFx0XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gNSkge1xyXG5cdFx0XHR0byhmdW5jdGlvbigpIHsgZ2MoXCJlbnRlci1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImVudGVyLWJ1dHRvbi0taW5cIik7IH0sIDEwMDApO1xyXG5cdFx0XHRnYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi0tb3V0XCIpO1xyXG5cdFx0XHRnYyhcInNraXAtaW50cm9cIikuY2xhc3NMaXN0LnJlbW92ZShcInNraXAtaW50cm8tLWluXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Z2MoXCJlbnRlci1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImVudGVyLWJ1dHRvbi0taW5cIik7XHJcblx0XHRcdGdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbC1kb3duLS1vdXRcIik7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID4gMClcclxuXHRcdFx0XHRnYyhcInNraXAtaW50cm9cIikuY2xhc3NMaXN0LmFkZChcInNraXAtaW50cm8tLWluXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh3aGVlbExldmVsID4gd2hlZWxMZXZlbEZvcm1lcikge1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5zcGxpY2UoMCwgMCwgKHBocmFzZXNbd2hlZWxMZXZlbC0xXSkpO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlcy5zcGxpY2UoMCwgMCwgKGJ1YmJsZXNbd2hlZWxMZXZlbC0xXSkpO1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJwaHJhc2VzX19waHJhc2UtLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdFx0dmlzaWJsZUJ1YmJsZXNbaV0uY2xhc3NMaXN0LmFkZChcImJ1YmJsZXNfX2xheWVyLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAod2hlZWxMZXZlbCA8IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwicGhyYXNlc19fcGhyYXNlLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHRcdHZpc2libGVCdWJibGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGVzX19sYXllci0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLnNwbGljZSgwLCAxKTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXMuc3BsaWNlKDAsIDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSB3aGVlbExldmVsO1xyXG5cdH1cclxuXHRcclxuXHRhZShcIndoZWVsXCIsIG1vdXNlV2hlZWxMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoZS5kZWx0YVkgPiAwKVxyXG5cdFx0XHRtb3ZlUGhyYXNlcygxKTtcclxuXHRcdGVsc2UgaWYgKGUuZGVsdGFZIDwgMClcclxuXHRcdFx0bW92ZVBocmFzZXMoLTEpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjI2NDA3Mi9kZXRlY3QtYS1maW5nZXItc3dpcGUtdGhyb3VnaC1qYXZhc2NyaXB0LW9uLXRoZS1pcGhvbmUtYW5kLWFuZHJvaWRcclxuXHRhZShcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydExpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0eVN0YXJ0ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0fSk7XHJcblx0XHJcblx0YWUoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZExpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0eUVuZCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHRcdGlmICh5RW5kIC0geVN0YXJ0IDwgLTYwKVxyXG5cdFx0XHRtb3ZlUGhyYXNlcygxKTtcclxuXHRcdGVsc2UgaWYgKHlFbmQgLSB5U3RhcnQgPiA2MClcclxuXHRcdFx0bW92ZVBocmFzZXMoLTEpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEhpZGVzIHRoZSBJbnRybyBzY3JlZW5cclxuXHRmdW5jdGlvbiBza2lwSW50cm8oZ2FMYWJlbCkge1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlTGlzdGVuZXIpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBtb3VzZVdoZWVsTGlzdGVuZXIpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnRMaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25MaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50KTtcclxuXHRcdFxyXG5cdFx0aGlkZUludHJvKCk7XHJcblx0XHRcclxuXHRcdHNldENvb2tpZShcImZpcnN0VGltZVwiLCBmYWxzZSwgMzY1KTtcclxuXHRcdFxyXG5cdFx0aWYgKGdldENvb2tpZShcImNvb2tpZU1lc3NhZ2VcIikgPT09IG51bGwpXHJcblx0XHRcdHRvKHNob3dDb29raWVNZXNzYWdlLCAzMDAwKTtcclxuXHRcdFx0XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiU2tpcCBJbnRyb1wiLCBnYUxhYmVsKTtcclxuXHR9XHJcblx0XHJcblx0Z2MoXCJlbnRlci1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHsgc2tpcEludHJvKFwiRW50ZXIgYnV0dG9uXCIpOyB9KTtcclxuXHRnYyhcInNraXAtaW50cm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHsgc2tpcEludHJvKFwiU2tpcCBpbnRybyBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdGFlKFwia2V5ZG93blwiLCBrZXlEb3duTGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XHRcdFx0XHJcblx0XHRzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG5cdFx0XHRjYXNlIDM5OlxyXG5cdFx0XHRjYXNlIDQwOiBtb3ZlUGhyYXNlcygxKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6IG1vdmVQaHJhc2VzKC0xKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgMjc6IHNraXBJbnRybyhcIkVzYyBrZXlcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgcmFuZG9tbHkgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IHRoZSBidWJibGUgbGF5ZXJzXHJcblx0KGZ1bmN0aW9uIGNvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCgpIHtcclxuXHRcdGZvciAodmFyIG49MDsgbjx2aXNpYmxlQnViYmxlcy5sZW5ndGg7ICsrbikge1xyXG5cdFx0XHQvL3ZhciB6VHJhbnMgPSAvXFwuKnRyYW5zbGF0ZVpcXCgoLiopcHhcXCkvaS5leGVjKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHZcIikuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpWzFdO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlc1tuXS5maXJzdENoaWxkLnN0eWxlW3RyYW5zZm9ybV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgZ2V0UmFuZG9tSW50KCkgKyBcInB4LCBcIiArIGdldFJhbmRvbUludCgpICsgXCJweCwgMClcIjtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXNbbl0uZmlyc3RDaGlsZC5zdHlsZVt0cmFuc2Zvcm1dID0gXCJ0cmFuc2xhdGUzZChcIiArIGdldFJhbmRvbUludCgpICsgXCJweCwgXCIgKyBnZXRSYW5kb21JbnQoKSArIFwicHgsIDApXCI7XHJcblx0XHR9XHJcblx0XHR0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCA9IHRvKGNvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCwgMzAwMCk7XHJcblx0fSkoKTtcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRNYWluKCkge1xyXG5cdFxyXG5cdHZhciB0b1JlbW92ZUNsYXNzZXMsXHJcblx0XHRwcm9maWxlU2VsZWN0ZWQgPSAwLFxyXG5cdFx0YW5pbUR1cmF0aW9uTW9yZUluZm8gPSAyMDAsXHJcblx0XHRhbmltRHVyYXRpb24gPSA0MDAsXHJcblx0XHRkZXNjcmlwdGlvblBhbmVsID0gZ2MoXCJkZXNjcmlwdGlvbi1wYW5lbFwiKSxcclxuXHRcdG1vcmVJbmZvUGFuZWwgPSBnYyhcIm1vcmUtaW5mby1wYW5lbFwiKSxcclxuXHRcdG1vcmVJbmZvSW1hZ2UgPSBnYyhcIm1vcmUtaW5mby1pbWFnZVwiKTtcclxuXHRcclxuXHRnYyhcIm1haW5cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvc2VuZGluZy1oaXRzXHJcblx0cXMoXCIuYmxvY2tfX2NvbnRhY3QtaWNvbi5lbWFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJFbWFpbFwiKTsgfSk7XHJcblx0cXMoXCIuYmxvY2tfX2NvbnRhY3QtaWNvbi5saW5rZWRpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJMaW5rZWRJblwiKTsgfSk7XHJcblx0cXMoXCIuYmxvY2tfX2NvbnRhY3QtaWNvbi5naXRodWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiR2l0SHViXCIpOyB9KTtcclxuXHRxcyhcIi5tb3JlLWluZm8tcGFuZWxfX2NvbnRhY3QtaWNvbi5lbWFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJFbWFpbCBNSVwiKTsgfSk7XHJcblx0cXMoXCIubW9yZS1pbmZvLXBhbmVsX19jb250YWN0LWljb24ubGlua2VkaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiTGlua2VkSW4gTUlcIik7IH0pO1xyXG5cdHFzKFwiLm1vcmUtaW5mby1wYW5lbF9fY29udGFjdC1pY29uLmdpdGh1YlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJHaXRIdWIgTUlcIik7IH0pO1xyXG5cdGdjKFwibW9yZS1pbmZvLXBhbmVsX19zb3VyY2UtY29kZS1saW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvbnRhY3QgaWNvblwiLCBcIlNvdXJjZSBjb2RlIGxpbmtcIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byBcIlNob3cgaW50cm8gYWdhaW5cIiBidXR0b25cclxuXHRmdW5jdGlvbiBzaG93SW50cm9BZ2FpbihnYUxhYmVsKSB7XHJcblx0XHRyZW1vdmVDb29raWUoXCJmaXJzdFRpbWVcIik7XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiU2hvdyBpbnRybyBhZ2FpblwiLCBnYUxhYmVsKTtcclxuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdH1cclxuXHRnYyhcImZvb3Rlcl9fc2hvdy1pbnRyby1hZ2FpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dJbnRyb0FnYWluKFwiRm9vdGVyIGJ1dHRvblwiKTsgfSk7XHJcblx0Z2MoXCJmb290ZXItbV9fc2hvdy1pbnRyby1hZ2FpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dJbnRyb0FnYWluKFwiRm9vdGVyIG1vYmlsZSBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byBcIk1vcmUgaW5mb1wiIGJ1dHRvblxyXG5cdGZ1bmN0aW9uIG1vcmVJbmZvRXZlbnRMaXN0ZW5lcihnYUxhYmVsKSB7XHJcblx0XHRtb3JlSW5mb1BhbmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0XHRtb3JlSW5mb1BhbmVsLm9mZnNldEhlaWdodDsgLy8gVGhpcyBjYXVzZXMgcmVmbG93IGJlZm9yZSBhZGRpbmcgbmV4dCBjbGFzc1xuXHRcdC8qIGpzaGludCBpZ25vcmU6ZW5kICovXHJcblx0XHRtb3JlSW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8tcGFuZWwtLWluXCIpO1xyXG5cdFx0bW9yZUluZm9JbWFnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdFx0bW9yZUluZm9JbWFnZS5vZmZzZXRIZWlnaHQ7XG5cdFx0LyoganNoaW50IGlnbm9yZTplbmQgKi9cclxuXHRcdG1vcmVJbmZvSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1vcmUtaW5mby1pbWFnZS0taW5cIik7XHJcblx0XHRnYyhcImRhcmtlbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJkYXJrZW5lci0taW4yXCIpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIk1vcmUgaW5mb1wiLCBnYUxhYmVsKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gbW9yZUluZm9DbG9zZUV2ZW50TGlzdGVuZXIoZ2FMYWJlbCkge1xyXG5cdFx0dG8oZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1vcmVJbmZvUGFuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRcdG1vcmVJbmZvSW1hZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHR9LCBhbmltRHVyYXRpb25Nb3JlSW5mbyk7XHJcblx0XHRtb3JlSW5mb1BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb3JlLWluZm8tcGFuZWwtLWluXCIpO1xyXG5cdFx0bW9yZUluZm9JbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibW9yZS1pbmZvLWltYWdlLS1pblwiKTtcclxuXHRcdGdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtlbmVyLS1pbjJcIik7XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiTW9yZSBpbmZvIGNsb3NlXCIsIGdhTGFiZWwpO1xyXG5cdH1cclxuXHRnYyhcImZvb3Rlcl9fbW9yZS1pbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgbW9yZUluZm9FdmVudExpc3RlbmVyKFwiRm9vdGVyIGJ1dHRvblwiKTsgfSk7XHJcblx0Z2MoXCJmb290ZXItbV9fbW9yZS1pbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgbW9yZUluZm9FdmVudExpc3RlbmVyKFwiRm9vdGVyIG1vYmlsZSBidXR0b25cIik7IH0pO1xyXG5cdGdjKFwibW9yZS1pbmZvLWltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgbW9yZUluZm9DbG9zZUV2ZW50TGlzdGVuZXIoXCJJbWFnZSBjbGlja1wiKTsgfSk7XHJcblx0Z2MoXCJtb3JlLWluZm8taW1hZ2VfX2JhY2stYnV0dG9uLW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBtb3JlSW5mb0Nsb3NlRXZlbnRMaXN0ZW5lcihcIkJhY2sgYnV0dG9uIG1vYmlsZVwiKTsgfSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gQWRkcyBuZWNlc3NhcnkgbG9naWMgdG8gc2hvdyB0aGUgRGVzY3JpcHRpb24gcGFuZWwgZm9yIHNvbWUgcHJvZmlsZVxyXG5cdGZ1bmN0aW9uIHNob3dPckhpZGVEZXNjcmlwdGlvbkJhcihuZXdQcm9maWxlKSB7XHJcblx0XHRpZiAoIWRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVzY3JpcHRpb24tcGFuZWwtLWluXCIpKSB7XHJcblx0XHRcdGRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiLCBcInNcIiArIG5ld1Byb2ZpbGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIG5Qcm9maWxlID0gZ2MoXCJwcm9maWxlLS1cIiArIG5ld1Byb2ZpbGUpO1xyXG5cdFx0XHRuUHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tei1pbmRleFwiKTtcclxuXHRcdFx0blByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkXCIpO1xyXG5cdFx0XHRzd2l0Y2ggKG5ld1Byb2ZpbGUpIHtcclxuXHRcdFx0XHRjYXNlIDE6IG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1sZWZ0XCIpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIDI6IG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1jZW50ZXJcIik7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzogblByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkLXJpZ2h0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdG5Qcm9maWxlLnRpdGxlID0gXCJCYWNrXCI7XHJcblx0XHRcdG5Qcm9maWxlLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlX190aXRsZS1iZy0taW5cIik7XHJcblx0XHRcdG5Qcm9maWxlLmNoaWxkcmVuWzNdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlX190aXRsZS10ZXh0LS1pblwiKTtcclxuXHRcdFx0XHJcblx0XHRcdGdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LmFkZChcImRhcmtlbmVyLS1pblwiKTtcclxuXHJcblx0XHRcdGZvciAodmFyIG49MTsgbjw9MzsgKytuKVxyXG5cdFx0XHRcdGlmIChuZXdQcm9maWxlICE9PSBuKSB7XHJcblx0XHRcdFx0XHRnYyhcInByb2ZpbGUtLVwiICsgbikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLW5vdC1zZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRcdHN3aXRjaCAobikge1xyXG5cdFx0XHRcdFx0XHRjYXNlIDE6IGdjKFwicHJvZmlsZS0tXCIgKyBuKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtbGVmdFwiKTsgYnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMjogZ2MoXCJwcm9maWxlLS1cIiArIG4pLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1jZW50ZXJcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDM6IGdjKFwicHJvZmlsZS0tXCIgKyBuKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtcmlnaHRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Z2NhKFwiZGVzYy1wcm9maWxlLS1cIiArIG5ld1Byb2ZpbGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodG9SZW1vdmVDbGFzc2VzKTtcclxuXHRcdFx0dG8oZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0blByb2ZpbGUuY2hpbGRyZW5bNF0uY2xhc3NMaXN0LmFkZChcInByb2ZpbGVfX2JhY2stYnV0dG9uLS1pblwiKTtcclxuXHRcdFx0XHRnYyhcInByb2ZpbGUtc2VsZWN0ZWQtYmctLVwiICsgbmV3UHJvZmlsZSkuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtc2VsZWN0ZWQtYmctLWluXCIpO1xyXG5cdFx0XHRcdHFzKFwiLnByb2ZpbGUtc2VsZWN0ZWQtcGxhY2UtLVwiICsgbmV3UHJvZmlsZSArIFwiIC5wcm9maWxlLXNlbGVjdGVkLXBsYWNlX190aXRsZVwiKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1zZWxlY3RlZC1wbGFjZV9fdGl0bGUtLWluXCIpO1xyXG5cdFx0XHR9LCBhbmltRHVyYXRpb24pO1xyXG5cdFx0XHRcclxuXHRcdFx0Z2MoXCJkZXNjcmlwdGlvbi1wYW5lbF9fb3ZlcmZsb3ctaGlkZVwiKS5zY3JvbGxUb3AgPSAwO1xyXG5cdFx0XHRwcm9maWxlU2VsZWN0ZWQgPSBuZXdQcm9maWxlO1xyXG5cdFx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiUHJvZmlsZSBkZXNjcmlwdGlvbiBwYW5lbCBvcGVuXCIsIFwiUHJvZmlsZSBcIiArIG5ld1Byb2ZpbGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGVzY3JpcHRpb25QYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb24tcGFuZWwtLWluXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHNQcm9maWxlID0gZ2MoXCJwcm9maWxlLS1cIiArIHByb2ZpbGVTZWxlY3RlZCk7XHJcblx0XHRcdHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZFwiKTtcclxuXHRcdFx0c3dpdGNoIChuZXdQcm9maWxlKSB7XHJcblx0XHRcdFx0Y2FzZSAxOiBzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtbGVmdFwiKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOiBzUHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtY2VudGVyXCIpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlIDM6IHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1yaWdodFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzUHJvZmlsZS50aXRsZSA9IFwiXCI7XHJcblx0XHRcdHNQcm9maWxlLmNoaWxkcmVuWzRdLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlX19iYWNrLWJ1dHRvbi0taW5cIik7XHJcblx0XHRcdFxyXG5cdFx0XHRnYyhcImRhcmtlbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrZW5lci0taW5cIik7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBuMj0xOyBuMjw9MzsgKytuMilcclxuXHRcdFx0XHRpZiAocHJvZmlsZVNlbGVjdGVkICE9PSBuMikge1xyXG5cdFx0XHRcdFx0Z2MoXCJwcm9maWxlLS1cIiArIG4yKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tbm90LXNlbGVjdGVkXCIpO1xyXG5cdFx0XHRcdFx0c3dpdGNoIChuMikge1xyXG5cdFx0XHRcdFx0XHRjYXNlIDE6IGdjKFwicHJvZmlsZS0tXCIgKyBuMikuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLXNlbGVjdGVkLWxlZnRcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDI6IGdjKFwicHJvZmlsZS0tXCIgKyBuMikuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLXNlbGVjdGVkLWNlbnRlclwiKTsgYnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMzogZ2MoXCJwcm9maWxlLS1cIiArIG4yKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tc2VsZWN0ZWQtcmlnaHRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Z2MoXCJwcm9maWxlLXNlbGVjdGVkLWJnLS1cIiArIHByb2ZpbGVTZWxlY3RlZCkuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtc2VsZWN0ZWQtYmctLWluXCIpO1xyXG5cdFx0XHRxcyhcIi5wcm9maWxlLXNlbGVjdGVkLXBsYWNlLS1cIiArIHByb2ZpbGVTZWxlY3RlZCArIFwiIC5wcm9maWxlLXNlbGVjdGVkLXBsYWNlX190aXRsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS1zZWxlY3RlZC1wbGFjZV9fdGl0bGUtLWluXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIlByb2ZpbGUgZGVzY3JpcHRpb24gcGFuZWwgY2xvc2VcIiwgXCJQcm9maWxlIFwiICsgcHJvZmlsZVNlbGVjdGVkKTtcclxuXHJcblx0XHRcdHZhciByZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZGVzY3JpcHRpb25QYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic1wiICsgcHJvZmlsZVNlbGVjdGVkKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRnY2EoXCJkZXNjLXByb2ZpbGUtLVwiICsgcHJvZmlsZVNlbGVjdGVkKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0c1Byb2ZpbGUuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLXotaW5kZXhcIik7XHJcblxyXG5cdFx0XHRcdHByb2ZpbGVTZWxlY3RlZCA9IDA7XHJcblx0XHRcdH07XHJcblx0XHRcdHRvUmVtb3ZlQ2xhc3NlcyA9IHRvKHJlbW92ZUNsYXNzZXMsIGFuaW1EdXJhdGlvbik7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGdjKFwicHJvZmlsZS0tMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPckhpZGVEZXNjcmlwdGlvbkJhcigxKTsgfSk7XHJcblx0Z2MoXCJwcm9maWxlLS0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgc2hvd09ySGlkZURlc2NyaXB0aW9uQmFyKDIpOyB9KTtcclxuXHRnYyhcInByb2ZpbGUtLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JIaWRlRGVzY3JpcHRpb25CYXIoMyk7IH0pO1xyXG5cdGdjKFwicHJvZmlsZS1tLS0xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgc2hvd09ySGlkZURlc2NyaXB0aW9uQmFyKDEpOyB9KTtcclxuXHRnYyhcInByb2ZpbGUtbS0tMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPckhpZGVEZXNjcmlwdGlvbkJhcigyKTsgfSk7XHJcblx0Z2MoXCJwcm9maWxlLW0tLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JIaWRlRGVzY3JpcHRpb25CYXIoMyk7IH0pO1xyXG5cdFxyXG5cdGdjKFwiYmFjay1idXR0b24tbVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPckhpZGVEZXNjcmlwdGlvbkJhcigxKTsgfSk7IC8vIEl0IGRvZXNuJ3QgbWF0dGVyIHdoaWNoIHByb2ZpbGVkIGlzIGNsaWNrZWRcclxuXHRcclxuXHRhZShcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVzY3JpcHRpb24tcGFuZWwtLWluXCIpICYmIGUua2V5Q29kZSA9PT0gMjcpXHJcblx0XHRcdHNob3dPckhpZGVEZXNjcmlwdGlvbkJhcigxKTtcclxuXHRcdGVsc2UgaWYgKG1vcmVJbmZvUGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9yZS1pbmZvLXBhbmVsLS1pblwiKSAmJiBlLmtleUNvZGUgPT09IDI3KVxyXG5cdFx0XHRtb3JlSW5mb0Nsb3NlRXZlbnRMaXN0ZW5lcihcIkVzYyBrZXlcIik7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gU2hvd3Mgb3IgaGlkZXMgdGhlIHNjcm9sbCBidXR0b25zIG9uIHRoZSBkZXNjcmlwdGlvbiBwYW5lbFxyXG5cdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzg5ODEzMC9jaGVjay1pZi1hLXVzZXItaGFzLXNjcm9sbGVkLXRvLXRoZS1ib3R0b20vMzQ1NTAxNzEjMzQ1NTAxNzFcclxuXHR2YXIgZFBTY3JvbGwgPSBnYyhcImRlc2NyaXB0aW9uLXBhbmVsX19vdmVyZmxvdy1oaWRlXCIpLFxyXG5cdFx0dXBCdXR0b24gPSBnYyhcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLXVwXCIpLFxyXG5cdFx0ZG93bkJ1dHRvbiA9IGdjKFwiZGVzY3JpcHRpb24tcGFuZWxfX3Njcm9sbC0tZG93blwiKTtcclxuXHRcdFxyXG5cdGRQU2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGRQU2Nyb2xsLnNjcm9sbEhlaWdodCAtIGRQU2Nyb2xsLnNjcm9sbFRvcCA9PT0gZFBTY3JvbGwuY2xpZW50SGVpZ2h0ICYmXHJcblx0XHRcdFx0ZGVzY3JpcHRpb25QYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXNjcmlwdGlvbi1wYW5lbC0taW5cIikpIHsgLy8gQSBzY3JvbGwgZXZlbnQgaXMgZmlyZWQgYXQgdGhlIG1haW4gc2NyZWVuXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0ZG93bkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tcGFuZWxfX3Njcm9sbC0tZG93bi1oaWRkZW5cIik7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgZWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiczFcIikpIHtcclxuXHRcdFx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiRGVzY3JpcHRpb24gcGFuZWwgYm90dG9tIHJlYWNoZWRcIiwgXCJQcm9maWxlIDFcIik7XHJcblx0XHRcdH0gZWxzZSBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInMyXCIpKSB7XHJcblx0XHRcdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkRlc2NyaXB0aW9uIHBhbmVsIGJvdHRvbSByZWFjaGVkXCIsIFwiUHJvZmlsZSAyXCIpO1xyXG5cdFx0XHR9IGVsc2UgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzM1wiKSkge1xyXG5cdFx0XHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJEZXNjcmlwdGlvbiBwYW5lbCBib3R0b20gcmVhY2hlZFwiLCBcIlByb2ZpbGUgM1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSBkb3duQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjcmlwdGlvbi1wYW5lbF9fc2Nyb2xsLS1kb3duLWhpZGRlblwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKGRQU2Nyb2xsLnNjcm9sbFRvcCA8PSA1KSB7XHJcblx0XHRcdHVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1wYW5lbF9fc2Nyb2xsLS11cC1oaWRkZW5cIik7XHJcblx0XHR9IGVsc2UgdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLXVwLWhpZGRlblwiKTtcclxuXHRcdFxyXG5cdFx0Ly8gY29uc29sZS5sb2coZFBTY3JvbGwuc2Nyb2xsSGVpZ2h0KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRQU2Nyb2xsLnNjcm9sbFRvcCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkUFNjcm9sbC5jbGllbnRIZWlnaHQpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZFBTY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gZFBTY3JvbGwuc2Nyb2xsVG9wKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gaHR0cHM6Ly9jb2RlcndhbGwuY29tL3AvaHVqbGhnL3Ntb290aC1zY3JvbGxpbmctd2l0aG91dC1qcXVlcnlcclxuXHQvLyBodHRwOi8vanNmaWRkbGUubmV0L3QxZHYxcmJvXHJcblx0ZnVuY3Rpb24gc2Nyb2xsQnkoZWxlbWVudCwgdGFyZ2V0LCBkdXJhdGlvbikge1xyXG5cdFx0dGFyZ2V0ID0gTWF0aC5yb3VuZCh0YXJnZXQpO1xyXG5cdFx0ZHVyYXRpb24gPSBNYXRoLnJvdW5kKGR1cmF0aW9uKTtcclxuXHRcdFxyXG5cdFx0aWYgKGR1cmF0aW9uIDwgMClcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFwiYmFkIGR1cmF0aW9uXCIpO1xyXG5cdFx0XHRcclxuXHRcdGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG5cdFx0XHRlbGVtZW50LnNjcm9sbFRvcCA9IHRhcmdldDtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuXHRcdHZhciBlbmRUaW1lID0gc3RhcnRUaW1lICsgZHVyYXRpb247XHJcblx0XHRcclxuXHRcdHZhciBzdGFydFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0dmFyIGRpc3RhbmNlID0gdGFyZ2V0IC0gc3RhcnRUb3A7XHJcblx0XHRcclxuXHRcdC8vIGJhc2VkIG9uIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU21vb3Roc3RlcFxyXG5cdFx0dmFyIHNtb290aFN0ZXAgPSBmdW5jdGlvbihzdGFydCwgZW5kLCBwb2ludCkge1xyXG5cdFx0XHRpZihwb2ludCA8PSBzdGFydCkgeyByZXR1cm4gMDsgfVxyXG5cdFx0XHRpZihwb2ludCA+PSBlbmQpIHsgcmV0dXJuIDE7IH1cclxuXHRcdFx0dmFyIHggPSAocG9pbnQgLSBzdGFydCkgLyAoZW5kIC0gc3RhcnQpOyAvLyBpbnRlcnBvbGF0aW9uXHJcblx0XHRcdHJldHVybiB4KngqKDMgLSAyKngpO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHQvLyBUaGlzIGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hlcmUgdGhlIGVsZW1lbnRcInMgc2Nyb2xsVG9wIGlzXHJcblx0XHRcdC8vIHN1cHBvc2VkIHRvIGJlLCBiYXNlZCBvbiB3aGF0IHdlXCJyZSBkb2luZ1xyXG5cdFx0XHR2YXIgcHJldmlvdXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFRoaXMgaXMgbGlrZSBhIHRoaW5rIGZ1bmN0aW9uIGZyb20gYSBnYW1lIGxvb3BcclxuXHRcdFx0dmFyIHNjcm9sbEZyYW1lID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYoZWxlbWVudC5zY3JvbGxUb3AgIT0gcHJldmlvdXNUb3ApIHtcclxuXHRcdFx0XHRcdHJlamVjdChcImludGVycnVwdGVkXCIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBzZXQgdGhlIHNjcm9sbFRvcCBmb3IgdGhpcyBmcmFtZVxyXG5cdFx0XHRcdHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdHZhciBwb2ludCA9IHNtb290aFN0ZXAoc3RhcnRUaW1lLCBlbmRUaW1lLCBub3cpO1xyXG5cdFx0XHRcdHZhciBmcmFtZVRvcCA9IE1hdGgucm91bmQoc3RhcnRUb3AgKyAoZGlzdGFuY2UgKiBwb2ludCkpO1xyXG5cdFx0XHRcdGVsZW1lbnQuc2Nyb2xsVG9wID0gZnJhbWVUb3A7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgd2VcInJlIGRvbmUhXHJcblx0XHRcdFx0aWYobm93ID49IGVuZFRpbWUpIHtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gSWYgd2Ugd2VyZSBzdXBwb3NlZCB0byBzY3JvbGwgYnV0IGRpZG5cInQsIHRoZW4gd2VcclxuXHRcdFx0XHQvLyBwcm9iYWJseSBoaXQgdGhlIGxpbWl0LCBzbyBjb25zaWRlciBpdCBkb25lOyBub3RcclxuXHRcdFx0XHQvLyBpbnRlcnJ1cHRlZC5cclxuXHRcdFx0XHRpZihlbGVtZW50LnNjcm9sbFRvcCA9PT0gcHJldmlvdXNUb3AgJiYgZWxlbWVudC5zY3JvbGxUb3AgIT09IGZyYW1lVG9wKSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHByZXZpb3VzVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gc2NoZWR1bGUgbmV4dCBmcmFtZSBmb3IgZXhlY3V0aW9uXHJcblx0XHRcdFx0c2V0VGltZW91dChzY3JvbGxGcmFtZSwgMCk7XHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBib29zdHJhcCB0aGUgYW5pbWF0aW9uIHByb2Nlc3NcclxuXHRcdFx0c2V0VGltZW91dChzY3JvbGxGcmFtZSwgMCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0dXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0c2Nyb2xsQnkoZFBTY3JvbGwsIGRQU2Nyb2xsLnNjcm9sbFRvcCAtIDQwMCwgMzAwKTtcclxuXHR9KTtcclxuXHRkb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdHNjcm9sbEJ5KGRQU2Nyb2xsLCBkUFNjcm9sbC5zY3JvbGxUb3AgKyA0MDAsIDMwMCk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdGlmIChnZXRDb29raWUoXCJmaXJzdFRpbWVcIikgPT09IG51bGwpIHtcclxuXHRcdGluaXRJbnRybygpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRoaWRlSW50cm8oMik7XHJcblx0XHRpZiAoZ2V0Q29va2llKFwiY29va2llTWVzc2FnZVwiKSA9PT0gbnVsbClcclxuXHRcdFx0dG8oc2hvd0Nvb2tpZU1lc3NhZ2UsIDE1MDApO1xyXG5cdH1cclxuXHRcclxuXHRpbml0TWFpbigpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuV2ViRm9udC5sb2FkKHtcclxuXHRnb29nbGU6IHtcclxuXHRcdGZhbWlsaWVzOiBbXCJPcGVuIFNhbnM6MzAwLDgwMFwiLCBcIk9wZW4gU2FucyBDb25kZW5zZWQ6MzAwXCIsIFwiVHJpcm9uZzo0MDBcIl1cclxuXHR9LFxyXG5cdGFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpbml0KCk7XHJcblx0fSxcclxuXHRpbmFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpbml0KCk7XHJcblx0fSxcclxuXHRjbGFzc2VzOiBmYWxzZSxcclxuXHR0aW1lb3V0OiA4MDAwXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
