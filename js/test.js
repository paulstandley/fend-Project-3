

// get all dom targets 
windowFunction();

function windowFunction() {
    const scorePanel = document.getElementsByClassName("score-panel");
    const movesMade = document.querySelector(".moves");
    const restart = document.querySelector(".restart");
    const newDeck = document.querySelector(".deck");
    
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    const a3 = document.getElementById("a3");
    const a4 = document.getElementById("a4");
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const b4 = document.getElementById("b4");
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
    const c4 = document.getElementById("c4");
    const d1 = document.getElementById("d1");
    const d2 = document.getElementById("d2");
    const d3 = document.getElementById("d3");
    const d4 = document.getElementById("d4");


scorePanel.addEventListener("click", scorePanelFunction);
movesMade.addEventListener("click", movesMadeFunction)
restart.addEventListener("click", restartFunction);


a1.addEventListener("click", a1fun);
a2.addEventListener("click", a2fun);
a3.addEventListener("click", a3fun);
a4.addEventListener("click", a4fun);
b1.addEventListener("click", b1fun);
b2.addEventListener("click", b2fun);
b3.addEventListener("click", b3fun);
b4.addEventListener("click", b4fun);
c1.addEventListener("click", c1fun);
c2.addEventListener("click", c2fun);
c3.addEventListener("click", c3fun);
c4.addEventListener("click", c4fun);
d1.addEventListener("click", d1fun);
d2.addEventListener("click", d2fun);
d3.addEventListener("click", d3fun);
d4.addEventListener("click", d4fun);
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



    