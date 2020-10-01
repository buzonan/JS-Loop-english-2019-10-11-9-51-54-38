document.write("9*9 Table" + "</br>");

for(var i = 1; i < 10; i++){
	for(var x = 1; x <= i; x++)	{
		document.write(`${i}*${x}=${i*x}` + " ");
	}
	document.write("</br>");
}