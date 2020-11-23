const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;


function start() {

  timeLeft = 100;
  document.getElementById("timeLeft").innerHTML = timeLeft;
  
  timer = setInterval(function() {
      timeLeft--;
      document.getElementById("timeLeft").innerHTML = timeLeft;
      if (timeLeft <= 0) {
          clearInterval(timer);
          endGame(); 
      }
  }, 1000);
    }

  function endGame() {
    clearInterval(timer);

    var quizContent = 
    "You got " + score + " points! Enter your name here";
    `<input type="text" id="name" placeholder="Initials">`
    document.getElementById("quizBody").innerHTML = quizContent;
}

function storeScore() {
  localStorage.setItem("highScore", score);
  localStorage.setItem("highScoreName", document.getElementById('name').value);
  getScore();
}

function getScore() {
  var quizContent = 
  localStorage.getItem("highscoreName")
  localStorage.getItem("highscore");

document.getElementById("quizBody").innerHTML = quizContent;
}

function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName",  "");
}

function wrongAnswer () {
  timeLeft -= 5;
}

function rightAnswer () {
  score += 5;
  timeLeft += 5;
} 
 
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', start)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    endGame();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
  if (correct) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is Javascript?',
    answers: [
      { text: 'A web development language', correct: true },
      { text: 'Java, but it must be handwritten', correct: false },
      { text: 'A type of Indonesian calligraphy', correct: false },
      { text: 'An excellent latte recipe', correct: false }
    ]
  },
    
  {
    question: 'In Javascript, arrays are contained within...',
    answers: [
      { text: 'curly brackets {}', correct: false },
      { text: 'brackets []', correct: true },
      { text: 'Parentheses ()', correct: false },
      { text: 'double backslashes //', correct: false }
    ]
  },
  {
    question: 'What does an event listener do?',
    answers: [
      { text: 'It summarizes a major event for busy users who missed it', correct: false },
      { text: 'It schedules fun events the user might enjoy', correct: false },
      { text: 'It reacts to all events', correct: false },
      { text: 'It reacts to a specific event', correct: true }
    ]
  },
  {
  question: 'What does Javascript add to a webpage?',
    answers: [
      { text: 'Nothing, but it sure sounds impressive', correct: false },
      { text: 'It leverages our collective synergies', correct: false },
      { text: 'It adds interactivity and other complex features', correct: true },
      { text: 'Problems', correct: false }
    ]
    },
    {
      question: 'How do you declare a variable in Javascript?',
    answers: [
      { text: 'so_close_yet_so_var', correct: false },
      { text: 'variable', correct: false },
      { text: 'vari', correct: false },
      { text: 'var', correct: true }
    ]
    }
]