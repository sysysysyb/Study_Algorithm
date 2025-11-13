function solution(elements) {
    const elementSet = new Set(elements);
    // console.log(elementSet);
    const sum = elements.reduce((acc, cur) => {
       acc += cur; 
    }, 0);
    elementSet.add(sum);
    const arr = [...elements];
    // console.log(arr);
    
    for (let i = 1; i < elements.length - 1; i++) {
        for (let j = 0; j < elements.length; j++) {
            if (!arr[j + i]) {
                arr[j] += elements[(j + i) % elements.length];
            } else {
                arr[j] += elements[j + i];
            }
            // console.log(`arr[${j}] : ${arr[j]}`);
            elementSet.add(arr[j]);
        }
        // console.log(elementSet);
    }

    return elementSet.size;
}