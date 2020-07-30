var pipe = function(game){
    this.game = game;
    this.x1 = this.game.canvas.width;
    this.x2 = this.game.canvas.width + 220;
    this.x3 = this.game.canvas.width +440;
    this.x4 = this.game.canvas.width +660;
    this.x5 = this.game.canvas.width +880;
    this.y11 = Math.floor(Math.random() * (470-160 + 1)) + 160;
    this.y12 = this.y11 - 700;
    this.y21 = Math.floor(Math.random() * (470-160 + 1)) + 160;
    this.y22 = this.y21 - 700;
    this.y31= Math.floor(Math.random() * (470-160 + 1)) + 160; 
    this.y32 = this.y31 - 700;
    this.y41 = Math.floor(Math.random() * (470-160 + 1)) + 160;
    this.y42 = this.y41 - 700;
   
    this.innit = function(){
        this.loadimg();
    }
    this.loadimg = function(){
        this.image = new Image();
        this.image2 = new Image();
        this.image.src = "pipe.png";
        this.image2.src = "pipe2.jpg";
    }
    this.update = function(){
        if(!this.game.gameover){
            this.x1 -=2;
            this.x2-=2;
            this.x3 -=2;
            this.x4 -=2;
            
             if(this.x1 == 0){
                this.x1=this.game.canvas.width;
                this.y11= Math.floor(Math.random() * (470-160 + 1)) + 160;
                this.y12 = this.y11 - 700;
            }
            if(this.x2 ==0){
                this.x2 = this.game.canvas.width;
                this.y21=Math.floor(Math.random() * (470-160 + 1)) + 160;
                this.y22 = this.y21 -700;
          
             }
            if(this.x3 == 0){
                this.x3 = this.game.canvas.width;
                this.y31=Math.floor(Math.random() * (470-160 + 1)) + 160;
                this.y32 = this.y31 -700;
           
            }
            if(this.x4 == 0){
                this.x4 = this.game.canvas.width;
                this.y41=Math.floor(Math.random() * (470-160 + 1)) + 160;
                this.y42 = this.y41 -700;
           
            }
        }
        

    }
    

    this.draw = function () {
        this.game.context.drawImage(this.image,this.x1,this.y12, 35,500);
        this.game.context.drawImage(this.image2,this.x1,this.y11, 35,500);

        this.game.context.drawImage(this.image,this.x2,this.y22, 35,500);
        this.game.context.drawImage(this.image2,this.x2,this.y21, 35,500);

        this.game.context.drawImage(this.image,this.x3,this.y32, 35,500);
        this.game.context.drawImage(this.image2,this.x3,this.y31 , 35,500);

        this.game.context.drawImage(this.image,this.x4,this.y42, 35,500);
        this.game.context.drawImage(this.image2,this.x4,this.y41, 35,500);

        // this.game.context.drawImage(this.image,this.x5,this.y52, 35,500);
        // this.game.context.drawImage(this.image2,this.x5,this.y51, 35,500);
    }
}