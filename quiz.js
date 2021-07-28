const questionList = [
    {
        question: "1. If angles of traingle are 72° and 94°, what is its third-angle?",
        a: "14°",
        b: "24°",
        c: "64°",
        ans: "ans1"
    },
    {
        question: "2. If angles of traingle are 120° and 30°, what is its third-angle?",
        a: "45°",
        b: "30°",
        c: "60°",
        ans: "ans2"
    },
    {
        question: "3. What kind of triangle has 115°, 45°, 20° as its angles?",
        a: "acute-angled",
        b: "obtuse-angled",
        c: "right-angled",
        ans: "ans2"
    }, 
    {
        question: "4. If sides of the traingle are 3cm, 4cm and 5cm, what is the area of the triangle?",
        a: "60cm^2",
        b: "6cm^2",
        c: "30cm^2",
        ans: "ans2"
    },
    {
        question: "5. If side of a triangle are 20m and 99m, what its third side?",
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
var showScore = document.querySelector("#show-score");
var resetBtn = document.querySelector("#reset-button");

var questionNumber = 0;
var score = 0;

function loadQuestion(){
    question.innerText = questionList[questionNumber].question;
    option1.innerText = questionList[questionNumber].a;
    option2.innerText = questionList[questionNumber].b;
    option3.innerText = questionList[questionNumber].c;
}

function getUserAnswer(){
    var answer = "";
    answers.forEach((item) => {
        if(item.checked){
            answer = item.id;
        }
    })
    return answer;
}

function deselectOption(){
    answers.forEach((item) => item.checked = false);
}

resetBtn.addEventListener("click", () =>{
    location.reload();
});

loadQuestion();
submitBtn.addEventListener("click", () =>{
    var userAnswer = getUserAnswer();
    var rightAnswer = questionList[questionNumber].ans;
    if(userAnswer == rightAnswer){
        score++;
    }

    questionNumber++;

    if(questionNumber < questionList.length){
        deselectOption();
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h4>Score ${score}/${questionList.length}</h4>`;          
        showScore.style.display = "block";
        resetBtn.style.display = "block";
    }
});
