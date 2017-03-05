/* Web Font Loader v1.6.27 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),ya=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):ya?!1:!0}else X=!1;X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function za(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function Aa(a){this.f=a;this.a=[];this.c={}}
var Ba={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ca={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Da={i:"i",italic:"i",n:"n",normal:"n"},
Ea=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Fa(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Ea.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Da[l];n=n[1];if(null==n||""==n)n="4";else var r=Ca[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Ba[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Ba[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Ga(a,b){this.c=a;this.a=b}var Ha={Arimo:!0,Cousine:!0,Tinos:!0};Ga.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new Aa(e);Fa(f);A(c,za(d),D(b));F(b,function(){a(f.a,f.c,Ha)})};function Ia(a,b){this.c=a;this.a=b}Ia.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ja(a,b){this.c=a;this.f=b;this.a=[]}Ja.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ja(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ia(b,a)};Y.a.c.google=function(a,b){return new Ga(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

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

/**
  * 2016 (C) Antonio Redondo / antonioredondo.com
  *
  * "o" is a nano-library which contains a bunch of functions to deal with basic DOM tasks but with a shorter name.
  * It also contains functions to deal with cookies, and CSS transforms support checking.
  * Mainly used on my personal projects but open to anyone.
  */

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
		if(e.target.classList.contains("intro-darkener") && type === 2)
			introDarkener.style.display = "none";
		else o.to(function() { introDarkener.style.display = "none"; }, 2500);
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
		
		
		
	// On desktop version it moves the phrases and bubbles on the 3d space depending on the cursor position
	if (viewPortWidth >= 810) {
		var phrasesContainer = o.gc("phrases"), 
			bubblesContainer = o.gc("bubbles");
		o.ae("mousemove", mouseMoveListener = function(e) {
			//console.log("deltaZ: " + e.deltaZ);
			//console.log("deltaMode: " + e.deltaMode);
			//console.log("clientX: " + e.clientX);
			//console.log("clientY: " + e.clientY);
			//console.log("rotateX(" + -(0.02*e.clientY-10) +"deg)");
			phrasesContainer.style[transform] = "rotateX(" + -(0.02*e.clientY-10) + "deg) rotateY(" + (0.02*e.clientX-25) + "deg) translate3d(" + (-0.05*e.clientX+100) + "px, 0, 0)";
			
			// Due to a weird behaviour the below line spoils the bubbles zoom effect of Chrome.
			// With this conditional if we avoid execution on Chrome
			if (!(window.chrome && window.chrome.webstore))
				bubblesContainer.style[transform] = phrasesContainer.style[transform];
		});
	}
	
	
	
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
		/* jshint -W030 */
		moreInfoPanel.offsetHeight; // This causes reflow before adding next class
		/* jshint +W030 */
		moreInfoPanel.classList.add("more-info-panel--in");
		
		moreInfoImage.style.visibility = "visible";
		/* jshint -W030 */
		moreInfoImage.offsetHeight;
		/* jshint +W030 */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwiby5qcyIsImluaXRJbnRyby5qcyIsImluaXRNYWluLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXZWIgRm9udCBMb2FkZXIgdjEuNi4yNyAtIChjKSBBZG9iZSBTeXN0ZW1zLCBHb29nbGUuIExpY2Vuc2U6IEFwYWNoZSAyLjAgKi8oZnVuY3Rpb24oKXtmdW5jdGlvbiBhYShhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX1mdW5jdGlvbiBiYShhLGIsYyl7aWYoIWEpdGhyb3cgRXJyb3IoKTtpZigyPGFyZ3VtZW50cy5sZW5ndGgpe3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO0FycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGMsZCk7cmV0dXJuIGEuYXBwbHkoYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBwKGEsYixjKXtwPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kJiYtMSE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQudG9TdHJpbmcoKS5pbmRleE9mKFwibmF0aXZlIGNvZGVcIik/YWE6YmE7cmV0dXJuIHAuYXBwbHkobnVsbCxhcmd1bWVudHMpfXZhciBxPURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX07ZnVuY3Rpb24gY2EoYSxiKXt0aGlzLmE9YTt0aGlzLm09Ynx8YTt0aGlzLmM9dGhpcy5tLmRvY3VtZW50fXZhciBkYT0hIXdpbmRvdy5Gb250RmFjZTtmdW5jdGlvbiB0KGEsYixjLGQpe2I9YS5jLmNyZWF0ZUVsZW1lbnQoYik7aWYoYylmb3IodmFyIGUgaW4gYyljLmhhc093blByb3BlcnR5KGUpJiYoXCJzdHlsZVwiPT1lP2Iuc3R5bGUuY3NzVGV4dD1jW2VdOmIuc2V0QXR0cmlidXRlKGUsY1tlXSkpO2QmJmIuYXBwZW5kQ2hpbGQoYS5jLmNyZWF0ZVRleHROb2RlKGQpKTtyZXR1cm4gYn1mdW5jdGlvbiB1KGEsYixjKXthPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShiKVswXTthfHwoYT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO2EuaW5zZXJ0QmVmb3JlKGMsYS5sYXN0Q2hpbGQpfWZ1bmN0aW9uIHYoYSl7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9XG5mdW5jdGlvbiB3KGEsYixjKXtiPWJ8fFtdO2M9Y3x8W107Zm9yKHZhciBkPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZT0wO2U8Yi5sZW5ndGg7ZSs9MSl7Zm9yKHZhciBmPSExLGc9MDtnPGQubGVuZ3RoO2crPTEpaWYoYltlXT09PWRbZ10pe2Y9ITA7YnJlYWt9Znx8ZC5wdXNoKGJbZV0pfWI9W107Zm9yKGU9MDtlPGQubGVuZ3RoO2UrPTEpe2Y9ITE7Zm9yKGc9MDtnPGMubGVuZ3RoO2crPTEpaWYoZFtlXT09PWNbZ10pe2Y9ITA7YnJlYWt9Znx8Yi5wdXNoKGRbZV0pfWEuY2xhc3NOYW1lPWIuam9pbihcIiBcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC8sXCJcIil9ZnVuY3Rpb24geShhLGIpe2Zvcih2YXIgYz1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspaWYoY1tkXT09YilyZXR1cm4hMDtyZXR1cm4hMX1cbmZ1bmN0aW9uIHooYSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhLmYpcmV0dXJuIGEuZjt2YXIgYj1hLm0ubG9jYXRpb24ucHJvdG9jb2w7XCJhYm91dDpcIj09YiYmKGI9YS5hLmxvY2F0aW9uLnByb3RvY29sKTtyZXR1cm5cImh0dHBzOlwiPT1iP1wiaHR0cHM6XCI6XCJodHRwOlwifWZ1bmN0aW9uIGVhKGEpe3JldHVybiBhLm0ubG9jYXRpb24uaG9zdG5hbWV8fGEuYS5sb2NhdGlvbi5ob3N0bmFtZX1cbmZ1bmN0aW9uIEEoYSxiLGMpe2Z1bmN0aW9uIGQoKXtrJiZlJiZmJiYoayhnKSxrPW51bGwpfWI9dChhLFwibGlua1wiLHtyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpiLG1lZGlhOlwiYWxsXCJ9KTt2YXIgZT0hMSxmPSEwLGc9bnVsbCxrPWN8fG51bGw7ZGE/KGIub25sb2FkPWZ1bmN0aW9uKCl7ZT0hMDtkKCl9LGIub25lcnJvcj1mdW5jdGlvbigpe2U9ITA7Zz1FcnJvcihcIlN0eWxlc2hlZXQgZmFpbGVkIHRvIGxvYWRcIik7ZCgpfSk6c2V0VGltZW91dChmdW5jdGlvbigpe2U9ITA7ZCgpfSwwKTt1KGEsXCJoZWFkXCIsYil9XG5mdW5jdGlvbiBCKGEsYixjLGQpe3ZhciBlPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07aWYoZSl7dmFyIGY9dChhLFwic2NyaXB0XCIse3NyYzpifSksZz0hMTtmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2d8fHRoaXMucmVhZHlTdGF0ZSYmXCJsb2FkZWRcIiE9dGhpcy5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPXRoaXMucmVhZHlTdGF0ZXx8KGc9ITAsYyYmYyhudWxsKSxmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiSEVBRFwiPT1mLnBhcmVudE5vZGUudGFnTmFtZSYmZS5yZW1vdmVDaGlsZChmKSl9O2UuYXBwZW5kQ2hpbGQoZik7c2V0VGltZW91dChmdW5jdGlvbigpe2d8fChnPSEwLGMmJmMoRXJyb3IoXCJTY3JpcHQgbG9hZCB0aW1lb3V0XCIpKSl9LGR8fDVFMyk7cmV0dXJuIGZ9cmV0dXJuIG51bGx9O2Z1bmN0aW9uIEMoKXt0aGlzLmE9MDt0aGlzLmM9bnVsbH1mdW5jdGlvbiBEKGEpe2EuYSsrO3JldHVybiBmdW5jdGlvbigpe2EuYS0tO0UoYSl9fWZ1bmN0aW9uIEYoYSxiKXthLmM9YjtFKGEpfWZ1bmN0aW9uIEUoYSl7MD09YS5hJiZhLmMmJihhLmMoKSxhLmM9bnVsbCl9O2Z1bmN0aW9uIEcoYSl7dGhpcy5hPWF8fFwiLVwifUcucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIucHVzaChhcmd1bWVudHNbY10ucmVwbGFjZSgvW1xcV19dKy9nLFwiXCIpLnRvTG93ZXJDYXNlKCkpO3JldHVybiBiLmpvaW4odGhpcy5hKX07ZnVuY3Rpb24gSChhLGIpe3RoaXMuYz1hO3RoaXMuZj00O3RoaXMuYT1cIm5cIjt2YXIgYz0oYnx8XCJuNFwiKS5tYXRjaCgvXihbbmlvXSkoWzEtOV0pJC9pKTtjJiYodGhpcy5hPWNbMV0sdGhpcy5mPXBhcnNlSW50KGNbMl0sMTApKX1mdW5jdGlvbiBmYShhKXtyZXR1cm4gSShhKStcIiBcIisoYS5mK1wiMDBcIikrXCIgMzAwcHggXCIrSihhLmMpfWZ1bmN0aW9uIEooYSl7dmFyIGI9W107YT1hLnNwbGl0KC8sXFxzKi8pO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLnJlcGxhY2UoL1snXCJdL2csXCJcIik7LTEhPWQuaW5kZXhPZihcIiBcIil8fC9eXFxkLy50ZXN0KGQpP2IucHVzaChcIidcIitkK1wiJ1wiKTpiLnB1c2goZCl9cmV0dXJuIGIuam9pbihcIixcIil9ZnVuY3Rpb24gSyhhKXtyZXR1cm4gYS5hK2EuZn1mdW5jdGlvbiBJKGEpe3ZhciBiPVwibm9ybWFsXCI7XCJvXCI9PT1hLmE/Yj1cIm9ibGlxdWVcIjpcImlcIj09PWEuYSYmKGI9XCJpdGFsaWNcIik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBnYShhKXt2YXIgYj00LGM9XCJuXCIsZD1udWxsO2EmJigoZD1hLm1hdGNoKC8obm9ybWFsfG9ibGlxdWV8aXRhbGljKS9pKSkmJmRbMV0mJihjPWRbMV0uc3Vic3RyKDAsMSkudG9Mb3dlckNhc2UoKSksKGQ9YS5tYXRjaCgvKFsxLTldMDB8bm9ybWFsfGJvbGQpL2kpKSYmZFsxXSYmKC9ib2xkL2kudGVzdChkWzFdKT9iPTc6L1sxLTldMDAvLnRlc3QoZFsxXSkmJihiPXBhcnNlSW50KGRbMV0uc3Vic3RyKDAsMSksMTApKSkpO3JldHVybiBjK2J9O2Z1bmN0aW9uIGhhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWEubS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dGhpcy5oPWI7dGhpcy5hPW5ldyBHKFwiLVwiKTt0aGlzLmo9ITEhPT1iLmV2ZW50czt0aGlzLmc9ITEhPT1iLmNsYXNzZXN9ZnVuY3Rpb24gaWEoYSl7YS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV0pO0woYSxcImxvYWRpbmdcIil9ZnVuY3Rpb24gTShhKXtpZihhLmcpe3ZhciBiPXkoYS5mLGEuYS5jKFwid2ZcIixcImFjdGl2ZVwiKSksYz1bXSxkPVthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXTtifHxjLnB1c2goYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIikpO3coYS5mLGMsZCl9TChhLFwiaW5hY3RpdmVcIil9ZnVuY3Rpb24gTChhLGIsYyl7aWYoYS5qJiZhLmhbYl0paWYoYylhLmhbYl0oYy5jLEsoYykpO2Vsc2UgYS5oW2JdKCl9O2Z1bmN0aW9uIGphKCl7dGhpcy5jPXt9fWZ1bmN0aW9uIGthKGEsYixjKXt2YXIgZD1bXSxlO2ZvcihlIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIGY9YS5jW2VdO2YmJmQucHVzaChmKGJbZV0sYykpfXJldHVybiBkfTtmdW5jdGlvbiBOKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPXQodGhpcy5jLFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9LHRoaXMuZil9ZnVuY3Rpb24gTyhhKXt1KGEuYyxcImJvZHlcIixhLmEpfWZ1bmN0aW9uIFAoYSl7cmV0dXJuXCJkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O2xlZnQ6LTk5OTlweDtmb250LXNpemU6MzAwcHg7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztsaW5lLWhlaWdodDpub3JtYWw7bWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtdmFyaWFudDpub3JtYWw7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5OlwiK0ooYS5jKStcIjtcIisoXCJmb250LXN0eWxlOlwiK0koYSkrXCI7Zm9udC13ZWlnaHQ6XCIrKGEuZitcIjAwXCIpK1wiO1wiKX07ZnVuY3Rpb24gUShhLGIsYyxkLGUsZil7dGhpcy5nPWE7dGhpcy5qPWI7dGhpcy5hPWQ7dGhpcy5jPWM7dGhpcy5mPWV8fDNFMzt0aGlzLmg9Znx8dm9pZCAwfVEucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jLm0uZG9jdW1lbnQsYj10aGlzLGM9cSgpLGQ9bmV3IFByb21pc2UoZnVuY3Rpb24oZCxlKXtmdW5jdGlvbiBrKCl7cSgpLWM+PWIuZj9lKCk6YS5mb250cy5sb2FkKGZhKGIuYSksYi5oKS50aGVuKGZ1bmN0aW9uKGEpezE8PWEubGVuZ3RoP2QoKTpzZXRUaW1lb3V0KGssMjUpfSxmdW5jdGlvbigpe2UoKX0pfWsoKX0pLGU9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtzZXRUaW1lb3V0KGQsYi5mKX0pO1Byb21pc2UucmFjZShbZSxkXSkudGhlbihmdW5jdGlvbigpe2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFIoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubz10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMubz1uZXcgTih0aGlzLmMsdGhpcy5zKTthPW5ldyBIKHRoaXMuYS5jK1wiLHNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKFwic2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSChcInNhbnMtc2VyaWZcIixLKHRoaXMuYSkpO2E9XG5QKGEpO3RoaXMuby5hLnN0eWxlLmNzc1RleHQ9YTtPKHRoaXMuZyk7Tyh0aGlzLmgpO08odGhpcy5qKTtPKHRoaXMubyl9dmFyIFM9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFQ9bnVsbDtmdW5jdGlvbiBVKCl7aWYobnVsbD09PVQpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtUPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFR9Ui5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm8uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO2xhKHRoaXMpfTtcbmZ1bmN0aW9uIG1hKGEsYixjKXtmb3IodmFyIGQgaW4gUylpZihTLmhhc093blByb3BlcnR5KGQpJiZiPT09YS5mW1NbZF1dJiZjPT09YS5mW1NbZF1dKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIGxhKGEpe3ZhciBiPWEuZy5hLm9mZnNldFdpZHRoLGM9YS5oLmEub2Zmc2V0V2lkdGgsZDsoZD1iPT09YS5mLnNlcmlmJiZjPT09YS5mW1wic2Fucy1zZXJpZlwiXSl8fChkPVUoKSYmbWEoYSxiLGMpKTtkP3EoKS1hLkE+PWEudz9VKCkmJm1hKGEsYixjKSYmKG51bGw9PT1hLnV8fGEudS5oYXNPd25Qcm9wZXJ0eShhLmEuYykpP1YoYSxhLnYpOlYoYSxhLkIpOm5hKGEpOlYoYSxhLnYpfWZ1bmN0aW9uIG5hKGEpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe2xhKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5vLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubz10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7TChiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubz0hMDtvYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9TChiLFwiZm9udGluYWN0aXZlXCIsYSk7b2EodGhpcyl9O2Z1bmN0aW9uIG9hKGEpezA9PS0tYS5mJiZhLmomJihhLm8/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxMKGEsXCJhY3RpdmVcIikpOk0oYS5hKSl9O2Z1bmN0aW9uIHBhKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1wYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3FhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiByYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLGs9ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKU0oYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxtPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBsPWNbaF0sbj1rW2wuY10scj1iLmEseD1sO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSyh4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0wocixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO2lmKG51bGw9PT1YKWlmKHdpbmRvdy5Gb250RmFjZSl7dmFyIHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSx5YT0vT1MgWC4qVmVyc2lvblxcLzEwXFwuLipTYWZhcmkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUvLmV4ZWMod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpO1xuWD14PzQyPHBhcnNlSW50KHhbMV0sMTApOnlhPyExOiEwfWVsc2UgWD0hMTtYP3I9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGwsYi5zLG4pOnI9bmV3IFIocChiLmcsYikscChiLmgsYiksYi5jLGwsYi5zLGEsbik7bS5wdXNoKHIpfWZvcihoPTA7aDxtLmxlbmd0aDtoKyspbVtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcWEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtyYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPXooYS5jKTthPShhLmEuYXBpfHxcImZhc3QuZm9udHMubmV0L2pzYXBpXCIpLnJlcGxhY2UoL14uKmh0dHAocz8pOihcXC9cXC8pPy8sXCJcIik7cmV0dXJuIGQrXCIvL1wiK2ErXCIvXCIrYitcIi5qc1wiKyhjP1wiP3Y9XCIrYzpcIlwiKX1cbnNhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtpZihmW1wiX19tdGlfZm50THN0XCIrZF0pe3ZhciBjPWZbXCJfX210aV9mbnRMc3RcIitkXSgpLGU9W10saDtpZihjKWZvcih2YXIgbT0wO208Yy5sZW5ndGg7bSsrKXt2YXIgbD1jW21dLmZvbnRmYW1pbHk7dm9pZCAwIT1jW21dLmZvbnRTdHlsZSYmdm9pZCAwIT1jW21dLmZvbnRXZWlnaHQ/KGg9Y1ttXS5mb250U3R5bGUrY1ttXS5mb250V2VpZ2h0LGUucHVzaChuZXcgSChsLGgpKSk6ZS5wdXNoKG5ldyBIKGwpKX1hKGUpfWVsc2Ugc2V0VGltZW91dChmdW5jdGlvbigpe2IoKX0sNTApfXZhciBjPXRoaXMsZD1jLmEucHJvamVjdElkLGU9Yy5hLnZlcnNpb247aWYoZCl7dmFyIGY9Yy5jLm07Qih0aGlzLmMsdGEoYyxkLGUpLGZ1bmN0aW9uKGUpe2U/YShbXSk6KGZbXCJfX01vbm90eXBlQ29uZmlndXJhdGlvbl9fXCIrZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitcbmR9ZWxzZSBhKFtdKX07ZnVuY3Rpb24gdWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn11YS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5hLnVybHN8fFtdLGU9dGhpcy5hLmZhbWlsaWVzfHxbXSxmPXRoaXMuYS50ZXN0U3RyaW5nc3x8e30sZz1uZXcgQztiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKylBKHRoaXMuYyxkW2JdLEQoZykpO3ZhciBrPVtdO2I9MDtmb3IoYz1lLmxlbmd0aDtiPGM7YisrKWlmKGQ9ZVtiXS5zcGxpdChcIjpcIiksZFsxXSlmb3IodmFyIGg9ZFsxXS5zcGxpdChcIixcIiksbT0wO208aC5sZW5ndGg7bSs9MSlrLnB1c2gobmV3IEgoZFswXSxoW21dKSk7ZWxzZSBrLnB1c2gobmV3IEgoZFswXSkpO0YoZyxmdW5jdGlvbigpe2EoayxmKX0pfTtmdW5jdGlvbiB2YShhLGIsYyl7YT90aGlzLmM9YTp0aGlzLmM9Yit3YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1jfHxcIlwifXZhciB3YT1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24geGEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB6YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiBBYShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIEJhPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LENhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sRGE9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkVhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBGYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBrPWRbMV07Zz1bXTtpZihrKWZvcih2YXIgaz1rLnNwbGl0KFwiLFwiKSxoPWsubGVuZ3RoLG09MDttPGg7bSsrKXt2YXIgbDtsPWtbbV07aWYobC5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPUVhLmV4ZWMobC50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWw9XCJcIjtlbHNle2w9blsyXTtsPW51bGw9PWx8fFwiXCI9PWw/XCJuXCI6RGFbbF07bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUNhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7bD1bbCxuXS5qb2luKFwiXCIpfX1lbHNlIGw9XCJcIjtsJiZnLnB1c2gobCl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPUJhW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD1CYVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEgoZSxmW2RdKSl9fTtmdW5jdGlvbiBHYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBIYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07R2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEMsYz10aGlzLmMsZD1uZXcgdmEodGhpcy5hLmFwaSx6KGMpLHRoaXMuYS50ZXh0KSxlPXRoaXMuYS5mYW1pbGllczt4YShkLGUpO3ZhciBmPW5ldyBBYShlKTtGYShmKTtBKGMsemEoZCksRChiKSk7RihiLGZ1bmN0aW9uKCl7YShmLmEsZi5jLEhhKX0pfTtmdW5jdGlvbiBJYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifUlhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5pZCxjPXRoaXMuYy5tO2I/Qih0aGlzLmMsKHRoaXMuYS5hcGl8fFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXRcIikrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2lmKGIpYShbXSk7ZWxzZSBpZihjLlR5cGVraXQmJmMuVHlwZWtpdC5jb25maWcmJmMuVHlwZWtpdC5jb25maWcuZm4pe2I9Yy5UeXBla2l0LmNvbmZpZy5mbjtmb3IodmFyIGU9W10sZj0wO2Y8Yi5sZW5ndGg7Zis9Milmb3IodmFyIGc9YltmXSxrPWJbZisxXSxoPTA7aDxrLmxlbmd0aDtoKyspZS5wdXNoKG5ldyBIKGcsa1toXSkpO3RyeXtjLlR5cGVraXQubG9hZCh7ZXZlbnRzOiExLGNsYXNzZXM6ITEsYXN5bmM6ITB9KX1jYXRjaChtKXt9YShlKX19LDJFMyk6YShbXSl9O2Z1bmN0aW9uIEphKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPVtdfUphLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZi5pZCxjPXRoaXMuYy5tLGQ9dGhpcztiPyhjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX198fChjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX189e30pLGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX1tiXT1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZz0wLGs9Yy5mb250cy5sZW5ndGg7ZzxrOysrZyl7dmFyIGg9Yy5mb250c1tnXTtkLmEucHVzaChuZXcgSChoLm5hbWUsZ2EoXCJmb250LXdlaWdodDpcIitoLndlaWdodCtcIjtmb250LXN0eWxlOlwiK2guc3R5bGUpKSl9YShkLmEpfSxCKHRoaXMuYyx6KHRoaXMuYykrKHRoaXMuZi5hcGl8fFwiLy9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBwYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgdWEoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEphKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBzYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBJYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEdhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20va2FuZHV2aXNsYS9wbHlncm5kXHJcbnZhciBQbHlncm5kID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7ICAgICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byByb290IG9iamVjdDtcclxuXHR0aGlzLnZpZXdzID0gW107ICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSB3aXRoIHZpZXdzXHJcblx0dGhpcy50b3RhbFZpZXdzID0gW107ICAgICAgICAgICAgICAgLy8gQ291bnRlciB0byBrZWVwIHRyYWNrIGlmIGFsbCB2aWV3cyBhcmUgbG9hZGVkLlxyXG5cdHRoaXMuY3VycmVudFZpZXcgPSAwOyAgICAgICAgICAgICAgIC8vIEN1cnJlbnRWaWV3XHJcblx0dGhpcy5tb3VzZVBvc2l0aW9uID0ge3g6IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLzEwMCoyMCksIHk6IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodC8xMDAqMjApfTsgIC8vIE1vdXNlIHBvc2l0aW9uIChjYW4gYmUgdXNlZCBieSB2aWV3cylcclxuXHR0aGlzLmZyYW1lUmF0ZSA9IDYwO1xyXG5cdHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0dGhpcy5jbGljayA9IGZhbHNlO1xyXG5cclxuXHQvLyBDcmVhdGUgY2FudmFzIG9iamVjdDpcclxuXHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJnXCIpWzBdO1xyXG4vL1x0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG5cdC8vIENvbnRleHQgT2JqZWN0OlxyXG5cdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHQvLyBSZXNpemUgZnVuY3Rpb246XHJcblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbigpe1xyXG5cdFx0X3RoaXMuY3R4LndpZHRoICA9IF90aGlzLmNhbnZhcy53aWR0aCAgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cdFx0X3RoaXMuY3R4LmhlaWdodCA9IF90aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuXHR9O1xyXG5cclxuXHQvLyBBbmQgYmluZCBpdCB0byB0aGUgd2luZG93OlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplKTtcclxuXHR0aGlzLnJlc2l6ZSgpO1xyXG5cclxuXHQvLyBNb3VzZSBwb3NpdGlvbiAoY2FuIGJlIHVzZWQgYnkgdmlld3MpOlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi54ID0gZS5jbGllbnRYO1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS5jbGllbnRZO1xyXG5cdH0pO1xyXG5cclxuXHQvKlx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZVBvc2l0aW9uLnggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuXHQgX3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG5cdCBfdGhpcy5jbGljayA9IHRydWU7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0IF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuXHQgX3RoaXMuY2xpY2sgPSB0cnVlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHQgX3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHQgfSk7Ki9cclxuXHJcblx0Ly8gQWRkIGV4dHJhIGZ1bmN0aW9ucyB0byB0aGUgY29udGV4dCBvYmplY3Q6XHJcblx0dGhpcy5jdHgubGluZVRocm91Z2ggPSBmdW5jdGlvbihwb2ludHMpXHJcblx0e1xyXG5cdFx0Zm9yKHZhciBpIGluIHBvaW50cykge1xyXG5cdFx0XHR0aGlzLmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmN1cnZlVGhyb3VnaCA9IGZ1bmN0aW9uKHBvaW50cylcclxuXHR7XHJcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpICsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgeGMgPSAocG9pbnRzW2ldLnggKyBwb2ludHNbaSArIDFdLngpIC8gMjtcclxuXHRcdFx0dmFyIHljID0gKHBvaW50c1tpXS55ICsgcG9pbnRzW2kgKyAxXS55KSAvIDI7XHJcblx0XHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHhjLCB5Yyk7XHJcblx0XHR9XHJcblx0XHQvLyBjdXJ2ZSB0aHJvdWdoIHRoZSBsYXN0IHR3byBwb2ludHNcclxuXHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHBvaW50c1tpKzFdLngscG9pbnRzW2krMV0ueSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlyZWN0aW9uID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlzdGFuY2UgPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MilcclxuXHR7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KFxyXG5cdFx0XHRNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRyYXdDaXJjbGUgPSBmdW5jdGlvbih4LCB5LCByYWRpdXMpXHJcblx0e1xyXG5cdFx0dGhpcy5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG5cdH07XHJcblxyXG5cdC8qXHRcdFx0XHQvLyBQYWdlciBmdW5jdGlvbjpcclxuXHQgdGhpcy5wYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcblx0IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wYWdlcik7XHJcblxyXG5cdCB0aGlzLmJ1aWxkUGFnZXIgPSBmdW5jdGlvbigpXHJcblx0IHtcclxuXHQgZm9yKHZhciBpIGluIF90aGlzLnZpZXdzKVxyXG5cdCB7XHJcblx0IC8vIENyZWF0ZSBhbiBhbmNob3IsIHdoaWNoIGxvYWRzIHRoZSBzcGVjaWZpYyB2aWV3OlxyXG5cdCB2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0IGFuY2hvci5pbm5lclRleHQgPSBwYXJzZUludChpKSArIDE7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIiwgaSk7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBfdGhpcy52aWV3c1tpXS5uYW1lKTtcclxuXHQgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5wbGF5Vmlldyh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKSk7XHJcblx0IH0pO1xyXG5cdCBfdGhpcy5wYWdlci5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG5cdCB9XHJcblx0IH07Ki9cclxuXHJcblx0Ly8gVmlld3MgZnVuY3Rpb25zOlxyXG5cdHRoaXMuYWRkVmlldyA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHRfdGhpcy50b3RhbFZpZXdzLnB1c2goe1xyXG5cdFx0XHRvcmRlcjogX3RoaXMudG90YWxWaWV3cy5sZW5ndGgsXHJcblx0XHRcdHNsdWc6IFwiZG90cy0yXCIsXHJcblx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly8gQ2hlY2sgaWYgYWxsIGlzIGxvYWRlZCBhbmQgc3RhcnQgaWYgc286XHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdHZhciBpbnRlcnZhbFRpbWVvdXQgPSAwO1xyXG5cdFx0dmFyIGludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRpbnRlcnZhbFRpbWVvdXQrKztcclxuXHRcdFx0aWYoaW50ZXJ2YWxUaW1lb3V0ID09IDMwMCkge1xyXG5cdFx0XHRcdC8vIHdhaXRlZCBmb3IgMzAgc2Vjb25kcy4gU29tZXRoaW5nIGlzIGNsZWFybHkgd3JvbmcuXHJcblx0XHRcdFx0YWxlcnQoXCJUaW1lIG91dCEgSXMgeW91ciBJbnRlcm5ldCBjb25uZWN0aW9uIHRow6F0IHNsb3c/IT9cIik7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDaGVjayBpZiBhbGwgdmlld3MgYXJlIGxvYWRlZDpcclxuXHRcdFx0dmFyIGFsbExvYWRlZCA9IHRydWU7XHJcblx0XHRcdGZvcih2YXIgaSBpbiBfdGhpcy50b3RhbFZpZXdzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIV90aGlzLnRvdGFsVmlld3NbaV0ubG9hZGVkKSB7IGFsbExvYWRlZCA9IGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoYWxsTG9hZGVkKSB7XHJcblx0XHRcdFx0Ly8gQWxsIHZpZXdzIGFyZSBsb2FkZWQuXHJcblx0XHRcdFx0dmFyIG5ld1ZpZXdzID0gW107XHJcblx0XHRcdFx0Zm9yKHZhciBpMiBpbiBfdGhpcy50b3RhbFZpZXdzKSB7XHJcblx0XHRcdFx0XHR2YXIgY3VycmVudFNsdWcgPSBfdGhpcy50b3RhbFZpZXdzW2kyXS5zbHVnO1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBqIGluIF90aGlzLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdGlmKF90aGlzLnZpZXdzW2pdLnNsdWcgPT0gY3VycmVudFNsdWcpIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdWaWV3cy5wdXNoKF90aGlzLnZpZXdzW2pdKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdGhpcy52aWV3cyA9IG5ld1ZpZXdzO1xyXG5cclxuXHRcdFx0XHQvLyBDbGVhciBpbnRlcnZhbDpcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG5cclxuXHRcdFx0XHQvLyBCdWlsZCB0aGUgcGFnZXI6XHJcbi8vXHRcdFx0XHRcdFx0XHRfdGhpcy5idWlsZFBhZ2VyKCk7XHJcblxyXG5cdFx0XHRcdC8vIFN0YXJ0IHRoZSBhcHA6XHJcblx0XHRcdFx0X3RoaXMuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMjUwKTtcclxuXHR9O1xyXG5cclxuXHQvLyBTdGFydCBmdW5jdGlvbjpcclxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdC8vIEdldCB0aGUgcmlnaHQgdmlldzpcclxuXHRcdC8qXHRcdFx0XHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiXCIpIHtcclxuXHRcdCB2YXIgY3VycmVudEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuXHRcdCBmb3IodmFyIGkgaW4gX3RoaXMudmlld3MpIHtcclxuXHRcdCBpZihfdGhpcy52aWV3c1tpXS5zbHVnID09IGN1cnJlbnRIYXNoKSB7XHJcblx0XHQgX3RoaXMuY3VycmVudFZpZXcgPSBpO1xyXG5cdFx0IH1cclxuXHRcdCB9XHJcblx0XHQgfSBlbHNlIHsqL1xyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSBfdGhpcy52aWV3cy5sZW5ndGggLSAxO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHRfdGhpcy5wbGF5VmlldyhfdGhpcy5jdXJyZW50Vmlldyk7XHJcblx0XHQvLyBTZXR1cCB0aGUgbG9vcDpcclxuXHRcdC8vIHNldEludGVydmFsKGZ1bmN0aW9uIGFOYW1lKCl7XHJcblx0XHQoZnVuY3Rpb24gYU5hbWUoKXtcclxuXHRcdFx0Ly8gUGFzcyBvbiBzb21lIHZhcmlhYmxlczpcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMubW91c2VQb3NpdGlvbiA9IF90aGlzLm1vdXNlUG9zaXRpb247XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLm1vdXNlRG93biA9IF90aGlzLm1vdXNlRG93bjtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMuY2xpY2sgPSBfdGhpcy5jbGljaztcclxuXHRcdFx0X3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHRcdFx0Ly8gTWFrZSB0aGF0IHN0ZXA6XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zdGVwRnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhTmFtZSk7XHJcblx0XHQvLyB9LCAxMDAwIC8gX3RoaXMuZnJhbWVSYXRlKTsgLy8gZGVmYXVsdCA9IDYwIGZwcy5cclxuXHRcdFx0fSkoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnBsYXlWaWV3ID0gZnVuY3Rpb24odmlld05yKVxyXG5cdHtcclxuXHRcdC8vIFVuLWluaXRpYWxpemUgdGhlIGN1cnJlbnQgdmlldzpcclxuXHRcdHRyeSB7XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS51bkluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHRcdH0gY2F0Y2goZSkge31cclxuXHRcdC8vIEdvIGZ1cnRoZXIgd2l0aCB0aGUgcmVxdWVzdGVkIHZpZXcgZnJvbSBoZXJlOlxyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSB2aWV3TnI7XHJcblx0XHQvLyBSZW1vdmUgdGhlIGNsYXNzIG9mIHRoZSBhY3RpdmUgdmlldzpcclxuLy9cdFx0XHRcdFx0aWYodGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYS5hY3RpdmVcIikpIHtcclxuLy9cdFx0XHRcdFx0XHR0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhLmFjdGl2ZVwiKS5jbGFzc05hbWUgPSBcIlwiO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHQvLyBBbmQgYWRkIGl0IHRvIHRoZSBuZXcgdmlldyFcclxuLy9cdFx0XHRcdFx0dGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYVtkYXRhLXZpZXc9XCJcIiArIF90aGlzLmN1cnJlbnRWaWV3ICsgXCJcIl1cIikuY2xhc3NOYW1lID0gXCJhY3RpdmVcIlxyXG5cdFx0Ly8gU2V0IHRoZSBoYXNoOlxyXG4vL1x0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zbHVnO1xyXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgY3VycmVudCB2aWV3OlxyXG5cdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLmluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHR9O1xyXG5cclxufTtcclxuXHJcbnZhciBTdGVwR2VuZXJhdG9yID0gZnVuY3Rpb24oY29tcGxleGl0eSwgbWluSW5jLCBtYXhJbmMsIG1pbk11bCwgbWF4TXVsKVxyXG57XHJcblx0dGhpcy5zdGVwcyAgICAgICA9IFtdO1xyXG5cdHRoaXMuaW5jcyAgICAgICAgPSBbXTtcclxuXHR0aGlzLm11bHRpcGxpZXJzID0gW107XHJcblx0dGhpcy5jb21wbGV4aXR5ICA9IGNvbXBsZXhpdHk7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdC8vIERlZmF1bHRzOlxyXG5cdGlmKG1pbkluYyA9PT0gbnVsbCkgeyBtaW5JbmMgPSAwOyB9XHJcblx0aWYobWF4SW5jID09PSBudWxsKSB7IG1heEluYyA9IDAuMTsgfVxyXG5cdGlmKG1pbk11bCA9PT0gbnVsbCkgeyBtaW5NdWwgPSAwLjc7IH1cclxuXHRpZihtYXhNdWwgPT09IG51bGwpIHsgbWF4TXVsID0gMS4zOyB9XHJcblxyXG5cdC8vIEluaXRpYWxpc2U6XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdHtcclxuXHRcdHRoaXMuc3RlcHMucHVzaChNYXRoLnJhbmRvbSgpICogTWF0aC5QSSk7XHJcblx0XHR0aGlzLmluY3MucHVzaChtaW5JbmMgKyBNYXRoLnJhbmRvbSgpICogKG1heEluYyAtIG1pbkluYykpO1xyXG5cdFx0dGhpcy5tdWx0aXBsaWVycy5wdXNoKG1pbk11bCArIE1hdGgucmFuZG9tKCkgKiAobWF4TXVsIC0gbWluTXVsKSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnN0ZXAgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gSW5jcmVhc2UgdGhlIGNvdW50ZXJzOlxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IF90aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0X3RoaXMuc3RlcHNbaV0gKz0gX3RoaXMuaW5jc1tpXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBTdGVwIFhZLWZ1bmN0aW9uOlxyXG5cdHRoaXMuZ2V0WFkgPSBmdW5jdGlvbihvZmZzZXQsIHcsIGgpXHJcblx0e1xyXG5cdFx0aWYob2Zmc2V0ID09PSBudWxsKSB7IG9mZnNldCA9IDA7IH1cclxuXHJcblx0XHR2YXIgeFZhbHVlID0gMDtcclxuXHRcdHZhciB5VmFsdWUgPSAwO1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSBYWTpcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHhWYWx1ZSArPSBNYXRoLnNpbihfdGhpcy5zdGVwc1tpXSArIChfdGhpcy5pbmNzW2ldICogb2Zmc2V0KSkgKiB3O1xyXG5cdFx0XHR5VmFsdWUgKz0gTWF0aC5jb3MoKF90aGlzLnN0ZXBzW2ldICsgKF90aGlzLmluY3NbaV0gKiBvZmZzZXQpKSAqIF90aGlzLm11bHRpcGxpZXJzW2ldKSAqIGg7XHJcblx0XHR9XHJcblx0XHQvLyBSZXR1cm4gaXQ6XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiB4VmFsdWUsXHJcblx0XHRcdHk6IHlWYWx1ZVxyXG5cdFx0fTtcclxuXHR9O1xyXG59O1xyXG5cblxuXG5cblxyXG52YXIgcGcgPSBuZXcgUGx5Z3JuZCgpO1xyXG5wZy52aWV3cy5wdXNoKHtcclxuXHRuYW1lICAgICAgICAgICAgOiBcIkRvdHMgMlwiLFxyXG5cdHNsdWcgICAgICAgICAgICA6IFwiZG90cy0yXCIsXHJcblx0Ly8gVmFyaWFibGVzIHVzZWQgYnkgdGhpcyB2aWV3OlxyXG5cdHZhcnMgICAgICAgICAgICA6IHtcclxuXHRcdHN0ZXBzOiBudWxsLFxyXG5cdFx0Y3VycmVudFg6IDAsXHJcblx0XHRjdXJyZW50WTogMFxyXG5cdH0sXHJcblx0Ly8gSW5pdGlhbGlzYXRpb246XHJcblx0aW5pdEZ1bmN0aW9uICAgIDogZnVuY3Rpb24oY3R4LCB2YXJzKXtcclxuXHRcdHZhcnMuc3RlcHMgPSBuZXcgU3RlcEdlbmVyYXRvcig0LCAwLCAwLjAyLCAwLjcsIDEuMyk7XHJcblx0XHR2YXJzLnByZXZEaXN0YW5jZXMgPSB7fTtcclxuXHR9LFxyXG5cdC8vIFVuLWluaXRpYWxpc2F0aW9uOlxyXG5cdHVuSW5pdEZ1bmN0aW9uICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7fSxcclxuXHQvLyBTdGVwcGluZyBmdW5jdGlvbjpcclxuXHRzdGVwRnVuY3Rpb24gICAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe1xyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjdHgud2lkdGgsIGN0eC5oZWlnaHQpO1xyXG5cdFx0dmFyIHN0ZXBTaXplID0gY3R4LndpZHRoIC8gMzA7XHJcblx0XHR2YXIgc3RlcHNYID0gY3R4LndpZHRoIC8gc3RlcFNpemU7XHJcblx0XHR2YXIgc3RlcHNZID0gY3R4LmhlaWdodCAvIHN0ZXBTaXplO1xyXG5cclxuLy9cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwZGRmZlwiO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzhjMjQzZVwiO1xyXG5cclxuXHRcdC8vIEFkZHMgYSBzaW1wbGUgZWFzZSB0byB0aGUgbW91c2U6XHJcblx0XHR2YXJzLmN1cnJlbnRYICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueCAtIHZhcnMuY3VycmVudFgpIC8gMjA7XHJcblx0XHR2YXJzLmN1cnJlbnRZICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueSAtIHZhcnMuY3VycmVudFkpIC8gMjA7XHJcblxyXG5cdFx0dmFycy5zdGVwcy5zdGVwKCk7XHJcblxyXG5cdFx0dmFyIHNpemUgPSBjdHgud2lkdGgvMS41O1xyXG5cclxuXHRcdGZvcih2YXIgeSA9IDA7IHkgPCBzdGVwc1k7IHkgKyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCBzdGVwc1g7IHggKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY1ggPSAoeSUyICogc3RlcFNpemUgLyAyKSArICh4ICogc3RlcFNpemUpO1xyXG5cdFx0XHRcdHZhciBjWSA9IHkgKiBzdGVwU2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gb3V0c2lkZTpcclxuXHRcdFx0XHR2YXIgcmFkID0gTWF0aC5hdGFuMihjWCAtIHZhcnMuY3VycmVudFgsIGNZIC0gdmFycy5jdXJyZW50WSk7XHJcblxyXG5cdFx0XHRcdC8vIGRpc3RhbmNlOlxyXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChcclxuXHRcdFx0XHRcdE1hdGgucG93KHZhcnMuY3VycmVudFggLSBjWCwgMikgKyBNYXRoLnBvdyh2YXJzLmN1cnJlbnRZIC0gY1ksIDIpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dmFyIG9mZnNldCA9IE1hdGgubWF4KDAsIChzaXplLzIpIC0gZGlzdGFuY2UpO1xyXG5cdFx0XHRcdHZhciBwID0gb2Zmc2V0L3NpemU7XHJcblx0XHRcdFx0cCo9MS1wO1xyXG5cdFx0XHRcdG9mZnNldCA9IChzaXplLzIpICogcDtcclxuXHJcblx0XHRcdFx0dmFyIHN0ZXBYWSA9IHZhcnMuc3RlcHMuZ2V0WFkoKHkqc3RlcHNYKSsoeCozKSwgb2Zmc2V0LCBvZmZzZXQpO1xyXG5cclxuXHRcdFx0XHR2YXIgZFggPSBzdGVwWFkueCArIGNYICsgTWF0aC5zaW4ocmFkKSAqIChvZmZzZXQpO1xyXG5cdFx0XHRcdHZhciBkWSA9IHN0ZXBYWS55ICsgY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblx0XHRcdFx0Ly8gdmFyIGRYID0gY1g7XHJcblx0XHRcdFx0Ly8gdmFyIGRZID0gY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguZHJhd0NpcmNsZShkWCwgZFksIGRpc3RhbmNlLzgwKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbnBnLmFkZFZpZXcoKTtcclxuLy8gcGcubG9hZCgpO1xyXG4iLCIvKipcclxuICAqIDIwMTYgKEMpIEFudG9uaW8gUmVkb25kbyAvIGFudG9uaW9yZWRvbmRvLmNvbVxyXG4gICpcclxuICAqIFwib1wiIGlzIGEgbmFuby1saWJyYXJ5IHdoaWNoIGNvbnRhaW5zIGEgYnVuY2ggb2YgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aCBiYXNpYyBET00gdGFza3MgYnV0IHdpdGggYSBzaG9ydGVyIG5hbWUuXHJcbiAgKiBJdCBhbHNvIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGggY29va2llcywgYW5kIENTUyB0cmFuc2Zvcm1zIHN1cHBvcnQgY2hlY2tpbmcuXHJcbiAgKiBNYWlubHkgdXNlZCBvbiBteSBwZXJzb25hbCBwcm9qZWN0cyBidXQgb3BlbiB0byBhbnlvbmUuXHJcbiAgKi9cclxuXHJcbihmdW5jdGlvbihvKSB7XHJcblxyXG5cdG8uZ2MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XHJcblx0fTtcclxuXHJcblx0by5nY2EgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpO1xyXG5cdH07XHJcblxyXG5cdG8ucXMgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG5cdH07XHJcblxyXG5cdG8ucXNhID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcblx0fTtcclxuXHJcblx0by5hZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcblx0fTtcclxuXHJcblx0by50byA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBtaW4gPSAtNTAsIG1heCA9IDUwO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRvLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIFwidHJhbnNmb3JtXCI7XHJcblx0XHRlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcIndlYmtpdFRyYW5zZm9ybVwiO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiLFxyXG5cdFx0XHRcdGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuXHRcdGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdHZhciBjID0gY2FbaV07XHJcblx0XHRcdHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIilcclxuXHRcdFx0XHRjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XHJcblx0XHRcdGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9O1xyXG5cclxuXHRvLnNldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcblx0XHR2YXIgZXhwaXJlcztcclxuXHRcdGlmIChkYXlzKSB7XHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG5cdFx0XHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0XHR9IGVsc2UgZXhwaXJlcyA9IFwiXCI7XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0fTtcclxuXHJcblx0by5yZW1vdmVDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR0aGlzLnNldENvb2tpZShuYW1lLFwiXCIsLTEpO1xyXG5cdH07XHJcblx0XHJcbn0od2luZG93Lm8gPSB3aW5kb3cubyB8fCB7fSkpO1xyXG4iLCJcclxuZnVuY3Rpb24gc2hvd0Nvb2tpZU1lc3NhZ2UoKSB7XHJcblx0by5nYyhcImNvb2tpZXNcIikuY2xhc3NMaXN0LmFkZChcImNvb2tpZXMtLWluXCIpO1xyXG5cdG8uZ2MoXCJjb29raWVzX19jbG9zZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0by5nYyhcImNvb2tpZXNcIikuY2xhc3NMaXN0LnJlbW92ZShcImNvb2tpZXMtLWluXCIpO1xyXG5cdFx0by5zZXRDb29raWUoXCJjb29raWVNZXNzYWdlXCIsIGZhbHNlLCAzNjUpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvb2tpZXMgY2xvc2VcIik7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUludHJvKHR5cGUpIHtcclxuXHR2YXIgbW9kaWZpZXIgPSBcIm91dFwiLFxyXG5cdFx0dGltZSA9IDQwMDA7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIDI6IG1vZGlmaWVyID0gXCJvdXQyXCI7IHRpbWUgPSAxMDAwO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoby5nZXRDb29raWUoXCJjb29raWVNZXNzYWdlXCIpID09PSBudWxsKVxyXG5cdFx0by50byhzaG93Q29va2llTWVzc2FnZSwgdGltZSk7XHJcblx0XHJcblx0dmFyIGludHJvID0gby5nYyhcImludHJvXCIpLFxyXG5cdFx0aW50cm9EYXJrZW5lciA9IG8uZ2MoXCJpbnRyby1kYXJrZW5lclwiKTtcclxuXHRpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm8tLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImludHJvXCIpKVxyXG5cdFx0XHRpbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fSk7XHJcblx0aW50cm9EYXJrZW5lci5jbGFzc0xpc3QuYWRkKFwiaW50cm8tZGFya2VuZXItLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvRGFya2VuZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW50cm8tZGFya2VuZXJcIikgJiYgdHlwZSA9PT0gMilcclxuXHRcdFx0aW50cm9EYXJrZW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRlbHNlIG8udG8oZnVuY3Rpb24oKSB7IGludHJvRGFya2VuZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9LCAyNTAwKTtcclxuXHR9KTtcclxuXHRcclxuXHRvLmdjKFwiYXJfX2xvZ28tY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJhcl9fbG9nby1jb250YWluZXItLWluXCIpO1xyXG5cdG8uZ2MoXCJhcl9fdGV4dFwiKS5jbGFzc0xpc3QuYWRkKFwiYXJfX3RleHQtLWluXCIpO1xyXG5cdG8uZ2MoXCJtYWluLWJnXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWJnLS1pblwiKTtcclxuXHRvLmdjKFwiY2hvb3NlLXByb2ZpbGUtdGV4dFwiKS5jbGFzc0xpc3QuYWRkKFwiY2hvb3NlLXByb2ZpbGUtdGV4dC0taW5cIik7XHJcblx0XHJcblx0by5nYyhcInByb2ZpbGUtLTFcIikuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLTFpblwiKTtcclxuXHRvLmdjKFwicHJvZmlsZS0tMlwiKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tMmluXCIpO1xyXG5cdG8uZ2MoXCJwcm9maWxlLS0zXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS0zaW5cIik7XHJcblx0by50byhmdW5jdGlvbigpIHtcclxuXHRcdG8ucXNhKFwiLnByb2ZpbGVcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7IGl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLW5vLWRlbGF5XCIpOyB9ICk7XHJcblx0fSwgMjAwKTtcclxuXHRcclxuXHRvLmdjKFwiZm9vdGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItLWluXCIpO1xyXG5cdG8udG8oZnVuY3Rpb24oKSB7IG8uZ2MoXCJmb290ZXJcIikuY2xhc3NMaXN0LmFkZChcImZvb3Rlci0tbm8tZGVsYXlcIik7IH0sIDIwMDApO1xyXG5cdFxyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGggPj0gODEwKSB7XHJcblx0XHRwZy5sb2FkKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRJbnRybygpIHtcclxuXHRvLmdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLS1ib3R0b21cIik7XHJcblx0by5nYyhcInNjcm9sbC1kb3duX19pbm5lclwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd25fX2lubmVyLS1vdXRcIik7XHJcblx0XHJcblx0dmFyIHZpZXdQb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcblx0XHR3aGVlbExldmVsID0gMCxcclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSAwLFxyXG5cdFx0cGhyYXNlcyA9IG8uZ2NhKFwicGhyYXNlc19fcGhyYXNlXCIpLFxyXG5cdFx0YnViYmxlcyA9IG8uZ2NhKFwiYnViYmxlc19fbGF5ZXJcIiksXHJcblx0XHR2aXNpYmxlUGhyYXNlcyA9IFtdLFxyXG5cdFx0dmlzaWJsZUJ1YmJsZXMgPSBbXSxcclxuXHRcdHlTdGFydCxcclxuXHRcdHlFbmQsXHJcblx0XHR0cmFuc2Zvcm0gPSBvLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCgpLFxyXG5cdFx0bW91c2VNb3ZlTGlzdGVuZXIsXHJcblx0XHRtb3VzZVdoZWVsTGlzdGVuZXIsXHJcblx0XHR0b3VjaFN0YXJ0TGlzdGVuZXIsXHJcblx0XHR0b3VjaEVuZExpc3RlbmVyLFxyXG5cdFx0a2V5RG93bkxpc3RlbmVyLFxyXG5cdFx0dG9Db250cm9sbGVkUmFuZG9tTW92ZW1lbnQsXHJcblx0XHR0b0hpbnRzO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdC8vIE9uIGRlc2t0b3AgdmVyc2lvbiBpdCBtb3ZlcyB0aGUgcGhyYXNlcyBhbmQgYnViYmxlcyBvbiB0aGUgM2Qgc3BhY2UgZGVwZW5kaW5nIG9uIHRoZSBjdXJzb3IgcG9zaXRpb25cclxuXHRpZiAodmlld1BvcnRXaWR0aCA+PSA4MTApIHtcclxuXHRcdHZhciBwaHJhc2VzQ29udGFpbmVyID0gby5nYyhcInBocmFzZXNcIiksIFxyXG5cdFx0XHRidWJibGVzQ29udGFpbmVyID0gby5nYyhcImJ1YmJsZXNcIik7XHJcblx0XHRvLmFlKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGVsdGFaOiBcIiArIGUuZGVsdGFaKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhTW9kZTogXCIgKyBlLmRlbHRhTW9kZSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRYOiBcIiArIGUuY2xpZW50WCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRZOiBcIiArIGUuY2xpZW50WSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgK1wiZGVnKVwiKTtcclxuXHRcdFx0cGhyYXNlc0NvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1dID0gXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgKyBcImRlZykgcm90YXRlWShcIiArICgwLjAyKmUuY2xpZW50WC0yNSkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyAoLTAuMDUqZS5jbGllbnRYKzEwMCkgKyBcInB4LCAwLCAwKVwiO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRHVlIHRvIGEgd2VpcmQgYmVoYXZpb3VyIHRoZSBiZWxvdyBsaW5lIHNwb2lscyB0aGUgYnViYmxlcyB6b29tIGVmZmVjdCBvZiBDaHJvbWUuXHJcblx0XHRcdC8vIFdpdGggdGhpcyBjb25kaXRpb25hbCBpZiB3ZSBhdm9pZCBleGVjdXRpb24gb24gQ2hyb21lXHJcblx0XHRcdGlmICghKHdpbmRvdy5jaHJvbWUgJiYgd2luZG93LmNocm9tZS53ZWJzdG9yZSkpXHJcblx0XHRcdFx0YnViYmxlc0NvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1dID0gcGhyYXNlc0NvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1dO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIFNob3dzIGEgdGV4dCBoaW50IGlmIHRoZSBpbnRybyBkb2Vzbid0IHN0YXJ0IHNjcm9sbGluZyBkb3duIGluIDMgc2Vjb25kc1xyXG5cdHRvSGludHMgPSBvLnRvKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDApXHJcblx0XHRcdGlmICh2aWV3UG9ydFdpZHRoID49IDgxMClcclxuXHRcdFx0XHRvLmdjKFwic2Nyb2xsLWRvd24taGludFwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24taGludC0taW5cIik7XHJcblx0XHRcdGVsc2Ugby5nYyhcInN3aXBlLXVwLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInN3aXBlLXVwLWhpbnQtLWluXCIpO1xyXG5cdH0sIDMwMDApO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIENvdW50cyB3aGVlbCBzY3JvbGwgbW92ZW1lbnRzIGFuZCBtb3ZlcyBwaHJhc2VzIGFuZCBidWJibGVzIGFjY29yZGluZ2x5XHJcblx0ZnVuY3Rpb24gbW92ZVBocmFzZXMobGV2ZWwpIHtcclxuXHRcdGlmICgobGV2ZWw+MCAmJiB3aGVlbExldmVsPDUpIHx8IChsZXZlbDwwICYmIHdoZWVsTGV2ZWw+MCkpXHJcblx0XHRcdHdoZWVsTGV2ZWwgKz0gbGV2ZWw7XHJcblx0XHRlbHNlIHJldHVybjtcclxuXHRcdFxyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDEpIHtcclxuXHRcdFx0by5nYyhcInNjcm9sbC1kb3duLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLWhpbnQtLW91dFwiKTtcclxuXHRcdFx0by5nYyhcInN3aXBlLXVwLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInN3aXBlLXVwLWhpbnQtLW91dFwiKTtcclxuXHRcdH0gXHJcblx0XHRcclxuXHRcdGlmICh3aGVlbExldmVsID09PSA1KSB7XHJcblx0XHRcdG8udG8oZnVuY3Rpb24oKSB7IG8uZ2MoXCJlbnRlci1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImVudGVyLWJ1dHRvbi0taW5cIik7IH0sIDEwMDApO1xyXG5cdFx0XHRvLmdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLS1vdXRcIik7XHJcblx0XHRcdG8uZ2MoXCJza2lwLWludHJvXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJza2lwLWludHJvLS1pblwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG8uZ2MoXCJlbnRlci1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImVudGVyLWJ1dHRvbi0taW5cIik7XHJcblx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLWRvd24tLW91dFwiKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPiAwKVxyXG5cdFx0XHRcdG8uZ2MoXCJza2lwLWludHJvXCIpLmNsYXNzTGlzdC5hZGQoXCJza2lwLWludHJvLS1pblwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAod2hlZWxMZXZlbCA+IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuc3BsaWNlKDAsIDAsIChwaHJhc2VzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXMuc3BsaWNlKDAsIDAsIChidWJibGVzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKFwicGhyYXNlc19fcGhyYXNlLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHRcdHZpc2libGVCdWJibGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJidWJibGVzX19sYXllci0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHdoZWVsTGV2ZWwgPCB3aGVlbExldmVsRm9ybWVyKSB7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInBocmFzZXNfX3BocmFzZS0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0XHR2aXNpYmxlQnViYmxlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlc19fbGF5ZXItLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5zcGxpY2UoMCwgMSk7XHJcblx0XHRcdHZpc2libGVCdWJibGVzLnNwbGljZSgwLCAxKTtcclxuXHRcdH1cclxuXHJcblx0XHR3aGVlbExldmVsRm9ybWVyID0gd2hlZWxMZXZlbDtcclxuXHR9XHJcblx0XHJcblx0by5hZShcIndoZWVsXCIsIG1vdXNlV2hlZWxMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoZS5kZWx0YVkgPiAwKVxyXG5cdFx0XHRtb3ZlUGhyYXNlcygxKTtcclxuXHRcdGVsc2UgaWYgKGUuZGVsdGFZIDwgMClcclxuXHRcdFx0bW92ZVBocmFzZXMoLTEpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjI2NDA3Mi9kZXRlY3QtYS1maW5nZXItc3dpcGUtdGhyb3VnaC1qYXZhc2NyaXB0LW9uLXRoZS1pcGhvbmUtYW5kLWFuZHJvaWRcclxuXHRvLmFlKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0TGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XHJcblx0XHR5U3RhcnQgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHR9KTtcclxuXHRcclxuXHRvLmFlKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdHlFbmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XHJcblx0XHRpZiAoeUVuZCAtIHlTdGFydCA8IC02MClcclxuXHRcdFx0bW92ZVBocmFzZXMoMSk7XHJcblx0XHRlbHNlIGlmICh5RW5kIC0geVN0YXJ0ID4gNjApXHJcblx0XHRcdG1vdmVQaHJhc2VzKC0xKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBNb3ZlcyByYW5kb21seSBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgdGhlIGJ1YmJsZSBsYXllcnNcclxuXHQoZnVuY3Rpb24gY29udHJvbGxlZFJhbmRvbU1vdmVtZW50KCkge1xyXG5cdFx0Zm9yICh2YXIgbj0wOyBuPHZpc2libGVCdWJibGVzLmxlbmd0aDsgKytuKSB7XHJcblx0XHRcdC8vdmFyIHpUcmFucyA9IC9cXC4qdHJhbnNsYXRlWlxcKCguKilweFxcKS9pLmV4ZWMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdlwiKS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSlbMV07XHJcblx0XHRcdHZpc2libGVCdWJibGVzW25dLmZpcnN0Q2hpbGQuc3R5bGVbdHJhbnNmb3JtXSA9IFwidHJhbnNsYXRlM2QoXCIgKyBvLmdldFJhbmRvbUludCgpICsgXCJweCwgXCIgKyBvLmdldFJhbmRvbUludCgpICsgXCJweCwgMClcIjtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXNbbl0uZmlyc3RDaGlsZC5zdHlsZVt0cmFuc2Zvcm1dID0gXCJ0cmFuc2xhdGUzZChcIiArIG8uZ2V0UmFuZG9tSW50KCkgKyBcInB4LCBcIiArIG8uZ2V0UmFuZG9tSW50KCkgKyBcInB4LCAwKVwiO1xyXG5cdFx0fVxyXG5cdFx0dG9Db250cm9sbGVkUmFuZG9tTW92ZW1lbnQgPSBvLnRvKGNvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCwgMzAwMCk7XHJcblx0fSkoKTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBIaWRlcyB0aGUgSW50cm8gc2NyZWVuXHJcblx0ZnVuY3Rpb24gc2tpcEludHJvKGdhTGFiZWwpIHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgbW91c2VXaGVlbExpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0TGlzdGVuZXIpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duTGlzdGVuZXIpO1xyXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCk7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRvSGludHMpO1xyXG5cdFx0XHJcblx0XHRoaWRlSW50cm8oKTtcclxuXHRcdFxyXG5cdFx0by5zZXRDb29raWUoXCJmaXJzdFRpbWVcIiwgZmFsc2UsIDM2NSk7XHJcblx0XHRcdFxyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIlNraXAgSW50cm9cIiwgZ2FMYWJlbCk7XHJcblx0fVxyXG5cdFxyXG5cdG8uZ2MoXCJlbnRlci1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHsgc2tpcEludHJvKFwiRW50ZXIgYnV0dG9uXCIpOyB9KTtcclxuXHRvLmdjKFwic2tpcC1pbnRyb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkgeyBza2lwSW50cm8oXCJTa2lwIGludHJvIGJ1dHRvblwiKTsgfSk7XHJcblx0XHJcblx0by5hZShcImtleWRvd25cIiwga2V5RG93bkxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1x0XHRcdFxyXG5cdFx0c3dpdGNoIChlLmtleUNvZGUpIHtcclxuXHRcdFx0Y2FzZSAzOTpcclxuXHRcdFx0Y2FzZSA0MDogbW92ZVBocmFzZXMoMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM3OlxyXG5cdFx0XHRjYXNlIDM4OiBtb3ZlUGhyYXNlcygtMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI3OiBza2lwSW50cm8oXCJFc2Mga2V5XCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG59XHJcbiIsIlxyXG5mdW5jdGlvbiBpbml0TWFpbigpIHtcclxuXHRcclxuXHR2YXIgdG9SZW1vdmVDbGFzc2VzLFxyXG5cdFx0cHJldmlvdXNTdGF0ZSxcclxuXHRcdHByb2ZpbGVTZWxlY3RlZCA9IDAsXHJcblx0XHRhbmltRHVyYXRpb24gPSA0MDAsXHJcblx0XHRhbmltRHVyYXRpb25Nb3JlSW5mbyA9IDMwMCxcclxuXHRcdGRlc2NyaXB0aW9uUGFuZWwgPSBvLmdjKFwiZGVzY3JpcHRpb24tcGFuZWxcIiksXHJcblx0XHRtb3JlSW5mb1BhbmVsID0gby5nYyhcIm1vcmUtaW5mby1wYW5lbFwiKSxcclxuXHRcdG1vcmVJbmZvSW1hZ2UgPSBvLmdjKFwibW9yZS1pbmZvLWltYWdlXCIpO1xyXG5cdFxyXG5cdG8uZ2MoXCJtYWluXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL3NlbmRpbmctaGl0c1xyXG5cdG8ucXMoXCIuYmxvY2tfX2NvbnRhY3QtaWNvbi5lbWFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJFbWFpbFwiKTsgfSk7XHJcblx0by5xcyhcIi5ibG9ja19fY29udGFjdC1pY29uLmxpbmtlZGluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvbnRhY3QgaWNvblwiLCBcIkxpbmtlZEluXCIpOyB9KTtcclxuXHRvLnFzKFwiLmJsb2NrX19jb250YWN0LWljb24uZ2l0aHViXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvbnRhY3QgaWNvblwiLCBcIkdpdEh1YlwiKTsgfSk7XHJcblx0by5xcyhcIi5tb3JlLWluZm8tcGFuZWxfX2NvbnRhY3QtaWNvbi5lbWFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJFbWFpbCBNSVwiKTsgfSk7XHJcblx0by5xcyhcIi5tb3JlLWluZm8tcGFuZWxfX2NvbnRhY3QtaWNvbi5saW5rZWRpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJDb250YWN0IGljb25cIiwgXCJMaW5rZWRJbiBNSVwiKTsgfSk7XHJcblx0by5xcyhcIi5tb3JlLWluZm8tcGFuZWxfX2NvbnRhY3QtaWNvbi5naXRodWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiQ29udGFjdCBpY29uXCIsIFwiR2l0SHViIE1JXCIpOyB9KTtcclxuXHRvLmdjKFwibW9yZS1pbmZvLXBhbmVsX19zb3VyY2UtY29kZS1saW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZ2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkNvbnRhY3QgaWNvblwiLCBcIlNvdXJjZSBjb2RlIGxpbmtcIik7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEFkZHMgbmVjZXNzYXJ5IGxvZ2ljIHRvIHNob3cgdGhlIERlc2NyaXB0aW9uIHBhbmVsIGZvciBzb21lIHByb2ZpbGVcdFxyXG5cdGZ1bmN0aW9uIHNob3dEZXNjcmlwdGlvblBhbmVsKG5ld1Byb2ZpbGUpIHtcclxuXHRcdHByZXZpb3VzU3RhdGUgPSBcImRlc2NyaXB0aW9uUGFuZWxcIjtcclxuXHRcdGRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiLCBcInNcIiArIG5ld1Byb2ZpbGUpO1xyXG5cdFx0XHJcblx0XHR2YXIgblByb2ZpbGUgPSBvLmdjKFwicHJvZmlsZS0tXCIgKyBuZXdQcm9maWxlKTtcclxuXHRcdG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS16LWluZGV4XCIpO1xyXG5cdFx0blByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkXCIpO1xyXG5cdFx0c3dpdGNoIChuZXdQcm9maWxlKSB7XHJcblx0XHRcdGNhc2UgMTogblByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtLXNlbGVjdGVkLWxlZnRcIik7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6IG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1jZW50ZXJcIik7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6IG5Qcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1yaWdodFwiKTtcclxuXHRcdH1cclxuXHRcdG5Qcm9maWxlLnRpdGxlID0gXCJCYWNrXCI7XHJcblx0XHRuUHJvZmlsZS5jaGlsZHJlblsyXS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZV9fdGl0bGUtYmctLWluXCIpO1xyXG5cdFx0blByb2ZpbGUuY2hpbGRyZW5bM10uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGVfX3RpdGxlLXRleHQtLWluXCIpO1xyXG5cdFx0XHJcblx0XHRvLmdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LmFkZChcImRhcmtlbmVyLS1pblwiKTtcclxuXHJcblx0XHRmb3IgKHZhciBuPTE7IG48PTM7ICsrbilcclxuXHRcdFx0aWYgKG5ld1Byb2ZpbGUgIT09IG4pIHtcclxuXHRcdFx0XHRvLmdjKFwicHJvZmlsZS0tXCIgKyBuKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tbm90LXNlbGVjdGVkXCIpO1xyXG5cdFx0XHRcdHN3aXRjaCAobikge1xyXG5cdFx0XHRcdFx0Y2FzZSAxOiBvLmdjKFwicHJvZmlsZS0tXCIgKyBuKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtbGVmdFwiKTsgYnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDI6IG8uZ2MoXCJwcm9maWxlLS1cIiArIG4pLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLS1zZWxlY3RlZC1jZW50ZXJcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAzOiBvLmdjKFwicHJvZmlsZS0tXCIgKyBuKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS0tc2VsZWN0ZWQtcmlnaHRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdG8uZ2NhKFwiZGVzYy1wcm9maWxlLS1cIiArIG5ld1Byb2ZpbGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRvUmVtb3ZlQ2xhc3Nlcyk7XHJcblx0XHRvLnRvKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRuUHJvZmlsZS5jaGlsZHJlbls0XS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZV9fYmFjay1idXR0b24tLWluXCIpO1xyXG5cdFx0XHRvLmdjKFwicHJvZmlsZS1zZWxlY3RlZC1iZy0tXCIgKyBuZXdQcm9maWxlKS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1zZWxlY3RlZC1iZy0taW5cIik7XHJcblx0XHRcdG8ucXMoXCIucHJvZmlsZS1zZWxlY3RlZC1wbGFjZS0tXCIgKyBuZXdQcm9maWxlICsgXCIgLnByb2ZpbGUtc2VsZWN0ZWQtcGxhY2VfX3RpdGxlXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLXNlbGVjdGVkLXBsYWNlX190aXRsZS0taW5cIik7XHJcblx0XHR9LCBhbmltRHVyYXRpb24pO1xyXG5cdFx0XHJcblx0XHRvLmdjKFwiZGVzY3JpcHRpb24tcGFuZWxfX292ZXJmbG93LWhpZGVcIikuc2Nyb2xsVG9wID0gMDtcclxuXHRcdHByb2ZpbGVTZWxlY3RlZCA9IG5ld1Byb2ZpbGU7XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiUHJvZmlsZSBkZXNjcmlwdGlvbiBwYW5lbCBvcGVuXCIsIFwiUHJvZmlsZSBcIiArIG5ld1Byb2ZpbGUpO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBoaWRlRGVzY3JpcHRpb25QYW5lbCgpIHtcclxuXHRcdGRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiKTtcclxuXHRcdFxyXG5cdFx0dmFyIHNQcm9maWxlID0gby5nYyhcInByb2ZpbGUtLVwiICsgcHJvZmlsZVNlbGVjdGVkKTtcclxuXHRcdHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZFwiKTtcclxuXHRcdHN3aXRjaCAocHJvZmlsZVNlbGVjdGVkKSB7XHJcblx0XHRcdGNhc2UgMTogc1Byb2ZpbGUuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLXNlbGVjdGVkLWxlZnRcIik7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6IHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1jZW50ZXJcIik7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6IHNQcm9maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1yaWdodFwiKTtcclxuXHRcdH1cclxuXHRcdHNQcm9maWxlLnRpdGxlID0gXCJcIjtcclxuXHRcdHNQcm9maWxlLmNoaWxkcmVuWzRdLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlX19iYWNrLWJ1dHRvbi0taW5cIik7XHJcblx0XHRcclxuXHRcdG8uZ2MoXCJkYXJrZW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya2VuZXItLWluXCIpO1xyXG5cclxuXHRcdGZvciAodmFyIG4yPTE7IG4yPD0zOyArK24yKVxyXG5cdFx0XHRpZiAocHJvZmlsZVNlbGVjdGVkICE9PSBuMikge1xyXG5cdFx0XHRcdG8uZ2MoXCJwcm9maWxlLS1cIiArIG4yKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS0tbm90LXNlbGVjdGVkXCIpO1xyXG5cdFx0XHRcdHN3aXRjaCAobjIpIHtcclxuXHRcdFx0XHRcdGNhc2UgMTogby5nYyhcInByb2ZpbGUtLVwiICsgbjIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1sZWZ0XCIpOyBicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMjogby5nYyhcInByb2ZpbGUtLVwiICsgbjIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9maWxlLS1zZWxlY3RlZC1jZW50ZXJcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAzOiBvLmdjKFwicHJvZmlsZS0tXCIgKyBuMikuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLXNlbGVjdGVkLXJpZ2h0XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdG8uZ2MoXCJwcm9maWxlLXNlbGVjdGVkLWJnLS1cIiArIHByb2ZpbGVTZWxlY3RlZCkuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtc2VsZWN0ZWQtYmctLWluXCIpO1xyXG5cdFx0by5xcyhcIi5wcm9maWxlLXNlbGVjdGVkLXBsYWNlLS1cIiArIHByb2ZpbGVTZWxlY3RlZCArIFwiIC5wcm9maWxlLXNlbGVjdGVkLXBsYWNlX190aXRsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZmlsZS1zZWxlY3RlZC1wbGFjZV9fdGl0bGUtLWluXCIpO1xyXG5cdFx0XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiUHJvZmlsZSBkZXNjcmlwdGlvbiBwYW5lbCBjbG9zZVwiLCBcIlByb2ZpbGUgXCIgKyBwcm9maWxlU2VsZWN0ZWQpO1xyXG5cclxuXHRcdHZhciByZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNcIiArIHByb2ZpbGVTZWxlY3RlZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRvLmdjYShcImRlc2MtcHJvZmlsZS0tXCIgKyBwcm9maWxlU2VsZWN0ZWQpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0c1Byb2ZpbGUuY2xhc3NMaXN0LnJlbW92ZShcInByb2ZpbGUtLXotaW5kZXhcIik7XHJcblxyXG5cdFx0XHRwcm9maWxlU2VsZWN0ZWQgPSAwO1xyXG5cdFx0fTtcclxuXHRcdHRvUmVtb3ZlQ2xhc3NlcyA9IG8udG8ocmVtb3ZlQ2xhc3NlcywgYW5pbUR1cmF0aW9uKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gc2hvd09yaGlkZURlc2NyaXB0aW9uUGFuZWwobmV3UHJvZmlsZSkge1xyXG5cdFx0aWYgKCFkZXNjcmlwdGlvblBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcImRlc2NyaXB0aW9uLXBhbmVsLS1pblwiKSkge1xyXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe25ld1Byb2ZpbGU6IG5ld1Byb2ZpbGV9LCBcIlByb2ZpbGUgXCIgKyBuZXdQcm9maWxlLCBcIiNwcm9maWxlXCIgKyBuZXdQcm9maWxlKTtcclxuXHRcdFx0c2hvd0Rlc2NyaXB0aW9uUGFuZWwobmV3UHJvZmlsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCBcIkFudG9uaW8gUmVkb25kb1wiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cdFx0XHRoaWRlRGVzY3JpcHRpb25QYW5lbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRvLmdjKFwicHJvZmlsZS0tMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKDEpOyB9KTtcclxuXHRvLmdjKFwicHJvZmlsZS0tMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKDIpOyB9KTtcclxuXHRvLmdjKFwicHJvZmlsZS0tM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKDMpOyB9KTtcclxuXHRvLmdjKFwicHJvZmlsZS1tLS0xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgc2hvd09yaGlkZURlc2NyaXB0aW9uUGFuZWwoMSk7IH0pO1xyXG5cdG8uZ2MoXCJwcm9maWxlLW0tLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBzaG93T3JoaWRlRGVzY3JpcHRpb25QYW5lbCgyKTsgfSk7XHJcblx0by5nYyhcInByb2ZpbGUtbS0tM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKDMpOyB9KTtcclxuXHRvLmdjKFwiYmFjay1idXR0b24tbVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKCk7IH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEFkZHMgZnVuY3Rpb25hbGl0eSB0byBcIk1vcmUgaW5mb1wiIGJ1dHRvblxyXG5cdGZ1bmN0aW9uIG1vcmVJbmZvRXZlbnRMaXN0ZW5lcihnYUxhYmVsKSB7XHJcblx0XHRwcmV2aW91c1N0YXRlID0gXCJtb3JlSW5mb1BhbmVsXCI7XHJcblx0XHRcclxuXHRcdG1vcmVJbmZvUGFuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cdFx0LyoganNoaW50IC1XMDMwICovXHJcblx0XHRtb3JlSW5mb1BhbmVsLm9mZnNldEhlaWdodDsgLy8gVGhpcyBjYXVzZXMgcmVmbG93IGJlZm9yZSBhZGRpbmcgbmV4dCBjbGFzc1xyXG5cdFx0LyoganNoaW50ICtXMDMwICovXHJcblx0XHRtb3JlSW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8tcGFuZWwtLWluXCIpO1xyXG5cdFx0XHJcblx0XHRtb3JlSW5mb0ltYWdlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRcdC8qIGpzaGludCAtVzAzMCAqL1xyXG5cdFx0bW9yZUluZm9JbWFnZS5vZmZzZXRIZWlnaHQ7XHJcblx0XHQvKiBqc2hpbnQgK1cwMzAgKi9cclxuXHRcdG1vcmVJbmZvSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1vcmUtaW5mby1pbWFnZS0taW5cIik7XHJcblx0XHRcclxuXHRcdG8uZ2MoXCJkYXJrZW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiZGFya2VuZXItLWluMlwiKTtcclxuXHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJNb3JlIGluZm9cIiwgZ2FMYWJlbCk7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIG1vcmVJbmZvQ2xvc2UoZ2FMYWJlbCkge1xyXG5cdFx0bW9yZUluZm9QYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9yZS1pbmZvLXBhbmVsLS1pblwiKTtcclxuXHRcdG1vcmVJbmZvSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcIm1vcmUtaW5mby1pbWFnZS0taW5cIik7XHJcblx0XHRvLnRvKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRtb3JlSW5mb1BhbmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdFx0XHRtb3JlSW5mb0ltYWdlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdFx0fSwgYW5pbUR1cmF0aW9uTW9yZUluZm8pO1xyXG5cdFx0XHJcblx0XHRvLmdjKFwiZGFya2VuZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtlbmVyLS1pbjJcIik7XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiTW9yZSBpbmZvIGNsb3NlXCIsIGdhTGFiZWwpO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBtb3JlSW5mb0Nsb3NlRXZlbnRMaXN0ZW5lcihnYUxhYmVsKSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCBcIkFudG9uaW8gUmVkb25kb1wiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cdFx0bW9yZUluZm9DbG9zZShnYUxhYmVsKTtcclxuXHR9XHJcblx0XHJcblx0by5nYyhcImZvb3Rlcl9fbW9yZS1pbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7bW9yZUluZm86IHRydWV9LCBcIk1vcmUgSW5mb1wiLCBcIiNtb3JlSW5mb1wiKTtcclxuXHRcdG1vcmVJbmZvRXZlbnRMaXN0ZW5lcihcIkZvb3RlciBidXR0b25cIik7XHJcblx0fSk7XHJcblx0by5nYyhcImZvb3Rlci1tX19tb3JlLWluZm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHttb3JlSW5mbzogdHJ1ZX0sIFwiTW9yZSBJbmZvXCIsIFwiI21vcmVJbmZvXCIpO1xyXG5cdFx0bW9yZUluZm9FdmVudExpc3RlbmVyKFwiRm9vdGVyIG1vYmlsZSBidXR0b25cIik7XHJcblx0fSk7XHJcblx0by5nYyhcIm1vcmUtaW5mby1pbWFnZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IG1vcmVJbmZvQ2xvc2VFdmVudExpc3RlbmVyKFwiSW1hZ2UgY2xpY2tcIik7IH0pO1xyXG5cdG8uZ2MoXCJtb3JlLWluZm8taW1hZ2VfX2JhY2stYnV0dG9uLW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBtb3JlSW5mb0Nsb3NlRXZlbnRMaXN0ZW5lcihcIk1vYmlsZSBiYWNrIGJ1dHRvblwiKTsgfSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gQWRkcyBmdW5jdGlvbmFsaXR5IHRvIFwiU2hvdyBpbnRybyBhZ2FpblwiIGJ1dHRvblxyXG5cdGZ1bmN0aW9uIHNob3dJbnRyb0FnYWluKGdhTGFiZWwpIHtcclxuXHRcdG8ucmVtb3ZlQ29va2llKFwiZmlyc3RUaW1lXCIpO1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIlNob3cgaW50cm8gYWdhaW5cIiwgZ2FMYWJlbCk7XHJcblx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9XHJcblx0by5nYyhcImZvb3Rlcl9fc2hvdy1pbnRyby1hZ2FpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNob3dJbnRyb0FnYWluKFwiRm9vdGVyIGJ1dHRvblwiKTsgfSk7XHJcblx0by5nYyhcImZvb3Rlci1tX19zaG93LWludHJvLWFnYWluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgc2hvd0ludHJvQWdhaW4oXCJGb290ZXIgbW9iaWxlIGJ1dHRvblwiKTsgfSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5hZShcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVzY3JpcHRpb24tcGFuZWwtLWluXCIpICYmIGUua2V5Q29kZSA9PT0gMjcpXHJcblx0XHRcdHNob3dPcmhpZGVEZXNjcmlwdGlvblBhbmVsKCk7XHJcblx0XHRlbHNlIGlmIChtb3JlSW5mb1BhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcIm1vcmUtaW5mby1wYW5lbC0taW5cIikgJiYgZS5rZXlDb2RlID09PSAyNylcclxuXHRcdFx0bW9yZUluZm9DbG9zZUV2ZW50TGlzdGVuZXIoXCJFc2Mga2V5XCIpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdG8uYWUoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoZS5zdGF0ZSkge1xyXG5cdFx0XHRpZiAoZS5zdGF0ZS5uZXdQcm9maWxlKVxyXG5cdFx0XHRcdHNob3dEZXNjcmlwdGlvblBhbmVsKGUuc3RhdGUubmV3UHJvZmlsZSk7XHJcblx0XHRcdGVsc2UgaWYgKGUuc3RhdGUubW9yZUluZm8pXHJcblx0XHRcdFx0bW9yZUluZm9FdmVudExpc3RlbmVyKFwiUHVzaCBzdGF0ZVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN3aXRjaCAocHJldmlvdXNTdGF0ZSkge1xyXG5cdFx0XHRcdGNhc2UgXCJkZXNjcmlwdGlvblBhbmVsXCI6IGhpZGVEZXNjcmlwdGlvblBhbmVsKCk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJtb3JlSW5mb1BhbmVsXCI6IG1vcmVJbmZvQ2xvc2UoXCJQdXNoIHN0YXRlXCIpOyBicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRwcmV2aW91c1N0YXRlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIFNob3dzIG9yIGhpZGVzIHRoZSBzY3JvbGwgYnV0dG9ucyBvbiB0aGUgZGVzY3JpcHRpb24gcGFuZWxcclxuXHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM4OTgxMzAvY2hlY2staWYtYS11c2VyLWhhcy1zY3JvbGxlZC10by10aGUtYm90dG9tLzM0NTUwMTcxIzM0NTUwMTcxXHJcblx0dmFyIGRQU2Nyb2xsID0gby5nYyhcImRlc2NyaXB0aW9uLXBhbmVsX19vdmVyZmxvdy1oaWRlXCIpLFxyXG5cdFx0dXBCdXR0b24gPSBvLmdjKFwiZGVzY3JpcHRpb24tcGFuZWxfX3Njcm9sbC0tdXBcIiksXHJcblx0XHRkb3duQnV0dG9uID0gby5nYyhcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLWRvd25cIik7XHJcblx0XHRcclxuXHRkUFNjcm9sbC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChkUFNjcm9sbC5zY3JvbGxIZWlnaHQgLSBkUFNjcm9sbC5zY3JvbGxUb3AgPT09IGRQU2Nyb2xsLmNsaWVudEhlaWdodCAmJlxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uUGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVzY3JpcHRpb24tcGFuZWwtLWluXCIpKSB7IC8vIEEgc2Nyb2xsIGV2ZW50IGlzIGZpcmVkIGF0IHRoZSBtYWluIHNjcmVlblxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdGRvd25CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXBhbmVsX19zY3JvbGwtLWRvd24taGlkZGVuXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInMxXCIpKSB7XHJcblx0XHRcdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJ2M1wiLCBcIkRlc2NyaXB0aW9uIHBhbmVsIGJvdHRvbSByZWFjaGVkXCIsIFwiUHJvZmlsZSAxXCIpO1xyXG5cdFx0XHR9IGVsc2UgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzMlwiKSkge1xyXG5cdFx0XHRcdGdhKFwic2VuZFwiLCBcImV2ZW50XCIsIFwidjNcIiwgXCJEZXNjcmlwdGlvbiBwYW5lbCBib3R0b20gcmVhY2hlZFwiLCBcIlByb2ZpbGUgMlwiKTtcclxuXHRcdFx0fSBlbHNlIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiczNcIikpIHtcclxuXHRcdFx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcInYzXCIsIFwiRGVzY3JpcHRpb24gcGFuZWwgYm90dG9tIHJlYWNoZWRcIiwgXCJQcm9maWxlIDNcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9IGVsc2UgZG93bkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb24tcGFuZWxfX3Njcm9sbC0tZG93bi1oaWRkZW5cIik7XHJcblx0XHRcclxuXHRcdGlmIChkUFNjcm9sbC5zY3JvbGxUb3AgPD0gNSkge1xyXG5cdFx0XHR1cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tcGFuZWxfX3Njcm9sbC0tdXAtaGlkZGVuXCIpO1xyXG5cdFx0fSBlbHNlIHVwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjcmlwdGlvbi1wYW5lbF9fc2Nyb2xsLS11cC1oaWRkZW5cIik7XHJcblx0XHRcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRQU2Nyb2xsLnNjcm9sbEhlaWdodCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkUFNjcm9sbC5zY3JvbGxUb3ApO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZFBTY3JvbGwuY2xpZW50SGVpZ2h0KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRQU2Nyb2xsLnNjcm9sbEhlaWdodCAtIGRQU2Nyb2xsLnNjcm9sbFRvcCk7XHJcblx0fSk7XHJcblxyXG5cdC8vIGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wL2h1amxoZy9zbW9vdGgtc2Nyb2xsaW5nLXdpdGhvdXQtanF1ZXJ5XHJcblx0Ly8gaHR0cDovL2pzZmlkZGxlLm5ldC90MWR2MXJib1xyXG5cdGZ1bmN0aW9uIHNjcm9sbEJ5KGVsZW1lbnQsIHRhcmdldCwgZHVyYXRpb24pIHtcclxuXHRcdHRhcmdldCA9IE1hdGgucm91bmQodGFyZ2V0KTtcclxuXHRcdGR1cmF0aW9uID0gTWF0aC5yb3VuZChkdXJhdGlvbik7XHJcblx0XHRcclxuXHRcdGlmIChkdXJhdGlvbiA8IDApXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcImJhZCBkdXJhdGlvblwiKTtcclxuXHRcdFx0XHJcblx0XHRpZiAoZHVyYXRpb24gPT09IDApIHtcclxuXHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSB0YXJnZXQ7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcblx0XHR2YXIgZW5kVGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xyXG5cdFx0XHJcblx0XHR2YXIgc3RhcnRUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdHZhciBkaXN0YW5jZSA9IHRhcmdldCAtIHN0YXJ0VG9wO1xyXG5cdFx0XHJcblx0XHQvLyBiYXNlZCBvbiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Ntb290aHN0ZXBcclxuXHRcdHZhciBzbW9vdGhTdGVwID0gZnVuY3Rpb24oc3RhcnQsIGVuZCwgcG9pbnQpIHtcclxuXHRcdFx0aWYocG9pbnQgPD0gc3RhcnQpIHsgcmV0dXJuIDA7IH1cclxuXHRcdFx0aWYocG9pbnQgPj0gZW5kKSB7IHJldHVybiAxOyB9XHJcblx0XHRcdHZhciB4ID0gKHBvaW50IC0gc3RhcnQpIC8gKGVuZCAtIHN0YXJ0KTsgLy8gaW50ZXJwb2xhdGlvblxyXG5cdFx0XHRyZXR1cm4geCp4KigzIC0gMip4KTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0Ly8gVGhpcyBpcyB0byBrZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSBlbGVtZW50XCJzIHNjcm9sbFRvcCBpc1xyXG5cdFx0XHQvLyBzdXBwb3NlZCB0byBiZSwgYmFzZWQgb24gd2hhdCB3ZVwicmUgZG9pbmdcclxuXHRcdFx0dmFyIHByZXZpb3VzVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBUaGlzIGlzIGxpa2UgYSB0aGluayBmdW5jdGlvbiBmcm9tIGEgZ2FtZSBsb29wXHJcblx0XHRcdHZhciBzY3JvbGxGcmFtZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKGVsZW1lbnQuc2Nyb2xsVG9wICE9IHByZXZpb3VzVG9wKSB7XHJcblx0XHRcdFx0XHRyZWplY3QoXCJpbnRlcnJ1cHRlZFwiKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gc2V0IHRoZSBzY3JvbGxUb3AgZm9yIHRoaXMgZnJhbWVcclxuXHRcdFx0XHR2YXIgbm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHR2YXIgcG9pbnQgPSBzbW9vdGhTdGVwKHN0YXJ0VGltZSwgZW5kVGltZSwgbm93KTtcclxuXHRcdFx0XHR2YXIgZnJhbWVUb3AgPSBNYXRoLnJvdW5kKHN0YXJ0VG9wICsgKGRpc3RhbmNlICogcG9pbnQpKTtcclxuXHRcdFx0XHRlbGVtZW50LnNjcm9sbFRvcCA9IGZyYW1lVG9wO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHdlXCJyZSBkb25lIVxyXG5cdFx0XHRcdGlmKG5vdyA+PSBlbmRUaW1lKSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIElmIHdlIHdlcmUgc3VwcG9zZWQgdG8gc2Nyb2xsIGJ1dCBkaWRuXCJ0LCB0aGVuIHdlXHJcblx0XHRcdFx0Ly8gcHJvYmFibHkgaGl0IHRoZSBsaW1pdCwgc28gY29uc2lkZXIgaXQgZG9uZTsgbm90XHJcblx0XHRcdFx0Ly8gaW50ZXJydXB0ZWQuXHJcblx0XHRcdFx0aWYoZWxlbWVudC5zY3JvbGxUb3AgPT09IHByZXZpb3VzVG9wICYmIGVsZW1lbnQuc2Nyb2xsVG9wICE9PSBmcmFtZVRvcCkge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwcmV2aW91c1RvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIHNjaGVkdWxlIG5leHQgZnJhbWUgZm9yIGV4ZWN1dGlvblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoc2Nyb2xsRnJhbWUsIDApO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gYm9vc3RyYXAgdGhlIGFuaW1hdGlvbiBwcm9jZXNzXHJcblx0XHRcdHNldFRpbWVvdXQoc2Nyb2xsRnJhbWUsIDApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdHNjcm9sbEJ5KGRQU2Nyb2xsLCBkUFNjcm9sbC5zY3JvbGxUb3AgLSA0MDAsIDMwMCk7XHJcblx0fSk7XHJcblx0ZG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRzY3JvbGxCeShkUFNjcm9sbCwgZFBTY3JvbGwuc2Nyb2xsVG9wICsgNDAwLCAzMDApO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIElmIGF0IGxvYWRpbmcgdGltZSB0aGUgVVJMIGNvbnRhaW5zIGEgaGFzaCB0aGUgc3RhdGUgd2lsbCBiZSB1cGRhdGVkIGFjY29yZGluZ2x5XHJcblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIG8uZ2V0Q29va2llKFwiZmlyc3RUaW1lXCIpICE9PSBudWxsKSB7XHJcblx0XHRzd2l0Y2ggKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcblx0XHRcdGNhc2UgXCIjcHJvZmlsZTFcIjpcclxuXHRcdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBuZXdQcm9maWxlOiAxIH0sIFwiUHJvZmlsZSAxXCIsIFwiI3Byb2ZpbGUxXCIpO1xyXG5cdFx0XHRcdHNob3dEZXNjcmlwdGlvblBhbmVsKDEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiI3Byb2ZpbGUyXCI6XHJcblx0XHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgbmV3UHJvZmlsZTogMiB9LCBcIlByb2ZpbGUgMlwiLCBcIiNwcm9maWxlMlwiKTtcclxuXHRcdFx0XHRzaG93RGVzY3JpcHRpb25QYW5lbCgyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIiNwcm9maWxlM1wiOlxyXG5cdFx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IG5ld1Byb2ZpbGU6IDMgfSwgXCJQcm9maWxlIDNcIiwgXCIjcHJvZmlsZTNcIik7XHJcblx0XHRcdFx0c2hvd0Rlc2NyaXB0aW9uUGFuZWwoMyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCIjbW9yZUluZm9cIjpcclxuXHRcdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBtb3JlSW5mbzogdHJ1ZSB9LCBcIk1vcmUgSW5mb1wiLCBcIiNtb3JlSW5mb1wiKTtcclxuXHRcdFx0XHRtb3JlSW5mb0V2ZW50TGlzdGVuZXIoXCJQdXNoIHN0YXRlXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCBcIkFudG9uaW8gUmVkb25kb1wiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgby5nZXRDb29raWUoXCJmaXJzdFRpbWVcIikgPT09IG51bGwpXHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCBcIkFudG9uaW8gUmVkb25kb1wiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG59XHJcbiIsIlxuV2ViRm9udC5sb2FkKHtcclxuXHRnb29nbGU6IHtcclxuXHRcdGZhbWlsaWVzOiBbXCJPcGVuIFNhbnM6MzAwLDgwMFwiLCBcIk9wZW4gU2FucyBDb25kZW5zZWQ6MzAwXCIsIFwiVHJpcm9uZzo0MDBcIl1cclxuXHR9LFxyXG5cdGFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoby5nZXRDb29raWUoXCJmaXJzdFRpbWVcIikgPT09IG51bGwpIHtcclxuXHRcdFx0aW5pdEludHJvKCk7XHJcblx0XHR9IGVsc2UgaGlkZUludHJvKDIpO1xyXG5cdFx0XHJcblx0XHRpbml0TWFpbigpO1xyXG5cdH0sXHJcblx0aW5hY3RpdmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdH0sXHJcblx0Y2xhc3NlczogZmFsc2UsXHJcblx0dGltZW91dDogODAwMFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
