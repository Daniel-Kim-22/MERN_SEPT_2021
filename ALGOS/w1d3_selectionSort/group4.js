/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){
    let size = arr.length;
    let min_indx = 0;
// loop through the array
    for( let i = 0; i < size -1; i++) {
        // set min index at the 1st position
        min_indx = i;
        // this loops through the rest of the array
        for(let j = i+1; j < size; j++) {
            // this checks if the previous value is greater
            if(arr[j] < arr[min_indx]) {
                min_indx = j;
            }
        }
        // performing the actual swap
        let temp = arr[min_indx];
        arr[min_indx] = arr[i];
        arr[i] = temp;

    }
}

console.log(selectionSort(myArr));