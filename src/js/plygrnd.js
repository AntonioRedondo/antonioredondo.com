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
