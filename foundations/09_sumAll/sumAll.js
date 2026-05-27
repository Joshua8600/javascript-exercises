const sumAll = function(a, b) {
    let toAdd=[]
    if (Number.isInteger(a) == true && Number.isInteger(b) == true ) {
        if (a > 0 && b > 0 && b > a) {
            for (let i = a; i <= b; i++ ) {
                toAdd.push(i);
            };
        let sum = toAdd.reduce((sum, current) => sum + current, 0);
        return sum;
      } else if (a > 0 && b > 0 && b < a) {
            for (let i = b; i <= a; i++ ) {
                toAdd.push(i);
            };
        let sum = toAdd.reduce((sum, current) => sum + current, 0);
        return sum;
      } else if (a < 0 || b < 0) {
            return "ERROR";
        };
    } else {
        return "ERROR";
    };
};

// Do not edit below this line
module.exports = sumAll;
