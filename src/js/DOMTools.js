/**
  * 2016-2017 (C) Antonio Redondo / antonioredondo.com
  *
  * DOMTools is a nano-library which contains a bunch of functions to deal with basic
  * needs and problems faced on front-end web applications.
  *
  * It's implemented on ES5 JavaScript as the 'd' object on the global namespace.
  *
  * It contains the following functionality:
  * - Sorter name functions wrapping quering, events and timeouts functions.
  * - Generation of random integers.
  * - Adding, retrieving and removing cookies.
  * - Checking of CSS transforms support.
  * - Checking of OS.
  * - Calculation of element heights and positions.
  * - Loading of images and executing a callback once they're loaded.
  *
  */

(function(d) {
	"use strict";
	
	d.gi = function(id) {
		return document.getElementById(id);
	};
	
	d.gc = function(className) {
		return document.getElementsByClassName(className)[0];
	};
	
	d.gca = function(className) {
		return [].slice.call(document.getElementsByClassName(className));
	};
	
	d.qs = function(query) {
		return document.querySelector(query);
	};
	
	d.qsa = function(query) {
		return [].slice.call(document.querySelectorAll(query));
	};
	
	d.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	};
	
	d.st = function(callback, time) {
		return window.setTimeout(callback, time);
	};
	
	d.si = function(callback, time) {
		return window.setInterval(callback, time);
	};
	
	
	
	
	
	/**
	  * Returns a random integer within a range.
	  * @param {number} min - The lower limit of the range. It defaults to -50.
	  * @param {number} max - The higher limit of the range. It defaults to 50.
	  * @returns {number} - The generated ramdon integer within the range.
	  */
	d.getRandomInt = function(min, max) {
		min = min || -50;
		max = max || 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	
	
	
	
	/**
	  * Returns the sum of clientHeights of all the elements selected by the CSS query provided.
	  * @param {string} selectors - CSS query.
	  * @returns {number} - The sum of all clientHeights. 0 if no elements selected.
	  */
	d.calcClientHeightsSum = function(selector) {
		var total = 0;
		var elements = [].slice.call(d.qsa(selector));
		
		elements.forEach(function(item) {
			total += item.clientHeight;
		});
		
		return total;
	};
	
	/**
	  * Returns an Array with DOMRects of all the elements selected by the CSS query provided.
	  * The border-box coordinates' origin is relative to the viewport.
	  * @param {string} selectors - CSS query.
	  * @returns {Array} - An array with DOMRects. undefined if no elements selected.
	  */
	d.calcPositionsToViewport = function(selectors) {
		var positions = [];
		var elements = [].slice.call(d.qsa(selectors));

		if (elements.length === 0)
			return;

		elements.forEach(function(item) {
			positions.push(item.getBoundingClientRect());
		});

		return positions;
	};
	
	/**
	  * Returns an Object with left, top, width and height properties of the child
	  * element border-box position relative to a parent element specified by parentSelector.
	  * The parent and the child don't need to be directly nested on the elements' hierarchy.
	  * If a CSS selector string is provided and it selects more than one element
	  * only the first element will be used.
	  * @param {string|HTMLElement} parentSelector - CSS selector string or HTMLElement for a reference parent.
	  * @param {string|HTMLElement} childSelector - CSS selector string or HTMLElement for the child.
	  * @returns {Object} - An Object with left, top, width and height properties.
	*/
	d.calcRelativePosition = function(parent, child) {
		if (typeof parent === "string")
			parent = d.qs(parent);
		if (typeof child === "string")
			child = d.qs(child);

		if ((!parent || !child)
				&& (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))) {
			console.error("The parent or child were undefined or they weren\'t HTMLElements");// eslint-disable-line no-console
			return;
		}

		var parentRect = parent.getBoundingClientRect();
		var childRect = child.getBoundingClientRect();

		var offset = {
			left: null,
			top: null,
			width: null,
			height: null
		};

		offset.left = childRect.left - parentRect.left;
		offset.top = childRect.top - parentRect.top;
		offset.width = child.offsetWidth;
		offset.height = child.offsetHeight;

		return offset;
	};
	
	
	
	
	
	var elementsToLoad = [];
	var	callbacks = [];
		
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
	
	d.notifyWhenLoaded = function(selector) {
		var elementToLoad = {
			selector: selector,
			loaded: false,
			get setAsLoaded() {
				this.loaded = true;
				runCallbacks();
			}
			// Chrome 53 works. Firefox 49 and Edge 14 don't
			//setAsLoaded: function() {
			//	elementToLoad.loaded = true;
			//	runCallbacks();
			//	console.log("bbb");
			//}
			// Doesn't work on browsers
			//setAsLoaded: function() {
			//	this.loaded = true;
			//	runCallbacks();
			//	console.log("ccc");
			//}
		};
		
		var element = d.qs(selector);
		if (element) {
			elementsToLoad.push(elementToLoad);
			
			// http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript
			if (element.complete && element.naturalHeight !== 0) {
				elementToLoad.setAsLoaded;
			} else element.addEventListener("load", elementToLoad.setAsLoaded);
		}
		
		return element;
	};
	
	d.runWhenAllLoaded = function(callback) {
		callbacks.push(callback);
		runCallbacks();
	};
	
	d.resetElementsToLoad = function() {
		elementsToLoad = [];
		callbacks = [];
	};
	
	
	
	
	
	d.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	};
	
	// http://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
	d.getOS = function() {
		var os;
		var ua = window.navigator.userAgent;
		
		if (ua.indexOf("Win") != -1)		os = "Windows";
		if (ua.indexOf("Mac") != -1)		os = "macOS";
		if (ua.indexOf("Linux") != -1)		os = "Linux";
		if (ua.indexOf("Android") != -1)	os = "Android";
		if (ua.indexOf("like Mac") != -1)	os = "iOS";
		
		return os;
	};
	
	
	
	
	
	d.getCookie = function(name) {
		var nameEQ = name + "=",
			ca = document.cookie.split(";");
		for (var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0) == " ")
				c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) === 0)
				return c.substring(nameEQ.length,c.length);
		}
		return null;
	};
	
	d.setCookie = function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		} else expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	};
	
	d.removeCookie = function(name) {
		this.setCookie(name,"",-1);
	};
	
}(window.d = window.d || {}));
