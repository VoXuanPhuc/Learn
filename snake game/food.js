var food = function(game){
    this.game = game;
    this.pointX =0;
    this.pointY =0;
    
    this.update = function(){
        this.pointX = (Math.floor(Math.random()*20))*15;
        this.pointY = (Math.floor(Math.random()*9))*15;
        
    }
    this.draw = function(){
        this.game.context.fillStyle  = "blue";
        this.game.context.fillRect(this.pointX,this.pointY,15,15);
    }
   
   
}