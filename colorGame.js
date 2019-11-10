var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	// mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}


function setupModeButtons(){
	for(i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy") {
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}
			reset();
		})
	}

}


function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	// add click listener to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor) {
				//correct color picked
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play again?";
			} else {
				// wrong color picked
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Wrong color. Try Again!";
			}
		});
	}
}

function reset(){
	// generate new colors
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}


resetButton.addEventListener("click", function(){
	reset();
})




function changeColors (color) {
	for(var i=0; i<squares.length;i++)
		squares[i].style.backgroundColor = color;
}

function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++) {
		arr.push (randomColor());
	}
	return arr;
}

function randomColor (){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb("+red+", "+green+", "+blue+")";
}