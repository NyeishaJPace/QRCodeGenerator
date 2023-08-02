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
    var canvas = document.getElementById('qrcode'); // Get the canvas element
  
    QRCode.toCanvas(canvas, textInput, function (error) { // Generate the QR code with the input text
      if (error) console.error(error);
      console.log('success!');
    });
  });
  
