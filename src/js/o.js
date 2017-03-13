/**
  * 2016-2017 (C) Antonio Redondo / antonioredondo.com
  *
  * "o" is a nano-library which contains a bunch of functions to deal with basic DOM tasks but with a shorter name.
  * It also contains functions to deal with cookies, and CSS transforms support checking.
  * Mainly used on my personal projects but open to anyone.
  */

(function(o) {
	
	o.gi = function(id) {
		return document.getElementById(id);
	};
	
	o.gc = function(className) {
		return document.getElementsByClassName(className)[0];
	};
	
	o.gca = function(className) {
		return [].slice.call(document.getElementsByClassName(className));
	};
	
	o.qs = function(query) {
		return document.querySelector(query);
	};
	
	o.qsa = function(query) {
		return [].slice.call(document.querySelectorAll(query));
	};
	
	o.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	};
	
	o.to = function(callback, time) {
		return window.setTimeout(callback, time);
	};
	
	o.si = function(callback, time) {
		return window.setInterval(callback, time);
	};
	
	
	
	
	
	o.getRandomInt = function() {
		var min = -50, max = 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	
	
	
	
	o.calcTotalClientHeight = function(selector) {
		var total = 0,
			elements = [].slice.call(o.qsa(selector));
			
		elements.forEach(function(e) {
			total += e.clientHeight;
		});
		
		// console.log(total);
		// console.log(document.body.scrollHeight);
		
		return total;
	};
	
	o.calcRelativePositions = function(selector) {
		var positions = [],
			elements = [].slice.call(o.qsa(selector));
		
		if (elements.length === 0)
			return;
		
		elements.forEach(function(e) {
			positions.push(e.getBoundingClientRect());
			// console.log(e.getBoundingClientRect());
		});
		
		return positions;
	};
	
	o.calcAbsolutePosition = function(parentSelector, childSelector) {
		var parent = o.qs(parentSelector);
		var child = o.qs(childSelector);
		
		if (!parent || !child)
			return;
		
		var offset = {
			left: 0,
			top: 0
		};
		
		while (child !== parent && child) {
			offset.left += child.offsetLeft;
			offset.top += child.offsetTop;
			child = child.parentNode;
		}

		return offset;
	};
	
	o.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	};
	
	
	
	
	
	var elementsToLoad = [],
		callbacks = [];
		
	var runCallbacks = function() {
		var allLoaded = elementsToLoad.every(function(i) {
			return i.loaded;
		});
		
		if (allLoaded) {
			callbacks.forEach(function(i) {
				i();
			});
		}
	};
	
	o.notifyWhenLoaded = function(selector) {
		var elementToLoad = {
			selector: selector,
			loaded: false,
			get setAsLoaded() {
				this.loaded = true;
				runCallbacks();
			}
			// Chrome 53 works. Firefox 49 and Edge 14 don"t
			//setAsLoaded: function() {
			//	elementToLoad.loaded = true;
			//	runCallbacks();
			//	console.log("bbb");
			//}
			// Doesn"t work on browsers
			//setAsLoaded: function() {
			//	this.loaded = true;
			//	runCallbacks();
			//	console.log("ccc");
			//}
		};
		
		var element = o.qs(selector);
		if (element) {
			elementsToLoad.push(elementToLoad);
			
			// http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript
			if (element.complete && element.naturalHeight !== 0) {
				/*jshint -W030 */
				elementToLoad.setAsLoaded;
				/*jshint +W030 */
			} else element.addEventListener("load", elementToLoad.setAsLoaded);
		}
		
		return element;
	};
	
	o.runWhenAllLoaded = function(callback) {
		callbacks.push(callback);
		runCallbacks();
	};
	
	o.resetElementsToLoad = function() {
		elementsToLoad = [];
		callbacks = [];
	};
	
	
	
	
	
	// http://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
	o.getOS = function() {
		var os;
		var ua = window.navigator.userAgent;
		
		if (ua.indexOf("Win") != -1)		os = "Windows";
		if (ua.indexOf("Mac") != -1)		os = "macOS";
		if (ua.indexOf("Linux") != -1)		os = "Linux";
		if (ua.indexOf("Android") != -1)	os = "Android";
		if (ua.indexOf("like Mac") != -1)	os = "iOS";

		return os;
	};
	
	
	
	
	
	o.getCookie = function(name) {
		var nameEQ = name + "=",
				ca = document.cookie.split(";");
		for (var i=0; i < ca.length;i++) {
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
