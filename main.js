moustacheX=0;
moustacheY=0;

function preload() {
    moustache_nose = loadImage('https://i.postimg.cc/JzGqB24h/Moustache-Image.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNot Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustacheX = results[0].pose.nose.x;
        moustacheY = results[0].pose.nose.y;
        console.log("Moustache x = " + results[0].pose.nose.x);
        console.log("Moustache y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache_nose, moustacheX, moustacheY, 100, 25);
}

function take_snapshot() {
    save('MyMoustacheFilterImage.jpeg');
}
