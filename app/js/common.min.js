$(function() {

	// Selectors
	const btn = document.getElementById("menu-toggle");
	const lines = btn.querySelectorAll(".line");
	const navLinks = $('.top-nav__link').not(':first');
	const btnMore = $('.circle-btn--more');
	const catBtn = $('.categories__link');

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

	// On click - smooth scrolling
	navLinks.on('click', scrollTo);
	btnMore.on('click', scrollTo);

	// Sort portfolio works
	catBtn.on('click', function() {
		var get_id = this.id;
		var current = $('.works__item.' + get_id);
		console.log(current);

		$('.works__item').not(current).hide(500);
		current.show(500);
	});
	$('#all').click(function() {
		$('.works__item').show(500);
	});

	function scrollTo() {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		}

	$(".owl-carousel").owlCarousel({
		items: 1,
		dotsContainer: '.case__pag'
	});

	$('.owl-dot').click(function () {
	  $(".owl-carousel").trigger('to.owl.carousel', [$(this).index(), 300]);
	});

});

// animate numbers
const animateNumbers = function() {
	const numbers = document.querySelectorAll('.stats__nr span');
	numbers.forEach(number => {
		const value = parseInt(number.innerText, 10);
		$(number).animateNumber({number: value}, 3000);
	});
};

const waypoint = new Waypoint({
  element: document.getElementById('stats'),
  handler: function(direction) {
		if(direction === 'down') {
			animateNumbers();
			waypoint.destroy();
		}
  },
	offset: 'bottom-in-view'
})
