var bola;
var barra;

function setup(){
    createCanvas(500, 500);

    background(0);

    frameRate(30);

    bola = new Bola();

    barra = new Barra();
}

function draw(){
    bola.update();
    bola.show();

    barra.update();
    barra.show();
}

function keyPressed(){
    if(keyCode == LEFT_ARROW){
        barra.moveLeft();
    }else if(keyCode == RIGHT_ARROW){
        barra.moveRight();
    }
}