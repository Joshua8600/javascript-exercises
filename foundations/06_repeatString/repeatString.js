function repeatString(str, num) {
    let output = '';
    if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 1; i <= num; i++) {
            output += str;
        }
    } return output
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
