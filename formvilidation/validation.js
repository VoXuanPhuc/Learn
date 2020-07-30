var change = function(){
   
    this.changetype = function(){
        var input = document.getElementById('password');
        document.getElementById('checkbox').addEventListener('change',function(e){
            var asd = e.target;
            try {
                if(asd.checked)
            { input.type = "text";}
            else
                input.type = "password";
            }catch(erros){
                alert(erros.messages);
            }
        })
    }
    
};

var g = new change();
g.changetype();

const min = 1;
const max = 100;
let validationoffield = [];

const validation ={
    innit : function(field){
        validationoffield = field;

        this.generate ();
    },
    generate: function(){
        
        for(const input of validationoffield){
            var self= this;
           let elementfield = this.getElement(input.qeryslector);
         
           elementfield.onfocus = function(){
              elementfield.classList.remove('erro');

              let p = document.createElement('p');
                p.className = 'input-message';
               let getmesseage = self.messages(input);
               let messagesnode = document.createTextNode(getmesseage);
                p.appendChild(messagesnode);
                 elementfield.parentElement.appendChild(p);
           };
    
           elementfield.onblur = function(){
               self.checkerros(input);
               let parent = elementfield.parentElement;
               parent.removeChild(parent.lastChild);
             console.log(parent);
           }
       
        // document.getElementById('submit').onclick = this.checkedall();
        
        }
    },
    messages:function(field){
        let message = 'Enter your ' + field.name + ' toi thieu ' + field.min +' ki tu ' + ' va toi da ' + field.max +' ki tu';
        return message;

    },
    checkerros : function(field){
        //console.log(field);
        let elementfield = this.getElement(field.qeryslector);
     
        const vali = this[field.type](elementfield.value,field.min,field.max);
        if(!vali){
            elementfield.classList.add('erro');
            return true;
        }
        elementfield.classList.remove('erro');
        return false;
    },

    checkedall:function(){
        let isErro = false;
        for(const input of validationoffield){
            this.checkerros(input) && (isErro = true);
        }
        return isErro;
    },

    Text:function(value, min ,max){
        let valuelenght = value.length;
        return valuelenght >= min && valuelenght <= max;
    },
    Number:function(value, min ,max){
        const isNumber = !!value && !isNaN(value);
        
        let valuelenght = value.length;
        return isNumber && valuelenght >= min && valuelenght <= max;
    },
    Password:function(value, min ,max){
        let valuelenght = value.length;
        return valuelenght >= min && valuelenght <= max;
    },

    getElement:function(selector){
        const element = document.querySelector(selector);
        return element;
    }
}


validation.innit([
    {
        qeryslector: '.name',
        name : 'name',
        type: 'Text',
        min: 4,
        max : 100
    },
    {
        qeryslector: '.phone',
        name : 'phone',
        type: 'Number',
        min: 9,
        max : 11
    },
    {
        qeryslector: '.password',
        name : 'password',
        type: 'Text',
        min: 6,
        max : 30
    }
]);
