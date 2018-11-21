var userScore = 0;
var compScore = 0;
var userScore_span = document.querySelector(".user-score");
var compScore_span = document.querySelector(".comp-score");
//we can write the above 2 lines by using getElementByClassName() also but as it 
// return an array of all elements so we have to index to get a element using array at the last 
// as shown below.
// var userScore_span = document.getElementsByClassName("user-score")[0];
// var compScore_span = document.getElementsByClassName("comp-score")[0];
var result = document.querySelector(".result-statement");
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissor = document.getElementById("s");

function getFullWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    var select = document.getElementById(userChoice).classList
    select.add("green");
    // 1st argument is the function to implement after certain time(in milisecond) represented as second argurment.
    setTimeout(function(){select.remove("green")}, 300);
    //sub function is used to make the string a subscript.
    // similarly we can also use sup() function for making superscript.
    var user = "user".fontsize(2).sub();
    var comp = "comp".fontsize(2).sub();
    var rslt = "WIN".fontcolor("green");
    result.innerHTML = getFullWord(userChoice) + user + " beats " + getFullWord(compChoice) + comp + ". You "+ rslt +"!";
    // below is ES6 syntax for above line.
    //result.innerHTML = `${getFullWord(userChoice)}${user} beats ${getFullWord(compChoice)}${comp}. You win!`;
}

function lose(userChoice,compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    var user = "user".fontsize(2).sub();
    var comp = "comp".fontsize(2).sub();
    var rslt = "WIN".fontcolor("red");
    result.innerHTML = getFullWord(userChoice) + user + " loses to " + getFullWord(compChoice) + comp + ". You " + rslt + "!";
    var select = document.getElementById(userChoice).classList
    select.add("red");
    setTimeout(function(){select.remove("red")}, 300);
}


function draw(userChoice,compChoice){
    var user = "user".fontsize(2).sub();
    var comp = "comp".fontsize(2).sub();
    var rslt = "WIN".fontcolor("gray");
    result.innerHTML = getFullWord(userChoice) + user + " equals " + getFullWord(compChoice) + comp + ". Its a " + rslt + "!";
    var select = document.getElementById(userChoice).classList
    select.add("gray");
    setTimeout(function(){select.remove("gray")}, 300);
}

function game(userChoice){
    var choice = ['r','p','s'];
    var random = Math.floor(Math.random() * 3);
    var compChoice = choice[random];
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
}

function main(){
    rock.addEventListener("click", function(){
        game("r");
    });
    
    paper.addEventListener("click", function(){
        game("p");
    });
    
    scissor.addEventListener("click", function(){
        game("s");
    });
}

main();