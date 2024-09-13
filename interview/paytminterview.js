//
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
//     [4,5,6,7,0,1,2] if it was rotated 4 times.
//     [0,1,2,4,5,6,7] if it was rotated 7 times.
//     Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
//
//
//
//     const arr =  [5,1,2,3,4] ;
//
// // [4,5,6,7,0,1,2] if it was rotated 4 times.
// // [0,1,2,4,5,6,7] if it was rotated 7 times.
//
function findMin(arr){
    let low = 0; high = arr.length - 1 ;
    let ans = Infinity;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[low] <= arr[mid]){
            ans = Math.min(ans,arr[low]);
            low = mid +1
        } else {
            ans = Math.min(ans,arr[mid]);
            high = mid - 1;
        }
    }

    return ans;
}

//
// console.log(findMin(arr))
//
// 1 + “true”  -> 2
//    “true” - 1 ->0
// “1” - 1  11
//
//
// const p1 = Promise.reject("Error 1");
// const p2 = new Promise((resolve) => setTimeout(resolve, 100, "Success"));
// const p3 = new Promise((resolve) => setTimeout(resolve, 200, "Another success"));
//
// Promise.any([p1, p2, p3]).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });
// console.log(‘Success’)
//
//
// const p1 = new Promise((resolve) => setTimeout(resolve, 100, "Success"));
// const p2 = new Promise((resolve, reject) => setTimeout(reject, 50, "Error"));
//
// Promise.race([p1, p2]).then((value) => {
//     console.log(value); //’error’
// }).catch((error) => {
//     console.log(error); //error
// });
//
//
// console.log(‘Error’)
//
//
// Given an nested object which can have any type of object, deep flatten it and return the new object in Javascript.
//
//     For example
//
// Input:
// {
//     A: "12",
//         B: 23,
//     C: {
//     P: 23,
//         O: {
//         L: 56
//     },
//     Q: [1, 2]
// }
// }
//
// Output:
// {
//     "A": "12"
//     "B": 23,
//     "C.O.L": 56,
//     "C.P": 23,
//     "C.Q.0": 1,
//     "C.Q.1": 2,
// }
//
//
// <script src="script.js" async></script>
// <script src="script.js" defer></script>
//
// <div class="hello">hello</div>
// <div class="hello1">hello1</div>
// <div class="hello2">hello2</div>
// <div class="hello3">hello2</div>
//     .hello{
//     margin:20px;
// }
// .hello1{
//     margin:20px;
// }
// .hello2{
//     padding:20px;
// }
// .hello3{
//     padding:20px;
// }
//
// By how much px does  hello , hello1 and hello2 , hello3 will be separated and why ?
