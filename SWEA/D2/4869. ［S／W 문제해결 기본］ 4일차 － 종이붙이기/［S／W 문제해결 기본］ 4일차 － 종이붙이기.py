def getCount(n):
    if n == 1:
        return 1
    elif n == 2:
        return 3
    elif n == 3:
        return 5
    else:
        return getCount(n - 1) + 2 * getCount(n - 2)
    
# f(n) = f(n-1) + 2f(n-2)

T = int(input())
for test_case in range(1, T + 1):
    N = int(int(input()) / 10)
    print(f"#{test_case} {getCount(N)}")
