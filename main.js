canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_X=10;
rover_Y=10;
function add()
{
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keyDown);

function my_keyDown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed =="38")
    {
        up();
        console.log("up");
    }
    if(keypressed=="40")
    {
         down();
         console.log("down");
    }
    if(keypressed == "37")
    {
        left();
        console.log("left");
    }
    if(keypressed == "39")
{
    right();
    console.log("right");
}
}
function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("when up arrrow is pressed, X=" +rover_X +"Y="+rover_Y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("when down arrow is pressed,X=" +rover_X + "Y="+rover_Y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        console.log("when left arrow is pressed,X=" +rover_X + "Y="+rover_Y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_X<=700){
        rover_X=rover_X+10;
        console.log("when right arrowis preesed,X="+rover_X+"Y="+rover_Y);
        uploadBackground();
        uploadRover();
 
    }
}







