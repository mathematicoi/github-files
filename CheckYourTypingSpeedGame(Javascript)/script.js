const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const displayerrorButton = document.querySelector("#displayerror");
const changetextbutton = document.querySelector("#changetext");


const theTimer = document.querySelector(".timer");

    var count2=0;
    var wordarray= [];
    var wordarray2 = [];
    var sentencearray = ['This is a code practice','This is another code practice'];

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}







var count=0;
var error=0;
var i=0;
// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
        console.log("you made :"+testArea.value);

    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);
    wordarray2 = originText.substring(0,testArea.value.length).split(' ');

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }


      wordarray = testArea.value.split(' ');



// if (this.value[count] != originText[count]) {
//         error++;
//         displayerrorButton.value = error;
       
        
//     }

    
//      console.log("wordarray :"+ this.value[count] + "origintext is:"+originText[count] + " and count is:" + count);
//      count++;
displayerrorButton.value = error;

error=0;

if(testArea.value=='') {
             error="";
             displayerrorButton.value = error;


}
for(var n=0;n<testArea.value.length; n++) {


    if(testArea.value[n]!=originText[n]) {
        if(originText==""){
            displayerrorButton.value ="";
        }
        if(originText!="") {
        error++;
         displayerrorButton.value = error;
     }


    }

}




}


if(testArea.value=='') {
             error=0;
             displayerrorButton.value = '';


}



// Start the timer:
function start() {
if(originText!="") {

    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }

    console.log(textEnterdLength);




}


}

// Reset everything:
function reset() {

if(testArea.value[0]=='') {
             error=0;
             displayerrorButton.value = '';


}
    console.log("you have typed:" + wordarray.length + "words");
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    displayerrorButton.value = '';
            count=0;
            error=0;


}





function checkUsername() { 
    var elMsg = document.getElementById('feedback'); 
    if (this.value .length< 5) { 
       elMsg.textContent = "must be 5";
    }else{
        elMsg.textContent = '';
    }
    }


function pass() {
  var elMsg2 = document.getElementById('feedback2'); 

    if(elPass.value<5) {
      elMsg2.textContent = "" + "must also be 5";
      console.log(elMsg2.textContent);
    }
}


function ctb() {
    displayerrorButton.value = "";
    testArea.value = "";
    error=0;
    count=0;
    if((count2+2)%2==1) {
            originText=document.querySelector("#origin-text p").innerHTML = sentencearray[0];

    }
    else {
            originText=document.querySelector("#origin-text p").innerHTML = sentencearray[1];

    }




    count2++;
}

// Event listeners for keyboard input and the reset
//var elUsername = document.getElementById('username') ; 
//var elPass = document.getElementById('password') ; 
//elPass.addEventListener("keypress",pass,false);

//elUsername.onblur = checkUsername; 

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
changetextbutton.addEventListener("click", ctb, false);


