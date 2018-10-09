def quick_sort(arr):
    if ( len(arr) <= 0 ):
        return arr
    
    pivot = arr.pop(0)
    left = [elem for elem in arr if elem < pivot]
    right = [elem for elem in arr if elem >= pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)


print(quick_sort([4, 100, 0, -13, 4, 12, 44, 10]))