song1="";
song2="";
song1_status="";
song2_status="";

function preLoad(){
    song1= loadSound("music.mp3");
    song2= loadSound("Harry-Potter-Theme.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized");
   
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+righttWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);

}