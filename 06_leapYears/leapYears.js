const leapYears = function(year) {
//var to hold value
let isLeapYear = false;
//is it div by 400
if(year % 400 === 0){
    isLeapYear = true;
} else if( year % 100 === 0){
    isLeapYear = false;
} else if(year % 4 === 0){
    isLeapYear = true;
}

return isLeapYear;
    //Y- leap year
    //is it div by 100?
        //Y - not a leap year
        // is it div by 4?
            //y - leap year
            //n - not a leap year

};

// Do not edit below this line
module.exports = leapYears;
