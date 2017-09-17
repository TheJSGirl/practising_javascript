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

//sorted array
 var sortedArray =newMyArray.sort();
 console.log(sortedArray);

//reverse array
 var reversedArray =newMyArray.reverse();
 console.log(reversedArray);
 
 //concatted array
 var firstArray = [1, 2, 3, 4, 5];
 var secondArray = [6, 7, 8, 9, 10];
 var concattedArray = firstArray.concat(secondArray); 
 console.log(concattedArray);

 //if wants to add more then one array 
 var thirdArray = [11, 12, 13, 14, 15];
 concattedArray = firstArray.concat(secondArray, thirdArray);
 console.log(concattedArray);

//sliced method use to slice the array from first given index to second given index and it returns the subarray of old array
var slicedArray = concattedArray.slice(5); //after 5th index it provides subarray
console.log(slicedArray);

var slicedArray = concattedArray.slice(0, 5); //starts from zero index and stop slicing on 5th index
console.log(slicedArray); //1,2,3,4,5