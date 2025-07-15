function solution(s) {
    const arr = s.split(' ');
    
    for (const [idx, str] of arr.entries()) {
        if (str === '') continue;

        // console.log(`str : ${str}`);
        const firstStr = typeof str[0] === Number ? str[0] : str[0].toUpperCase();
        
        const restStr = str.substring(1).toLowerCase();
        arr[idx] = firstStr.concat("", restStr);
        
    }
    
    // console.log(arr);
    
    return arr.join(' ');
}