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
		time = 4000;
	switch (type) {
		case 2: modifier = "out2"; time = 1000;
	}
	
	if (getCookie("cookieMessage") === null)
		to(showCookieMessage, time);
	
	var intro = gc("intro"),
		introDarkener = gc("intro-darkener");
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
	
	gc("ar__logo-container").classList.add("ar__logo-container--in");
	gc("ar__text").classList.add("ar__text--in");
	gc("main-bg").classList.add("main-bg--in");
	gc("choose-profile-text").classList.add("choose-profile-text--in");
	
	gc("profile--1").classList.add("profile--1in");
	gc("profile--2").classList.add("profile--2in");
	gc("profile--3").classList.add("profile--3in");
	to(function() {
		qsa(".profile").forEach(function(item) { item.classList.add("profile--no-delay"); } );
	}, 200);
	
	gc("footer").classList.add("footer--in");
	to(function() { gc("footer").classList.add("footer--no-delay"); }, 2000);
	
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
		toControlledRandomMovement,
		toHints;
		
		
		
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
		
		
	
	// Shows a text hint if the intro doesn't start scrolling down in 3 seconds
	toHints = to(function() {
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
	
	
	
	// Moves randomly horizontally and vertically the bubble layers
	(function controlledRandomMovement() {
		for (var n=0; n<visibleBubbles.length; ++n) {
			//var zTrans = /\.*translateZ\((.*)px\)/i.exec(document.getElementById("dv").getAttribute("style"))[1];
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + getRandomInt() + "px, " + getRandomInt() + "px, 0)";
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + getRandomInt() + "px, " + getRandomInt() + "px, 0)";
		}
		toControlledRandomMovement = to(controlledRandomMovement, 3000);
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
		
		setCookie("firstTime", false, 365);
			
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
	
}





function initMain() {
	
	var toRemoveClasses,
		previousState,
		profileSelected = 0,
		animDuration = 400,
		animDurationMoreInfo = 300,
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
	
	
	
	// Adds necessary logic to show the Description panel for some profile
	function showOrhideDescriptionPanel(newProfile) {
		if (!descriptionPanel.classList.contains("description-panel--in")) {
			window.history.pushState({newProfile: newProfile}, "Profile " + newProfile, "#profile" + newProfile);
			showDescriptionPanel(newProfile);
		} else {
			window.history.pushState(undefined, "Antonio Redondo", window.location.pathname);
			hideDescriptionPanel();
		}
	}
	
	function showDescriptionPanel(newProfile) {
		previousState = "descriptionPanel";
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
	}
	
	function hideDescriptionPanel() {
		descriptionPanel.classList.remove("description-panel--in");
		
		var sProfile = gc("profile--" + profileSelected);
		sProfile.classList.remove("profile--selected");
		switch (profileSelected) {
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
	
	gc("profile--1").addEventListener("click", function() { showOrhideDescriptionPanel(1); });
	gc("profile--2").addEventListener("click", function() { showOrhideDescriptionPanel(2); });
	gc("profile--3").addEventListener("click", function() { showOrhideDescriptionPanel(3); });
	gc("profile-m--1").addEventListener("click", function() { showOrhideDescriptionPanel(1); });
	gc("profile-m--2").addEventListener("click", function() { showOrhideDescriptionPanel(2); });
	gc("profile-m--3").addEventListener("click", function() { showOrhideDescriptionPanel(3); });
	gc("back-button-m").addEventListener("click", function() { showOrhideDescriptionPanel(); });
	
	
	
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
		
		gc("darkener").classList.add("darkener--in2");
		ga("send", "event", "v3", "More info", gaLabel);
	}
	function moreInfoCloseEventListener(gaLabel) {
		window.history.pushState(undefined, "Antonio Redondo", window.location.pathname);
		moreInfoClose(gaLabel);
	}
	function moreInfoClose(gaLabel) {
		moreInfoPanel.classList.remove("more-info-panel--in");
		moreInfoImage.classList.remove("more-info-image--in");
		to(function() {
			moreInfoPanel.style.visibility = "hidden";
			moreInfoImage.style.visibility = "hidden";
		}, animDurationMoreInfo);
		
		gc("darkener").classList.remove("darkener--in2");
		ga("send", "event", "v3", "More info close", gaLabel);
	}
	gc("footer__more-info").addEventListener("click", function() {
		window.history.pushState({moreInfo: true}, "More Info", "#moreInfo");
		moreInfoEventListener("Footer button");
	});
	gc("footer-m__more-info").addEventListener("click", function() {
		window.history.pushState({moreInfo: true}, "More Info", "#moreInfo");
		moreInfoEventListener("Footer mobile button");
	});
	gc("more-info-image").addEventListener("click", function() { moreInfoCloseEventListener("Image click"); });
	gc("more-info-image__back-button-m").addEventListener("click", function() { moreInfoCloseEventListener("Mobile back button"); });
	
	
	
	// Adds functionality to "Show intro again" button
	function showIntroAgain(gaLabel) {
		removeCookie("firstTime");
		ga("send", "event", "v3", "Show intro again", gaLabel);
		location.reload();
	}
	gc("footer__show-intro-again").addEventListener("click", function() { showIntroAgain("Footer button"); });
	gc("footer-m__show-intro-again").addEventListener("click", function() { showIntroAgain("Footer mobile button"); });
	
	
	
	ae("keydown", function(e) {
		if (descriptionPanel.classList.contains("description-panel--in") && e.keyCode === 27)
			showOrhideDescriptionPanel();
		else if (moreInfoPanel.classList.contains("more-info-panel--in") && e.keyCode === 27)
			moreInfoCloseEventListener("Esc key");
	});
	
	ae("popstate", function(e) {
		if (e.state) {
			if (e.state.newProfile)
				showDescriptionPanel(e.state.newProfile);
			else if (e.state.moreInfo)
				moreInfoEventListener("Push state")
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
	
	
	
	// If at loading time the URL contains a hash the state will be updated accordingly
	if (window.location.hash && getCookie("firstTime") !== null) {
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
	
	if (window.location.hash && getCookie("firstTime") === null)
		window.history.replaceState(undefined, "Antonio Redondo", window.location.pathname);
}





function init() {
	if (getCookie("firstTime") === null) {
		initIntro();
	} else hideIntro(2);
	
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
