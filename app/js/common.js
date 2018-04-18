$(function() {

	// Selectors
	const btn = document.getElementById("menu-toggle");
	const lines = btn.querySelectorAll(".line");

	// Toggle Menu Button
	const cls = { open: "open", close: "close" };
	let btnClass = cls.open;

	btn.addEventListener("click", () => {
	  if (btn.classList.contains(cls.open)) {
	    btn.classList.remove(btnClass);
	    btnClass = cls.close;
	  } else if (btn.classList.contains(cls.close)) {
	    btn.classList.remove(btnClass);
	    btnClass = cls.open;
	  }

	  void btn.offsetWidth;
	  btn.classList.add(btnClass);
	});

	window.addEventListener('resize', () => {
		if (btn.classList.contains(cls.open)) {
	    btn.classList.remove(btnClass);
	    btnClass = cls.close;
			void btn.offsetWidth;
			btn.classList.add(btnClass);
	  }
	});
});
