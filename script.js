document.querySelectorAll('.accordion__question').forEach((item) => {
	item.addEventListener('click', (event) => {
		console.log('click!');
		let accCollapse = item.nextElementSibling;

		if (!item.classList.contains('collapsing')) {
			// Open accordion item
			if (!item.classList.contains('open')) {
				console.log('toggle accordion button');

				accCollapse.style.display = 'block';
				let accHeight = accCollapse.clientHeight;
				console.log(accHeight);

				setTimeout(() => {
					accCollapse.style.height = accHeight + 'px';
					accCollapse.style.display = '';
				}, 1);

				accCollapse.classList = 'accordion__collapse collapsing';

				setTimeout(() => {
					console.log('open accordion content');
					accCollapse.classList = 'accordion__collapse collapse open';
				}, 300);
			}
			// Close accordion item
			else {
				// Remove "collapse open" from .accordion__collapse, add "collapsing"
				accCollapse.classList = 'accordion__collapse collapsing';

				setTimeout(() => {
					accCollapse.style.height = '0px';
				}, 1);

				// After X amount of time, remove "collapsing" class and add "collapse" class
				setTimeout(() => {
					console.log('close accordion content');
					accCollapse.classList = 'accordion__collapse collapse';
					accCollapse.style.height = '';
				}, 300);
			}

			item.classList.toggle('open');
		}
	});
});
