var colors = [];
var	numSquares = 6;
var winningColor;
var squares = document.querySelectorAll(".squares");
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");
var bannerText = document.querySelector("#result");

mode();
changeColors();
winSelect();
process();
//Processes Player Clicks And Gives Results
function process() {
	for(var i = 0; i < numSquares; i++) {
		squares[i].addEventListener("click", function() {
			if(this.style.backgroundColor === winningColor) {
				document.querySelector("h1").style.backgroundColor = winningColor;
				for(var i = 0; i < numSquares; i++) {
					squares[i].style.backgroundColor = winningColor;
				}
				bannerText.textContent = "You Win!!!";
				resetButton.textContent = "REPLAY?";
			} 
				else {
					this.style.backgroundColor = "#232323";
					bannerText.textContent = "Select Another Color";
				}
		});
	}	
}
//Resets The Game To Original Settings
function reset() {
	document.querySelector("h1").style.backgroundColor = "rgb(147,200,63)";
	resetButton.textContent	= "NEW COLORS";
	bannerText.textContent = " ";
	colors = [];
	changeColors();
	winSelect();
}
//Mode Of Operation Based On Navbar
function mode() {
	resetButton.addEventListener("click", function() {
		reset();
	});
	easyButton.addEventListener("click", function () {
		numSquares = 3;
		this.classList.add("selected");
		hardButton.classList.remove("selected");
		reset();
	});
	hardButton.addEventListener("click", function() {
		numSquares = 6;
		for (i = 0; i < numSquares; i++) {
			squares[i].style.display = "block";
		}
		this.classList.add("selected");
		easyButton.classList.remove("selected");
		reset();
	});	
}
//Change Colors
function changeColors() {
	for (var i = 0; i < numSquares; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var final = "rgb(" + r + ", " + g + ", " + b + ")";
		colors.push(final);
	}
	//Assign Colors
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
			//Adjust Squares For "Easy" Setting
			if (i >= numSquares) {
				squares[i].style.display = "none";
			}
		}
}
//Selects Winning Color
function winSelect() {
	var winningNum = Math.floor(Math.random() * numSquares);
	winningColor = colors[winningNum];
	document.querySelector("#secretColor").textContent = winningColor;
}