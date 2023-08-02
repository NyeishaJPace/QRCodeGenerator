
document.getElementById('generateBtn').addEventListener('click', function () {
    var textInput = document.getElementById('textInput').value; // Get the text input value
    var qrCodeContainer = document.getElementById('qrcode'); // Get the div container

    qrCodeContainer.innerHTML = ''; // Clear the container in case there's already a QR code

    var qrcode = new QRCode(qrCodeContainer, {
      text: textInput,
      width: 128,
      height: 128
    });

    console.log('success!');
});



  
  
