// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

function mergeDedupe(arr1, arr2) {
    let mergedArr = [];

    for (var i = 0; i < arr1.length; i++) {
        // for loop to parse through the first array


        for (var j = 0; j < arr2.length; j++) {
            // second for loop to parse through the second array
            if (arr1[i] != arr2[j]) {
                if (arr1[i] < arr2[j]) {
                    mergedArr.push(arr1[i]);
                } else {
                    mergedArr.push(arr2[j]);
                }
            } else {
                mergedArr.push(arr2[j]);
            }
            console.log(mergedArr);
        }
    }
    
}


mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]