var questions = [
  {
    question: 'Which is NOT a basic land type:',
    answers: ['swamp', 'plains', 'earth', 'island'],
    correctAnswer: 'earth'
  },
  {
    question: 'What is the beginning phase order:',
    answers: ['untap &rarr; upkeep &rarr; draw', 'upkeep &rarr; untap &rarr; draw', 'draw &rarr; untap &rarr; upkeep', 'upkeep &rarr; draw &rarr; untap'],
    correctAnswer: 'untap &rarr; upkeep &rarr; draw'
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
    question: 'The term "tapping" is a physical action that:',
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

    form.on('submit', function(event) {
      event.preventDefault()
      var answer = form.find('input[name="answer"]:checked').val()
      console.log(answer, questions[questionNumber].correctAnswer, answer === questions[questionNumber].correctAnswer)
      questionNumber++
      renderQuestion(form);
      $('.submit-button').attr('disabled', true)
    })
    form.on('change', 'input[type="radio"]', function() {
      $('.submit-button').attr('disabled', false)
    })

    renderQuestion(form);
}

function renderQuestion(form) {
  var questionObj = questions[questionNumber]
  form.find('h3').text(questionObj.question)
  form.find('label').eq(0).html('<input value="' + questionObj.answers[0] + '" name="answer" type="radio"> ' + questionObj.answers[0])
  form.find('label').eq(1).html('<input value="' + questionObj.answers[1] + '" name="answer" type="radio"> ' + questionObj.answers[1])
  form.find('label').eq(2).html('<input value="' + questionObj.answers[2] + '" name="answer" type="radio"> ' + questionObj.answers[2])
  form.find('label').eq(3).html('<input value="' + questionObj.answers[3] + '" name="answer" type="radio"> ' + questionObj.answers[3])
}


$(document).ready(function() {
    main();
})
