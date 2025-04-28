function solution(my_string) {
    return (my_string.split('').reduce((acc, cur) => { 
        return isNaN(cur*1) ? acc : acc + cur*1; 
    }, 0));
}