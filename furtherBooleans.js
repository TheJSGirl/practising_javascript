var myArray = ['abc', 1, 2, 3];
console.log(Boolean(myArray));

//if you had to something is undefined
var undefinedValue ;
console.log(Boolean(undefinedValue));

//null and undefined both are different from each other
var nullValue = null; //contains null value that means nothing
var undefinedValue; //undefined value means expecting in future 

if(nullValue === undefinedValue){
  console('both equal to each other');
}
else{
  console.log('not equal to each other')
}

console.log(nullValue === undefinedValue);