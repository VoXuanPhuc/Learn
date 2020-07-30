var game = function (){
    this.canvas  = null;
    this.context = null;
    this.bg      = null;
    this.image   = null;
    this.bird    = null;
    this.gameover = false;
    var self = this;
    
    this.innit = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext("2d");
        this.canvas.height = 576;
        this.canvas.width = 900;
        document.body.appendChild(this.canvas);
    
        this.bg = new bg(this);
        this.bg.innit();

        this.image = new image(this);
        this.image.innit();

        this.pipe = new pipe(this);
        this.pipe.innit();

        this.bird = new bird(this);
        this.bird.innit();

        this.loop();
        this.listenclick();
        
    }
    this.listenclick = function(){
        this.canvas.addEventListener('click',function(){
            self.bird.fly();
        });
    }

    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop,30);
    }
    this.update = function(){
        this.bird.update();
        this.image.update();
        this.bg.update();
        this.pipe.update();

    }
    this.draw = function(){
        this.bg.draw();
        this.pipe.draw();
        this.image.draw();
        this.bird.draw();
    }

}

var g = new game();
 g.innit();

 