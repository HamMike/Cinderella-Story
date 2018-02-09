'use strict';

var arrayChar = ['img/billBush.png', 'img/biilCamo.png', 'img/billShack.png', 'img/AlBlue.png', 'img/AlRainbow.png', 'img/dannyHat.png', 'img/Gopher.png', 'img/judge.png', 'img/judgeGolf.png', 'img/LaceyRed.png', 'img/lacyGolf.png', 'img/tonyRed.png', 'img/tyRed.png', 'img/tyWhiteCap.png', 'img/tonyglasses.png'];
var arrayBack = [];
var shuffledArray = [];
// var compareArray = [];

var playerOne = true;
var playerOneScore = 0;
var playerTwoScore = 0;
var totalScore = 0;
var clickCount = 0;
var image;
var image1;
var image2;
var firstCard;
var secondCard;


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

//click on card to flip and save image
function flipCard() {
  var $this = $(this);

  $(this).toggleClass('flip', true);

  if (playerOne) {
    //player one logic
    if (clickCount === 0) {
      firstCard = $this;
      image1 = firstCard.children("div:nth-child(2)").css('background-image');
      clickCount++;
      console.log(image1);
    } else if (clickCount === 1) {
      secondCard = $this;
      image2 = secondCard.children("div:nth-child(2)").css('background-image');
      clickCount++;
      console.log(image2);
    }
    if (clickCount === 2) {
      if (image1 === image2) {
        playerOneScore++;
      } else {
        setTimeout(function() {
          firstCard.toggleClass('flip', false);
          secondCard.toggleClass('flip', false);
        }, 1000);
      }

      playerOne = false;
      clickCount = 0;
      $('#player2Go').show();
      $('#player1Go').hide();

    }

  } else {
    //player two logic
    if (clickCount === 0) {
      firstCard = $this;
      image1 = firstCard.children("div:nth-child(2)").css('background-image');
      clickCount++;
      console.log(image1);
    } else if (clickCount === 1) {
      secondCard = $this;
      image2 = secondCard.children("div:nth-child(2)").css('background-image');
      clickCount++;
      console.log(image2);
    }
    if (clickCount === 2) {
      if (image1 === image2) {
        playerTwoScore++;
      } else {
        setTimeout(function() {
          firstCard.toggleClass('flip', false);
          secondCard.toggleClass('flip', false);
        }, 1000);
      }
      playerOne = true;
      clickCount = 0;
      $('#player1Go').show();
      $('#player2Go').hide();
    }
  }
}


$(document).ready(function() {


  // flipCard();
  gameArray();
  // mergeArray();
  shuffleArray();
  assignImage();
  // checkForMatch();
  $('.card').on('click', flipCard);

})
