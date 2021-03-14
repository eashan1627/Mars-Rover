canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var rover_width= 100;
var rover_height= 90;
var rover_x= 10;
var rover_y= 10;
var mars_array=["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var random_number= Math.floor(Math.random()*4);
var rover_image="rover.png";
var background_image= mars_array[random_number];

function add() {
    background_imgtag= new Image();
    background_imgtag.onload= uploadbackground;
    background_imgtag.src= background_image;

    rover_imgtag= new Image();
    rover_imgtag.onload= uploadrover; 
    rover_imgtag.src= rover_image; 
}

function uploadbackground() {
    ctx.drawImage(background_imgtag,0, 0, canvas.width, canvas.height);   
}

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed= e.keyCode;
    console.log(keypressed);

    if (keypressed=='38') {
        up();
        console.log("up key is pressed");
    }
    if (keypressed=='40') {
        down();
        console.log("down key is pressed");
    }
    if (keypressed=='37') {
        left();
        console.log("left key is pressed");
    }
    if (keypressed=='39') {
        right();
        console.log("right key is pressed");
        }
}
function up() {
    if(rover_y >= 0) {
        rover_y= rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if(rover_y <= 500) {
        rover_y= rover_y+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right() {
    if(rover_x <= 700) {
        rover_x= rover_x+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if(rover_x >= 0) {
        rover_x= rover_x-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}