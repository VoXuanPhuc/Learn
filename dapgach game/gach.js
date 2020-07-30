class gach{
    constructor (game){
        this.game = game;
        this.x = 400;
        this.mang = new Array;
        this.cashhandle();  
        this.gach();
        this.addtuong();
        this.pushTuong();
    } 

    allgach = {
       x : 30,
       y : 30 ,
       margin : 30,
       width : 60,
       height : 15,
       allCol : 5,
       allRow : 4
    };

    
    pushTuong(){
        for (let i = 0; i < this.allgach.allRow; i++) {
            for(let j = 0 ; j < this.allgach.allCol ; j ++){
                this.mang.push({
                    x: this.allgach.x + j * (this.allgach.width + this.allgach.margin) ,
                    y: this.allgach.x + i * (this.allgach.height + this.allgach.margin),
                    isBroken : false
                })
            }
            
        }
    }

    addtuong(){
        
        let self = this;
        this.game.context.fillStyle = 'red';
        
        this.mang.forEach(function (m) {
            if(!m.isBroken){
                self.game.context.fillRect( m.x ,
                                            m.y,
                                            60,
                                            15 );  
            }  
        });
    }

  

    cashhandle(){
        let self = this;
        document.addEventListener('keydown',function(e){
            if(e.which == 37){
                self.x = self.x - 20;

            }else  if(e.which == 39){
                self.x += 20;
                  
            }
        })
    }

    gach(){
        if (this.x < 0 ){
            this.x =0;
        }
        if (this.x > 430){
            this.x = 430;
        }
        this.game.context.fillStyle = 'red';
        this.game.context.fillRect(this.x,this.game.canvas.height-15,70,15);
    }
 
}

