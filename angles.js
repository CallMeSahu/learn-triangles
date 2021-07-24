var firstAngleInput = document.querySelector("#angle-one");
var secondAngleInput = document.querySelector("#angle-two");
var thirdAngleInput = document.querySelector("#angle-three");
var findBtn = document.querySelector("#find-button");
var result = document.querySelector("#triangle-output");
var triangleTypeOutput = document.querySelector("#triangle-type");
var x,y,z = 0;

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

function getTriangle(){    
    x = parseInt(firstAngleInput.value, 10);
    y = parseInt(secondAngleInput.value, 10);
    z = parseInt(thirdAngleInput.value, 10);    
    var angle = x+y+z;
    if(angle === 180){
        triangleTypeOutput.innerText = getTriangleType();
        return "Yes, it is a Triangle!"
    }
    else{
        return "No, it is not a Triangle."
    }
}

findBtn.addEventListener("click", () =>{ 
    if((firstAngleInput.value == "")||(secondAngleInput.value == "")||(thirdAngleInput.value == "")){
        alert("Enter all angles!");
        return
    }        
    result.innerText = getTriangle();    
});