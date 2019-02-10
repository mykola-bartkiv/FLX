function getMin() {
	var min = Infinity;
	var i;
	for (i = 0; i < arguments.length; i += 1) {
		if (min >= arguments[i] ) {
			min = arguments[i];
		}
	}
	return min;
}
getMin(3, 0, -3);