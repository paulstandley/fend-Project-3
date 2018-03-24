

// get all dom targets 
windowFunction();

function windowFunction() {
    const scorePanel = document.getElementsByClassName("score-panel");
    const movesMade = document.querySelector(".moves");
    const restart = document.querySelector(".restart");
    const newDeck = document.querySelector(".deck");
    
    
scorePanel.addEventListener("click", scorePanelFunction);
movesMade.addEventListener("click", movesMadeFunction)
restart.addEventListener("click", restartFunction);


/* counter logic from https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock so I did not use this for counter but keept it anyway*/
function displayTime() {
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('timeSpan').innerHTML =`Time: ${h} : ${m} : ${s}`;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        };
         // add zero in front of numbers < 10
        return i;
    }
    startTime();
}
displayTime();
}

var myVar = setInterval(function(){ setColor() }, 600);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "red" ? "purple" : "red";
}
 
function stopColor() {
  clearInterval(myVar);
}
stopColor();

    let interval = setInterval(function(){ alertFunc("First", "Second"); }, 1000);
    function alertFunc(first, second) {
        first++;
        second = 0;
        console.log(first);
    };

    function displayTime() {
        var timeValue = 1;
        function startTime() {
            timeValue++;
            document.getElementById('timeSpan').innerHTML =` Time ${timeValue}`;
            var t = setTimeout(startTime, 1000);
            console.log(t);
        }
    
        startTime();
    }
    
    clearTimeout(t);



    