class Bola{

    constructor(){
        this.create();
    }

    create = function(){
        this.x = floor(random() * 450);
        this.y = 0;
        this.w = 50;
        this.h = 50;
        this.yspeed = 1;
    }

    update = function(){
        this.y = this.y + this.yspeed;

        if(this.y >= 500){
            this.create();
        }
    }
    
    show = function(){
        fill('green');
        
        rect(this.x, this.y, this.w, this.h);
    }

}