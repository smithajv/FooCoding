console.log("Hello!"); //English
console.log("Namaste"); //Kannada
console.log("Hej"); //Swedish

console.log('I'm awesome');

var x;
console.log("x:integer");
console.log(x);
x=5;
console.log("The value of x is a number");
console.log(x);

var y = "string";
console.log("the value of y:string");
console.log(y);
y = "new string";
console.log("the value of y:new string");
console.log(y);


var z = 7.25;
console.log(z);
var a = math.round(z);
console.log(a);
console.log(math.max(a,z));


var animals = [];
console.log("The value of the array is null");
console.log(animals);
var pets = [ "novels","dramas"];
console.log(pets);
pets.push("dog");
console.log(pets);


let myString = "this is a test"
console.log(myString);
myString = myString.length;
console.log(myString);


var number = 8; 
var string = " they are the same type"; 
var noValue = null;
var nameFieldChecked = true;
console.log(number);
console.log(string);
console.log(noValue);
console.log(nameChecked);

console.log("the type of my variable number will be: number");
console.log("the type of my variable newString will be: string");
console.log("the type of my variable noValue will be: object")
console.log("the type of my variable nameChecked will be: boolean")

typeof number; //number
typeof string;//string
typeof noValue;//object
typeof nameChecked;//boolean

console.log(number === string);//false
console.log(noValue === nameChecked); //false
console.log(number == string); //false
console.log(noValue == nameChecked);//false


var x=7;
console.log(7 % 3); // answer is 1

console.log( 5 % 2); // output is 1
console.log (10 % 3); //output is 1
console.log( 4 % 2); //output is 0


var mulArr = ["sky", 5, "cyckle", "blue", 0];
console.log(mulArr[3]); // blue

if(6 / 0 === 10 / 0) {
    console.log("Infinite");
} 
else { 
console.log("Try again");}
