document.addEventListener('DOMContentLoaded', function () {	
	//Only numbers in the text inputs
	document.getElementById("numberNumber").addEventListener("keyup", function () {
			var noBadCharacters = document.getElementById("numberNumber").value;
			//noBadCharacters = noBadCharacters.replace(/[^0-9\s.,;"']/g,''); 
			noBadCharacters = noBadCharacters.replace(/[^0-9\s]/g,''); 
			if(noBadCharacters > 10000){noBadCharacters = 10000;}
			document.getElementById("numberNumber").value = noBadCharacters;
	});
	document.getElementById("startNumber").addEventListener("keyup", function () {
			var noBadCharacters = document.getElementById("startNumber").value;
			noBadCharacters = noBadCharacters.replace(/[^0-9\s]/g,''); 
			if(noBadCharacters > 10000000){noBadCharacters = 10000000;}
			document.getElementById("startNumber").value = noBadCharacters;
	});
	document.getElementById("endNumber").addEventListener("keyup", function () {
			var noBadCharacters = document.getElementById("endNumber").value;
			noBadCharacters = noBadCharacters.replace(/[^0-9\s]/g,''); 
			if(noBadCharacters > 1000000000){noBadCharacters = 1000000000;}
			document.getElementById("endNumber").value = noBadCharacters;
	});
	//Generate random numbers
	document.getElementById("toolSubmit").addEventListener("click", function () {
		//Get output separators
		var outputPref = document.querySelector('.outputPref:checked').value;
		//Get min and max and etc
		var x = document.getElementById("numberNumber").value;
		var min = document.getElementById("startNumber").value;
		var max = document.getElementById("endNumber").value;
		var randomNumber;
		var tempo = "";
		for (var i = 0; i < x;) {
				randomNumber = (Math.random() * (max - min + 1) ) << 0;
				if(i + 1 == x){
						tempo = tempo + randomNumber;	
				}else{
					if(outputPref === "nLines"){
						tempo = tempo + randomNumber + '\r\n';
					}else{
						tempo = tempo + randomNumber + outputPref;
					}
				}
				i++;
		}		
		//Put random numbers in place
		document.getElementById("randoNums").value = tempo;
	});
	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("randoNums").value = "";
		document.getElementById("randoNums").focus();
	});	
	
	var textBox = document.getElementById("randoNums");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};
			
});