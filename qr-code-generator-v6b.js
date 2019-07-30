	document.getElementById("generate-qr-code").addEventListener("click", function () {
		
		if (document.getElementById("oldText").value != ""){
			var oldText = document.getElementById("oldText").value;
			if(oldText.length > 160){
				oldText = oldText.substring(0,160);
			}
			
			oldText = encodeURIComponent(oldText).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  replace(/\)/g, '%29').replace(/\*/g, '%2A'); 
			var qrSize = document.getElementById("qr-size").value;if (qrSize == ""){qrSize = "100x100";}
			var newQR = '<img src="https://chart.googleapis.com/chart?chs=' + qrSize + '&amp;cht=qr&amp;chl=' + oldText + '&amp;choe=UTF-8" alt="QR code" />';
			document.getElementById("oldText").value = oldText;
			document.getElementById("qr-code").innerHTML = newQR;
		}
	});
