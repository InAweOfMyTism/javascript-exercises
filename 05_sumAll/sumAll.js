const sumAll = function(input1,input2) {
    if (!(Number.isInteger(input1) && Number.isInteger(input2)) || (input1 < 0 || input2 < 0)){
        return 'ERROR';
    }

    let total = 0;
    let firstInt = input1;
    let lastInt = input2;

    if(input2 < input1){
        firstInt = input2;
        lastInt = input1;
    }

    for(let i = firstInt; i <= lastInt; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
