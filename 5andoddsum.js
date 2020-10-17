//Given a set of integers, find two sets such that sum of one set is multiple of 5 and sum of other set is odd

function find5Multiple(arr){
    let sum = arr.reduce((a,b)=>a+b);
    let remainder = sum%5;
    console.log(remainder);
    console.log(sum);
    if(remainder==0)
    return arr;
    else{
        let arr2 = arr.filter((item)=>item!=remainder);
        arr2 = arr2.filter((item)=>item%5==0);
        console.log(arr2);
        console.log(arr2.reduce((a,b)=>a+b));
    }
}

find5Multiple([10,33,9,29]);