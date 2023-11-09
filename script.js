//number of circles we have in the game
var numCircles = 6;
//The colour variable should be an array that contains as many random RGB colours as there are circles.
var colors = [];
//This pickedColour is the RGB colour we are trying to guess (string)
var pickedColor;
//This is the default colour of the game.
let defaultColor = "#582c99";

//Grab all appropriate elements from the HTML.
circles = document.querySelectorAll(".circle");
colorToGuess = document.getElementById("color-to-guess");
resultMessage = document.getElementById("result-message");
banner = document.querySelector("h1");
resetButton = document.getElementById("restart");
init();

//The init function should reset the stage and set a new RGB color
function init() {
  //Call the reset function
  //Set the text of the colourToGuess element to display the correct RGB color
  reset();
  colorToGuess.textContent = pickedColor;
}

//Setup so that when the reset button is clicked, the reset function gets called

//Define what should happen when any circle is clicked.
//When a circle is clicked, it should check if the color of a circle
//is the same as the color to be guessed. If it is, you have won. You should set
// the display message to "You win", change the text of the reset button to "Play again"
// and set the color of each circle and of the banner to be the color we were guessing.
// If the color you clicked on was incorrect, you should set the color of the circle you just clicked to be the default color
// and change the result text to be "Try again"
function clickCircle() {
  let click = this.style.backgroundColor;
  if (click === pickedColor) {
    resetButton.textContent = "Play again";
    resultMessage.textContent = "You win";
    banner.style.backgroundColor = pickedColor;
    for (let i = 0; numCircles; i++) {
      circles[i].style.backgroundColor = pickedColor;
    }
  } else {
    this.style.backgroundColor = defaultColor;
    resultMessage.textContent = "Try again";
  }
}

// The reset function should set new values for the colours array by calling genRandomColours.
// pick a color from these and set it as the color you are trying to pick. This color
// should be obtained by calling chooseColor.
// Display the colour RGB value on the main page.
// Set the colour of the circles to the random colors you generated.
// Set the color of the banner to the default color, set the text of the reset
// button to "Restart" and the result text to an empty String.
// Ensure that if a circle is clicked that the clickCircle function is called.
function reset() {
  colors = genRandomColors();
  pickedColor = chooseColor();
  for (let i = 0; i < numCircles; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener("click", clickCircle);
  }
  banner.style.backgroundColor = defaultColor;
  resetButton.textContent = "Restart";
  resetButton.addEventListener("click", init);
  resultMessage.textContent = "";
}

//Write a function to make a random RGB color. For RGB colours are
// made up of 3 values from 0 to 256. You should basically generate 3 random
// numbers and create a string "rgb(0,0,0)" but replace the 0 with random values.
//return that string
function makeColor() {
  let list = [];
  for (let i = 0; i < 3; i++) {
    list[i] = Math.floor(Math.random() * 257);
  }
  return "rgb(" + list[0] + ", " + list[1] + ", " + list[2] + ")";
}

// Write a function that will set new values for the colours array.
// It should contain as many RGB color strings as there are circles
function genRandomColors() {
  colors = [];
  for (let i = 0; i < numCircles; i++) {
    colors[i] = makeColor();
  }
  return colors;
}

//return one of the 6 RGB colours you created and stored in colours
// this function should set the colour you are guessing.
function chooseColor(color) {
  let rand = Math.floor(Math.random() * 6);
  return colors[rand];
}
