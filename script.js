// 'use strict';

var castImages = ['img/billBush.png', 'img/biilCamo.png', 'img/billShack.png', 'img/AlBlue.png', 'img/AlRainbow.png', 'img/dannyHat.png', 'img/Gopher.png', 'img/judge.png', 'img/judgeGolf.png', 'img/LaceyRed.png', 'img/lacyGolf.png', 'img/tonyRed.png', 'img/tyRed.png', 'img/tyWhiteCap.png', 'img/tonyglasses.png'];
var doubledCastImgs = [];
var shuffledCastImgs = [];

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

//make a copy of character array and merge the two
function gameArray() {
  castImages.forEach(function(img) {
    doubledCastImgs.push(img);
  })
  castImages = castImages.concat(doubledCastImgs);
}

//shuffle merged array
function shuffleArray() {
  var shuffleCount = castImages.length;
  for(var i = 0; i < shuffleCount; i++) {
  		var shuffledIndex = Math.round(Math.random() * (castImages.length - 1));
  		shuffledCastImgs[i] = castImages.splice(shuffledIndex, 1)[0];
    }
}

//assign newly shuffled background image to back of cards
function assignImage() {
  $('.back').each(function(index) {
    this.style = ('background-image: ' + 'url(' + shuffledCastImgs[index] + ');');
  })
}

// checks for player turn as well as if a player has one
function playerStatus() {
  totalScore = playerOneScore + playerTwoScore;
  if (totalScore === 15) {
    if (playerOneScore > playerTwoScore) {
      $('#playerPrompt').text("Player One Wins");
    } else if (playerOneScore < playerTwoScore) {
      $('#playerPrompt').text("Player Two Wins");;
    }
  } else {
    if (playerOne === true) {
      playerOne = false;
      clickCount = 0;
      $('#playerPrompt').text("Player Two's Turn");
    } else {
      playerOne = true;
      clickCount = 0;
      $('#playerPrompt').text("Player One's Turn");
    }
}
}

//click on card to flip and save image for comparison
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
      console.log("one " + playerOneScore);
      playerStatus();
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
      console.log("two " + playerTwoScore);
      playerStatus();
    }
  }
}

//resets game board and counters
function gameReset() {
  castImages = ['img/billBush.png', 'img/biilCamo.png', 'img/billShack.png', 'img/AlBlue.png', 'img/AlRainbow.png', 'img/dannyHat.png', 'img/Gopher.png', 'img/judge.png', 'img/judgeGolf.png', 'img/LaceyRed.png', 'img/lacyGolf.png', 'img/tonyRed.png', 'img/tyRed.png', 'img/tyWhiteCap.png', 'img/tonyglasses.png'];

  doubledCastImgs = [];
  shuffledCastImgs = [];

  playerOne = true;
  playerOneScore = 0;
  playerTwoScore = 0;
  totalScore = 0;
  clickCount = 0;

  $('.card').each(function() {
    $(this).toggleClass('flip', false);
  })

setTimeout(function() {
  gameArray();
  shuffleArray();
  assignImage();
    }, 1000);

  $('#playerPrompt').text("Player One's Turn");
}


$(document).ready(function() {

  gameArray();
  shuffleArray();
  assignImage();

  $('.card').on('click', flipCard);
  $('#resetBoard').on('click', gameReset);

});
