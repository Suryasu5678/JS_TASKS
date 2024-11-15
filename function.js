// function person(firstName,lastName) {
//   let msg = "hello" +" "+ firstName + " " + lastName + " "+"i'm learning javascript!";
//   console.log(msg);
// }
// person("surya","dotzz")

// function person(yourName) {
//   let msg = "welcome's you" + " " + "mr" + "." + yourName;
//   console.log(msg)
// }
// person('DoTzz')

// function add(Number1,Number2) {
//   let addition = "your Answer is" + " " + Number1+ Number2;
//   console.log(addition)
// }
// add(0,3)

//rest parameters arg parameter

// function name (firstName,lastName){
//     person=firstName + " " + lastName
//     console.log(person)
// }
// name("surya","dotzz")
// anonymous functionconst name = function(){}

//arrow fun

// let name = (firstName, lastName) => "welcome"+" " +firstName + " " + lastName;
// let fullName=name("hello","world")
// console.log(fullName)


// function square(sq){
//   let h = sq*sq
//  console.log(h)
// }
// square(5)


// let square=(sq,ssw)=>"square the value "+ "answer " + "is"+" "+sq*ssw
// let squares=square(5,10)
// console.log(squares) 



function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); 
console.log(addSquares(3, 4)); 
console.log(addSquares(4, 5));
