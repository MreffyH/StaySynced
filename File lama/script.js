document.addEventListener('DOMContentLoaded', function() {

    // Update greeting based on time of day
    function updateGreeting() {
        const hour = new Date().getHours();
        let greeting = '';

        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning';
        } else if (hour >= 12 && hour < 18) {
            greeting = 'Good Afternoon';
        } else {
            greeting = 'Good Evening';
        }

        document.getElementById('greeting').textContent = greeting;
    }

    updateGreeting();

    // Set default check-in date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkin').value = today;

    // Set active state for bottom navbar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.bottom-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

