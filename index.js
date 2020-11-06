var questions = [{
    question: "What is Javascript?",
    choices: ["A type of Indonesian calligrahy", "A programming language used for web development", "An excellent latte recipe", "A slighty-modified version of the Java programming language"],
    answer: "A programming language used for web development"
},
{
    question: "In Javascript, arrays are contained within...",
    choices: ["brackets []", "curly brackets {}", "parentheses ()", "double backslashes //"],
    answer: "brackets []"
},
{
    question: "What does an event listener do?",
    choices: ["It summarizes a major event for busy users who couldn't attend", "It takes in user input and schedules events for convenient times", "It reacts to all events", "It waits for a certain event to occur"],
    answer: "It waits for a certain event to occur"
},
{
    question: "What does Javascript actually bring to a webpage?",
    choices: ["It provides the page's general layout", "It adds interactivity and other complex features", "Nothing, but it sure sounds impressive", "Keyloggers and Trojans"],
    answer: "It adds interactivity and other complex features"
},
{
    question: "Which of the following correctly declares a Javascript varbiable",
    choices: ["var", "varrybarry", "iamavariable", "variable"],
    answer: "var"
}
]

var points = 0;
var currentQuestion = 0;
var timeRemaining = 0;
var timer;


function start() {
    timeRemaining = 100;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;

timer = setInterval(function(){
    timeRemaining--;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;
    if (timeRemaining <= 0) {
        clearInterval(timer);
        stopQuiz();
    }
}, 500)
}