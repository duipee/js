function removeBreaks(){

var para = document.getElementById("paragraphs").checked;
var nopara = document.getElementById("noparagraphs").checked;
var noBreaksText = document.getElementById("oldText").value;

noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,"<1br />");

re1 = /<1br \/><1br \/>/gi;
re1a = /<1br \/><1br \/><1br \/>/gi;

if(nopara == 1 || nopara ==  true){
noBreaksText = noBreaksText.replace(re1," ");
}else{
noBreaksText = noBreaksText.replace(re1a,"<1br /><2br />");
noBreaksText = noBreaksText.replace(re1,"<2br />");
}

re2 = /\<1br \/>/gi;
noBreaksText = noBreaksText.replace(re2, " ");

re3 = /\s+/g;
noBreaksText = noBreaksText.replace(re3," ");

re4 = /<2br \/>/gi;
noBreaksText = noBreaksText.replace(re4,"\n\n");
document.getElementById("newText").value = noBreaksText;
}

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("oldText").value = "";
	document.getElementById("newText").value = "";
	document.getElementById("oldText").focus();
});

var textBox = document.getElementById("newText");
	textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};	