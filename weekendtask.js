//array manipultion task

// 1 reduce ()  adding the number

// let num = [60050,10,120]
// let totalValue=  num.reduce((acc,curr)=>(acc+curr))//if we add another num use un shift or  + 8
// console.log(totalValue)

// 2 FILTER EVEN NUM

// const even= [1,2,3,4,5]
// let num = even.filter((num)=>num%2===0)
// console.log(num)

//  3 Find Maximum and Minimum

// const num = [1, , 2, 3, 4, 5, -6];
// let filtered = num.filter(Number.isFinite);

// let max = Math.max(...filtered);

// let min = Math.min(...filtered);
// console.log(max,min);

//4 reduce to find  occurence  the numbers

// function countOccurrences(arr, element) {
//   return arr.filter((item) => item === element).length;
// }

// let numbers = [1, 2, 3, 4, 2, 5, 2];
// console.log(countOccurrences(numbers, 2));

// 5  repeat numbers

// let numbers = [1, 2, 3, 4, 2, 5, 3];
// let uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);

// 6 function to reverse

// function reversed(arr, reverse) {
//   return arr.reverse((item) => item);
// }
// let numbers = [1,2,3,4,5,6,7]
// console.log(reversed(numbers))

// 7 merge two arrays

// function merge(a,b) {
//     return[...new Set([...a,...b])] // new set is use to avoid duplicates or repeated elements
//
function merge(a, b) {
  return [...a, ...b];
}
// }
// let c = [1,2,3,4,5]
// let d=[4,5,6,7,8]
// let e = merge(c,d)
// console.log(e)

// 8 common items

// function common(arr1,arr2) {
//  return arr1.filter((item) => {console.log("qqq") return arr2.includes(item)});
// }
// let array1 = [10,20,30]
// let array2 = [30, 40, 50];
// let commons = common(array1,array2)
// console.log(commons)

// obj manipulation
// task 1

// let person = { name: "surya", age: 23, location: "Nagercoil" };
// function property(obj) {
//     return `${obj.location},${obj.name}`
// }

//TASK 2 check property // if props are in the obj it says true

// function checkProperty(obj, prop) {
//     return obj.hasOwnProperty(prop);
// }

// let person = { name: "surya", age: 23, location: "Nagercoil" };
// console.log(checkProperty(person, "name"));
// console.log(checkProperty(person, "address"));

// task 3 entries obj in to array // give a array

// const obj = { a: 1, b: 2, c: 3 };
// const result = Object.entries(obj);

// console.log(result);

// task 4  obj assign all objects in one arrray

// function  join(obj1,obj2){
//    return Object.assign(obj1,obj2)
// }

// const a = {a:1,b:2}
// const b={c:4,d:5}
// const joins=join(a,b)
// console.log(joins)

// task5 length of  the key using with obj keys

// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// const example = { a: 1, b: 2, c: 3 };
// console.log(countProperties(example));

// task6 using find

// function findObj(arr, property, value) {
//   return arr.find((obj) => obj[property] === value);
// }

// const data = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// console.log(findObj(data, "name", "Bob"));

// String Manipulation Tasks

// 1  without string and reverse

function reverseString(st) {
  //   const a = st.split("");
  //   const b = a.reverse();
  //   const c = st.split("").reverse().join("");
  //   console.log(a, ".......", b, ".............", c);
  //   console.log();
  return st.split("").reverse().join("");
}

const reversed = "hello ni";
// console.log(reverseString(reversed));

const testFn = () => { return "niteesh"};


console.log(testFn(), "test");

// 2 capitalise the firstt letter

// function capitalizeWords(str) {
//     return str.split(' ')
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(' ');
// }

// const example = "hello world from javascript";
// console.log(capitalizeWords(example));

// 3 includes  it means  the sentence is include or not it is an boolean value

// function inc(str, substring) {
//   return str.includes(substring);
// }

// let text = "hello guys welcome";
// console.log(inc(text, "welcome"));
// console.log(inc(text, "Welcome"));// this one is  false bcoz  its caps  w

//  4 vowels and lengths

// function countVowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

// let text = "Hello, surya dotzz";
// console.log(countVowels(text));

// 5 replace all

// let text = "hai";
// let newText = text.replaceAll("h", "H");
// console.log(newText)

// 6 palindrome doubts

// function isPalindrome(str) {
//   let cleanedStr = str.toLowerCase();
//   return cleanedStr === cleanedStr.split("").reverse().join("");
// }

// console.log(isPalindrome("Madam"));
// console.log(isPalindrome("Hello"));

// 7 remove @

// function name(email) {
//   return email.split("@")[1];
// }

// let email = "user@example.com";
// console.log(name(email));
