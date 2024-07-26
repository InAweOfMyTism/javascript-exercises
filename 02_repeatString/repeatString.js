const repeatString = function(input, count) {
    let output = '';
    if(count >= 0){
        for(let i = 0; i < count; i++){
            output += input;
        }
    } else {
        output = 'ERROR';
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
