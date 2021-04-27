function Background(path, x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    var image = new Image();
    image.src = path;
    this.drawBackground = function () {
        x -= speed;
        ctx.drawImage(image, x, y);
        // Draw another image
        ctx.drawImage(image, x + image.width, y);
        if (x + image.width < 0)
            x = 0;
    };
}