music1 ="";
music2 = "";
x = "";
scoreLeftWrist = 0;
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload(){
music1 = loadSound("music.mp3");
music2 = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
   canvas.center();
    video = createCapture(VIDEO);
     video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
       poseNet.on('pose', gotPoses);
 }
 function modelLoaded(){
   console.log("PoseNet is initialized");
 }
 function gotPoses(results){
   if(results.length > 0){
     console.log(results);
     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log("left Wrist Y"+ leftWristX+"left Wrist Y"+ leftWristY);
     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("right Wrist Y"+ rightWristX+"right Wrist Y"+ rightWristY);
   }
  }
function draw() { 
   image(video, 0, 0, 600, 500);
}