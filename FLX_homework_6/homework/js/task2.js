var a = prompt('Please enter the amount of money');
var d = prompt('Please enter a discount percentage');

a = Number(a);
d = Number(d);

if (!isNaN(a)&&!isNaN(d)) {
	if ((0 < a)&&(a< 9999999)&&(0 < d)&&(d< 99)) {
		var saved = a * (d/100);
		var total = a - saved;
		alert('Price without discount: ' + a
			+ '\nDiscount: ' + d
			+ '%\nPrice with discount: ' + total.toFixed(2)
			+ '\nSaved: ' + saved.toFixed(2) );
	} else {
		alert('Amount of money should be in range 0 to 9999999'
			+ '\nThe discount should be in range 0 to 99');
	}
} else {
	alert('Invalid input data');
}