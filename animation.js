function Animation(character, frameSpeed, startFrame, endFrame) {
    var animationSequence = [];
    var currentFrame = 0;
    var counter = 0;
    for (var frameNumber = startFrame; frameNumber <= endFrame; frameNumber++)
        animationSequence.push(frameNumber);
    this.update = function () {
        if (counter == (frameSpeed - 1))
            currentFrame = (currentFrame + 1) % animationSequence.length;
            counter = (counter + 1) % frameSpeed;
    };
    this.draw = function (posX, posY) {
        var row = Math.floor(animationSequence[currentFrame] / character.frames);
        var col = Math.floor(animationSequence[currentFrame] % character.frames);
        ctx.drawImage(character.image, col * character.frameW, row * character.frameH, character.frameW, character.frameH, posX, posY, character.frameW, character.frameH);
    };
}