(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

	//   Eye Icons
	const eyeIcon1 = document.getElementById('eye-icon1');
	const balanceSpan1 = document.getElementById('balance1');
	let isHidden = false;

	eyeIcon1.addEventListener('click', () => {
		if (isHidden) {
			// Show the balance
			balanceSpan1.innerHTML = '1,200.00';
			isHidden = false;
		} else {
			// Hide the balance and replace with asterisks
			balanceSpan1.innerHTML = '*****';
			isHidden = true;
		}
	});

	const eyeIcon2 = document.getElementById('eye-icon2');
	const balanceSpan2 = document.getElementById('balance2');
	let isHidden2 = false;

	eyeIcon2.addEventListener('click', () => {
		if (isHidden2) {
			// Show the balance
			balanceSpan2.innerHTML = '1,200.00';
			isHidden2 = false;
		} else {
			// Hide the balance and replace with asterisks
			balanceSpan2.innerHTML = '*****';
			isHidden2 = true;
		}
	});

	const eyeIcon3 = document.getElementById('eye-icon3');
	const balanceSpan3 = document.getElementById('balance3');
	let isHidden3 = false;

	eyeIcon3.addEventListener('click', () => {
		if (isHidden3) {
			// Show the balance
			balanceSpan3.innerHTML = '1,200.00';
			isHidden3 = false;
		} else {
			// Hide the balance and replace with asterisks
			balanceSpan3.innerHTML = '*****';
			isHidden3 = true;
		}
	});

	// Copy Function

	const copyLink = document.getElementById('copy-link');
	const copyButton = document.getElementById('copy-button');

	copyButton.addEventListener('click', () => {
		// Create a new textarea element to hold the link
		const textarea = document.createElement('textarea');
		textarea.value = copyLink.textContent;
		document.body.appendChild(textarea);

		// Select and copy the text in the textarea
		textarea.select();
		document.execCommand('copy');

		// Remove the textarea element
		document.body.removeChild(textarea);

		// Change the button text to 'Copied!'
		copyButton.textContent = 'Copied!';
	});



})(jQuery);
