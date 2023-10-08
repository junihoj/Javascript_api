function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please enter a valid URL");
  }
}


const generateQRCodeWithBwipt = ()=>{
    let website = document.getElementById("website").value;
    if (website) {
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        let bwipjs = require('bwip-js');
        bwipjs.toCanvas(qrcodeContainer, {
        bcid: 'qrcode',       // Barcode type
        text: website,    // Text to encode
        scale: 3,               // 3x scaling factor
        height: 10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign: 'center',        // Always good to set this
        });
        document.getElementById("qrcode-container").style.display = "block";
    } else {
        alert("Please enter a valid URL");
    }
};