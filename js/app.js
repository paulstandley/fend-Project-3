
windowfuntion();

function windowfuntion() { 

/*
 * Create a list that holds all of your cards
 */

    let iconArrayHolder = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];
 
/* get dom */
    const scorePanel = document.getElementsByClassName("score-panel");
    const movesMade = document.querySelector(".moves");
    const restart = document.querySelector(".restart");
    const newDeck = document.querySelector(".deck");
    
    


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
    restart.addEventListener("click", resetFun);
    var bool = true;
    function resetFun() {
        

        shuffleFunction();
        if(bool) {
            startCount();
        }else{
            stopCount();
            window.location.reload(false);
        }
        bool = false;
        
        }
    
    function shuffleFunction() {
        const shuffledCards = shuffle(iconArrayHolder);
        for (let i = 0; i < 16; i++) {
            let tagDeck = newDeck.getElementsByTagName("li");
            let tagClass = tagDeck[i].getAttribute("class");
            tagClass = tagDeck[i].removeAttribute(tagClass);
            tagClass = tagDeck[i].setAttribute("class", "card open");
            let icon = newDeck.getElementsByTagName("i");
            let iconClass = icon[i].getAttribute("class");
            iconClass = icon[i].removeAttribute(iconClass);
            iconClass = icon[i].setAttribute("class", shuffledCards[i]);
        }
    }

// Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

    newDeck.addEventListener("click", cardFun, true);
    var id_check_array = [];
    var numberOfClicks = [];
    function cardFun(evt) {
        
        var placeClicked = evt.target;
        if(placeClicked.hasAttribute("id")) {
            let clickedIcon_1 = placeClicked.getElementsByTagName("i");
            let clickedIcon_1Class = clickedIcon_1[0].getAttribute("class");
            numberOfClicks.push(clickedIcon_1Class);
            console.log(numberOfClicks);
            if(numberOfClicks.length == 1) {
                firstClick(placeClicked);
                var id_check_1 = placeClicked.getAttribute("id");
                id_check_array.push(id_check_1);
                console.log(id_check_1);
            }else if(numberOfClicks.length == 2) {
                secondClick(placeClicked);
                var id_check_2 = placeClicked.getAttribute("id");
                console.log(numberOfClicks[0] == numberOfClicks[1]);
                console.log(id_check_array[0] != id_check_2);
                if(numberOfClicks[0] == numberOfClicks[1] && (id_check_array[0] != id_check_2)) {
                    rightFunction(placeClicked, id_check_array);                        

                }else{

                wrongFunction(placeClicked, id_check_array);
                }
                var poped = numberOfClicks.pop();
                 poped = numberOfClicks.pop();
                 poped = id_check_array.pop();
                 poped = [];
                 
            }
        }
        
    }   
// when you call it for a value -1 for the call because you called it
    var keepCountMoves = 0;
    var clickCounterMoves = function(){
        keepCountMoves++
        return keepCountMoves;
    } 

/* got help from https://www.w3schools.com/jsref/met_win_cleartimeout.asp  */    
    var number = 1;
    var timer;
    var timer_is_on = 0;

    function firstClick(placeClicked) { 
        let showFirstClicked = placeClicked;
        let showFirstClass = showFirstClicked.getAttribute("class");
        showFirstClass = showFirstClicked.removeAttribute(showFirstClass);
        showFirstClass = showFirstClicked.setAttribute("class", "card match show");
    }

    function secondClick(placeClicked) {
        let showSecondClicked = placeClicked;
        let showSecondClass = showSecondClicked.getAttribute("class");
        showSecondClass = showSecondClicked.removeAttribute(showSecondClass);
        showSecondClass = showSecondClicked.setAttribute("class", "card match show");
    }

    function rightFunction(placeClicked, id_check_array) {

        let rightIdElement = document.getElementById(id_check_array[0]);
        let rightIdElementClass = rightIdElement.getAttribute("class");
        rightIdElementClass = rightIdElement.removeAttribute(rightIdElementClass);
        rightIdElementClass = rightIdElement.setAttribute("class", "card open show");
        let rightClicked = placeClicked;
        let rightClass = rightClicked.getAttribute("class");
        rightClass = rightClicked.removeAttribute(rightClass);
        rightClass = rightClicked.setAttribute("class", "card open show");
    }

    function wrongFunction(placeClicked, id_check_array) {
        
        let wrongIdElement = document.getElementById(id_check_array[0]);
        console.log(wrongIdElement);// underfined
        console.log(placeClicked);
        console.log(id_check_array[0]);//underfined
        let wrongIdElementClass = wrongIdElement.getAttribute("class");
        wrongIdElementClass = wrongIdElement.removeAttribute(wrongIdElementClass);
        wrongIdElementClass = wrongIdElement.setAttribute("class", "card open");
        let wrongClicked = placeClicked;
        let wrongClass = wrongClicked.getAttribute("class");
        wrongClass = wrongClicked.removeAttribute(wrongClass);
        wrongClass = wrongClicked.setAttribute("class", "card open");
        
    };

    function timedCount() {
        document.getElementById("timeSpan").innerHTML = ` TIME: ${number}`;
        timer = setTimeout(function(){timedCount()}, 1000);
        number++;
    }

    function startCount() {
        if (!timer_is_on) {
            timer_is_on = 1;
            timedCount();
        }
    }

    function stopCount() {
        clearTimeout(timer);
        timer_is_on = 0;
    }


//end off widow function
}