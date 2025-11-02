function solution(keymap, targets) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const obj = {};
    
    alphabet.split('').forEach(el => {
        let num = 1000;
        for (const key of keymap) {
            const keyIndex = key.indexOf(el);
            if (keyIndex > -1) {
                num = Math.min(num, keyIndex)
            } 
        }
        obj[el] = num === 1000 ? -1 : num + 1;
    })
    
    const answer = targets.map(target => {
        let sum = 0;
        for (let i = 0; i < target.length; i++) {
            const currentValue = obj[target[i]];
            if (currentValue === -1) {
                sum = -1;
                break;
            } else {
                sum += currentValue;
            }
        }
        return sum;
    })
    
    return answer;
}