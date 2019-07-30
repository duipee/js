document.getElementById("convertText").addEventListener("click", function () {
		
		var htmlCode = document.getElementById("oldText").value;
		//get rid of scripts
		htmlCode = htmlCode.replace (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
		//Title and list bullets
		htmlCode = htmlCode.replace (/<title>/gi, "<title>META TAG (title): ");
		htmlCode = htmlCode.replace (/<link/gi, "<llink");
		htmlCode = htmlCode.replace (/<\/li><li>/gi, "</li>\n<li>");
		htmlCode = htmlCode.replace (/<li/gi, "\n• <li");
		htmlCode = htmlCode.replace (/<llink/gi, "<link");
		htmlCode = htmlCode.replace (/<\/li>\n/gi, "</li>");

		
		//if(document.querySelector('#tfEncode:checked')){
			//description meta tag
			var tempoDom = document.createElement('div');
			tempoDom.innerHTML = htmlCode;
			if (tempoDom.querySelector("[name=description]") !== null){
				var metaDesc = tempoDom.querySelector("[name=description]").content;
				htmlCode = htmlCode.replace (/<\/title>/gi, "</title>\n\nMETA TAG (description): "+metaDesc + "\n\n--------------------------------------------------------------\n\n");
			}
		//}
		
		
		//remove tags
		document.getElementById("tHide").innerHTML = htmlCode;
		htmlCode = document.getElementById("tHide").textContent;
		document.getElementById("tHide").style.display = "none"; 
		//line break shenanigans
		htmlCode = htmlCode.replace(/(\n\r|\n|\r)/gm,"\n");
		htmlCode = htmlCode.replace(/(\n \n)/gm,"\n\n");
		htmlCode = htmlCode.replace(/(\n	\n)/gm,"\n\n");
		htmlCode = htmlCode.replace(/(\n\n\n\n\n\n\n)/gm,"\n\n");
		htmlCode = htmlCode.replace(/(\n\n\n\n\n\n)/gm,"\n\n");
		htmlCode = htmlCode.replace(/(\n\n\n\n\n)/gm,"\n\n");
		htmlCode = htmlCode.replace(/(\n\n\n\n)/gm,"\n\n");
		htmlCode = htmlCode.replace(/(\n\n\n)/gm,"\n\n");
		htmlCode = htmlCode.trim();
		
		document.getElementById("newCode").value = htmlCode;

});

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("oldText").value = "";
	document.getElementById("newCode").value = "";
	document.getElementById("oldText").focus();
});	

var textBox = document.getElementById("newCode");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};
	