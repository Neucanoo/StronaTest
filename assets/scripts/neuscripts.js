var Info = {
	vw: 0,
	vh: 0,
	tablet: false,
	mobile: false,
}
document.addEventListener("DOMContentLoaded", function(e) {
	Info.vw = window.innerWidth;
	Info.vh = window.innerHeight;
	Info.vw <= 1024 && Info.vw > 480 ? Info.tablet = true : Info.tablet = false;
	Info.vw <= 480 ? Info.mobile = true : Info.mobile = false;
	if (onDom.length != 0) {
		for (var i = 0; i < onDom.length; i++) {
			onDom[i]();
		}
	}
	window.addEventListener("resize", function(e) {
		Info.vw = window.innerWidth;
		Info.vh = window.innerHeight;
		Info.vw <= 1024 && Info.vw > 480 ? Info.tablet = true : Info.tablet = false;
		Info.vw <= 480 ? Info.mobile = true : Info.mobile = false;
		if (onResize.length != 0) {
			for (var i = 0; i < onResize.length; i++) {
				onResize[i]();
			}
		}	
	});
});
window.addEventListener("load", function(e) {
	if (onLoad.length != 0) {
		for (var i = 0; i < onLoad.length; i++) {
			onLoad[i]();
		}
	}
});