T = int(input())
for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    matrix = []
    
    for _ in range(N):
        num_list = list(map(int, input().split()))
        matrix.append(num_list)
        
    cm = 0
    max_m = 0
        
    for i in range(N - M + 1):
        for j in range(N - M + 1):
            cm = 0
            for k in range(M):
                #print(f"matrix[{i+k}][{j}:{j+M}]")
                m = matrix[i+k][j:j+M]
                #print(m)
                cm += sum(m)
            max_m = max(max_m, cm)
            #print(max_m)
    print(f"#{test_case} {max_m}")