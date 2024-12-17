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
        randomNumber = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('qrCodeNumber', randomNumber);

        // Generate a new QR code with the new random number
        generateQRCode(randomNumber);
        
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