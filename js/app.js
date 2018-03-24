
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

    function resetFun() {
        

        shuffleFunction();
        if(true) {
        startCount();
        }


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

    function cardFun(evt) {
        let placeClicked = evt.target;
        console.log(placeClicked);
        placeClicked.addEventListener("click", functionCounterMoves);
        
    }   
// when you call it for a value -1 for the call to get it
    var keepCountMoves = 0;
    var functionCounterMoves = function(){
        keepCountMoves++
        return keepCountMoves;
    }
    
    

/* got help from https://www.w3schools.com/jsref/met_win_cleartimeout.asp  */    
    var c = 1;
    var t;
    var timer_is_on = 0;

    function timedCount() {
        document.getElementById("timeSpan").innerHTML = ` TIME: ${c}`;
        t = setTimeout(function(){timedCount()}, 1000);
        c++;
    }

    function startCount() {
        if (!timer_is_on) {
            timer_is_on = 1;
            timedCount();
        }
    
    }

    function stopCount() {
        clearTimeout(t);
        timer_is_on = 0;
    }


//end off widow function
}