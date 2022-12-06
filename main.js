objects = [];
status = "";

function setup()
{
    canvas = createCanvas(480 , 380);
    canvas.center();
}

function draw()
{
    image( 0 , 0 , 480 , 380);

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("input_id").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

