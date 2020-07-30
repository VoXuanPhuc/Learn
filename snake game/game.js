var game = function(){
    this.canvas = null ;
    this.context = null;
    
    var self = this;

    this.innit = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext("2d");
        this.context.width = 400;
        this.context.height= 400;
        document.body.appendChild(this.canvas);
        this.snake = new snake(this);
        this.food = new food(this);
        this.loop();
    }
    this.loop = function (){
        self.draw();
        self.update();
        setTimeout(self.loop,100);
    }
    this.update = function(){
        if(self.gameover()){
            this.snake.update();
        }    
        if(this.snake.x == this.food.pointX && this.snake.y == this.food.pointY){
           this.food.update();
           this.snake.maxcell++;
        }
        

    }
    this.draw = function (){
        this.context.clearRect(0,0,600,300);
        this.snake.draw();
        this.food.draw();
        
    }
    this.gameover = function(){
        for (let i = 1; i < this.snake.cell.length; i++) {
            if(this.snake.x == this.snake.cell[i].x && this.snake.y == this.snake.cell[i].y){
                this.context.font = " 60px ";
                this.context.fillText(" ban thua roi",200,200);
                return false;
            }       
        }
        return true;
    }
}
var g = new game();
g.innit();