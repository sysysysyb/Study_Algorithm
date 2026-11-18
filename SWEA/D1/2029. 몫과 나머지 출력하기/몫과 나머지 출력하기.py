T = int(input())
for test_case in range(1, T + 1):
    x, y = map(int, input().split())
    a = int(x / y)
    b = x % y
    print(f"#{test_case} {a} {b}")
