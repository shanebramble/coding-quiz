var scoreCount = 0;
var timeLeft = 180;
var questionsArrayIndex = 0;
var timerE1 = document.querySelector(".countdown-timer span");
var questionFormation = document.querySelector(".questions h2");
var questionsArray = [{
        question: "JavaScript is the same as Java.",
        choices: [true, false],
        answer: false
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array? ",
        choices: ["last()", "put()", "push()", "None of the above"],
        answer: "push()"
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        choices: ["toValue()", "toNumber()", "toString()", "None of the above."],
        answer: "toString()"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<javascript>", "<js>", "<script>"],
        answer: "<script>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: [true, false],
        answer: false
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["variable carName", "String carName", "float carName", "var carName"],
        answer: "var carName"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["+", "-", "*", "="],
        answer: "="
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        choices: [false, true, "undefined", null],
        answer: true
    },
    {
        question: "Is JavaScript case-sensitive?",
        choices: ["No", "Yes", "only functions", "only variables"],
        answer: "Yes"
    },
    {
        question: "What does DOM stand for?",
        choices: ["Dissolved Organic Matter", "Dissolved Organic Matter", "	Document Object Model", "Disk on Module"],
        answer: "Document Object Model"
    },
];



var quizEnd = function (){

};
// A countdown timer for the quiz.
var countdown = function () {
    var timeInterval = setInterval(function () {
        if (timeLeft <= 0) {
            timerE1.textContent = "";
            clearInterval(timeInterval);
            quizEnd();

        } else {
            timerE1.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
};

// Check the answer of the selected choice.
var checkAnswer = function ()
{
    if (this.value === questionsArray[questionsArrayIndex].answer)
    {

    }

};

// Save the scores of a user to local storage.
var saveScores = function (){

};
// A function to form both the questions and corresponding options.
var createQuestions = function () {

    questionFormation.textContent = questionsArray[questionsArrayIndex].question;

    for (var j = 0; j < questionsArray[questionsArrayIndex].choices.length; j++) {

        // create button for each choice.
        var optionButton = document.createElement("button");
        optionButton.classList.add("choice-btn", "btn", "btn-primary", );
        optionButton.textContent = questionsArray[questionsArrayIndex].choices[j];

        // append to button element to ul.
        document.querySelector(".choices-list").appendChild(optionButton);
    }
};

var startQuiz = function () {
    document.querySelector(".questions p").remove();
    document.querySelector(".start-quiz").remove();

    // timer starts counting.
    countdown();
    // generate questions with options.
    createQuestions();
};



document.querySelector(".start-quiz").addEventListener("click", startQuiz);