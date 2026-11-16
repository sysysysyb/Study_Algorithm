T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    N, S = input().split()
    int_n = int(S, 16)
    bin_n = bin(int_n)[2:].zfill(int(N) * 4)
    print(f"#{test_case} {bin_n}")
