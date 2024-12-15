import { auth } from './firebase/config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function() {
    const loggedOutState = document.getElementById('logged-out-state');
    const loggedInState = document.getElementById('logged-in-state');
    const profileInfo = document.querySelector('.profile-info');
    const logoutButton = document.getElementById('logout-button');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            loggedOutState.classList.add('hidden');
            loggedInState.classList.remove('hidden');
            
            // Update profile information
            profileInfo.querySelector('h2').textContent = user.displayName || 'User';
            profileInfo.querySelector('.email').textContent = user.email;
            
            // Handle logout
            logoutButton.addEventListener('click', () => {
                auth.signOut().then(() => {
                    window.location.href = 'auth/login.html';
                }).catch((error) => {
                    console.error('Error signing out:', error);
                });
            });
        } else {
            // No user is signed in
            loggedOutState.classList.remove('hidden');
            loggedInState.classList.add('hidden');
        }
    });
});