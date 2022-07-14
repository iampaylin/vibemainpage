var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");

function oneMouseOver() { 
    one.play(); 
} 

function twoMouseOver() { 
    two.play(); 
} 

function threeMouseOver() { 
    three.play(); 
} 

function fourMouseOver() { 
    four.play(); 
} 

function fiveMouseOver() { 
    five.play(); 
} 

function offMouseOver() { 
    one.pause()
    two.pause()
    three.pause()
    four.pause()
    five.pause()
} 