// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// mergeSortedArrays(left, right)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)


// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays()
function mergeSort(arr) {
    // base case
    if (arr.length === 1) {
        return arr;
    }
    
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,arr.length)

    return mergeSortedArrays(left, right)
}

// return a new sorted array with all of the values of leftArr and rightArr
// takes 2 sorted arrays and merges them together
// solve this first
//                       [2,5,9]      [4,6]
function mergeSortedArrays(leftArr, rightArr) {
    // setup
    let sortedArr = []

    while (leftArr.length  && rightArr.length) {
        if(leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr.shift();
        } else {
            sortedArr.push(rightArr[0]);
            rightArr.shift();
        }
    }

    if(leftArr.length) {
        sortedArr.push(leftArr[0]);
    }
    
    if(rightArr.length) {
        sortedArr.push(rightArr[0]);
    }
    
    return sortedArr;
}

// //steps:
//     1. create a mergeSortedArrays(leftArr, rightArr) function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to USE a new array
//     2. create mergeSort(arr) function to sort the provided array
//       - split the array into half and recursively merge the halves (run mergeSort on those 2 halves)
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);