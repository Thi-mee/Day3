const numbers = [15,4,7,2,20,6]


function fizzBuzzProMax(numbersArray){
  const arrayOfFizzBuzzArray = []

  numbersArray.forEach(function(number) {
    let fizzBuzzArray = []

    for (let i = 1; i <= number; i++) {
      
      if (i % 5 === 0 && i % 3 === 0) {
        fizzBuzzArray.push("FizzBuzz")
      }
      else if (i % 3 === 0){
        fizzBuzzArray.push("Fizz")
      }
      else if (i % 5 === 0 ){
        fizzBuzzArray.push("Buzz")
      }
      else{fizzBuzzArray.push (i)}
      
    }
    arrayOfFizzBuzzArray.push (fizzBuzzArray)
  });

  return arrayOfFizzBuzzArray
}

console.log(fizzBuzzProMax(numbers))


