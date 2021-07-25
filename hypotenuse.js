var sideOne = document.querySelector("#side-one");
var sideTwo = document.querySelector("#side-two");
var sideThree = document.querySelector("#side-three");
var findBtn = document.querySelector("#find-button");

function getThirdSide(){
    var a = parseInt(sideOne.value, 10);
    var b = parseInt(sideTwo.value, 10);
    var result = Math.sqrt(a*a + b*b)+ " units";
    return result;
}

findBtn.addEventListener("click", () => {
    if((sideOne.value == "") || (sideTwo.value == "")){
        alert("Fill all sides!");
        return;
    }
    else{
        sideThree.innerText = getThirdSide();
    }
});
