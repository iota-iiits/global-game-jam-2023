var playing = false;
var Imgheight = 0;
var level = 1;
var count = 0;
var score;
var action;
var timeremaining;
var correctAnswer;

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

document.getElementById("quizstart").onclick = function () {
    hide("page1");
    show("page2");
    show("reset");
    show("footer");
    startGame();
    playSound("clock");
}

function startGame() {
    Imgheight = 600;
    document.getElementById('treeimg-grey').style.height = Imgheight + "px";
    playing = true;
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    show("timeremaining");
    hide("gameOver");
    startCountdown();
    generateQA();
}


for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                score++;
                Shade();
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                playSound("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                generateQA();
            } else {
                hide("correct");
                show("wrong");
                playSound("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

function Shade() {
    if (count < 10 && level == 1) {
        Imgheight -= 50;
    }
    else if ((count >= 10 && level == 1) || (count >= 16 && level == 2) || (count >= 24 && level == 3)) {
        document.getElementById("popup").innerHTML = "Yayy!! Level " + level + " Completed";
        show("popup");
        setTimeout(function() {
            hide("popup");
        }, 2000);
        level += 1;
        document.getElementById("Gamelevel").innerHTML = level;
        count = 0;
        Imgheight = 600;
    }
    else if (count < 16 && level == 2) {
        Imgheight -= 30;
    }
    else if (count < 24 && level == 3) {
        Imgheight -= 20;
    }
    count += 1;
    document.getElementById('treeimg-grey').style.height = Imgheight + "px";
}


var action;

function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountdown();
            show("gameOver");
            playSound("gameover");
            document.getElementById("gameOver").innerHTML = "<p>Game over!<br>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("reset").innerHTML = "Restart Game";
            document.getElementById("reset").onclick=function(){
                location.reload();
            }
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(action);
}

document.getElementById("reset").onclick = function () {
    stopCountdown();
    level=1;
    document.getElementById("Gamelevel").innerHTML = level;
    // playSound("clock");
    startGame();
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "flex";
}

function generateQA() {
    if (level == 1) {
        var x = 1 + Math.round(20 * Math.random());
    }
    else if (level == 2) {
        var x = Math.floor(Math.random() * (30 + 1)) + 20;
    }
    else if (level == 3) {
        var x = Math.floor(Math.random() * (50 + 1)) + 50;
    }

    correctAnswer = x;
    document.getElementById("question").innerHTML = "√" + x * x;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}