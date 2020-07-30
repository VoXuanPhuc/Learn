var snake = function (game){
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.grid = 15;
    this.dx = 15;
    this.dy = 0;
    this.cell = [];
    this.maxcell = 2;

    this.update = function (){
        this.x += this.dx;
        this.y += this.dy;
        
        this.cell.unshift({x: this.x, y: this.y});
        if( this.cell.length > this.maxcell )
            this.cell.pop();

        this.quaylai();
        this.cashhandle();
    }

    this.draw = function() {
        for(let i = 0 ; i < this.cell.length ; i++){
            this.game.context.fillStyle = 'white';
             this.game.context.fillRect(this.cell[i].x, this.cell[i].y,this.grid,this.grid);
        }

    }
    this.cashhandle = function(){
        document.addEventListener('keydown', (e) =>{
            if(e.which == 37 && this.dx == 0){
                this.dx = -this.grid;
                this.dy = 0;
            }
            if(e.which == 38 && this.dy == 0){
                this.dx = 0;
                this.dy = -this.grid;
            }
            if(e.which == 39 && this.dx ==0){
                this.dx = this.grid;
                this.dy = 0;
            }
            if(e.which == 40 && this.dy == 0){
                this.dx = 0;
                this.dy = this.grid;
            }
        })
    }
    this.quaylai = function(){
        if(this.x >= this.game.canvas.width)
            this.x = -15;
        else if(this.x <= -15)
            this.x = this.game.canvas.width;
        if(this.y >= this.game.canvas.height)
            this.y = -15;
        else if( this.y <= -15)
            this.y = this.game.canvas.height;
        
    }
    
}