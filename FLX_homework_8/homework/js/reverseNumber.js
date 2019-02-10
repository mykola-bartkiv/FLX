function reverseNumber(number) {
	number = number.toString().split("").reverse();
	
	if (number[number.length-1] === "-") {
		number.pop();
		number.unshift("-");
	}

	return Number(number.join(""));
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
