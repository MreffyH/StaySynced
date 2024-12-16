// Function to generate a QR code with a random number
function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');
    
    // Generate a random number
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number

    // Clear any existing QR code
    qrCodeContainer.innerHTML = "";

    // Generate QR code
    new QRCode(qrCodeContainer, {
        text: randomNumber.toString(),
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    console.log("QR code generated successfully with random number:", randomNumber);
}

// Function to handle checkout
document.addEventListener('DOMContentLoaded', function () {
    // Tambahkan event listener ke tombol checkout
    document.querySelector('.btn-checkout').addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah default behavior tombol
        
        // Logika sebelum redirect (opsional)
        alert('Proceeding to feedback page...');
        
        // Redirect ke halaman feedback
        window.location.href = 'feedback.html'; // Pastikan path sesuai dengan lokasi file Anda
    });
});



// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Generate QR code
    generateQRCode();

    // Add event listeners to buttons
    document.querySelector('.btn-share').addEventListener('click', handleShare);
    document.querySelector('.btn-checkout').addEventListener('click', handleCheckout);

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

