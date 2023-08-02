/* var qrcode = new
QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did you scanned me?")
function generateQR(){
	qrcode.makeCode(document.querySelector("input").value)
} 

var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')

QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
}) */

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



  
  
