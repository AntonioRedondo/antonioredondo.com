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
