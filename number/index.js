var numType;
for(var i = 1; i <= 20; i++){
	numType = "";
	if(i%2 === 0){
		numType = "even"
	}
	else{
		numType = "odd";
	}
	document.write(`${i} is an ${numType} number. </br>`)

}