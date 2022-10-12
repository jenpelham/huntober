//Fizz Buzz

/*Instructions
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

//number, whole numbers, no negatives
//return each number or word from 1 to input number
//n = 5 => 1, 2, fizz, 4, buzz
//n = 9 => 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
//n = 15 =>  1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

function fizzBuzz(num){
  //for loop from 1 to num
  for(let i = 1; i <= num; i++){
  //conditional
    //if num % 3 && num % 5 === 0, return fizzbuzz
    if(i % 3 && i % 5 === 0) {
      console.log('Fizz Buzz')
      //if num % 3 === 0, return fizz
    } else if (i % 3 === 0) { 
      console.log('Fizz')
      //if num % 5 === 0, return buzz
    } else if (i % 5 === 0) { 
      console.log('Fizz Buzz')
      //otherwise, return num
    } else { 
      console.log(i)
    }
  }
}

fizzBuzz(5) // 1, 2, fizz, 4, buzz
fizzBuzz(9) // 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
fizzBuzz(15) // 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz