
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
    var numberOfClicks = 1;
    function cardFun(evt) {
        
        let placeClicked = evt.target;
        console.log(placeClicked);
        placeClicked.addEventListener("click", clickCounterMoves);
        console.log(placeClicked.hasAttribute("id"));
        if(placeClicked.hasAttribute("id")) {
               
            if(numberOfClicks) {

                firstClick(placeClicked);
                var compare = placeClicked.getElementsByTagName("i");
                var compareValue = compare[0].getAttribute("class");
                console.log(compareValue);
            }else if(!numberOfClicks) {

                let placeClicked_2 = evt.target;
                let clickedIcon_2 = placeClicked_2.getElementsByTagName("i");
                let clickedIcon_2Class = clickedIcon_2[0].getAttribute("class");
                // comapere value unefined
                    console.log(compareValue);
                if(compareValue == clickedIcon_2Class) {
                    console.log("clicked");
                }
                console.log(clickedIcon_2Class);

            }
            
            numberOfClicks = 0;
        
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
        let clickedIcon_1 = placeClicked.getElementsByTagName("i");
        let clickedIcon_1Class = clickedIcon_1[0].getAttribute("class");
        let showClicked = placeClicked;
        let showClass = showClicked.getAttribute("class");
        showClass = showClicked.removeAttribute(showClass);
        showClass = showClicked.setAttribute("class", "card match show");
    }

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