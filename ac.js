function back_to_home() {
    window.location = "index.html"
}

var img = "";
var status = "";

function preload() {
    img = loadImage("AC.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modalLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting"
}

function modalLoaded() {
    console.log("modal loaded");
    status = true;
    objectDetector.detect(img, gotResutls);
}

function gotResutls(error, answers)  {
    if(error) {
        console.error(error);
    } else {
        console.log(answers);
    }
}

function draw() {
    image(img,0,0,640,420);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("AC", 45, 135);
    rect(40,120,550,250);

    fill("#00FF00");
    stroke("#00FF00");
    noFill();
    text("Stabilizer", 255, 25);
    rect(250,10,150,100);
}