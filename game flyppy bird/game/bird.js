var bird = function(game){
    this.game = game;
    this.x = 250 ;
    this.y = 100;
    this.speedY = 0;
    this.giatoc = 1;
   
    this.direction = 'down';

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
         
      this.image.src = "bird.png";  
      
    }

    this.update = function(){
        if(this.game.gameover) {
            this.y = 430;
            return;
        }
        else{
               if(this.y <= 430){
                    if(this.direction == 'down'){
                        this.speedY += this.giatoc;
                    }else{
                        this.speedY -= this.giatoc;
                    }
                   
                    this.y += this.speedY;
               }

                if(this.y > 430){
                    this.y = 430;
                }
                 this.gameover();
            }   
     }

            this.fly = function(){
                 if(!this.game.gameover){
                    this.speedY -= 17;
       
                }
             }

    this.draw = function(){
        if(this.image.onload()){
           this.game.context.drawImage(this.image,this.x,this.y,60,60);
        }
    }
    this.gameover = function(){
        if(this.y == 430 || this.y <= this.game.pipe.y12 +500 && this.x == this.game.pipe.x1 || 
            this.y >= this.game.pipe.y11 && this.x == this.game.pipe.x1){

                return this.game.gameover = true;

        }else if(this.y == 430 || this.y <= this.game.pipe.y22 +500 && this.x == this.game.pipe.x2 ||
             this.y >= this.game.pipe.y21 && this.x == this.game.pipe.x2){

                return this.game.gameover = true;

        }else if(this.y == 430 || this.y <= this.game.pipe.y32 +500 && this.x == this.game.pipe.x3  ||
             this.y >= this.game.pipe.y31 && this.x == this.game.pipe.x3){

              return this.game.gameover = true;

        }else if(this.y == 430 || this.y <= this.game.pipe.y42 +500 && this.x == this.game.pipe.x4 ||
             this.y >= this.game.pipe.y41 && this.x == this.game.pipe.x4){

              return this.game.gameover = true;
        }
    }

}