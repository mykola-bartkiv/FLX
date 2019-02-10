var startGame = confirm("Do you want to play a game?");
var number;
var userNum;
var prize;
var mainPrize = 10;
var range = 5;
var playAgain = false;
var total = 0;
var levelUp = false;

if (!startGame) {
	alert("You did not become a millionaire, but can.");
} else { 
	newLevel: 
	do {
		if (levelUp) {
			mainPrize *= 3;
			range *=2;
		}

		number = Math.round(Math.random() * range );
		prize = mainPrize;   

		for (var i = 0; i < 3; i += 1) {
			userNum = prompt("Enter a number from 0 to " + range
				+ "\n" + "Attempts left: " + (3 - i)
				+ "\n" + "Total prize: " + total
				+ "\n" + "Possible prize on current attempt: " + prize );
			userNum = Number(userNum);
			if (number === userNum) {
				alert("Thank you for a game. Your prize is: " + (prize + total) + "$");
				playAgain = confirm("Congratulation! Your prize is: " + (prize + total) 
					+ "$. Do you want to continue?");
				if (!playAgain) {
					alert("Thank you for a game. Your prize is: " + (prize + total) + "$");
					break;
				} else {
					levelUp = true;
					total += prize;
					continue newLevel;
				}
			} else if (i === 2) {
				alert("Thank you for a game. Your prize is: 0$");
			}
			prize = Math.floor(prize / 2);
		}
		break;//important, exit from functions
	} while (playAgain);
}

