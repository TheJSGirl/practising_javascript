//Objects
//Collection of name-value pairs

var myName={
  1: 'chris'
};
console.log(myName);

var myObject = new Object(); //it takes lil time
myObject['1'] = 'John';
myObject['2'] = 'Bob';
myObject['3'] = 'Rihana';
console.log(myObject);

var myOtherObject = {
  1: 'chris',
  2: 'sally',
  3: 'Billy'
};

myOtherObject['unique value'] = "Ashley";

console.log(myOtherObject);

var anotherObject = {
  first_name: 'priyanka',
  last_name: 'negi',
  age: 20,
  mobile_no: '444-555-555'
}

console.log(anotherObject);
//way to access the properties of an object
console.log(anotherObject.first_name);
console.log(anotherObject['first_name']);

//object inside object 
var newObject = {
  first_name: 'John',
  last_name: 'smith',
  age: 40,
  numbers:{
    mobile: '555-444',
    home: '666-777-888'
  },
  address: '123 fake st.', 
}

//go down in nested object
console.log(newObject);
console.log(newObject.numbers);
console.log(newObject.numbers.mobile);
var userMobileNo = newObject.numbers.home;

console.log(userMobileNo);

var donut = {
  type: 'coconut',
  glazed: true,
  sweetness: 8,
  hasChoclate: false,
  sayHi: function() {
    console.log('hi....');
  }
}

// console.log(donut);

//invoke the function of object
donut.sayHi();