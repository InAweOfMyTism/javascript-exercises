const removeFromArray = function(inputArray, ...severalArguments) { //take inputs array and one or more objects
     
    //create an output array
    let outputList = [];
    //for each object in the array input
    for(let i = 0; i < inputArray.length; i++){
        //create variable to store whether or not it is a match, default false
        let isMatch = false;
        //check against each object in the parameter list
        //for each object in noGoList
        
        
                //is it a match?
                    // yes - set match variable to true
                    // no - do nothing
        //if match variable false copy into the output array
        
        if(!isMatch){
            outputList.push(inputArray[i]);
        }    
    }
        
    //return the output array
    return outputList;
};

// Do not edit below this line
module.exports = removeFromArray;
