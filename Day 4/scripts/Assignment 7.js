function prime(){

let n = document.getElementById("number").value;

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  
  primes = [] ;
  
  for(let i = 2; i <= n ; i ++) {
  if(isPrime(i)) {
     primes.push(i)
   }
  }
  
document.getElementById("result").innerHTML = primes;
}