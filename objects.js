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
  },
  Type: function() {
    console.log("Type: " + this.type);
  },
  showSweetness: function() {
    console.log('Sweetness: '+ this.sweetness+ '/10');
  }
}

// console.log(donut);

//invoke the function of object
donut.sayHi();
donut.Type();
donut.showSweetness();

//constructor pattern for creating objects
function DonutConstructor(type, glazed, sweetness, hasChoclate){
  this.type = type;
  this.glazed= glazed;
  this.sweetness= sweetness;
  this.hasChoclate= hasChoclate;
  this.sayType = function(){
    console.log('Type: '+ this.type);
  }
  this.showSweetness = function() {
    console.log('Sweetness: '+ this.sweetness+ '/10');
  }
}

var coconutDonut = new DonutConstructor('coconut', false, 8, true);
var vanillaDonut = new DonutConstructor('vanilla', false, 9, true);

coconutDonut.sayType();
coconutDonut.showSweetness();
coconutDonut['tasteGood']= true;
console.log(coconutDonut);

vanillaDonut.sayType();


var myDonuts = [coconutDonut, vanillaDonut];
myDonuts.pop(); //vanillaDonut is pop out
console.log(myDonuts);