var map = [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0 ];
var isSunk = false;
var guess = 0;
const GUESSES = 6;
var loc;
var hits = 0;
var BR = "<br>";
console.log(map.length)

function initialStartingPoint() {

    if(!isSunk && guess < GUESSES) {
        console.log('inside the while loop')
        // get the user's guess
        // loc = prompt( "Guess where the battleship is ( 1 - 20 )" );
        loc = parseInt(loc);
        // compare the user's input to valid input values
        if ( isNaN( loc ) || loc < 1 || loc > 20 ) {
            // tell user to enter a valid number
            document.getElementById("MessageToUser").innerHTML = "Enter valid location only, please";
        } else {
            guess++;    // add one to guesses made
            // check if user's guess matches a location 
             
            if ( map[ loc-1 ] === 1 ) {
                hits++; // add one to the number of hits
                document.getElementById("MessageToUser").innerHTML = "Ack!  Ya hit me!";
                document.getElementById(`${loc-1}`).style.backgroundColor = "green";
                // check if 3 hits have been made
                if ( hits >= 3) {
                    isSunk = true;
                    document.getElementById("MessageToUser").innerHTML = "You Won!!"
                }
            }
            else {
                // user missed
                document.getElementById("MessageToUser").innerHTML = "HA! you MISSED!!!"
                document.getElementById(`${loc-1}`).style.backgroundColor = "red";
            }
            document.getElementById("guessesMessageToUser").innerHTML = `Guesses Remaining: ${GUESSES-guess}`; 
        }    // end if
    }     // end while

    if (isSunk) {
        document.write( "You won in " + guess + " guesses" + BR );
    } 
    else if(GUESSES - guess === 0) {
        document.write( "You ran out of guesses and lost." + BR );
    }
}

