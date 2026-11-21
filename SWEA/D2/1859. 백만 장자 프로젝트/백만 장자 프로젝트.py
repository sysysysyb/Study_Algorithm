
T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    lst = list(map(int, input().split()))
    max_num = 0
    profit = 0
    
    for n in reversed(lst):
        max_num = max(max_num, n)
        
        if n < max_num:
            profit += max_num - n
    
    print(f"#{test_case} {profit}")