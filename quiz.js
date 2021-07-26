const questionList = [
    {
        question: "If angles of traingle are 72° and 94°, what is its third-angle?",
        a: "14°",
        b: "24°",
        c: "64°",
        ans: "ans1"
    },
    {
        question: "If angles of traingle are 120° and 30°, what is its third-angle?",
        a: "45°",
        b: "30°",
        c: "60°",
        ans: "ans2"
    },
    {
        question: "What kind of triangle has 115°, 45°, 20° as its angles?",
        a: "acute-angled",
        b: "obtuse-angled",
        c: "right-angled",
        ans: "ans2"
    }, 
    {
        question: "If sides of the traingle are 3cm, 4cm and 5cm, what is the area of the triangle?",
        a: "60cm^2",
        b: "6cm^2",
        c: "30cm^2",
        ans: "ans2"
    },
    {
        question: "If side of a triangle are 20m and 99m, what its third side?",
        a: "79m",
        b: "119m",
        c: "101m",
        ans: "ans3"
    }
];

var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var submitBtn = document.querySelector("#submit-button");
var answers = document.querySelectorAll(".answer");

var questionNumber = 0;

function loadQuestion(){
    question.innerText = questionList[questionNumber].question;
    option1.innerText = questionList[questionNumber].a;
    option2.innerText = questionList[questionNumber].b;
    option3.innerText = questionList[questionNumber].c;
}

loadQuestion();

submitBtn.addEventListener("click", () =>{

})
