
// --------------
// Array stuff
// --------------
const array = [1,2,3,4,5,6,7]
const doubleArray = []

for (let index = 0; index < array.length; index++) {

  const element = array[index]
  const double = element*2

  doubleArray.push(double)
}

console.log('The double array is ', doubleArray)

// ----------------------------------
// while loop input prompt
// ----------------------------------

let badInputs = []

let input = prompt('Enter a number between 0 and 10')

while (input >= 10 || input <= 0) {

  badInputs.push(input)
  input = prompt('Try again: enter a number between 0 and 10')
  
}

console.log('You entered a valid input: ', input)

if (badInputs.length != 0) {
  console.log('You also entered the following bad input: ', badInputs)
}



// if (input < 10 && input > 0) {
//   console.log('valid ', input)
// } else if (input >= 10) {
//   console.log('invalid, greater than or equal to 10')
// } else if (input <= 0) {
//   console.log('invalid, less than or equal to 0')
// }


