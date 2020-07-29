var colorNum = 3;
var colors = gerateRandomColor(colorNum);
var colorDisplay = document.querySelector(".colorDisplay");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var darkTheme = document.querySelector("#darkTheme");
var VereyHardButton = document.querySelector("#vereyHardButton");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".resetButton");
var squares = document.querySelectorAll(".square");
var scoreDisplay = document.querySelector("#scoreDisplay");
var colorPicker = colors[randomGenerator()];
colorDisplay.textContent = colorPicker;

darkTheme.addEventListener("click", () => {
  if (document.querySelector("body").classList.value == "darkTheme") {
    document.querySelector("body").className = "";
    scoreDisplay.style.color="black"
    darkTheme.textContent="WHITETHEME"
    document.querySelector("#stribe").style.backgroundColor = "white";}
    else {
    document.querySelector("body").className = "darkTheme";
    darkTheme.textContent="DARKTHEME"
    scoreDisplay.style.color="white"
 
    document.querySelector("#stribe").style.backgroundColor = 'rgb(31, 31, 31)';}
  // if( document.querySelector('body').classList.)
});
//selecting the easy mode
easyButton.addEventListener("click", selectEasy);
function selectEasy() {
  h1.style.backgroundColor = "#00b0ff";
  //select three colors
  colorNum = 3;
  colors = gerateRandomColor(colorNum);

  //genreate rando colors
  colorPicker = colors[randomGenerator()];
  colorDisplay.textContent = colorPicker;
  // show the colors
  console.log(colors, colorPicker);
  for (var i = 0; i < squares.length; i++)
    if (colors[i]) {
      squares[i].style.marginRight="0px"
      squares[i].style.width="30%";
      // squares[i].style.paddingBottom="30%";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  //highlight easy button
  easyButton.classList.add("selected");
  //un high light hard button
  hardButton.classList.remove("selected");
  //un high light verey hard button
  VereyHardButton.classList.remove("selected");
  //reset the the colors
}

//select the hard mode
hardButton.addEventListener("click", selectHard);

function selectHard() {
  h1.style.backgroundColor = "#00b0ff";
  //select three colors
  colorNum = 9;
  colors = gerateRandomColor(colorNum);

  //genreate rando colors
  colorPicker = colors[randomGenerator()];
  colorDisplay.textContent = colorPicker;
  // show the colors
  console.log(colors, colorPicker);
  for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
          squares[i].style.marginRight="1.1%"
          squares[i].style.width="30%";
          // squares[i].style.paddingBottom="20%";
          squares[i].style.display = "block";
          squares[i].style.backgroundColor = colors[i];}
      else {
      squares[i].style.display = "none";}
  }
  //highlight easy button
  easyButton.classList.remove("selected");
  //un high light hard button
  hardButton.classList.add("selected");
  //un high light verey hard button
  VereyHardButton.classList.remove("selected");
}
//slecting verey hard mode
vereyHardButton.addEventListener("click", selectVereyHard);

function selectVereyHard() {
  h1.style.backgroundColor = "#00b0ff";
  //select three colors
  colorNum =15;
  colors = gerateRandomColor(colorNum);
  //genreate rando colors
  colorPicker = colors[randomGenerator()];
  colorDisplay.textContent = colorPicker;
  // show the colors
  console.log(colors, colorPicker);
  for (var i = 0; i < squares.length; i++) {
    // squares[i].style.marginRight="30%"
    squares[i].style.width="30%";
    // squares[i].style.paddingBottom="15%";
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  //highlight easy button
  easyButton.classList.remove("selected");
  //un high light hard button
  hardButton.classList.remove("selected");
  //un high light verey hard button
  VereyHardButton.classList.add("selected");
}

resetButton.addEventListener("click", resetColors);

function resetColors() {
  //reset butto text
  resetButton.textContent = "change colors";
  //reset the score disblay
  scoreDisplay.textContent = "";
  //rest nav color
  h1.style.backgroundColor = "#";
  //pick new colors
  var colors = gerateRandomColor(colorNum);
  //pick new collor of these colors
  colorPicker = colors[randomGenerator()];

  //change the score display
  colorDisplay.textContent = colorPicker;
  //change the colors

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.width = "30%";
      squares[i].style.display = "block";

    } else {
      squares[i].style.display = "none";
    }
  }
}

for (var i = 0; i < squares.length; i++) {
  if (colors[i]){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";}
  else{
      squares[i].style.display = "none";}
  squares[i].addEventListener("click", function () {
    var colorPicked = this.style.backgroundColor;
    console.log(colorPicked, colorPicker);
    if (colorPicker === colorPicked) {
      scoreDisplay.textContent = "Correct!!";
      resetButton.textContent = "play again ?";
      h1.style.backgroundColor = colorPicked;
      autoChange(colorPicked);
      resetButton.textContent = "Play again !";}
    else {
        scoreDisplay.textContent = "wrong!";
        this.style.backgroundColor = "rgb(26, 26, 26)";}
  });
}

function autoChange(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function randomGenerator() {
  var random = Math.floor(Math.random() * colorNum);

  return random;
}

function gerateRandomColor(num) {
  //define array
  var arr = [];
  //create loob
  for (var i = 0; i < num; i++)
    //push the colors in to array
    arr.push(rgbGerator());

  return arr;
}

function rgbGerator() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var rgbColor = "rgb("+r+", "+g+", "+b+")";
  return rgbColor;
}
