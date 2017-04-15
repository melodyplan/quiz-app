var totalQuestions = $('.questions').size(10);
var currentQuestion = 0;

$questions.hide();
//get questions to fade in after clicking button "Clck Me to Start"

$($'.questions'.get(currentQuestion)).fadeIn();

$(.input).click(function() {
  $($questions.get(currentQuestion)).fadeOut(function () {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion == totalQuestions) {
      var result = sum_values()
      // how do i store the values on how much was incorrect and what
      // was correct after each click?
    } else {
      $($questions.get(currentQuestion)).fadeIn();
    }
  })
})

function mouseDown() {
  $("input").click(function() {
    $("input").text(function(n) {
      //trying to make text appear next to the input if it's wrong/right
      return "1x incorrect"
      //how to store value to count how much is correct? replace string with this
    });
  });
}
