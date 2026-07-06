document.addEventListener('DOMContentLoaded', function () {
	var nav = document.getElementById('navigation');
	var toggle = document.querySelector('.nav-toggle-btn');

	if (nav && toggle) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('nav-open');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});

		nav.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				nav.classList.remove('nav-open');
				toggle.setAttribute('aria-expanded', 'false');
			});
		});
	}

	var grid = document.querySelector('.photo-grid');
	if (grid) {
		var overlay = document.createElement('div');
		overlay.className = 'lightbox-overlay';
		overlay.setAttribute('role', 'dialog');
		overlay.setAttribute('aria-modal', 'true');
		overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close photo">&times;</button><img alt="" />';
		document.body.appendChild(overlay);
		var overlayImg = overlay.querySelector('img');

		function closeLightbox() {
			overlay.classList.remove('open');
			overlayImg.src = '';
		}

		grid.querySelectorAll('a.thumb').forEach(function (link) {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				overlayImg.src = link.getAttribute('href');
				overlayImg.alt = link.querySelector('img').alt || '';
				overlay.classList.add('open');
			});
		});

		overlay.addEventListener('click', function (e) {
			if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
				closeLightbox();
			}
		});

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') {
				closeLightbox();
			}
		});
	}
});
