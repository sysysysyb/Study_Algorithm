function solution(n) {
    // n = 0, 1일 때
    if (n === 0 || n === 1) {
        return n;
    } else {
        // 2 이상의 정수는 약수로 1을 무조건 가지고 있기 때문에 1을 더한 채로 시작
        let answer = 1;

        // n의 절반보다 작은 수를 모두 나누어 나머지가 0이 나오는 숫자는 answer에 더함
        for (let i = 2; i <= Math.floor(n / 2); i++) {
            if (n % i === 0) {
                answer += i;
            }
        }

        // 약수에는 자기 자신도 포함이기 때문에 answer에 n을 더해줌
        answer += n;

        // 정답 출력
        return answer;
    }
}