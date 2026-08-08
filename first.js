//=======================================================================//
//   1.  Variables in JavaScript
//=======================================================================//


// const account = 1235
// let accountEmail = "utsav"


// accountEmail = 5655

// console.log(accountEmail);

// console.table([account,accountEmail])


//======================================================================//
//    Notes 
//======================================================================//
/*const is use for to make value fixed 
  In let value can be change
  console.log() is used to display the item in terminal 
  console.table([]) is used to display more then i item at once

*/  



//=======================================================================//
//  2.   Data Types in JavaScript
//=======================================================================//

// let name = "utsav" // data type = "string" 
// let age = 20 // data type = "number" , number=> 2 to powwr 53
// let isMarried = false // boolean => true/false
// let address = null // null => standalone value
// let phoneNumber; // data type = "undefined"
// symbol => unique identey
// to know  the data type of the value we use console.log(typeof variableName)


//=======================================================================//
//   3. Datatype Conversation
//=======================================================================//

// let sorce = 500

// console.log(typeof sorce);

// let valueNumber = Number(sorce)
// console.log(typeof valueNumber);
// console.log(valueNumber);

//=======================================================================//
//     Notes
//=======================================================================//

// Number is used to convert the data type into number 
// String is used to convert the data type into string
// Boolean is used to convert the data type into boolean
// when can easily convert the string into number
// we cannot convert the "33abc" int to number the data type is NaN
// true is converted into 1 and false =0 
// 1=> true ; 0=> false ; "" => false ; "vaule" => true

//========================================================================//
//   4. Operations
//========================================================================//

/* 
       basic operaters
+ for additions
- for subtractions
* for mutipilcations
/ for divisons
// for getting quanist 
** for power of number
% for getting render

*/

/*
add two string wew write ; "str1" + "str2" = str1str2
if we do console.log("1"+2) => 12
         console.log(1+"2") => 12 
         console.log ("1"+2+2) => 122 
         console.log( 1+2+"2") => 32

*/
/* not to use this type to write code */
//  let num1 , num2 , num3 
// num1=num2=num3=2+2

/*========================================*/

//==================================================
//   5. Comprasion
//==================================================

/*
we can't compare the sring to number
null>=0 ,true ; nul==0 and > 0 are false
undifined== , > = , > 0 are false
when we use === it check the data type and value 
*/


//=================================================
//  6. Primitive datatype
//=================================================

// 7 types: string,number,boolearn,null,undefinied,bigint

// we didn't  need to define the type of variable
// their is not int and float numbers 
// const id = symbol('123')
// cont anotherId = symbol('123)
// const id =! const anotherId


//================================================
//  7. reference (non primitive)
//================================================

// Array,objects,functions

// Array examples
// const heros = ["iron man"," spiderman","frelix"]  
// we write array in [] brackets and "" quetes

/*  Object example 
let myObj = {
      name: " frelix",
      age: 22,
}
*/

/*
const myFunction = function(){
  console.log("Hello world")
}

console.log(type of myFunction) rturn function 
*/

// ====================================================
//        memory
// =======================================================
//  two type of memory


// Stack(primitive),  Heao(non-primitive) 
/*
1. stack(primitive) memory => provide copy of variable data for another variable if we use same variable to asign the vaule to differnt variable ,
                              in this main data did not change
2. Heap(non-primitive) memory => provide direact access to the main data of the variable if we use same variable to asign the vule to other variable

*/

// Example of Stack memory
/**
 let name = "utsav mali"
 let anotherNAme = name

 anotherName = "abhinav"
 console.log(name); // Output => utsav mali
 console.log(anotherNme)' // Output => abhinav 
 console.log(name); // Output => utsav mali
 */

// Example of Heap memory
/*
 let userOne = {
        email: "user@google.com"
        upi: "user@ybl"
 }
  let userTwo = userOne
  
  userTwo.email = "ustavgoogle@.com"
  
  console.log(userOne.email);  output =>  ustavgoogle@.com
  console.log(userTwo.email);   output => ustavgoogle@.com
  // same output because we change the main data of the variable
  
*/

//=====================================================
//   Number datatype
//=====================================================

