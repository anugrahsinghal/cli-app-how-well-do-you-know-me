var readlineSync = require('readline-sync');

let scores = [
  {
    name: "Anugrah",
    score: "3"
  }, {
    name: "Dipesh",
    score: "3"
  }, {
    name: "Tikesh",
    score: "2"
  },
]

function printHighScoresAndReturnHighScore() {
  console.log("\nHere are the High Scores");
  let highestScore = 0;
  for (i = 0; i < scores.length; i++) {
    console.log(scores[i].name + " had score " + scores[i].score)
    if (scores[i].score > highestScore) {
      highestScore = scores[i].score;
    }
  }
  return highestScore
}

function askQuestionAndValidate(questionAnaswerObj) {
  let userAnswer = readlineSync.question(questionAnaswerObj.question);
  if (userAnswer.toUpperCase() == questionAnaswerObj.answer.toUpperCase()) {
    playerScore++;
    console.log("Correct Answer !!!")
  } else {
    console.log("Wrong Answer!");
  }
}

var questions = [
  {
    question: "Who is my favorite superhero?\n",
    answer: "Batman"
  }, {
    question: "Do I prefer DC or Marvel ?\n",
    answer: "DC"
  }, {
    question: "What's my age ?\n",
    answer: "23"
  }
]

let playerScore = 0;
function startGame() {
  let playerName = readlineSync.question("Hello Player! Please Enter your name.\n")
  console.log("Welcome " + playerName);

  for (i = 0; i < questions.length; i++) {
    askQuestionAndValidate(questions[i], playerScore)
  }

  endGame(playerName, playerScore);
}

function endGame(playerName, playerScore) {
  console.log(playerName + " your final score is " + playerScore);
  var highscore = printHighScoresAndReturnHighScore();

  if (playerScore >= highscore) {
    console.log("Congrats " + playerName + "!!! You Beat the high score.Please send me a screenshot of this.");
  }

  scores.push({
    name: playerName,
    score: playerScore
  })
}

startGame();