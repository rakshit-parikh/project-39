function Score(x, y) {
    "use strict";
    this.x = x;
    this.y = y;
    this.drawScore = function () {
      ctx.font = "bold 14px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("SCORE: " + score, x, y);
    };
    this.updateScore = function () {
      for (var i = 0; i < gameObstacles.length; i += 1) {
        var distancePlayerObstacle = player.posX - Math.floor(gameObstacles[i].x + gameObstacles[i].scaledW);
        if (distancePlayerObstacle > 0 && !gameObstacles[i].hasPassed) {
          score += 1;
          gameObstacles[i].hasPassed = true;
        }
      }
    };
    this.resetScore = function () {
      score = 0;
    };
    this.resetThresholdScore = function (){
      thresholdScore = 10;
    }
    this.getScore = function() {
      return score;
    };
  }