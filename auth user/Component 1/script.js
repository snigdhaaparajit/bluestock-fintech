window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scroll-shadow');
    } else {
        navbar.classList.remove('scroll-shadow');
    }
};


document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const faqItem = this.closest('.faq-item');
            faqItem.classList.toggle('active');
            this.textContent = faqItem.classList.contains('active') ? '-' : '+';
        });
    });
});