img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas (640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects ";

}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
fill ('#676a99');
text("Dog",120, 70);
noFill();
stroke('#000aad');
rect(40,60, 380, 350);

fill ('#35ff00')
text("Cat", 370, 120);
noFill();
stroke('#000aad');
rect(300, 100, 320, 290);

}