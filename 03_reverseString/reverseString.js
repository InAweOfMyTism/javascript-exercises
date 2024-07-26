const reverseString = function(input) {
    //create output string
    let output = '';

    //do stuff to output string
    for(let i = 0; i < input.length; i++){
        output += input.at(input.length - (i + 1));
    }

    //return output string
    return output;
};

// Do not edit below this line
module.exports = reverseString;
