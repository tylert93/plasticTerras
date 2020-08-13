$(document).ready(() => {

	
	$.scrollify({

		section: ".snapPoint",
		before: (sectionIndex) => {

			if (sectionIndex == 0){
				$(".navbar-brand").addClass("d-none");

			} else {
				$(".navbar-brand").removeClass("d-none");
				
			}

		}	
		
	});

	let vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	  });

});