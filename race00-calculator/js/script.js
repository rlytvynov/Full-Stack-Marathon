let input = document.getElementById('input');
let buttons = Array.from(document.getElementsByClassName('button'));
let output = document.getElementById('output');

function clear() {
    output.innerText = '0';
    input.innerText = '0';
}

function findLastNumber(text) {
    let obj = {
        numInd : 5, numVal : '23'
    }
    let flag= false;

    for (let index = text.length - 1; index >= 0; index--) {
        if(isNaN(text[index]))
        {
            obj.numInd = index + 1;
            flag = true;
            break;
        }
    }
    if(!flag) obj.numInd = 0;
    obj.numVal = text.substring(obj.numInd, text.length);
    return obj;
}

function factorial(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
      return 1;
    else {
      return (num * factorial(num - 1));
    }
}


function findLastNumberForFactor(text) {
    let obj = {
        numInd : 5, numVal : '23'
    }
    let flag= false;

    for (let index = text.length - 1; index >= 0; index--) {
        if(isNaN(text[index]))
        {
            obj.numInd = index + 1;
            flag = true;
            break;
        }
    }
    if(!flag) obj.numInd = 0;
    obj.numVal = text.substring(obj.numInd, text.length);
    return obj;
}

function onClick() {

    if(this.innerText === 'C') {
       clear();
    }


    else {
        if(input.innerText === '0') 
        {
            input.innerText = '';
        }

        if(this.innerText !== '=')
        {

            if(this.innerText === '×')  {
                input.innerText += '*';
            }
    
            if(this.innerText === '÷') {
                input.innerText += '/';
            }
    
            if(this.innerText !== '×'&& this.innerText !== '÷')
                input.innerText += this.innerText;

            if(this.innerText === '+/-') {
                let num = findLastNumber(input.innerText.substring(0, input.innerText.length - 3));
                input.innerText = input.innerText.substring(0, num.numInd);
                if(num.numVal > 0) input.innerText += '(-' + num.numVal + ')';
                else input.innerText += num.numVal.substring(1, num.numVal.length -1);
            }

            if(this.innerText === '!') {
                let num = findLastNumberForFactor(input.innerText.substring(0, input.innerText.length - 1));
                input.innerText = input.innerText.substring(0, num.numInd);
                input.innerText +=  factorial(num.numVal);
            }
    

            if(isNaN(input.innerText.charAt(input.innerText.length - 1)) && 
            isNaN(input.innerText.charAt(input.innerText.length - 2)) && input.innerText.charAt(input.innerText.length - 2) !== ')')
            {
                var op = input.innerText[input.innerText.length - 1];
                input.innerText = input.innerText.substring(0, input.innerText.length - 2);
                input.innerText += op;
            }
        } 
        //console.log(this.innerText);
        if(this.innerText === '=') {
        
            output.innerText = input.innerText;
            console.log(input.innerText);
            try{
                input.innerText = eval(input.innerText);
            } catch {
                input.innerText = "Error";
                setTimeout(clear, 1000);
            }
        }
    }
}

for(var i = 0; i < buttons.length; i++)
    buttons[i].onclick = onClick;



 /*let input = document.getElementById('output');
let buttons = Array.from(document.getElementsByClassName('button'));
let output = document.getElementById('input');
function clear() {
    output.innerText = '0';
    input.innerText = '0';
}
function parse(line,fun) {
    var parsed = line.split(fun);
    return parsed;
}

function onClick() {

    if(this.innerText === 'C') {
       clear();
    }


    else {
        if(input.innerText === '0') 
        {
            input.innerText = '';
        }

        if(this.innerText !== '=')
        {

            if(this.innerText === '×')  {
                input.innerText += '*';
            }
    
            if(this.innerText === '÷') {
                input.innerText += '/';
            }
    
            if(this.innerText !== '×'&& this.innerText !== '÷')
                input.innerText += this.innerText;

            if(isNaN(input.innerText.charAt(input.innerText.length - 1)) && isNaN(input.innerText.charAt(input.innerText.length - 2)))
            {
                var op = input.innerText[input.innerText.length - 1];
                input.innerText = input.innerText.substring(0, input.innerText.length - 2);
                input.innerText += op;
            }

        } 
        //console.log(this.innerText);
        if(this.innerText === '=') {
            if( input.innerText[input.innerText.length - 1] === '-' ||
                input.innerText[input.innerText.length - 1] === '*' ||
                input.innerText[input.innerText.length - 1] === '/' ||
                input.innerText[input.innerText.length - 1] === '+')
            {
                return;
            }

            console.log(input.innerText);
            try{
                
                output.innerText = eval(input.innerText);
            } catch {
                output.innerText = "Error";
                setTimeout(clear, 1000);
            }
        }
        flag = false;
    }
}

for(var i = 0; i < buttons.length; i++)
    buttons[i].onclick = onClick;*/