let video;
let poseNet;

function setup() {
    createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

}

function modelLoaded() {
    console.log('poseNet model is ready!')
}

function draw() {
    image(video, 0, 0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}