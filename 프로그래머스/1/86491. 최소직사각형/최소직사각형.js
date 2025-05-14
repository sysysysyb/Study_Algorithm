function solution(sizes) {
    let bigLength = 0;
    let smallLength = 0;
    sizes.forEach((e) => {
           bigLength = Math.max(bigLength, Math.max(e[0],e[1]));
           smallLength = Math.max(smallLength, Math.min(e[0],e[1]));
    });
    return bigLength * smallLength;
}