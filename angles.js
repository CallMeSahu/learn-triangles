var firstAngleInput = document.querySelector("#angle-one");
var secondAngleInput = document.querySelector("#angle-two");
var findBtn = document.querySelector("#find-button");
var thirdAngleOutput = document.querySelector("#angle-three");
var triangleTypeOutput = document.querySelector("#angle-type");
var x,y,z = 0;

function getThirdAngle(){
    x = parseInt(firstAngleInput.value, 10);
    y = parseInt(secondAngleInput.value, 10);
    z = 180 - (x+y)
    if(z <= 0){
        return "Not a triangle";
    }
    else{
        return z+"°";
    }
}

function getTriangleType(){
    if((x==90)||(y==90)||(z==90)){
        return "Right";
    }
    else if((x<90)&&(y<90)&&(z<90)){
        return "Acute";
    }
    else if((x>90)||(y>90)||(z>90))
        return "Obtuse";
}

findBtn.addEventListener("click", () =>{    
    thirdAngleOutput.innerText = getThirdAngle();
    triangleTypeOutput.innerText = getTriangleType();
});