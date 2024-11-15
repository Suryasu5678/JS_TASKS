// let name = ["surya","vijay","ajith"]
// name.forEach((names)=>console.log(names))
// array method foreach

// let person = ["ss", "yy", "zz"];
// person.foreach((persons) => console.log(persons));
// array method foreach is used to take a string in to straight line

// map

// const a=[1,2,3]
// a.map((aa)=>console.log(aa*3))

// const no=["surya","max","yoo","hhh"]
// console.log(no.copyWithin(0, 1, 2));
// copywithin

// let fruits = ["banana","apple","orange"]
// fruits.filter((object) => console.log(object.length>5));
// filter with true or false

// let name=[{
//     id:1,
//     name:"surya",
// },
// {
//   id:2,
//     name:"aaarya"  ,
// },
// {
//   id:3,
//     name:"marry"  ,
// }]
// name.filter((names)=>console.log(names.name))

// filter those id and names

// reduce

// let a = ["1", "6", "manoj"];
// console.log(a.map((data) => data * 2)); map

// let name = [
//   {
//     name: "surya",
//   },
//   { name: "manoj" },
//   {
//     name: "surya",
//   },
//   {
//     name: "raju",
//   },
// ];
// console.log(name.filter((data) => data.name === "surya"));

// const h = [11, 2, 3, 4, 444, 11, 22, 34, 11];
// console.log(h.filter((data) => data == 11));

// const i = [
//   {
//     name: "surya",
//     age: "hlo",
//   },
//   {
//     name: "asd",
//     age: "hlo",
//   },
//   {
//     name: "dfsd",
//     age: "hlo",
//   },
//   {
//     name: "asfds",
//     age: "hlo",
//   },
// ];

// console.log(i.filter((data) => data.name.includes("asd")));

// const r = [100, 200, 300];
// console.log(r.reduce((pre, curr) => pre + curr, 8));

// const h = [2,18];
// h.reduce((pre, curr) => console.log(pre + curr, 8));

// includes

// const num = [1, 2, 3, 4, 5];
// console.log(num.includes(3))

// true or false

// fruits = ["mango", "orange", "apple", "lemon"];
// fruits.join("*");
// console.log(fruits); join the stars*

// let a = [1, 2, 3, 4, 5, 6];
// a.pop();
// console.log(a);  remove last one

// let a = [1, 2, 3, 4, 5, 6];
// a.push(7, 8);
// console.log(a); push to  last text

// let a = [1, 2, 3, 4, 5];
// let b = a.toString();
// console.log(b.length);
// add the length of coma also

// let fruits = ["mango", "orange", "apple", "lemon"];
// let result = fruits.slice(2, 3);
// console.log(result);

// fruits = ["mango", "orange", "apple", "lemon"];
// fruits.splice(2, 2, "kiwi", "banana");
// console.log(fruits);
// // 1 st one is remove 2nd one in add

// find,every,some,concat,sort,flat  ---> array
//assign,delete --->object
//String  methods ,Template literals (string)
// https://www.w3schools.com/js/js_string_methods.asp
//niteesh@spritle.com
//
// ES6
// Destructure,spread,rest

// find

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((no) => no > 10);

// console.log(found); first matched element

// every predicate boolean it sees every values

// const marks = [90,56,78,54,30 ]
// marks.every((mark)=>console.log(mark>50))

// concat adding the last number

// const marks = [90,56,78,54,30 ]
// const marks2 = [59, 60];
// const total=marks.concat(marks2)
// console.log(total)

// const marks = [90, 56, 78, 54, 30];
// //true or false
// let value = marks.some(val=>val>30)
// console.log(value)
// check all values in the array

// const fruits = ["banana","apple","grape","orange"]
// const result = fruits.sort
// console.log(result)
// asscending result designing wise sort a,b

//flat
// multi dmentional Array . make simple array (matrix.array)
// result without an array
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const result=matrix.flat()
// console.log(result)

// const a = { a: 1, b: 2 };
// const b = { b: 4, c: 5 };

// const targets = Object.assign(a, b);

// console.log(a);

//reassign new words 

//delete

// const Employee = {
//   firstname: "Maria",
//   lastname: "Sanchez",
// };
// console.log(Employee.firstname)
// delete Employee.firstname
// console.log(Employee.firstname)

// const employee ={
//     name:"surya",
//     age:24,
//     id:2}
//     delete employee.id
//     console.log(employee)
 // delete those name or any in objects

 