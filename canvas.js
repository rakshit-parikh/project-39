function Spritesheet(path, frameW, frameH) {
    this.frameW = frameW;
    this.frameH = frameH;
    this.image = new Image();
    this.image.src = path;
    this.frames = 10;
}