let counter = 0;

function changeText(number){
    console.log(number);
    if (counter === 0 ){
        document.getElementById("info").style.display = "none" ;
        document.getElementById("consent").style.display = "block";
        counter++;
    } else if (counter === 1){
        document.getElementById("consent").style.display = "none" ;
        document.getElementById("explanation").style.display = "block";
        document.getElementById("tests").style.display = "block";
        document.getElementById("button").style.display = "none";
        counter++;
    } else if(counter === 2){

    }
}