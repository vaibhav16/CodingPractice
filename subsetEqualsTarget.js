//Find any subset in an array which adds to a given target t - Recursion

function findSubset(arr, n, target,newArr) {
    console.log("newArr: ",newArr);
    if(n==0)
    return "no subset";

    if(target==0)
    return newArr;

    if (arr[n - 1] > target)
        findSubset(arr, n - 1, target,newArr);

    newArr.push(arr[n-1]);    
    return findSubset(arr, n - 1, target,newArr)||findSubset(arr,n-1,target-arr[n-1],newArr);
}

let set = [1, -10, 9, 4, 3, 2];
let newArr = [];
let x = findSubset(set,set.length, 10,newArr);
console.log("answer:",x);
