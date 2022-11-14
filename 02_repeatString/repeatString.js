const repeatString = function(str, num) {
    if (num < 0) {
        return ""; 
    } 
    else if (num === 1) {
        return str;
    }
    else {
        return str + repeatString(str, num - 1);
    }
};
  repeatString("hey", 3)  
  
// Do not edit below this line
module.exports = repeatString;
