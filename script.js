

var arrayChar = ['img/billBush.png', 'img/biilCamo.png', 'img/billShack.png', 'img/AlBlue.png', 'img/AlRainbow.png', 'img/dannyHat.png', 'img/Gopher.png', 'img/judge.png', 'img/judgeGolf.png', 'img/LaceyRed.png', 'img/lacyGolf.png', 'img/tonyRed.png', 'img/tyRed.png', 'img/tyWhiteCap.png', 'img/tonyglasses.png'];
var arrayBack = [];
var shuffledArray = [];


//click on card to flip
function flipCard() {
  $('.card').on('click', function(){
    $(this).toggleClass('flipped');
    console.log('div clicked');
  })
}

//make a copy of character array
function gameArray() {
  arrayChar.forEach(function(img) {
    arrayBack.push(img);
  })
}

//merge the copy array and original array
function mergeArray(){
  // arrayChar = $.merge(arrayChar, arrayBack);
  arrayChar = arrayChar.concat(arrayBack);
}

//shuffle  merged array
function shuffleArray() {
  //define a var that will not change as proceeded through the loop
  var shuffleCount = arrayChar.length;
  console.log(arrayChar.length);
  for(var i = 0; i < shuffleCount; i++) {
      //makes sure the array length never exceeds the current array length
  		var shuffledIndex = Math.round(Math.random() * (arrayChar.length - 1));
  		shuffledArray[i] = arrayChar.splice(shuffledIndex, 1)[0];
      // console.log(shuffledArray);
    }
}

//assign newly shuffled background image to back of cards
function assignImage() {
  $('.back').each(function(index) {
    this.style = ('background-image: ' + 'url(' + shuffledArray[index] + ');');
  })
}


$(document).ready(function() {


flipCard();
gameArray();
mergeArray();
shuffleArray();
assignImage();
// console.log(shuffledArray);

})
