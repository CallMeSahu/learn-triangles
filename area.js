var sideOne = document.querySelector("#side-one");
var sideTwo = document.querySelector("#side-two");
var sideThree = document.querySelector("#side-three");
var areaOutput = document.querySelector("#area-output");
var findBtn = document.querySelector("#find-button");

function getArea(){
    var a = parseInt(sideOne.value, 10);
    var b = parseInt(sideTwo.value, 10);
    var c = parseInt(sideThree.value, 10);
    var s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2) + " unit sq.";
}

findBtn.addEventListener("click", () => {
    if((sideOne.value == "")||(sideTwo.value == "")||(sideThree.value == "")){
        alert("Enter all Side!");
        return;
    }
    else{
        areaOutput.innerText = getArea();
    }
});