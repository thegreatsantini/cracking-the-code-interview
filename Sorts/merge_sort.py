def sort(arr1, arr2):
    tempArr = []

    while ( len(arr1) > 0 and len(arr2) > 0 ):
        if ( arr1[0] < arr2[0] ):
            tempArr.append(arr1.pop(0))
        else:
            tempArr.append(arr2.pop(0))
    return tempArr + arr1 + arr2


def mergeSort(arr):
    if ( len(arr) <= 1 ):
        return arr
    
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    return sort( mergeSort(left), mergeSort(right) )


print(mergeSort([2, 5, -10, 20, 5, 50,1, 600, -0.1]))