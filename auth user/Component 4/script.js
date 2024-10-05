document.addEventListener('DOMContentLoaded', function() {
    // Existing menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Mock API functions
    function mockOpenAccount(company) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: `Your ${company} account is now open!` });
            }, 1000);
        });
    }

    function mockLearnMore(company) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ info: `${company} offers great trading options for stocks and commodities.` });
            }, 1000);
        });
    }

    // Button click handlers
    const openAccountButtons = document.querySelectorAll('.btn-open-account');
    const learnMoreButtons = document.querySelectorAll('.btn-learn-more');

    openAccountButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const company = button.getAttribute('data-company');
            try {
                const data = await mockOpenAccount(company);
                alert(data.message);
            } catch (error) {
                alert('Oops! Something went wrong. Try again later.');
            }
        });
    });

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const company = button.getAttribute('data-company');
            try {
                const data = await mockLearnMore(company);
                alert(data.info);
            } catch (error) {
                alert("Oops! I couldn't find the information. Try again later.");
            }
        });
    });
});