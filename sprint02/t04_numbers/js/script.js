function parseBorders (msg, left, right) {
    let number = prompt(msg);
    while(number < left && number > right) {
        number = prompt(msg);
    }
    return number;
}

function checkDivision(beginRange, endRange) {
    let output = '';
    for (let i = beginRange; i <= endRange; i++) {
        output += i;
        if((i%2)===0 || (i%3)===0 || (i%10)===0) {
            let flag = false;
            if(i%2 === 0) {
                output += ' is even';
                flag = true;
            }
            if(i%3 === 0) {
                if(flag) {
                    output += ', a multiple of 3';
                }
                else output += ' a multiple of 3';
                flag = true;
            }
            if(i%10 === 0) {
                if(flag) output += ', a multiple of 10';
                else output += ' a multiple of 10';
            }
        } else {
            output += ' -';
        }
        output += '\n';     
    }
    console.log(output);
}

let leftBorder = parseBorders("Enter left border from 1 to 100", 1, 100);
let rightBorder = parseBorders("Enter right border from 1 to 100", 1, 100);

checkDivision(leftBorder, rightBorder);