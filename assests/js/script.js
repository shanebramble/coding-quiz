var questionsArray = [{
        question: "JavaScript is the same as Java.",
        answer: false
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array? ",
        answer: "push"
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        answer: "toString"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answer: false
    },
    {
        question: "How do you declare a JavaScript variable?",
        answer: "var carName"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answer: "="
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answer: true
    },
    {
        question: "Is JavaScript case-sensitive?",
        answer: "Yes"
    },
    {
        question: "What does DOM stand for?",
        answer: "Document Object Model"
    },
];

var scoreCount = 0;

var createQuestions = function (){
    document.querySelector(".questions p").remove();
    var questionStructure = document.querySelector(".questions h2");
    questionStructure.textContent = questionsArray[9].question;
};



document.querySelector(".options button").addEventListener("click",createQuestions);












