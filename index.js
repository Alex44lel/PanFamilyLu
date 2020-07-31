//
//
//
//

var players =["Lu","hermanoLu","madreLu"];
var others = [];
var winner = "";

function game(){
  var nrandom = Math.floor(Math.random()*3);
  winner = players[nrandom];
  var winnerPosition = players.indexOf(winner);
  players.splice(winnerPosition,1);
  others = players;

  for (i=0;i<others.length;i++){
    $("#"+others[i]).addClass("others");
  }
  $("#"+winner).addClass("others");
  var drums = new Audio("sounds/tambor.mp3")
  var platillos = new Audio("sounds/platillos.mp3")
  $("#playButton").addClass("others");
  $("#title").addClass("others");
  $("#afortunado").removeClass("others");
  drums.play();
  setTimeout(function(){
    platillos.play()
    $("#"+winner).removeClass("img others");
    $("#"+winner).addClass("winner");
    $("#againButton").removeClass("others")
  },3000)
  return(others);
}

function again(){
  console.log(others);
  for (i=0;i<others.length;i++){
    $("#"+others[i]).removeClass("others");
  }
  $("#"+winner).removeClass("winner");
  $("#"+winner).addClass("img");
  $("#title").removeClass("others");
  $("#afortunado").addClass("others");
  $("#playButton").removeClass("others");
  $("#againButton").addClass("others")
  players =["Lu","hermanoLu","madreLu"];
}


$("#playButton").on("click",game);
$("#againButton").on("click",again);
