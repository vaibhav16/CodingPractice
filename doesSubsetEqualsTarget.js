//Find if any subset in an array which adds to a given target t - Recursion

/*I wasn't able to solve this myself, so I looked up the algo on Geeks for Geeks and basically this solution is from there.
I could see DP oriented approach as well, which I could understand but wanted to try the recursion approach first.

For some reason, I'm not able to maintain an updated array, which stores the elements traversed till now. 
That array should be passed as a parameter recursively and it updates itself. 
When Target is found to be zero, that array should be returned.
*/

function findSubset(arr, n, target) {

    if(target==0)
    return true;

    if(n==0)
    return false;


    if (arr[n-1] > target)
        return findSubset(arr, n - 1, target);


    return findSubset(arr, n - 1, target)||findSubset(arr,n-1,target-arr[n-1]);
}

let set = [1, -10, 9, 4, 3, 2];
let target = 10;

let x = findSubset(set,set.length, target);
console.log("answer:",x);
