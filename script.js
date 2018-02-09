

var arrayChar = ['img/billBush.png', 'img/biilCamo.png', 'img/billShack.png', 'img/AlBlue.png', 'img/AlRainbow.png', 'img/dannyHat.png', 'img/Gopher.png', 'img/judge.png', 'img/judgeGolf.png', 'img/LaceyRed.png', 'img/lacyGolf.png', 'img/tonyRed.png', 'img/tyRed.png', 'img/tyWhiteCap.png', 'img/tonyglasses.png'];
var arrayBack = [];
var shuffledArray = [];
var compareArray = [];

var playerTurn = true;
var playerOneScore = 0;
var playerTwoScore = 0;
var totalScore = 0;
var image;

// {
//   playerOne: false,
//   playerTwo: true
// }

//make a copy of character array and merge the two
function gameArray() {
  arrayChar.forEach(function(img) {
    arrayBack.push(img);
  })
  arrayChar = arrayChar.concat(arrayBack);
}

//shuffle merged array
function shuffleArray() {
  var shuffleCount = arrayChar.length;
  for(var i = 0; i < shuffleCount; i++) {
  		var shuffledIndex = Math.round(Math.random() * (arrayChar.length - 1));
  		shuffledArray[i] = arrayChar.splice(shuffledIndex, 1)[0];
    }
}

//assign newly shuffled background image to back of cards
function assignImage() {
  $('.back').each(function(index) {
    this.style = ('background-image: ' + 'url(' + shuffledArray[index] + ');');
  })
}

//click on card to flip
function flipCard() {
  $('.card').on('click', function(){
    $(this ).toggleClass('flip', true);
    image = $(this).children("div:nth-child(2)").css('background-image');
    console.log(image)
  })

}

// function checkForMatch() {
//   $('.front').on('click', function() {
//     console.log('clicked back');
//     //store back card image in variable
//   })
// }


// switch player
if (playerTurn) {
  //player one logic
  $('#player1Go').show();
  $('#player2Go').hide();
  flipCard();

} else {
  //player two logic
  $('#player2Go').show();
  $('#player1Go').hide();
  flipCard();
}

// function flipCard() {
//   $('.card').on('click', function(){
//     $(this).firstChild.style = ('opacity: 0;');
//     $(this).lastChild.style = ('opacity: 1;');
//
//   })
//
// }


$(document).ready(function() {


// flipCard();
gameArray();
// mergeArray();
shuffleArray();
assignImage();
// checkForMatch();
})
