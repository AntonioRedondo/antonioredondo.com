
function initMain() { // eslint-disable-line
	
	var toRemoveClasses,
		previousState,
		profileSelected = 0,
		animDuration = 400,
		animDurationMoreInfo = 300,
		descriptionPanel = d.gc("description-panel"),
		moreInfoPanel = d.gc("more-info-panel"),
		moreInfoImage = d.gc("more-info-image");
	
	d.gc("main").style.display = "block";
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	d.qs(".block__contact-icon.email").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Email"); });
	d.qs(".block__contact-icon.linkedin").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "LinkedIn"); });
	d.qs(".block__contact-icon.github").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "GitHub"); });
	d.qs(".more-info-panel__contact-icon.email").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Email MI"); });
	d.qs(".more-info-panel__contact-icon.linkedin").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "LinkedIn MI"); });
	d.qs(".more-info-panel__contact-icon.github").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "GitHub MI"); });
	d.gc("more-info-panel__source-code-link").addEventListener("click", function() { ga("send", "event", "v3", "Contact icon", "Source code link"); });
	
	
	
	// Adds necessary logic to show the Description panel for a profile
	function showDescriptionPanel(nextProfile) {
		previousState = "descriptionPanel";
		descriptionPanel.classList.add("description-panel--in", "s" + nextProfile);
		
		var nProfile = d.gc("profile--" + nextProfile);
		nProfile.classList.add("profile--z-index");
		nProfile.classList.add("profile--selected");
		switch (nextProfile) {
			case 1: nProfile.classList.add("profile--selected-left"); break;
			case 2: nProfile.classList.add("profile--selected-center"); break;
			case 3: nProfile.classList.add("profile--selected-right");
		}
		nProfile.title = "Back";
		nProfile.children[2].classList.remove("profile__title-bg--in");
		nProfile.children[3].firstElementChild.classList.remove("profile__title-text--in");
		
		d.gc("darkener").classList.add("darkener--in");

		for (var n=1; n<=3; ++n)
			if (nextProfile !== n) {
				d.gc("profile--" + n).classList.add("profile--not-selected");
				switch (n) {
					case 1: d.gc("profile--" + n).classList.add("profile--selected-left"); break;
					case 2: d.gc("profile--" + n).classList.add("profile--selected-center"); break;
					case 3: d.gc("profile--" + n).classList.add("profile--selected-right");
				}
			}
		
		d.gca("desc-profile--" + nextProfile).forEach(function(item) {
			item.style.display = "inline-block";
		});
				
		clearTimeout(toRemoveClasses);
		d.st(function() {
			nProfile.children[4].classList.add("profile__back-button--in");
			d.gc("profile-selected-bg--" + nextProfile).classList.add("profile-selected-bg--in");
			d.qs(".profile-selected-place--" + nextProfile + " .profile-selected-place__title").classList.add("profile-selected-place__title--in");
		}, animDuration);
		
		d.gc("description-panel__overflow-hide").scrollTop = 0;
		profileSelected = nextProfile;
		
		ga("send", "event", "v3", "Profile description panel open", "Profile " + nextProfile);
	}
	
	function hideDescriptionPanel() {
		descriptionPanel.classList.remove("description-panel--in");
		
		var sProfile = d.gc("profile--" + profileSelected);
		sProfile.classList.remove("profile--selected");
		switch (profileSelected) {
			case 1: sProfile.classList.remove("profile--selected-left"); break;
			case 2: sProfile.classList.remove("profile--selected-center"); break;
			case 3: sProfile.classList.remove("profile--selected-right");
		}
		sProfile.title = "";
		sProfile.children[4].classList.remove("profile__back-button--in");
		
		d.gc("darkener").classList.remove("darkener--in");

		for (var n2=1; n2<=3; ++n2)
			if (profileSelected !== n2) {
				d.gc("profile--" + n2).classList.remove("profile--not-selected");
				switch (n2) {
					case 1: d.gc("profile--" + n2).classList.remove("profile--selected-left"); break;
					case 2: d.gc("profile--" + n2).classList.remove("profile--selected-center"); break;
					case 3: d.gc("profile--" + n2).classList.remove("profile--selected-right");
				}
			}

		d.gc("profile-selected-bg--" + profileSelected).classList.remove("profile-selected-bg--in");
		d.qs(".profile-selected-place--" + profileSelected + " .profile-selected-place__title").classList.remove("profile-selected-place__title--in");
		
		ga("send", "event", "v3", "Profile description panel close", "Profile " + profileSelected);

		var removeClasses = function() {
			descriptionPanel.classList.remove("s" + profileSelected);
			
			d.gca("desc-profile--" + profileSelected).forEach(function(item) {
				item.style.display = "none";
			});
				
			sProfile.classList.remove("profile--z-index");

			profileSelected = 0;
		};
		toRemoveClasses = d.st(removeClasses, animDuration);
	}
	
	function showOrhideDescriptionPanel(nextProfile) {
		if (!descriptionPanel.classList.contains("description-panel--in")) {
			window.history.pushState({ nextProfile: nextProfile }, "Profile " + nextProfile, "#profile" + nextProfile);
			showDescriptionPanel(nextProfile);
		} else {
			window.history.pushState(undefined, "Antonio Redondo", window.location.pathname);
			hideDescriptionPanel();
		}
	}
	
	d.gc("profile--1").addEventListener("click", function() { showOrhideDescriptionPanel(1); });
	d.gc("profile--2").addEventListener("click", function() { showOrhideDescriptionPanel(2); });
	d.gc("profile--3").addEventListener("click", function() { showOrhideDescriptionPanel(3); });
	d.gc("profile-m--1").addEventListener("click", function() { showOrhideDescriptionPanel(1); });
	d.gc("profile-m--2").addEventListener("click", function() { showOrhideDescriptionPanel(2); });
	d.gc("profile-m--3").addEventListener("click", function() { showOrhideDescriptionPanel(3); });
	// d.gc("back-button-m").addEventListener("click", function() { showOrhideDescriptionPanel(); });
	
	
	
	// Adds functionality to "More info" button
	function moreInfoEventListener(gaLabel) {
		previousState = "moreInfoPanel";
		
		moreInfoPanel.style.visibility = "visible";
		moreInfoPanel.offsetHeight; // This causes reflow before adding next class
		moreInfoPanel.classList.add("more-info-panel--in");
		
		moreInfoImage.style.visibility = "visible";
		moreInfoImage.offsetHeight;
		moreInfoImage.classList.add("more-info-image--in");
		
		d.gc("darkener").classList.add("darkener--in2");
		ga("send", "event", "v3", "More info", gaLabel);
	}
	
	function moreInfoClose(gaLabel) {
		moreInfoPanel.classList.remove("more-info-panel--in");
		moreInfoImage.classList.remove("more-info-image--in");
		d.st(function() {
			moreInfoPanel.style.visibility = "hidden";
			moreInfoImage.style.visibility = "hidden";
			d.gc("more-info-panel__scroll").scrollTop = 0;
		}, animDurationMoreInfo);
		
		d.gc("darkener").classList.remove("darkener--in2");
		ga("send", "event", "v3", "More info close", gaLabel);
	}
	
	function moreInfoCloseEventListener(gaLabel) {
		history.pushState(undefined, "Antonio Redondo", location.pathname);
		moreInfoClose(gaLabel);
	}
	
	d.gc("footer__bg2").addEventListener("click", function() {
		history.pushState({ moreInfo: true }, "More Info", "#moreInfo");
		moreInfoEventListener("Footer button");
	});
	d.gc("footer-m__more-info").addEventListener("click", function() {
		history.pushState({ moreInfo: true }, "More Info", "#moreInfo");
		moreInfoEventListener("Footer mobile button");
	});
	d.gc("more-info-image").addEventListener("click", function() { moreInfoCloseEventListener("Image click"); });
	// d.gc("more-info-image__back-button-m").addEventListener("click", function() { moreInfoCloseEventListener("Mobile back button"); });
	
	
	
	// Adds functionality to "Show intro again" button
	function showIntroAgain(gaLabel) {
		d.removeCookie("firstTime");
		ga("send", "event", "v3", "Show intro again", gaLabel);
		location.reload();
	}
	d.gc("footer__bg3").addEventListener("click", function() { showIntroAgain("Footer button"); });
	d.gc("footer-m__show-intro-again").addEventListener("click", function() { showIntroAgain("Footer mobile button"); });
	
	
	
	d.ae("keydown", function(e) {
		if (descriptionPanel.classList.contains("description-panel--in") && e.keyCode === 27)
			showOrhideDescriptionPanel();
		else if (moreInfoPanel.classList.contains("more-info-panel--in") && e.keyCode === 27)
			moreInfoCloseEventListener("Esc key");
	});
	
	d.ae("popstate", function(e) {
		if (e.state) {
			if (e.state.nextProfile)
				showDescriptionPanel(e.state.nextProfile);
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
	var dPScroll = d.gc("description-panel__overflow-hide"),
		upButton = d.gc("description-panel__scroll--up"),
		downButton = d.gc("description-panel__scroll--down");
		
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
			if (point <= start) { return 0; }
			if (point >= end) { return 1; }
			var x = (point - start) / (end - start); // interpolation
			return x*x*(3 - 2*x);
		};
		
		return new Promise(function(resolve, reject) {
			// This is to keep track of where the element"s scrollTop is
			// supposed to be, based on what we"re doing
			var previousTop = element.scrollTop;
			
			// This is like a think function from a game loop
			var scrollFrame = function() {
				if (element.scrollTop != previousTop) {
					reject("interrupted");
					return;
				}
				
				// set the scrollTop for this frame
				var now = Date.now();
				var point = smoothStep(startTime, endTime, now);
				var frameTop = Math.round(startTop + (distance * point));
				element.scrollTop = frameTop;
				
				// check if we"re done!
				if (now >= endTime) {
					resolve();
					return;
				}
				
				// If we were supposed to scroll but didn"t, then we
				// probably hit the limit, so consider it done; not
				// interrupted.
				if (element.scrollTop === previousTop && element.scrollTop !== frameTop) {
					resolve();
					return;
				}
				previousTop = element.scrollTop;
				
				// schedule next frame for execution
				d.st(scrollFrame, 0);
			};
			
			// boostrap the animation process
			d.st(scrollFrame, 0);
		});
	}
	
	upButton.addEventListener("click", function() {
		scrollBy(dPScroll, dPScroll.scrollTop - 400, 300);
	});
	downButton.addEventListener("click", function() {
		scrollBy(dPScroll, dPScroll.scrollTop + 400, 300);
	});
	
	
	
	// If at loading time the URL contains a hash the state will be updated accordingly
	if (window.location.hash && d.getCookie("firstTime") !== null) {
		switch (window.location.hash) {
			case "#profile1":
				window.history.pushState({ nextProfile: 1 }, "Profile 1", "#profile1");
				showDescriptionPanel(1);
				break;
			case "#profile2":
				window.history.pushState({ nextProfile: 2 }, "Profile 2", "#profile2");
				showDescriptionPanel(2);
				break;
			case "#profile3":
				window.history.pushState({ nextProfile: 3 }, "Profile 3", "#profile3");
				showDescriptionPanel(3);
				break;
			case "#moreInfo":
				window.history.pushState({ moreInfo: true }, "More Info", "#moreInfo");
				moreInfoEventListener("Push state");
				break;
			default: window.history.replaceState(undefined, "Antonio Redondo", window.location.pathname);
		}
	}
	
	if (window.location.hash && d.getCookie("firstTime") === null)
		window.history.replaceState(undefined, "Antonio Redondo", window.location.pathname);
}
