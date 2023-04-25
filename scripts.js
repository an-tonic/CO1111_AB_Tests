let counter = 0;
let questions = ["What is you age?", "What is your gender?", "Do you have a job?", "Are you a student at UcLan?", "Are you using a smartphone to answer this questionnaire?"];
let answers = [["18-35", "36-55", "56-99"], ["Male", "Female", "Other"], ["Yes", "No", "Prefer not to say"], ["Yes", "No", "Prefer not to say"], ["Yes", "No", "Prefer not to say"]];

function changeText(number){
    console.log(counter);
    if (counter === 0 ){
        document.getElementById("info").style.display = "none" ;
        document.getElementById("consent").style.display = "block";
        counter++;
    } else if (counter === 1){
        document.getElementById("consent").style.display = "none" ;
        document.getElementById("explanation").style.display = "block";
        document.getElementById("tests").style.display = "block";
        document.getElementById("button").style.display = "none";
        document.getElementById("questions").innerText = questions[counter - 1];
        for (let i = 1; i <= 3; i++){
            document.getElementsByClassName("option" + i)[0].innerHTML = answers[counter - 1][i-1];
            document.getElementsByClassName("option" + i)[1].innerHTML = answers[counter - 1][i-1];
        }
        counter++;
    } else if(counter > 1 && counter  < 6){
        document.getElementById("questions").innerText = questions[counter - 1];

        for (let i = 1; i <= 3; i++){
            document.getElementsByClassName("option" + i)[0].innerHTML = answers[counter - 1][i-1];
            document.getElementsByClassName("option" + i)[1].innerHTML = answers[counter - 1][i-1];
        }
        sessionStorage.setItem("information", sessionStorage.getItem("information") + (counter - 1) + ":" + number + ";")
        counter++;
    } else {
        document.getElementById("explanation").style.display = "none";
        document.getElementById("tests").style.display = "none";
        document.getElementById("goodbye").style.display = "block";
        document.getElementById("sentInfo").innerText = sessionStorage.getItem("information") + (counter - 1) + ":" + number + ";";
    }
}