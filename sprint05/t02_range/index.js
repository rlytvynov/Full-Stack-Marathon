
function checkDivision(beginRange = 1, endRange = 60) {
    let output = '';
    for (let i = beginRange; i <= endRange; i++) {
        output += 'The number ';
        output += i;
        if((i%2)===0 || (i%3)===0 || (i%10)===0) {
            let flag = false;
            if(i%2 === 0) {
                output += ' is divisible by 2';
                flag = true;
            }
            if(i%3 === 0) {
                if(flag) {
                    output += ', is divisible by 3';
                }
                else output += ' is divisible by 3';
                flag = true;
            }
            if(i%10 === 0) {
                if(flag) output += ', is divisible by 10';
                else output += ' is divisible by 10';
            }
        } else {
            output += ' -';
        }
        if(i!=endRange) output += '\n';     
    }
    console.log(output);
}

module.exports.checkDivision = checkDivision;
