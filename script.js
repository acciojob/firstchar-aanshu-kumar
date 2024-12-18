function firstChar(text) {
  // your code here
	let res = text.trim();
	if(res.length==0)
		return ("")
	return res[0];
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
