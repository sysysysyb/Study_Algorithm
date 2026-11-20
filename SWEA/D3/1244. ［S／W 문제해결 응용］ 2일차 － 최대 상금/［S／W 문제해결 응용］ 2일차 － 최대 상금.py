T = int(input())
for test_case in range(1, T + 1):
    num, count = input().split()
    num_set = {num}
    
    for _ in range(int(count)):
        new_num_set = set()
        
        for n in num_set:
            for i in range(len(num)):
                for j in range(i + 1, len(num)):
                    lst = list(n)
                    lst[i], lst[j] = lst[j], lst[i]
                    new_num_set.add(''.join(lst))
        
        num_set = new_num_set
    
    print(f"#{test_case} {max(num_set)}")
        
                
    