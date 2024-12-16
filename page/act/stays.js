// Function to generate a QR code with a random number
function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');
    const randomNumberDisplay = document.getElementById('randomNumber');

    // Generate a random number
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number


    // Clear any existing QR code
    qrCodeContainer.innerHTML = "";

    // QR code options to control size
    const qrCodeOptions = {
        width: 256, // Width in pixels
        margin: 1,  // Margin in modules
    };

    // Generate QR code as an <img> tag with larger size
    QRCode.toDataURL(randomNumber.toString(), qrCodeOptions, function (error, url) {
        if (error) {
            console.error("Error generating QR code:", error);
            return;
        }

        // Create an <img> element and append to container
        const img = document.createElement('img');
        img.src = url;
        img.style.width = `${qrCodeOptions.width}px`; // Set width to match QR code options
        qrCodeContainer.appendChild(img);

        console.log("QR code generated successfully with random number:", randomNumber);
    });
}

// Automatically generate QR code when the page loads
window.onload = generateQRCode;
