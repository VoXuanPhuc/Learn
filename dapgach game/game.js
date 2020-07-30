class game {
    constructor(){
        this.canvas = null;
        this.context = null;
        this.innit();
        this.gameover = false;
        this.loop();
        this.tinhdiem();
    }

    loop(){
        this.update();
        this.draw();
        if(!this.gameover){
            setTimeout(()=>{
                this.loop();
            },15);  
        }
          
        
    }

    innit(){
        this.canvas = document.createElement('canvas'); 
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 500;
        this.canvas.height = 550;
        document.body.append(this.canvas);
        this.gach = new gach(this);
        this.gach.addtuong();
        this.bi = new bi(this); 
      
    }

    update(){    
        this.bi.update();
        this.over();
        this.VaCham();
        
    }

    draw(){
        this.context.clearRect(0,0,500,550)
        this.bi.draw();
        this.gach.gach();
        this.gach.addtuong();
    }

    tinhdiem(){
        let x1 =100  , x2 = 190 , x3 , x4;
    }

    over(){
        if( this.bi.y  + 15 > this.canvas.height -15 && this.bi.x > this.gach.x 
            && this.bi.x < this.gach.x + 70){

            this.bi.dy = -this.bi.dy;   

        }else  if(this.bi.y + 15  >= this.canvas.height){
            this.gameover = true;
        }       
    }

    VaCham(){
        this.gach.mang.forEach((m) => {
            if(!m.isBroken){
                if( m.x <= this.bi.x && m.x + 60 >= this.bi.x && m.y < this.bi.y + 15 && this.bi.y - 15 < m.y + 15){
                    this.bi.dx = - this.bi.dx;
                    m.isBroken = true;
                }
            }
        });
    }
}
var g = new game();