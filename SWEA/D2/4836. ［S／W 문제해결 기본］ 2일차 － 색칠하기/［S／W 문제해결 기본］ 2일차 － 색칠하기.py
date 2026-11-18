T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    matrix = [[0 for _ in range(10)] for _ in range(10)]
    cell_count = 0
    for _ in range(N):
        r1, c1, r2, c2, color = map(int, input().split())
        for i in range(r1, r2 + 1):
            for j in range(c1, c2 + 1):
                if matrix[i][j] == 0 or (matrix[i][j] != color and matrix[i][j] < 3):
                    matrix[i][j] += color
    for r in matrix:
        cell_count += r.count(3)
    print(f'#{test_case} {cell_count}')
    
    
