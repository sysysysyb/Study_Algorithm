for test_case in range(1, 11):
    d_count = int(input())
    box_list = list(map(int, input().split()))
    max_i, min_i = 0, 0
    
    for k in range(d_count):
        if k != 0 and box_list[max_i] - box_list[min_i] <= 1:
        	break
        for i, b in enumerate(box_list):
            if b > box_list[max_i]:
                max_i = i
            if b < box_list[min_i]:
                min_i = i
        box_list[max_i] -= 1
        box_list[min_i] += 1
    
    max_box, min_box = max(box_list), min(box_list)
    print(f"#{test_case} {max_box - min_box}")