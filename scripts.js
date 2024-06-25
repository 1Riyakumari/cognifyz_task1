document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
