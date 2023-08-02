/* var qrcode = new
QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did you scanned me?")
function generateQR(){
	qrcode.makeCode(document.querySelector("input").value)
} */

var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')

QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
})
