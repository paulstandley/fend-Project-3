# Memory Game Project
![Profile Pick](http://res.cloudinary.com/pieol2/image/upload/v1516543296/profile-small.png)
 
## Game logic by __Paul Standley__
A Udacity Nano Degree Project
[Udacity](https://eu.udacity.com/courses/all) 
## Description
A game of memory you have to match the icons
![Game Display](http://res.cloudinary.com/pieol2/image/upload/v1522766741/paulstandleyPro3-1.png)

## Where to find the game 

play it on my website just start clicking
[paulstandley](http://paulstandley.com)

colone it on __github__ and run it in your broser just open __index.html__ Link to my
[github](https://github.com/paulstandley/fend-Project-3)

## How to play the game  

Tap a tile remember it then try to match it to its correct icon on your next click repeat until all tiles are clicked correctly. Why not try to beat the clock your stars are going down. Can you get three stars?
#### When all tiles show's the icon's then you have wone the game
![End Game](http://res.cloudinary.com/pieol2/image/upload/v1522767216/paulstandleyPro3-2.png)
## Depenaces

### Font-awesome
[font-awesome](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css)
### Fonts
[fonts](https://fonts.googleapis.com/css?family=Coda)

## Repo

contributions welcome still buggy on the removal of correct clicks tiles it removes them  

[Github](https://github.com/paulstandley/fend-Project-3)
#### Last Review
[Review](https://review.udacity.com/#!/reviews/1131237) 

# For Udacity
![Screen Shot](http://res.cloudinary.com/pieol2/image/upload/v1522768041/review-udacity.png)
### click counter move is only called as long as the current click id is not the same as the id of the last one

### counter dose does not increment by repeatedly clicking

`if(numberOfClicks.length == 1) {
    if(values_for_id_array[values_for_id_array.length -2] == values_for_id_array[values_for_id_array.length -1] ) {
    }else{
        clickCounterMoves();
     }
}
if(numberOfClicks.length == 2) {
    if(values_for_id_array[values_for_id_array.length -2] == values_for_id_array[values_for_id_array.length -1] ){    }else{
        clickCounterMoves();
    }
}` 
            
### this works on my website on codepen on my vs code live sever It stops the increment of tapping the same tile 
### is it two clicks for one move or somthing else? 
