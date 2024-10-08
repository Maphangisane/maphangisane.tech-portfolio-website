// Function for Active Link Highlighting and Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("nav a");

  function changeActiveLink() {
    let index = sections.length;

    while (
      --index &&
      window.scrollY + window.innerHeight / 2 < sections[index].offsetTop
    ) {}

    navLinks.forEach((link) => link.classList.remove("active"));

    // Check if the section has a corresponding nav link
    const activeSectionId = sections[index].id;
    const activeLink = document.querySelector(
      `nav a[href="#${activeSectionId}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  changeActiveLink();
  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
    changeActiveLink();
  });
});

// functions to show and hide the navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("sticky");
  } else {
    document.getElementById("navbar").classList.remove("sticky");
  }
}

//  function to enlarge an image
function enlargeBox(element) {
  element.classList.add("enlarged");
  const portfolioLayer = element.querySelector(".portfolio-layer");
  const enlargedContent = element.querySelector(".enlarged-content");
  portfolioLayer.style.display = "none";
  enlargedContent.style.display = "flex";
}

//  function to close the enlarged image
function closeBox(event, button) {
  event.stopPropagation();
  const box = button.closest(".portfolio-box");
  box.classList.remove("enlarged");
  const portfolioLayer = box.querySelector(".portfolio-layer");
  const enlargedContent = box.querySelector(".enlarged-content");
  portfolioLayer.style.display = "flex";
  enlargedContent.style.display = "none";
}

	// Toggle read more button
	document.getElementById('readMoreBtn').addEventListener('click', function () {
		var extraContent = document.getElementById('extraContent');
		var readMoreBtn = document.getElementById('readMoreBtn');

		if (extraContent.style.display === 'none') {
			extraContent.style.display = 'block';
			readMoreBtn.textContent = 'Read Less';
		} else {
			extraContent.style.display = 'none';
			readMoreBtn.textContent = 'Read More';
		}

	});

	// Toggle view more button
	document.getElementById('viewMoreBtn').addEventListener('click', function () {
		var extraPortfolioContent = document.getElementById('extraPortfolioContent');
		var viewMoreBtn = document.getElementById('viewMoreBtn');

		if (extraPortfolioContent.style.display === 'none') {
			extraPortfolioContent.style.display = 'block';
			viewMoreBtn.textContent = 'View Less';
		} else {
			extraPortfolioContent.style.display = 'none';
			viewMoreBtn.textContent = 'View More';
		}

	});

	// Toggle hamburger menu
	document.getElementById('hamburger').addEventListener('click', function () {
		const nav = document.querySelector('nav');
		nav.classList.toggle('active');
		const menuIcon = this.querySelector('.bx-menu');
		const closeIcon = this.querySelector('.bx-x');

		// Toggle the display of the hamburger and X icons
		if (nav.classList.contains('active')) {
			menuIcon.style.display = 'none';
			closeIcon.style.display = 'block';
		} else {
			menuIcon.style.display = 'block';
			closeIcon.style.display = 'none';
		}
	});

			// This script listens for the form submission, prevents the default action, 
		// submits the form using Fetch, and shows the pop-up message if the submission is successful.
		document.getElementById('contactForm').addEventListener('submit', function (event) {
			event.preventDefault();

			const form = event.target;
			const formData = new FormData(form);

			fetch(form.action, {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			}).then(response => {
				if (response.ok) {
					document.getElementById('popupMessage').style.display = 'block';
					setTimeout(function () {
						// Hide pop-up after 3 seconds
						document.getElementById('popupMessage').style.display = 'none';
					}, 3000);
					form.reset();
				} else {
					alert('There was an issue sending your message. Please try again later.');
				}
			}).catch(error => {
				console.error('Error:', error);
				alert('There was an issue sending your message. Please try again later.');
			});
		});
