//Exponent Problem using recursion
const power = (x, y) => {
    if (y >= 1)   
      return (x * power(x, --y))
    else 
    return 1;
  }
  
  console.log(power(5,3));