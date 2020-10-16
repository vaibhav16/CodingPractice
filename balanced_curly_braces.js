//Print well formed combinations of N{}. 

//#Approach 1 - Not Working
//Sir, this is how I tried to first time. But somewhere the call stack size is getting exceeded
let arr = [];
const generateCombinations1 = (str,n,left,right) =>{
  if(right==n){
    console.log(str);
    arr.push(str);
    return 
  }
  else{
    if(left>right)
     generateCombinations1(str+"}",n,left,right++);

     if(left<n)
      generateCombinations1(str+"{",n,left++,right)

  }
}

generateCombinations1("",3,0,0);


//********************************************************** */
//#Approach 2 - Working (Googled This Approach)
let arr2 = [];

const generateCombinations2 = (result, s, left, right) =>{
    if(left > right)
        return;
  
    if(left==0&&right==0){
        result.push(s);
        return;
    }
 
    if(left>0){
        generateCombinations2(result, s+"{", left-1, right);
    }
 
    if(right>0){
        generateCombinations2(result, s+"}", left, right-1);
    }
}

generateCombinations2(arr2, "", 3, 3);
console.log(arr2);
