T = int(input())
for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    n_list = list(map(int, input().split()))
    max_n, min_n = 0, 0
    
    for i in range(N - M + 1):
        m_list = n_list[i:i + M]
        sum_m = sum(m_list)
        
        max_n = max(max_n, sum_m)
        min_n = sum_m if i == 0 else min(min_n, sum_m)
    
    print(f"#{test_case} {max_n - min_n}")