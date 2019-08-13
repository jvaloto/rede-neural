class Barra{
    constructor(){
        this.x = 0;
        this.y = 400;
        this.w = 200;
        this.h = 50;
        this.xspeed = 1;
    }

    show = function(){
        fill(255);

        rect(this.x, this.y, this.w, this.h);
    }

    update = function(){
        this.x = this.x;
    }

    moveRight = function(){
        this.x = this.x + this.xspeed;
    }

    moveLeft = function(){
        this.x = this.x - this.xspeed;
    }
}