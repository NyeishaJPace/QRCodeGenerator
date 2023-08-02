var qrcode = new
QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did you scanned me?")
function generateQR(){
	qrcode.makeCode(document.querySelector("input").value)
}
