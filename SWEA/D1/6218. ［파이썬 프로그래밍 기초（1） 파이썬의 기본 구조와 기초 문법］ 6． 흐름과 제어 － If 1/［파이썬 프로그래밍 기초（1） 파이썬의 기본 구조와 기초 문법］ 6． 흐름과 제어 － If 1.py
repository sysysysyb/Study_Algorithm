N = int(input())
lst = [1]

for n in range(2, int(N ** (1 / 2) + 1)):
    if int(N % n) == 0:
        lst.append(n)
        if n != int(N / n):
            lst.append(int(N / n))

lst.sort()
lst.append(N)

for n in lst:
    print(f"{n}(은)는 {N}의 약수입니다.")