document.getElementById("makeReadable").addEventListener("click", function () {
  var readableHTML = document.getElementById("oldCode").value;
  var lb = '\r\n';
  var htags = ["<html","</html>","</head>","<title","</title>","<meta","<link","<style","</style>","</body>"];
  for (i=0; i<htags.length; ++i) {
  var hhh = htags[i];
  readableHTML = readableHTML.replace(new RegExp(hhh,'gi'),lb+hhh);
  }
  var btags = ["</div>","</span>","</form>","</fieldset>","<br>","<br />","<hr","<pre","</pre>","<blockquote","</blockquote>","<ul","</ul>","<ol","</ol>","<li","<dl","</dl>","<dt","</dt>","<dd","</dd>","<\!--","<table","</table>","<caption","</caption>","<th","</th>","<tr","</tr>","<td","</td>","<script","</script>","<noscript","</noscript>"];
  for (i=0; i<btags.length; ++i) {
  var bbb = btags[i];
  readableHTML = readableHTML.replace(new RegExp(bbb,'gi'),lb+bbb);
  }
  var ftags = ["<label","</label>","<legend","</legend>","<object","</object>","<embed","</embed>","<select","</select>","<option","<option","<input","<textarea","</textarea>"];
  for (i=0; i<ftags.length; ++i) {
  var fff = ftags[i];
  readableHTML = readableHTML.replace(new RegExp(fff,'gi'),lb+fff);
  }
  var xtags = ["<body","<head","<div","<span","<p","<form","<fieldset"];
  for (i=0; i<xtags.length; ++i) {
  var xxx = xtags[i];
  readableHTML = readableHTML.replace(new RegExp(xxx,'gi'),lb+lb+xxx);
  }
  document.getElementById("newCode").value = readableHTML;
});

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
  document.getElementById("oldCode").value = "";
  document.getElementById("newCode").value = "";
  document.getElementById("oldCode").focus();
});

var textBox = document.getElementById("newCode");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};	