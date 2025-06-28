/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let str = '';
    const l = s.length;

    for (let i = 0; i < l; i++) {
        console.log(`${i}번째 반복`);
        str += s[i];
        console.log(`str : ${str}`);
        const setStr = new Set(str);
        // setStr.forEach(el => console.log(el))
        console.log(`setStr : ${[...setStr].join('')}`);

        if (str !== [...setStr].join('')) {
            console.log(`반복되는 문자열 존재!`);
            const idx = str.indexOf(s[i]);
            console.log(`idx : ${idx}`);
            const subStr = str.substring(idx + 1);
            console.log(`subStr : ${subStr}`);
            str = subStr;
        } else {
            maxLen = Math.max(maxLen, str.length);
            console.log(`maxLen : ${maxLen}`);
        }

        console.log(`\n`);
    }

    return maxLen;
};