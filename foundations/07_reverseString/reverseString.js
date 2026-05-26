const reverseString = function (str) {
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
