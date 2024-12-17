document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Pindah ke halaman index
    window.location.href = '../index.html'; // Ganti dengan rute halaman tujuan Anda
});


// // Menyimpan data ke database
// import { auth } from '../auth/firebase/config.js';
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// const db = getDatabase();

// // Function to handle form submission
// document.getElementById('feedback-form').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const rating = document.querySelector('input[name="rating"]:checked').value;
//     const description = document.getElementById('description').value;
//     const user = auth.currentUser;

//     if (user) {
//         try {
//             const feedbackRef = ref(db, 'feedback/' + user.uid + '/' + Date.now());
//             await set(feedbackRef, {
//                 userId: user.uid,
//                 rating: rating,
//                 description: description,
//                 timestamp: new Date().toISOString()
//             });
//             alert("Feedback submitted successfully!");
//             document.getElementById('feedback-form').reset();
//             window.location.href = "../../index.html";
//         } catch (error) {
//             console.error("Error submitting feedback: ", error);
//             alert("Error submitting feedback: " + error.message);
//         }
//     } else {
//         alert("You must be logged in to submit feedback.");
//     }
// });

