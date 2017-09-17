//Arrays
//Collection of data
// var myArray = [1, 2, 3, 'abcd', 'efgh', true];
// console.log(myArray.length);

var myNamesArray = new Array();
 myNamesArray[0] = 'chrise';
 myNamesArray[1] = 'jhone';
 myNamesArray[2] = 'Smith';
 
 

 console.log(myNamesArray);
 console.log(myNamesArray[10]); //undefined


 //prefered way to define array is :
 var newMyArray = ['priyanka', 'ankita', 'radhika', 'ashwani', ['blue', 'red', 'green', 'orange', 'pink']];
 newMyArray.push('anshika');
 newMyArray.push(100);
 console.log(newMyArray);
 newMyArray.pop(); //it deletes the last element of an array
 console.log(newMyArray);
 console.log(newMyArray[4]); //acessing the fourth element of an array
 console.log(newMyArray[4][0]);//acessing the zeroth index of 4th element

 
 var sortedArray =newMyArray.sort();
 console.log(sortedArray);
 
