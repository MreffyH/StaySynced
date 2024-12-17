import { auth } from '../../auth/firebase/config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Initialize the database reference
const db = getDatabase();

document.addEventListener("DOMContentLoaded", function () {
    let submitBtn = document.getElementById('submit');

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default form submission
        submitFeedback();
    });

    async function submitFeedback() {
        let ratingElement = document.querySelector('input[name="rating"]:checked');
        let feedback = document.getElementById('description').value;

        if (ratingElement && feedback.trim() !== "") {
            let rating = ratingElement.value;

            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const feedbackRef = ref(db, `feedback/${user.uid}`);
                    await set(feedbackRef, {
                        rating: rating,
                        feedback: feedback,
                        timestamp: new Date().toISOString()
                    });

                    console.log("Feedback submitted successfully!");
                    window.location.href = "../../index.html"; // Redirect to another page after submission
                } else {
                    console.log("No user is signed in.");
                }
            });
        } else {
            console.error("Please select a rating and provide feedback.");
        }
    }
});
