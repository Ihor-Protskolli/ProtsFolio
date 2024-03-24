const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// Select all menu links within the mobile menu
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

// Add click event listeners to each mobile menu link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default anchor link behavior
    event.preventDefault();

    // Get the target section's ID from the href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Find the target section based on the ID
    const targetSection = document.getElementById(targetId);

    // Close the mobile menu
    mobileMenu.classList.remove('is-open');

    // Scroll to the target section with smooth scrolling
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
