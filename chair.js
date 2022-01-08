function back_to_home() {
    window.location = "index.html";
}

var img = "";
var status = "";
var objects = [];

function preload() {
    img = loadImage("Chair.jpg");
}

function setup() {
    canvas = createCanvas(500, 550);
    canvas.position(480, 175);

    objectDetector = ml5.objectDetector("cocossd", modalLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting"
}

function modalLoaded() {
    console.log("modal loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)  {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img,0,0,500,550);

    if(status != "") {
        for(var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            noFill();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 15);
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}