console.log("four");


// function flipOver() {
//   $(".card").toggleClass();
// }


$(document).ready(function() {
  $(".card").on("click", function(){
    $(this).toggleClass('flipped');
    console.log("div clicked");
  })
})
