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
    var QRCode = require('qrcode'); // You don't need to require again, just use the existing QRCode object.
  
    var textInput = document.getElementById('textInput').value; // Get the text input value
    var qrCodeContainer = document.getElementById('qrcode'); // Get the div container
  
    QRCode.toDataURL(textInput, function (error, url) { // Generate the QR code data URL with the input text
      if (error) {
        console.error(error);
      } else {
        var qrCodeImage = document.createElement('img'); // Create an <img> element
        qrCodeImage.src = url; // Set the src attribute to the QR code data URL
        qrCodeContainer.innerHTML = ''; // Clear the container in case there's already a QR code
        qrCodeContainer.appendChild(qrCodeImage); // Append the QR code image to the container
        console.log('success!');
      }
    });
  });
  
  
