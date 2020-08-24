onDom.push(function() {
	var btn = document.getElementById("open-menu");
	if (!btn) return;
	btn.onclick = function() {
		if (this.classList.contains("active")) {
			this.classList.remove("active");
		} else {
			this.classList.add("active");
		}
	}
})