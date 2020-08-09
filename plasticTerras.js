$(document).ready(function(){

	
	$.scrollify({

		section: ".snapPoint",
		before: function(sectionIndex){

			if (sectionIndex == 0){
				$(".navbar-brand").addClass("d-none");
				// $(".navbar").addClass("bg-none");

				
			} else {
				$(".navbar-brand").removeClass("d-none");
				// $(".navbar").removeClass("bg-none");
				
			}

		}	
		
	});

	let vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	  });

});