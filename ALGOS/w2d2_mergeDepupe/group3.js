// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

function mergeDedupe(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  
  //console.log(mergedArr);
  for(let i = 0; i< mergedArr.length; i++){
    for(let j =i+1; j<mergedArr.length; j++){
        if(mergedArr[i] === mergedArr[j]){
          //console.log(mergedArr);
          mergedArr.splice(j--, 1);
        }
    }
  }
  let sortedMerg = mergeSort(mergedArr);
  return sortedMerg;
}
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

console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])); // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) );// [1, 2, 3, 4, 5, 6, 8, 10, 12]