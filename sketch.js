let fireworks, gravity, cbox , bg, font;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight-10)
  fireworks = []
  gravity = createVector(0, 0.1)
  cbox = select('#cbox')
  colorMode(HSL)

  textAlign(CENTER, CENTER);
}

setInterval(() => {
  fireworks.push(new Firework())
}, 2000);

function preload(){
    // bg = loadImage("https://raw.githubusercontent.com/Rabbid76/graphics-snippets/master/resource/texture/background.jpg")
    bg      = loadImage("https://image.winudf.com/v2/image1/Y29tLkx1bmEuTmlnaHQuU2t5LldhbGxwYXBlcl9zY3JlZW5fMl8xNTQ3NDY3NzU1XzA4Nw/screen-2.jpg?fakeurl=1&type=.webp");
    // font    = loadFont('assets/BigBoy.otf');
}

function draw() {
    background(bg)
    // background(180, 20, 20, 0.1)

    textAlign(CENTER);
    textSize(72);
    // textFont(font);
    textFont("Pacifico");
    drawWords(width * 0.5);

  fireworks.forEach(f => f.update())
  fireworks = fireworks.filter(f => !f.isDead())
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);

  fill(255);
  text('Tường Vân', x, 200);
}
