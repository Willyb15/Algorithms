# Algorithms, Sample Problems, and Objects used to Practice JavaScript Skillz.
### Algorithms discussed in Digital Crafts classroom others found on the interweb.
### Practice using Constructors to mass produce Objects
###Weekly Digital Crafts "Hacker Track" Code Challenges stored in the "HT" file. 
#### Here's some example code...
```js
// <!-- If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
var total = 0;
for(i=0; i <1000; i++){
    if(i%3 === 0 || i%5 === 0){
        total += i;
    }
}
console.log(total);

// ------------------------------------------------------

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function fibSum(){
    var sum = 0;
    var fib = [1, 2];
    
    for (var i = 2; i < 35; i++) {
        fib[ i ] = fib[ i - 1 ] + fib[ i - 2 ];
           
        if(fib[i]%2===0 && fib[i]<4000000){
            sum = sum + fib[i];
        }    
        
    }
    console.log(fib);
    return sum;
}

console.log(fibSum());

// -----------------------------------------
// FizzBuzz
// Print out the numbers 1-100, if the number is divisible by 3, print "Fizz" istead of the number. If it's divisible by 5, print "Buzz" instead of the number. If it's divisibly by both, print "FizBuzz". -->
function fizzBuzz(){
    for (var i = 0; i<55; i++){
        if(i%3 === 0 && i%5 ===0){
            console.log('FizzBuzz');
        }else if(i%3 === 0){
            console.log("Fizz");
        }else if(i%5===0){
            console.log("Buzz");
        }else
            console.log(i);
    }
}

console.log(fizzBuzz());


// Tougher Challenge
// The prime factors of 13195 are 5, 7, 13 and 29.
// ANSWER - 6857
// What is the largest prime factor of the number 600851475143 ?

  function isPrime(number) {
       if(number < 2) return false;
       for (var i = 2; i < number; i++) {
           if(number%i===0)
            return false;
       }
      return true;
    }



    function primeFactors (number){
       for (var i=2; i<= number/i; i++){
           console.log("i=" + i + " number=" + number);
       
       while(number %i === 0){
           number = number/i;
            console.log("Factor= "+ i);
        }
        }
        if(number>1){
            console.log("Last Factor=" + number);
        }
    }  
    primeFactors(600851475143);
```
####Added the movie app but build it with angular
