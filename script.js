var playerPoints = 0;
var compPoints = 0;


function computerPlay(){
  choices = ["Rock", "Paper", "Scissors"];
  var index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playOne(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return "Tie!";

  }else if (playerSelection == "Rock") {
    if(computerSelection=="Scissors"){
      return "Point!";
    }
    if(computerSelection=="Paper"){
      return "Loss!";
    }

  }else if (playerSelection == "Paper"){
    if(computerSelection=="Scissors"){
      return "Loss!";
    }
    if(computerSelection=="Rock"){
      return "Point!";
    }

  }else if (playerSelection == "Scissors"){
    if(computerSelection=="Rock"){
      return "Loss!";
    }
    if(computerSelection=="Paper"){
      return "Point!";
    }
  }
}

function startRound(clicked_id){
  var resultMessage = "";
  if(playerPoints < 5 && compPoints < 5){
    var playerSelection = clicked_id;
    var computerSelection = computerPlay();
    var value = playOne(playerSelection, computerSelection);
    resultMessage += value + " ";
    if(value === "Loss!"){
      compPoints++;
      resultMessage += ("Computer selected: " + computerSelection + ". You selected: " + playerSelection + "!");
    }else if (value === "Point!") {
      playerPoints++;
      resultMessage += ("Computer selected: " + computerSelection + ". You selected: " + playerSelection + "!");
    }else if (value === "Tie!"){
      resultMessage += "Both selected " + playerSelection;
    }
    console.log("Player points: " + playerPoints + " Computer Points: " + compPoints);
  }

  if(playerPoints == 5){
    resultMessage = "You win! Congratulations!";
  }else if(compPoints == 5){
    resultMessage = "You lose! Sorry :(";
  }
  document.getElementById("compScore").innerHTML = compPoints;
  document.getElementById("userScore").innerHTML = playerPoints;
  document.getElementById("result").innerHTML = resultMessage;
}

function reset(){
  playerPoints = 0;
  compPoints = 0;
  document.getElementById("compScore").innerHTML = compPoints;
  document.getElementById("userScore").innerHTML = playerPoints;
  document.getElementById("result").innerHTML = "";
}
