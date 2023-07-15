

TweenLite.defaultEase = Linear.easeNone;
$(function () { // wait for document ready

	var controller = new ScrollMagic.Controller();

	var horizontalSlide = new TimelineMax()
  // animate panels
	.from("#js-slideContainer", 1,   {x: "0"}, "label1")
	.to("#js-slideContainer", 1,   {x: "-78%"}, "label1")

  // create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: "#js-wrapper",
		triggerHook: "onLeave",
		duration: "400%"
	})
	.setPin("#js-wrapper")
	.setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

});



TweenLite.defaultEase = Linear.easeNone;
$(function () { // wait for document ready

	var controller = new ScrollMagic.Controller();

	var horizontalSlide = new TimelineMax()
  // animate panels
	.from("#js-slideContainer2", 1,   {x: "0"}, "label1")
	.to("#js-slideContainer2", 1,   {x: "-88%"}, "label1")

  // create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: "#js-wrapper2",
		triggerHook: "onLeave",
		duration: "400%"
	})
	.setPin("#js-wrapper2")
	.setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

});



TweenLite.defaultEase = Linear.easeNone;
$(function () { // wait for document ready

	var controller = new ScrollMagic.Controller();

	var horizontalSlide = new TimelineMax()
  // animate panels
	.from("#js-slideContainer3", 1,   {x: "0"}, "label1")
	.to("#js-slideContainer3", 1,   {x: "-88%"}, "label1")

  // create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: "#js-wrapper3",
		triggerHook: "onLeave",
		duration: "400%"
	})
	.setPin("#js-wrapper3")
	.setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

});




  /* user defined variables */
var timeOnSlide = 2,
timeBetweenSlides = 1,
animationstring = 'animation',
animation = false,
keyframeprefix = '',
domPrefixes = 'Webkit Moz O Khtml'.split(' '),
pfx = '',
slidy = document.getElementById("slidy");

if (slidy.style.animationName !== undefined) {
	animation = true;
}

if (animation === false) {
	for (var i = 0; i < domPrefixes.length; i++) {
		if (slidy.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
			pfx = domPrefixes[i];
			animationstring = pfx + 'Animation';
			keyframeprefix = '-' + pfx.toLowerCase() + '-';
			animation = true;
			break;
		}
	}
}

if (animation === false) {
    // animate in JavaScript fallback
} else {
	var images = slidy.getElementsByTagName("img"),
	firstImg = images[0],
	imgWrap = firstImg.cloneNode(false);
	slidy.appendChild(imgWrap);
	var imgCount = images.length,
	totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1),
	slideRatio = (timeOnSlide / totalTime) * 100,
	moveRatio = (timeBetweenSlides / totalTime) * 100,
	basePercentage = 100 / imgCount,
	position = 0,
	css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n";
	css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
	css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";
	for (i = 0; i < (imgCount - 1); i++) {
		position += slideRatio;
		css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n";
		position += moveRatio;
		css.innerHTML += position + "% { left: -" + ((i + 1) * 100) + "%; }\n";
	}
	css.innerHTML += "}\n";
	css.innerHTML += "#slidy { left: 0%; " + keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s slidy infinite; }\n";
	document.body.appendChild(css);

    // Add event listeners for mouse hover
	slidy.addEventListener("mouseover", function () {
		slidy.style.animationPlayState = "paused";
	});

	slidy.addEventListener("mouseout", function () {
		slidy.style.animationPlayState = "running";
	});
}




  /* user defined variables */
var timeOnSlide2 = 2,
timeBetweenSlides2 = 1,
animationstring2 = 'animation',
animation2 = false,
keyframeprefix2 = '',
domPrefixes2 = 'Webkit Moz O Khtml'.split(' '),
pfx2 = '',
slidy2 = document.getElementById("slidy2");

if (slidy2.style.animationName !== undefined) {
	animation2 = true;
}

if (animation2 === false) {
	for (var i = 0; i < domPrefixes2.length; i++) {
		if (slidy2.style[domPrefixes2[i] + 'AnimationName'] !== undefined) {
			pfx2 = domPrefixes2[i];
			animationstring2 = pfx2 + 'Animation';
			keyframeprefix2 = '-' + pfx2.toLowerCase() + '-';
			animation2 = true;
			break;
		}
	}
}

if (animation2 === false) {
    // animate in JavaScript fallback
} else {
	var images2 = slidy2.getElementsByTagName("img"),
	firstImg2 = images2[0],
	imgWrap2 = firstImg2.cloneNode(false);
	slidy2.appendChild(imgWrap2);
	var imgCount2 = images2.length,
	totalTime2 = (timeOnSlide2 + timeBetweenSlides2) * (imgCount2 - 1),
	slideRatio2 = (timeOnSlide2 / totalTime2) * 100,
	moveRatio2 = (timeBetweenSlides2 / totalTime2) * 100,
	basePercentage2 = 100 / imgCount2,
	position2 = 0,
	css2 = document.createElement("style");
	css2.type = "text/css";
	css2.innerHTML += "#slidy2 { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount2 * 100) + "%;  }\n";
	css2.innerHTML += "#slidy2 img { float: left; width: " + basePercentage2 + "%; }\n";
	css2.innerHTML += "@" + keyframeprefix2 + "keyframes slidy2 {\n";
	for (i = 0; i < (imgCount2 - 1); i++) {
		position2 += slideRatio2;
		css2.innerHTML += position2 + "% { left: -" + (i * 100) + "%; }\n";
		position2 += moveRatio2;
		css2.innerHTML += position2 + "% { left: -" + ((i + 1) * 100) + "%; }\n";
	}
	css2.innerHTML += "}\n";
	css2.innerHTML += "#slidy2 { left: 0%; " + keyframeprefix2 + "transform: translate3d(0,0,0); " + keyframeprefix2 + "animation: " + totalTime2 + "s slidy2 infinite; }\n";
	document.body.appendChild(css2);

    // Add event listeners for mouse hover
	slidy2.addEventListener("mouseover", function () {
		slidy2.style.animationPlayState = "paused";
	});

	slidy2.addEventListener("mouseout", function () {
		slidy2.style.animationPlayState = "running";
	});
}



  /* user defined variables */
var timeOnSlide3 = 2,
timeBetweenSlides3 = 1,
animationstring3 = 'animation',
animation3 = false,
keyframeprefix3 = '',
domPrefixes3 = 'Webkit Moz O Khtml'.split(' '),
pfx3 = '',
slidy3 = document.getElementById("slidy3");

if (slidy3.style.animationName !== undefined) {
	animation3 = true;
}

if (animation3 === false) {
	for (var i = 0; i < domPrefixes3.length; i++) {
		if (slidy3.style[domPrefixes3[i] + 'AnimationName'] !== undefined) {
			pfx3 = domPrefixes3[i];
			animationstring3 = pfx3 + 'Animation';
			keyframeprefix3 = '-' + pfx3.toLowerCase() + '-';
			animation3 = true;
			break;
		}
	}
}

if (animation3 === false) {
    // animate in JavaScript fallback
} else {
	var images3 = slidy3.getElementsByTagName("img"),
	firstImg3 = images3[0],
	imgWrap3 = firstImg3.cloneNode(false);
	slidy3.appendChild(imgWrap3);
	var imgCount3 = images3.length,
	totalTime3 = (timeOnSlide3 + timeBetweenSlides3) * (imgCount3 - 1),
	slideRatio3 = (timeOnSlide3 / totalTime3) * 100,
	moveRatio3 = (timeBetweenSlides3 / totalTime3) * 100,
	basePercentage3 = 100 / imgCount3,
	position3 = 0,
	css3 = document.createElement("style");
	css3.type = "text/css";
	css3.innerHTML += "#slidy3 { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount3 * 100) + "%;  }\n";
	css3.innerHTML += "#slidy3 img { float: left; width: " + basePercentage3 + "%; }\n";
	css3.innerHTML += "@" + keyframeprefix3 + "keyframes slidy3 {\n";
	for (i = 0; i < (imgCount3 - 1); i++) {
		position3 += slideRatio3;
		css3.innerHTML += position3 + "% { left: -" + (i * 100) + "%; }\n";
		position3 += moveRatio3;
		css3.innerHTML += position3 + "% { left: -" + ((i + 1) * 100) + "%; }\n";
	}
	css3.innerHTML += "}\n";
	css3.innerHTML += "#slidy3 { left: 0%; " + keyframeprefix3 + "transform: translate3d(0,0,0); " + keyframeprefix3 + "animation: " + totalTime3 + "s slidy3 infinite; }\n";
	document.body.appendChild(css3);

    // Add event listeners for mouse hover
	slidy3.addEventListener("mouseover", function () {
		slidy3.style.animationPlayState = "paused";
	});

	slidy3.addEventListener("mouseout", function () {
		slidy3.style.animationPlayState = "running";
	});
}


    // Get the section elements
var sections = document.querySelectorAll("section");

    // Get the section box element
var sectionBox = document.getElementById("sectionBox");

    // Update the section box when scrolling
window.addEventListener("scroll", function() {
	var currentSection = getCurrentSection();
	if (currentSection) {
		sectionBox.innerText = currentSection.getAttribute("class");
	}
});

    // Helper function to get the current section
function getCurrentSection() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	for (var i = 0; i < sections.length; i++) {
		var section = sections[i];
		var sectionTop = section.offsetTop;
		var sectionHeight = section.offsetHeight;
		if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
			return section;
		}
	}
	return null;
}

