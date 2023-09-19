// using query Selector foe 1st button only 
// document.querySelectorAll("button").addEventListener("click", handleCLick);
// here we are not adding the parethesis "handleClick()" because it will driectly call the function "I got clicked"
// will appear (this appear before clicking). So we don't use the parenthesis.
// function handleCLick() {
//     alert("I got clicked");
// } 
// writing a code for all the button whenit gets clicked

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
 for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
     
        var bottonInnerHTML = this.innerHTML;

     switch (bottonInnerHTML) {
        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l" :
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default :
            console.log(bottonInnerHTML);
     }
    });
 }
//  creating a loop to skip the tedious process of writing the below code repeatedly
// document.querySelector(".drum")[0].addEventListener("clicked", function () {alert("I got Clicked")};)
// and than writing the same code 7 times just changing numbers in[] from 0 to 6. That's why we choose loop method