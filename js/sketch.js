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
let prightWristX = 0;
let prightWristY = 0;

function setup() {
    colorMode(HSB, 100);

    let constraints = {
        video: {
            mandatory: {
                minWidth: 1280,
                minHeight: 720
            },
            optional: [{
                maxFrameRate: 60
            }]
        },
        audio: false
    };

    createCanvas(windowWidth, windowHeight);
    background(255);
    video = createCapture(constraints, function(stream) {

    });
    // video = createCapture(VIDEO);

    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);

    pg = createGraphics(windowWidth, windowHeight);

    //poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', poseDetected);
}

function modelLoaded() {
    console.log('poseNet model is ready!');
}

function poseDetected(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
    }
}


function draw() {

    // image(video, 0, 0);
    if (pose) {

        if (prightWristX != pose.rightWrist.x && prightWristY != pose.rightWrist.y) {
            strokeWeight(3);
            stroke(0);

            line(pose.rightWrist.x, pose.rightWrist.y, prightWristX, prightWristY);

            prightWristX = pose.rightWrist.x;
            prightWristY = pose.rightWrist.y;
        }

        if (pleftWristX != pose.leftWrist.x && pleftWristY != pose.leftWrist.y) {
            strokeWeight(3);
            stroke(0);

            line(pose.leftWrist.x, pose.leftWrist.y, pleftWristX, pleftWristY);

            pleftWristX = pose.leftWrist.x;
            pleftWristY = pose.leftWrist.y;
        }

        strokeWeight(3);
        stroke(0);

        fill(30, 100, 100);
        ellipse(pose.leftShoulder.x, pose.leftShoulder.y, (pose.leftShoulder.x - pose.rightShoulder.x) / 3);
        ellipse(pose.rightShoulder.x, pose.rightShoulder.y, (pose.leftShoulder.x - pose.rightShoulder.x) / 3);



        //Glasses
        // strokeWeight(6);
        // stroke(0);
        //line(pose.leftEye.x, pose.leftEye.y, pose.rightEye.x, pose.rightEye.y);

        //Red
        push();
        strokeWeight(3);
        fill(0, 100, 100);
        ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.2);
        ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.2);
        pop();
        // //Orange
        // noStroke();
        // fill(5, 100, 100);
        // ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.5);
        // ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 1.5);
        //
        // //Yellow
        // fill(15, 100, 100);
        // ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 2);
        // ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 2);
        //
        // //Green
        // fill(25, 100, 100);
        // ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 2.5);
        // ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 2.5);
        //
        // //Blue
        // fill(55, 100, 100);
        // ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 3);
        // ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 3);

        //Purple
        // fill(85, 50, 50);
        // ellipse(pose.rightEye.x, pose.rightEye.y, (pose.rightEye.x - pose.leftEye.x) / 3.5);
        // ellipse(pose.leftEye.x, pose.leftEye.y, (pose.rightEye.x - pose.leftEye.x) / 3.5);

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