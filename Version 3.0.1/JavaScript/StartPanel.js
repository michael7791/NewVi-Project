/**
*   draw the start panel
*   @param {playerName} name of the player
*/
function drawStartPanel(playerName) {
    clearCanvas();
    drawMuteSoundButton();
    drawTitle();
    drawPlayerName(playerName);
    drawLeaderBoardButton();
    drawStartButton();
    drawAchivementButton();

    /**
    *   draw the title
    */
    function drawTitle() {
        drawText(0.5, 0.15, 0.15, 'NewVi', 'blue');
    }
    /**
    *   draw player name
    */
    function drawPlayerName(playerName) {
        drawText(0.5, 0.4, 0.1, playerName, 'black');
    }
    /**
    *   draw leader board button
    */
    function drawLeaderBoardButton() {
        drawButton(0.5, 0.6, 0.8, 0.12, 'Leader Board', 'white', 'green');
    }
    /**
    *   draw start button
    */
    function drawStartButton() {
        drawButton(0.5, 0.75, 0.8, 0.15, 'Start', 'white', 'red');
    }
    /*
    * draw the achivement button()
    */
    function drawAchivementButton() {
      drawButton(0.1, 0, 0.2, 0.2, 'G', 'black', 'red');
    }
}
/**
*   draw the sound button
*/
function drawSoundButton() {
    drawImage(0.8, 0, 0.2, 0.2, 'Images/Unmute.png');
}
/**
*   draw the mute sound button
*/
function drawMuteSoundButton() {
    drawImage(0.8, 0, 0.2, 0.2, 'Images/Mute.png');
}
