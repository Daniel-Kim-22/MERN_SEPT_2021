// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){
    let sorted = true;
    //Need to loop through the array in order to sort 
    for(let i = 0; i < nums.length; i++){
      //Create inner for loop to iterate through all the values in array after position I
      for(let j = 0; j < (nums.length-i - 1); j++){
  
        //Perform the swap if the previous value is greater than the next value
        if(nums[j] > nums[j+1]){
            //Perform the swap in one line
            [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            //   let temp = nums[j];
            //   nums[j] = nums[j+1]
            //   nums[j+1] = temp;
            sorted = false;
        }
      }
      if (sorted) return nums;
    }
  }
 
  
  console.log("Before: " + nums1);
  bubbleSort(nums1);
  console.log("After: " + nums1);
  console.log("\n\n");
  
  console.log("Before: " + nums2);
  bubbleSort(nums2);
  console.log("After: " + nums2);
  console.log("\n\n");
  
  
  console.log("Before: " + nums3);
  bubbleSort(nums3);
  console.log("After: " + nums3);


