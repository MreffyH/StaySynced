import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0MxFu9UoJtVzjGtqvvkFDou_L9BK5Gbo",
    authDomain: "staysynced-latsti.firebaseapp.com",
    projectId: "staysynced-latsti",
    storageBucket: "staysynced-latsti.firebasestorage.app",
    messagingSenderId: "947838424448",
    appId: "1:947838424448:web:090e0e21d40404d51f9d65",
    measurementId: "G-DBE8PC0S4Y",
    databaseURL: "https://staysynced-latsti-default-rtdb.firebaseio.com"
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const auth = getAuth();