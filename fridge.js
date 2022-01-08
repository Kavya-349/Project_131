function back_to_home() {
    window.location = "index.html";
}

var img = "";

function preload() {
    img = loadImage("fridge.html");
}

function setup() {
    canvas = createCanvas(100,550);
    canvas.centre();
}

function draw() {
    image(img, 0,0,100,500);
}