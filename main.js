going_bad ="";
goodbyes="";

function preload(){
    going_bad= loadSound("going_bad.mp3");
    goodbyes= loadSound("goodbyes.mp3");
}

function setup(){
    canvas=createCanvas(500, 400);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}