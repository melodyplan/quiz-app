var questions = [
  {
    question: 'Which is NOT a basic land type:',
    answers: ['swamp', 'plains', 'earth', 'island'],
    correctAnswer: 'earth'
  },
  {
    question: 'What is the beginning phase order:',
    answers: ['untap —> upkeep —> draw', 'upkeep —> untap —> draw', 'draw —> untap —> upkeep', 'upkeep —> draw —> untap'],
    correctAnswer: 'untap —> upkeep —> draw'
  },
  {
    question: 'An interrupt/instant can be cast when:',
    answers: ['Beginning phase only', 'Any time', 'Main phase only', 'Attack phase only'],
    correctAnswer: 'Any time'
  },
  {
    question: 'A standard deck of Magic cards has:',
    answers: ['40 cards', '100 cards', '80 cards', '60 cards'],
    correctAnswer: '60 cards'
  },
  {
    question: 'In competitive draft play a deck must have at least:',
    answers: ['40 cards', '100 cards', '80 cards', '60 cards'],
    correctAnswer: '40 cards'
  },
  {
    question: 'Which of the following is true for the attack phase:',
    answers: ['You must declare all attackers before attacking.', 'You must declare blockers during the declaration of attackers.', 'You are allowed one undeclare of an attacker if they can be destroyed by any number of blockers.', 'The opponent can not block an attack if it kills their blocker.'],
    correctAnswer: 'You must declare all attackers before attacking.'
  },
  {
    question: 'The term “tapping” is a physical action that:',
    answers: ['Turns your card face down', 'Discards your card to the graveyard', 'Turns you card sideways', 'Slide your card to the opponent '],
    correctAnswer: 'Turns you card sideways'
  },
  {
    question: 'A player draws __ cards at the beginning of the game:',
    answers: ['10', '9', '8', '7'],
    correctAnswer: '7'
  },
  {
    question: 'A player can have a maximum of __ cards in their hand:',
    answers: ['9', '10', '11', '12'],
    correctAnswer: '10'
  },
  {
    question: 'A player must have a minimum of __ cards in their hand:',
    answers: ['3', '2', '1', '0'],
    correctAnswer: '0'
  }
];

var questionNumber = 0;

function main() {
    var form = $('.question-form')
    var questionObj = questions[questionNumber]
    form.find('h3').text(questionObj.question)
    form.find('label').eq(0).html('<input value=' + questionObj.answers[0] + ' name="q1" type="radio"> ' + questionObj.answers[0])
    form.find('label').eq(1).html('<input value=' + questionObj.answers[1] + ' name="q1" type="radio"> ' + questionObj.answers[1])
    form.find('label').eq(2).html('<input value=' + questionObj.answers[2] + ' name="q1" type="radio"> ' + questionObj.answers[2])
    form.find('label').eq(3).html('<input value=' + questionObj.answers[3] + ' name="q1" type="radio"> ' + questionObj.answers[3])
}

//proper figure out what this does
function choose() {
  questions[questionNumber] = +$('input[name="answer"]:checked').val();
}

//what am i doing wronnngg -- this should iterate right?
function submit() {
  form.fadeOut(function() {
    $('.question').remove();

    if(questionNumber < questions.length){
      var nextQuestion = main(questionNumber);
      form.append(nextQuestion).fadeIn();
      if (!(isNaN(questions[questionNumber]))) {
        $('input[value='+questions[questionNumber]+']').prop('checked, true');
      }
    }
  });
}

//need to make a function to iterate through all questions.
//why doesn't the below work? how come it won't iterate? -_-

function userScore() {
  var numCorrect = 0;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i] === questions[i].correctAnswer) {
      numCorrect++;
    }
  }

  score.append('You got ' + numCorrect + ' questions out of 10 correct!');
  return score;
}


$(document).ready(function() {
    main();
})
