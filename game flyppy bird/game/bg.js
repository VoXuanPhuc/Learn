var bg = function(game){
    this.game = game;
    this.x = 0 ;
    this.y = 0;
    var self = this;
    
    this.innit = function(){
        this.loadimg();
        
    }
    this.loadimg = function(){
        this.image = new Image();
        this.image.onload = function()
        {
            return true;
        };
         
      this.image.src = "flap.png";  
      
    }
    this.update = function(){   
       if(!this.game.gameover){
             this.x --;
            if(Math.abs(this.x) == this.game.canvas.width )
                {
                    this.x = 0;
                }
       }
    }
    this.draw = function(){
        if(this.image.onload()){
            this.game.context.drawImage(this.image,this.x,this.y);
             this.game.context.drawImage(this.image,this.x+500,this.y);
             this.game.context.drawImage(this.image,this.x+1100,this.y);
        }
    }

}