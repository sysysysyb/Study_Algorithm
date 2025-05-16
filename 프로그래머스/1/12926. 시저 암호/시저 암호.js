function solution(s, n) {
    // 아스키 코드 : A - 65, a - 97, Z - 90, z - 122
    
    return ([...s].map(e => {
        let char = e.charCodeAt();
        if (char >= 65 && char <= 90) {
            return char + n > 90 ? String.fromCharCode(char + n - 26) : String.fromCharCode(char + n);
        } else if (char >= 97 && char <= 122) {
            return char + n > 122 ? String.fromCharCode(char + n - 26) : String.fromCharCode(char + n);
        } else {
            return ' ';
        }
    }).join(''));
}