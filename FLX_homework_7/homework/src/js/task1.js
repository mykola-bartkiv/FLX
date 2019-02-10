var userLogin;
var userPassword;
var loginOk = false;
var passwordOk = false;
var date = new Date().getHours();

while (!loginOk) {
	userLogin = prompt("Pleaіe enter a login");
	if (userLogin === null || userLogin === "") {
		alert("Canceled");
	} else if (userLogin.length < 4) {
		alert("I don't know any users having name length less than 4 symbols");
	} else if (userLogin === "User" || userLogin === "Admin") {
		loginOk = true;
	} else {
		alert("I don’t know you");
	}
}

while (!passwordOk) {
	userPassword = prompt("Pleaіe enter a password");
	if (userPassword === null || userPassword === "") {
		alert("Canceled");
	} else if (userLogin === "User" && userPassword === "UserPass") {
		passwordOk = true;
	} else if (userLogin === "Admin" && userPassword === "RootPass") {
		passwordOk = true;
	} else {
		alert("Wrong password");
	}
}

if (date < 20) {
	alert("Good day, dear " + userLogin + "!");
} else {
	alert("Good evening, dear " + userLogin + "!");
}
