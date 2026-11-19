T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    matrix = [[0 for _ in range(N)] for _ in range(N)]
    sum_num = 9999
    c_lst = []
    idx_lst = []
    for i in range(N):
        lst = list(map(int, input().split()))
        for j in range(N):
            matrix[i][j] = lst[j]
    def get_cell(r):
        global sum_num
        if len(idx_lst) == N:
            sum_num = min(sum_num, sum(c_lst))
            return
        
        if sum(c_lst) > sum_num:
            return
        
        for i in range(N):
            if i in idx_lst:
                continue
                
            c_lst.append(matrix[r][i])
            idx_lst.append(i)
            
            get_cell(r + 1)
            
            c_lst.pop()
            idx_lst.pop()
    get_cell(0)
    print(f"#{test_case} {sum_num}")
