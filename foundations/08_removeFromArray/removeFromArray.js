const removeFromArray = function(array, ...values) {
    let checkArray = Array.from(values);
    let newArray = []
    for (const item of array) {
        if (!checkArray.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}

let array = [1, 2, 3, 4, 5]
console.log (removeFromArray(array, 3, 4, 5));

// Do not edit below this line
module.exports = removeFromArray;
