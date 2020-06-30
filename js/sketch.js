let video;
let poseNet;
let pose;

let pg;

let leftWristX;
let leftWristY;
let pleftWristX;
let pleftWristY;

let rightWristX;
let rightWristY;
let prightWristX;
let prightWristY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    video = createCapture(VIDEO);
    video.hide();

    pg = createGraphics(windowWidth, windowHeight);

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

        strokeWeight(3);
        stroke(0);

        leftWristX = pose.leftWrist.x;
        leftWristY = pose.leftWrist.y;
        pleftWristX = leftWristX;
        pleftWristY = leftWristY;

        rightWristX = pose.rightWrist.x;
        rightWristY = pose.rightWrist.y;
        prightWristX = rightWristX;
        prightWristY = rightWristY;

        pg.strokeWeight(3);
        pg.line(leftWristX, leftWristY, pleftWristX, pleftWristY);

        //Glasses
        colorMode(HSB, 100);
        strokeWeight(6);
        stroke(0);
        line(pose.leftEye.x, pose.leftEye.y, pose.rightEye.x, pose.rightEye.y);

        //Red
        strokeWeight(3);
        fill(0, 100, 100);
        ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.2);
        ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.2);

        //Orange
        noStroke();
        fill(5, 100, 100);
        ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.5);
        ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.5);

        //Yellow
        fill(15, 100, 100);
        ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 2);
        ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 2);

        //Green
        fill(25, 100, 100);
        ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 2.5);
        ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 2.5);

        //Blue
        fill(55, 100, 100);
        ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 3);
        ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 3);

        //Purple
        fill(85, 50, 50);
        ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 3.5);
        ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 3.5);

        // let shoulderWidth;
        // let torso;
        // let arm;
        //
        // shoulderWidth = pose.rightShoulder.x - pose.leftShoulder.x;
        // torso = pose.leftHip.y - pose.leftShoulder.y;
        //
        //
        // //Torso
        // fill(85, 50, 50);
        // rect(pose.leftShoulder.x, pose.leftShoulder.y, shoulderWidth, torso);

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}