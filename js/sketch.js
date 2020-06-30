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
    // Right Wrist
    // let mRightWristX = map(pose.rightWrist.x, 0, 640, 0, width);
    // let mRightWristY = map(pose.rightWrist.y, 0, 480, 0, height);
    //
    // // Left leftEye
    // let mLeftEyeX = map(pose.leftEye.x, 0, 640, 0, width);
    // let mLeftEyeY = map(pose.leftEye.y, 0, 480, 0, height);
    //
    // // Right eye
    // let mRightEyeX = map(pose.rightEye.x, 0, 640, 0, width);
    // let mRightEyeY = map(pose.rightEye.Y, 0, 480, 0, height);
    //

    if (prightWristX != pose.rightWrist.x && prightWristY != pose.rightWrist.y) {
      strokeWeight(3);
      stroke(0);
      // mpRightWristX = map(prightWristX, 0, 640, 0, width);
      // mpRightWristY = map(prightWristY, 0, 480, 0, height);
      line(pose.rightWrist.x, pose.rightWrist.y, prightWristX, prightWristY);

      //console.log(mRightWristY);
      prightWristX = pose.rightWrist.x;
      prightWristY = pose.rightWrist.y;
    }



    // leftWristX = pose.leftWrist.x;
    // leftWristY = pose.leftWrist.y;
    // pleftWristX = leftWristX;
    // pleftWristY = leftWristY;
    //
    // rightWristX = pose.rightWrist.x;
    // rightWristY = pose.rightWrist.y;
    // prightWristX = rightWristX;
    // prightWristY = rightWristY;


    // pg.strokeWeight(3);
    // pg.stroke(0);
    // pg.line(leftWristX, leftWristY, pleftWristX, pleftWristY);
    strokeWeight(10);
    stroke(0);


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