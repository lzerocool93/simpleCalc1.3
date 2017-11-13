window.onload = function(){
    
    var inp1 = document.querySelector('input[name=inp1]'),
        inp2 = document.querySelector('input[name=inp2]'),
        span = document.querySelector('span'),
        btns = document.querySelectorAll('input[type=button]');

    
    for(var i = 0 ; i < btns.length ; i++){
        btns[i].onclick = function(){
            var op = this.getAttribute('data-op');
            calc(op);
        }
    }
    
    function calc(op){
        var res;
        var a = parseInt(inp1.value),
            b = parseInt(inp2.value);
        
        if(op === '+'){
            res = a + b; 
        }
        
        if(op === '-'){
            res = a - b; 
        }
        
        if(op === '/'){
            res = a / b; 
        }
        
        if(op === '*'){
            res = a * b; 
        }
        
        span.innerHTML = res;
    }
}