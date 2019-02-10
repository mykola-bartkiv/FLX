function formatTime(m) {
	var days = parseInt(m/1440, 10);
	var hours = parseInt(m%1440/60, 10);
	var minutes = parseInt(m%1440%60, 10);
	return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)";
}
formatTime(120);
formatTime(59);
formatTime(3601);
