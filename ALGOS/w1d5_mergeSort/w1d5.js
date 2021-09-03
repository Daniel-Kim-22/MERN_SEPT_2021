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
function merge(left, right) {
    // setup
    let sortedArr = []; // arr to built
    // track indecies
    let leftIdx = 0; 
    let rightIdx = 0;

    // logic
    // left [2,5,9]
    // right [4,6]

    while (left[leftIdx] || right[rightIdx]) {
        //    if this is null
        // undefined > 5                          later
        if (left[leftIdx] < right[rightIdx] || !right[rightIdx]) {
            //                               
            sortedArr.push(left[leftIdx]);
            leftIdx++
            //
        }
                                              // later
        else if (left[leftIdx] > right[rightIdx] || !left[leftIdx]) {
            sortedArr.push(right[rightIdx]);
            rightIdx++
        }

        // or go thru the lengths of the arrs
        // left > right
        // finish left arr

    }

    //  RETURN
    // result [2,4,5,6,9]
    return sortedArr;
}

function mergeSort(arr) {
    // base case
    if (arr.length == 1) {
        return arr;
    }

    // logic - slice left and right
    let left = mergeSort(arr.slice(0, arr.length/2));
    let right = mergeSort(arr.slice(arr.length/2));

    // recurse
    return merge(left, right);
}

// /--------------------------------
// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
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
function mergeSort11(arr) {
   // return arrays of single values
   if (arr.length < 2) {
       return arr;
   }

   // get the middle index, floor it to prevent floats
   const middle = Math.floor(arr.length / 2);
   const left = arr.slice(0, middle);
   const right = arr.slice(middle);

   // mergeSortedArray called on the result of mergeSort left and right
   //                              v
   //                              88                22
   return mergeSortedArrays(mergeSort(left), mergeSort(right)); // A function call is equal to what that function returns
}

// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays11(arr1, arr2) {
   let sort = [];

   while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
           // shift pops from the front, not ideal.
           sort.push(arr1.shift());
       } else {
           sort.push(arr2.shift());
       }
   }

   // takes remainders and squashes them together in cases with one array
   return sort.concat(arr1.slice().concat(arr2.slice()));
}

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
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
console.log(mergeSort(arr));

// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);








// function example() {
//     example();
// }

// example()


// 5!
// 5*4*3*2*1

// 3! 
// 3*2*1

// 2!
// 2*1

function factorial(num) {
    // 1. base case - break out!
    if (num === 1) {
        return 1;
    }
    // 2. logic
    // let numMunis1Fac = num -1;

    // 3. recursive call - return the function
    return num * factorial(num - 1);

}

factorial(4);
// 4*3*2*1































