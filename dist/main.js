// Get the hamburger button and the navigation links container
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the "active" class on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
