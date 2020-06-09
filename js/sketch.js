let video;
let poseNet;
let pose;

function setup() {
    createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', poseDetected);
}

function modelLoaded() {
    console.log('poseNet model is ready!');
}

function poseDetected(poses) {
    console.log('poses!');
    if (poses.length > 0) {
        pose = poses[0].pose;
    }
}

function draw() {
    image(video, 0, 0);
    if (pose) {
        fill(0, 255, 0);
        ellipse(pose.rightEye.x, pose.rightEye.y, 30);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}