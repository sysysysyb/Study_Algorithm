for test_case in range(1, 11):
    b_count = int(input())
    b_list = list(map(int, input().split()))
    b_result = 0
    for i in range(2, b_count - 2):
        cb = min(b_list[i] - b_list[i-1], b_list[i] - b_list[i-2], b_list[i] - b_list[i+1], b_list[i] - b_list[i+2])
        if cb > 0:
            b_result += cb
    print(f'#{test_case} {b_result}')
