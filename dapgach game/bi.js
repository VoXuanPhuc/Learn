class bi {
    constructor(game) {
        this.game = game;
        this.x = 250;
        this.y =200;
        this.dx = 5;
        this.dy = 5;
        this.draw();
        this.update();
    }
    update(){     
        this.x += this.dx;
        this.y += this.dy;
        if(this.x < 0 || this.x > this.game.canvas.width){
            this.dx = -this.dx;
        }
        if( this.y < 0  ){
            this.dy = -this.dy;
        }        
    }

    draw(){
        var radius = 15;
        this.game.context.beginPath();
        this.game.context.arc(this.x , this.y, radius, 0, 2 * Math.PI, false);
        this.game.context.fillStyle = "red";
        this.game.context.fill();
        this.game.context.stroke();
    }
}