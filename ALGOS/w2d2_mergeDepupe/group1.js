// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

function mergeSortedArrays(leftArr, rightArr){
    let sortedArr = []
    let leftIdx = 0;
    let rightIdx = 0;

    while(leftArr[leftIdx] || rightArr[rightIdx]){
        //left array has ended push the rest of right array
        if(leftIdx==leftArr.length){
            for(rightIdx; rightIdx<rightArr.length; rightIdx++){
                //check to see if the last number pushed into the sorted array is not equal to the one we are pushing. 
                //dont want any duplicates
                if(!(sortedArr[sortedArr.length-1] == rightArr[rightIdx])) sortedArr.push(rightArr[rightIdx]);
                
            }
        }
        //right array has ended push the rest of left array
        else if(rightIdx==rightArr.length){
            for(leftIdx; leftIdx<leftArr.length; leftIdx++){
                //check for duplicates
                if(!(sortedArr[sortedArr.length-1] == leftArr[leftIdx]))  sortedArr.push(leftArr[leftIdx]);
            }
        }
        //check which side is greater
        else if(leftArr[leftIdx]<rightArr[rightIdx]){
            //check for duplicates
            if(!(sortedArr[sortedArr.length-1] == leftArr[leftIdx])){ 
                sortedArr.push(leftArr[leftIdx]);
                leftIdx++;
            }
        } 
        else {
            if(!(sortedArr[sortedArr.length-1] == rightArr[rightIdx])){ 
                sortedArr.push(rightArr[rightIdx]);
                rightIdx++;
            }
        }
    }
    return sortedArr;
    
}




mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// function mergeDedupe(arr1, arr2) {
//     let sortedArr = [];
//     let idx1 = 0;
//     let idx2 = 0;
//     let current = 0;
    
//     while (current < (arr1.length + arr2.length)) {
//         let unmerged1 = arr1[idx1];
//         let unmerged2 = arr2[idx2];
    
        
//         if (unmerged1 < unmerged2) {
//             sortedArr[current] = unmerged1;
//             idx1++;
    
        
//         } else {
//             sortedArr[current] = unmerged2;
//             idx2++;
//         }
//         current++;
//     }
    
//     return merged;
    
// }