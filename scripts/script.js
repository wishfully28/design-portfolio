// Add smooth scrolling functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide back-to-top button based on scroll position
window.addEventListener('scroll', function () {
    var backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when back-to-top button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(navLink => {
    navLink.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navigation
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            const correspondingNavLink = document.querySelector(`nav a[href="#${section.id}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
            }
        }
    });
});

// Smooth scroll for external links
document.querySelectorAll('a[href^="http"]').forEach(externalLink => {
    externalLink.addEventListener('click', function (e) {
        e.preventDefault();

        const targetUrl = this.getAttribute('href');
        const targetSection = document.querySelector(targetUrl.substring(targetUrl.indexOf('#')));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = targetUrl;
        }
    });
});

// Responsive navigation toggle
const toggleButton = document.getElementById('toggle-button');
const navList = document.querySelector('nav ul');

toggleButton.addEventListener('click', function () {
    navList.classList.toggle('show');
});
