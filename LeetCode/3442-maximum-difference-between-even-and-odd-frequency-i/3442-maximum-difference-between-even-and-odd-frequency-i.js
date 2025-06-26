/**
 * @param {string} s
 * @return {number}
 */
 
var maxDifference = function(s) {
    const countChar = {};
    const frequency = { odd: 0, even: 100 };

    for (const char of s) {
        countChar[char] = countChar[char] + 1 || 1;
    };

    Object.values(countChar).forEach(el => {
        if (el % 2 === 0) {
            frequency.even = Math.min(frequency.even, el);
        } else {
            frequency.odd = Math.max(frequency.odd, el);
        }
    })

    return frequency.odd - frequency.even;
};