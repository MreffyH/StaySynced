import { auth } from '../../auth/firebase/config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const db = getDatabase();

// Save QR Code to Firestore
async function saveQRCodeToFirestore(randomNumber) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // 1. Update status QR code lama menjadi false jika ada
            const userRef = ref(db, `qrCodes/${user.uid}`);
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
                // Jika QR code sebelumnya ada, ubah statusnya menjadi inactive
                set(userRef, {
                    ...snapshot.val(),
                    status: 'inactive',
                    updatedAt: new Date().toISOString()
                }).catch((error) => {
                    console.error("Error updating QR code status: ", error);
                });
            }

            // 2. Simpan QR code baru dengan status active
            set(ref(db, `qrCodes/${user.uid}`), {
                number: randomNumber,
                timestamp: new Date().toISOString(),
                status: 'active'
            }).catch((error) => {
                console.error("Error writing QR code document: ", error);
            });
        } else {
            console.log("No user is signed in.");
        }
    });
}


// Function to generate a QR code with a random number
function generateQRCode(randomNumber) {
    const qrCodeContainer = document.getElementById('qrcode');

    // Clear any existing QR code
    qrCodeContainer.innerHTML = "";

    // Generate QR code
    new QRCode(qrCodeContainer, {
        text: randomNumber,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    console.log("QR code generated successfully with number:", randomNumber);
    saveQRCodeToFirestore(randomNumber);
}

// Function to handle checkout
document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah QR code sudah ada di localStorage
    let randomNumber = localStorage.getItem('qrCodeNumber');

    // Jika tidak ada, buat nomor acak baru dan simpan ke localStorage
    if (!randomNumber) {
        randomNumber = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('qrCodeNumber', randomNumber);
    }

    // Generate QR code when the page loads
    generateQRCode(randomNumber);

    // Tambahkan event listener ke tombol checkout
    document.querySelector('.btn-checkout').addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah default behavior tombol
        
        // Generate a new random number and update localStorage
        let randomNumber = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('qrCodeNumber', randomNumber);
    
        // Generate a new QR code with the new random number
        generateQRCode(randomNumber);
    
        // Update QR Code status to inactive for the old one
        saveQRCodeToFirestore(randomNumber);
    
        // Redirect ke halaman feedback
        window.location.href = 'feedback.html'; // Pastikan path sesuai dengan lokasi file Anda
    });
});

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {

    // Set current dates for check-in/out
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    document.getElementById('checkinDate').textContent = today.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    document.getElementById('checkoutDate').textContent = tomorrow.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
});

