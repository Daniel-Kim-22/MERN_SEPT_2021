function mergeSort(arr){
    if(arr.length===1){
        return arr;
    }


    let middle = Math.floor(arr.length/2);
    left = arr.slice(0,middle);
    // mergeSort(left);
    let right = arr.slice(middle, arr.length);
    // mergeSort(right);

    return mergeSortedArrays(mergeSort(left),mergeSort(right));


// return a new sorted array with all of the values of arr1 and arr2
// takes 2 sorted arrays and merges them together
// solve this first
function mergeSortedArrays(leftArr, rightArr){
    let sortedArr = []
    let leftIdx = 0;
    let rightIdx = 0;

    while(sortedArr.length != (leftArr.length+rightArr.length)){
        if(leftIdx==leftArr.length){
            for(rightIdx; rightIdx<rightArr.length; rightIdx++){
                sortedArr.push(rightArr[rightIdx]);
                
            }
        }
        else if(rightIdx==rightArr.length){
            for(leftIdx; leftIdx<leftArr.length; leftIdx++){
                sortedArr.push (leftArr[leftIdx]);
            }
        }
        else if(leftArr[leftIdx]<rightArr[rightIdx]){
            sortedArr.push(leftArr[leftIdx]);
            leftIdx++;
        } 
        else {
            sortedArr.push(rightArr[rightIdx])
            rightIdx++;
        }
    }
    return sortedArr;
    
}
}
var arrTest = [88, 22, 44, 12, 99, 111, 9, 15, 49]
console.log(mergeSort(arrTest))