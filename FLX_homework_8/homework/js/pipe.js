function addOne(x) {
	return x + 1;
}

function pipe() {
	if (arguments.length === 1) {
		return arguments[0];
	} else {
		var sum = arguments[0];
		for (var i = 1; i < arguments.length; i += 1) {
			arguments[i] = addOne(arguments[i-1]);
			sum += arguments[i];
		}
		return sum;
	}
}
pipe(1, addOne);
pipe(1, addOne, addOne);
