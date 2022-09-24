/*                      Fernando Diaz Avila's Assignment
Here I have my loop functions, countdown display, and comments.;

As per The Fleet Admiral's request I shall update my code to display a visual warning to 
display when the coundown is half way complete.
*/

//Ima work top down and test each line of code everytime I change to debug any errors.


alert ("Are you ready to Launch?"); //return it to the previous alert message as I intend to display the time on the 
                                    //webpage this time.

let currentTime=10;
//document.getElementById("DisplayCountDown").innerHTML = currentTime;

function RunCountDown() {
while(currentTime >0)       //using the while loop will continue to run the function statements until the condition
                            //of currentTime is no longer greater than 0.
                            
{

document.getElementById("DisplayCountDown").innerHTML = "Launching in "+currentTime;
//console.log(currentTime); //Here I made it a comment to rework it to display the var as a string.
//review string manipulation notes... I will use this stamente to display the var.


document.getElementById("DisplayCountDown").innerHTML = currentTime --; 
   //After logging the previous current time, I update the curent time by decreminting it's value
       
    if (currentTime !=0)    
    //Than I have the code check the currentTime to compare its value to zero.
    {document.getElementById("DisplayCountDown").innerHTML = currentTime;
}
 
    // if they dont match display it's current value
    else
    {document.getElementById("DisplayBlastOff").innerHTML = "Blast Off!";}
    //if they do match display the result or string "Blast off"

}

}
/*
reference for my loop function:

var countDown = 10;
document.getElementById("DisplayCountDown").innerHTML = countDown;
function RunCountDown()
{
    countDown --;
if(countDown != 0 )
    {document.getElementById("DisplayCountDown").innerHTML = countDown;}
        else
    {document.getElementById("DisplayBlastOff").innerHTML = "Blast Off!";}
}
*/
