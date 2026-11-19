T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    matrix = [[] for _ in range(N)]
    dr = [-1, 0, 1, 0]
    dc = [0, 1, 0, -1]
    nr, nc = 0, 0
    stk = []
    answer = 0
    for i in range(N):
        S = input()
        for j in range(N):
            matrix[i].append(int(S[j]))
            if S[j] == '2':
                nr, nc = i, j
                stk.append([nr, nc])
    while stk:
        lst = stk.pop()
        nr, nc = lst[0], lst[1]
        for i in range(4):
            next_r, next_c = nr + dr[i], nc + dc[i]
            if next_r >= 0 and next_r < N and next_c >= 0 and next_c < N:
                if matrix[next_r][next_c] == 0:
                    stk.append([next_r, next_c])
                    matrix[next_r][next_c] = 1
                elif matrix[next_r][next_c] == 3:
                    nr, nc = next_r, next_c
                    break
        if matrix[nr][nc] == 3:
            answer = 1
            break
    print(f"#{test_case} {answer}")
    
