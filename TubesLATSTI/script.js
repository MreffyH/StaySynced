document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Menu toggle functionality
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.add('hidden');
        }
    });

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
});

