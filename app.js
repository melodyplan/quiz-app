var questions = [
  {
    question: 'Which is NOT a basic land type:',
    answers: ['swamp', 'plains', 'earth', 'island'],
    correctAnswer: 'earth'
  },
  {
    question: 'What is the beginning phase order:',
    answers: [
      'untap, upkeep, draw',
      'upkeep, untap, draw',
      'draw, untap, upkeep',
      'upkeep, draw, untap'
    ],
    correctAnswer: 'untap, upkeep, draw'
    //&rarr; doesn't seem to work? it won't match with correctAnswer. replaced with commas for now.
  },
  {
    question: 'An interrupt/instant can be cast when:',
    answers: [
      'Beginning phase only',
      'Any time',
      'Main phase only',
      'Attack phase only'
    ],
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
    answers: [
      'You must declare all attackers before attacking',
      'You must declare blockers during the declaration of attackers',
      'You are allowed one undeclare of an attacker if they can be destroyed by any number of blockers',
      'The opponent can not block an attack if it kills their blocker'
    ],
    correctAnswer: 'You must declare all attackers before attacking'
  },
  {
    question: 'The term "tapping" is a physical action that:',
    answers: [
      'Turns your card face down',
      'Discards your card to the graveyard',
      'Turns your card sideways',
      'Slide your card to the opponent '
    ],
    correctAnswer: 'Turns your card sideways'
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
    question: 'A player can have a minimum of __ card(s) in their hand:',
    answers: ['3', '2', '1', '0'],
    correctAnswer: '0'
  }
];

var results = [
  'On the way to Pro Tour! You got 10/10 of the questions right! Find even more opportunities to play and add to your experience on magic.wizards.com with local events in your community like booster drafts and Friday Night Magic!',
  "You must be a casual player! If you're interested in more opportunities to play and maybe up your game to the next level, check out magic.wizards.com to find local events like booster drafts and Friday Night Magic in your community!",
  "Uh oh! A bit land-locked there. Maybe you're playing by house rules? Maybe it's just been a long time since you last shuffled your deck. Check out magic.wizards.com to brush up on strats and rules.",
  "You must be new to Magic! It's all right, we all start somewhere! Check out magic.wizards.com for more info on strats and rules."
];

var questionNumber = 0;
var numberCorrect = 0;

function main() {
  var form = $('.question-form');

  form.on('submit', function(event) {
    event.preventDefault();
    var answer = form.find('input[name="answer"]:checked').val();
    if (answer === questions[questionNumber].correctAnswer) {
      numberCorrect++;
      $('.alert')
        .addClass('alert-success')
        .removeClass('hidden alert-danger')
        .html('<strong>Well done!</strong> That was the correct answer.');
    } else {
      $('.alert')
        .addClass('alert-danger')
        .removeClass('hidden alert-success')
        .html('<strong>Tapped out!</strong> Be better.');
    }
    console.log(`${numberCorrect} out of ${questions.length}`);
    //console.log('numberCorrect + ' out of ' + questions.length')
    questionNumber++;
    if (questionNumber >= questions.length) {
      $('.alert').addClass('hidden');
      form.addClass('hidden');
      $('.results').removeClass('hidden');
      renderResult(results);
      return;
    }
    renderQuestion(form);
    $('.submit-button').attr('disabled', true);
  });

  $('.prev-button').on('click', function() {
    if (questionNumber === 0) {
      return;
    }
    $('.alert').addClass('hidden');
    questionNumber--;
    renderQuestion(form);
  });

  form.on('change', 'input[type="radio"]', function() {
    $('.submit-button').attr('disabled', false);
    //if (answer === questions[questionNumber].correctAnswer) {
    //$('div.alert.alert-success').attr('hidden', false)
    //} else {
    //$('div.alert.alert-danger').attr('hidden', false)
    //}
  });

  renderQuestion(form);
}

function renderQuestion(form) {
  var questionObj = questions[questionNumber];
  form.find('h6').text('#' + (questionNumber + 1));
  form.find('h3').text(questionObj.question);
  form
    .find('label')
    .eq(0)
    .html(
      '<input value="' +
        questionObj.answers[0] +
        '" name="answer" type="radio"> ' +
        questionObj.answers[0]
    );
  form
    .find('label')
    .eq(1)
    .html(
      '<input value="' +
        questionObj.answers[1] +
        '" name="answer" type="radio"> ' +
        questionObj.answers[1]
    );
  form
    .find('label')
    .eq(2)
    .html(
      `<input value="${questionObj.answers[2]}" name="answer" type="radio"> ${
        questionObj.answers[2]
      }`
    );
  form
    .find('label')
    .eq(3)
    .html(
      `<input value="${questionObj.answers[3]}" name="answer" type="radio"> ${
        questionObj.answers[3]
      }`
    );
}

function renderResult(results) {
  //need to add actual score (i.e. 7 out of 10, 3 out of 10, etc.)
  var result;
  switch (true) {
    case numberCorrect <= 3:
      result = results[3];
      break;
    case numberCorrect <= 7:
      result = results[2];
      break;
    case numberCorrect <= 9:
      result = results[1];
      break;
    case numberCorrect == 10:
      result = results[0];
  }
  $('.num-correct').html(`You got ${numberCorrect} of ${questions.length}!`);
  $('.result').html(result);
}

/*function clickHandler() {
  $('.start').on('click', function(event) {
    event.preventDefault();


    $('.question-form').removeClass('hidden');
  });
}*/

function flip() {
  console.log('you clicked flip!');
  $('.card').toggleClass('flipped');
}

$(document).ready(function() {
  main();
});

//question: it won't let me get 100%? i think it has to do with my +1
