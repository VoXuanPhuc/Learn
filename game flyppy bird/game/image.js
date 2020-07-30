var image = function(game){
    this.game = game;
    this.x = 0 ;
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
         
      this.image.src = "bg-bottom.PNG";  
    }
    this.update = function(){   
       if(!this.game.gameover){
            this.x -= 4;
            if(Math.abs(this.x) == this.game.canvas.width )
                {
                    this.x = 0;
                }
       }
    }
    this.draw = function(){
      if(this.image.onload()){ 
           this.game.context.drawImage(this.image,this.x,482);
           this.game.context.drawImage(this.image,this.x+660,482);
           this.game.context.drawImage(this.image,this.x+1300,482);
        }
    }

}