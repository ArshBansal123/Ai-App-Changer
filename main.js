song1= "";
song2= "";
function preload()
{
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}
scoreRightWrist= 0;
scoreLeftWrist= 0;
rightWristX= 0;
leftWristX= 0;

function setup() {
    canvas= createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modeLoaded() {
    console.log("Posenet is initialized")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        scoreRightWrist= results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist= " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
        
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX= " + rightWristX + "rightWristY =" + rightWristY);
        
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX= " + leftWristX + "leftWristY =" + leftWristY);
        
    }
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2)
    {
        play1();
    }
if(scoreLeftWrist > 0.2)
{
    
    play2();
}
}
function play1() {
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}
function play2() {
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}