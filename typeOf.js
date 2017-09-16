//to check the type of number
console.log(typeof 10);
console.log(10 * 5);

//if you have a number represtention of string interpreter will concate the two operands.

console.log('10'+ 213);

//to convert a string into interger we use parseInt function and parseInt takes two arguments first is binary and second is base like parseInt('10', 2) gernally we take only one argument.
console.log(parseInt('10') + 213);

//Nan stands for not-a-number
console.log(parseInt('hellooo....'));// it gives nan because parseInt apply only on numbers 

//isNaN function gives boolean value if the give value is in string it means it satifying the condition of isNaN so that isNaN function will return the true boolean value 
console.log(isNaN('hiiii'));// true
console.log(isNaN(1)); //false


//very important
//another way to convert string into number by using ternary operator "+" instead of parseInt

console.log(+ '10');