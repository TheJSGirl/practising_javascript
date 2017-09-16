//Booleans
//in javaScript to check something true or false, we get boolean value
//lets take an example in which I am assinging the boolean value to a variable and then check it wheather its type is exactly equal to boolean types

var shouldBeTrue = true;
var shouldBeNull = null;
// console.log(shouldBeTrue === true) //true
// console.log(shouldBeTrue === false) //false

if(shouldBeTrue === true){
  console.log('Hello!!!');
}

else{
  console.log('This var is not true');
}

//check shouldBeNull is equal to true
console.log(shouldBeNull === true); //false because technically shouldBeNull contains non value...

//another way to check boolean value of variable
//following evaluates to true
var hasContent = 'yes';

console.log(Boolean(hasContent)); //true because variable contails some text

//following evaluates to false
var isZero =0;
var doesNotHaveContent = '';

console.log(Boolean(doesNotHaveContent)); //false because variable does not contain anything 

console.log(Boolean(isZero));