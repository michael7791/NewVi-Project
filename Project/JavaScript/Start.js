// draws the start button
function drawStartButton() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "Start";
    var width = canvas.width;
    var height = canvas.height;

    // draw rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(width / 5, height - height / 4, width * 3 / 5, height / 5);
    ctx.fillStyle = "black";
    ctx.strokeRect(width / 5, height - height / 4, width * 3 / 5, height / 5);
    // draw text
    ctx.fillStyle = "white";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(text, width * 4 / 11, height - height / 8);
}
/*
*   display the highest score achieved
*   @param highScore highest score
*/
function drawHighScore(highScore) {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "High Score";
    var width = canvas.width;
    var height = canvas.height;
    
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(text, width / 4, height - height / 2);
    // draw score
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(highScore, width * 2 / 5, height - height / 3)
}
// display the title
function drawTitle() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "NewVi";
    var width = canvas.width;
    var height = canvas.height;
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 8 + "px Arial";
    ctx.fillText(text, width / 3, height / 3);
}
//  Add end panel actions
function addStartPanelActions()
{
    // variables
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var width = canvas.width;
	var height = canvas.height;

    // start button
    clickButton(width / 5, height - height / 4, width * 3 / 5, height / 5, function (){drawObservationPanel(1);});
    clickToMute(width * 5 / 6, height / 30, width * 2 / 15, height * 7 / 60, function () {toggleSound();});

}

//displays the mute sound button
function drawMuteSoundButton() {
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  var width = canvas.width;

  //draws the image on the canvas
  image.onload = function() {
    ctx.drawImage(image, width * 49 / 60, width / 150, width * 0.16, width * 0.16);
  };
  //image source
  image.src = "Images/Mute.png"; 
}

//displays the unmute sound button
function drawUnmuteSoundButton() {
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  var width = canvas.width;

  //draws the image on the canvas
  image.onload = function() {
    ctx.drawImage(image, width * 49 / 60, width / 150, width * 0.16, width * 0.16);
  };
  //image source
  image.src = "Images/Unmute.png"; 
}

//exclusively for the mute button
function clickToMute(box_x, box_y, width, height, f) {
    // variables
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var x;
    var y;
    
    // add action
    canvas.addEventListener('click', function(evt) {
        // position of the mouse click
        x = evt.offsetX;
        y = evt.offsetY;
        
        // perform action
        if (collision(box_x, box_y, width, height, x, y)) {
            f();    
        }
    }, false);
}

//toggle to mute/unmute the sound
function toggleSound() {
    var audio = document.getElementById("background_audio");
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    if(audio.paused) {
      audio.play();
      ctx.clearRect(width * 49 / 60, width / 150, width * 0.16, width * 0.16);
      drawMuteSoundButton();
    } else {
      audio.pause();
      ctx.clearRect(width * 49 / 60, width / 150, width * 0.16, width * 0.16);
      drawUnmuteSoundButton();
    }
}

function drawCircleTimer() {
    var canvas  = document.getElementById('game');
    var seconds = document.getElementById('counter');
    var ctx = canvas.getContext("2d");
    var sec = 300;
    var countdown = sec;
    var width = canvas.width;

    ctx.lineWidth = 8;
    ctx.strokeStyle = "#528f20";
    
    var startAngle = 0; 
    var time = 0;
    var intv = setInterval(function(){

    ctx.clearRect(width / 60, width / 60, width * 0.2, width * 0.2);
    var endAngle = (Math.PI * time * 2 / sec);
    ctx.save();
    ctx.translate(-(width / 60), width * 0.25);
    ctx.rotate(270 * Math.PI / 180);
    ctx.arc(width * 2/15, width * 2/15, width / 12, startAngle , endAngle, false);   
    startAngle = endAngle;
    ctx.stroke();
    ctx.restore();

    document.getElementById('counter').style.zIndex = "1";
    document.getElementById('counter').style.display = "block";

        
    countdown--;
    if ( countdown > 60){
        seconds.innerHTML = Math.floor(countdown/60);
    }
        
    if (++time > sec,countdown == 0 ) { clearInterval(intv);  ctx.clearRect(width / 60, width / 60, width * 0.2, width * 0.2);}
                                   
    }, 10);   
}

/*function drawTextTimer() {
    var canvas  = document.getElementById('game');
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var start = 5;
    var countdown = start;

    ctx.font = "bold" + width / 30 + "px Arial";
    ctx.fillStyle = "#528f20";
    ctx.fillText(start, 20, 100);
    countdown--;
}*/

/*
*   draw the start panel
*   @param highScore highest score
*/
function drawStartPanel(highScore) {
    drawTitle();
    drawStartButton();
    drawHighScore(highScore);
    addStartPanelActions();
    drawMuteSoundButton();
    drawCircleTimer();
    //drawTextTimer();
}
