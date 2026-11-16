T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    S = input()
    card_list = [c for c in S]
    card_dict = {}
    
    for c in card_list:
        card_dict[c] = card_dict.get(c, 0) + 1
    
    max_v = max(card_dict.values())
    max_card_list = [k for k, v in card_dict.items() if v == max_v]
    print(f'#{test_case} {max(max_card_list)} {max_v}')
