// array of colours
// red, green, blue, black, yellow, purple, cyan, orange, brown
var colours = ["rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(0,0,0)","rgb(255,255,0)"
                ,"rgb(255,0,255)","rgb(0,255,255)","rgb(255,137,0)","rgb(108,50,0)"];

// colour of the left box
var leftBoxColour = getRandomColour(colours.length);
// colour of the right box
var rightBoxColour = getRandomColour(colours.length);

// function returns a random colour
function getRandomColour(max){
    return colours[Math.floor(Math.random() * (max))];
}

// returns a random number from 0 - 9 inclusive.
function getRandomNumber(){
    return Math.floor(Math.random() * 10);
}

// draws both boxes
function drawScreen(){
    drawLeftBox();
    drawRightBox();
}

// draws the left box
function drawLeftBox(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    ctx.lineWidth = 3;
    
    ctx.fillStyle = leftBoxColour;
    ctx.fillRect(width / 8, height / 8, width / 4, height / 4);
    
    leftFillText();
}

// draws the text in the left box
function leftFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var leftTextColour = getRandomColour(colours.length);
    
    // check if the colour of the text is the same as the colour of the box
    while(leftTextColour == leftBoxColour){
        leftTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = leftTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText(getRandomNumber(),width / 4.75,height / 3.25);
}

// draws the right box
function drawRightBox(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    ctx.lineWidth = 3;
    
    ctx.fillStyle = rightBoxColour;
    ctx.fillRect(width / 2, height / 8, width / 4, height / 4);
    
    rightFillText();
}

// draws the text in the right box
function rightFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var rightTextColour = getRandomColour(colours.length);
    
    // check if the colour of the text is the same as the colour of the box
    while(rightTextColour == rightBoxColour){
        rightTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = rightTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText(getRandomNumber(),width / 1.75,height / 3.25);
}
