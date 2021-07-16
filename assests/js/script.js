var scoreCount = 0;
var questionsArray = [{
        question: "JavaScript is the same as Java.",
        choices: [],
        answer: false
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array? ",
        choices: [],
        answer: "push"
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        choices: [],
        answer: "toString"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [],
        answer: "<script>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: [],
        answer: false
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: [],
        answer: "var carName"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: [],
        answer: "="
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        choices: [],
        answer: true
    },
    {
        question: "Is JavaScript case-sensitive?",
        choices: [],
        answer: "Yes"
    },
    {
        question: "What does DOM stand for?",
        choices: [],
        answer: "Document Object Model"
    },
];


var startQuiz = function (){
    document.querySelector(".questions p").remove();
    document.querySelector(".options button").remove();
    var questionFormation = document.querySelector(".questions h2");
    // create list for different options.
    var optionListItemEl = document.createElement("li");
    optionListItemEl.className = "option-choice-item";

    // create button for each option.
    var optionButton = document.createElement("button");
    optionButton.classList.add("option-choice-button", "btn", "btn-primary",);
    optionButton.textContent = "Option 1";

    // append to option button to li element.
    optionListItemEl.appendChild(optionButton);

    // append to list element to ul.
     document.querySelector(".option-choices").appendChild(optionListItemEl);

    questionFormation.textContent = questionsArray[9].question;
};



document.querySelector(".options button").addEventListener("click",startQuiz);












