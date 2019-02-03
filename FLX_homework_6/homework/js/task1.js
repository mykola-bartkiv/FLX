var a = prompt('Please enter a value for "a"');
var b = prompt('Please enter a value for "b"');
var c = prompt('Please enter a value for "c"');

a = Number(a);
b = Number(b);
c = Number(c);

if (!isNaN(a)&&!isNaN(b)&&!isNaN(c)) {
	var d = b * b - 4 * a * c;
	if (d > 0) {
		var x1 = ( -b + Math.sqrt(d) ) / ( 2 * a );
		var x2 = ( -b - Math.sqrt(d) ) / ( 2 * a );
		alert( 'x1 = ' + x1 + ' and x2= ' + x2 );
	} else if (d === 0) {
		var x = (-b) / (2 * a);
		alert( 'x = ' + x );
	} else {
		alert('No solution');
	}
} else {
	alert('Invalid input data');
}

