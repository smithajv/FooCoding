//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
let myString = string.length;
myString = myString.replace("," " ")


//2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.unshift("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(2,0,'meerkat'); 
console.log(favoriteAnimals);     // ["blowfish", "meerkat", "capricon", "giraffe"];
let len = favoriteAnimals.length);
console.log("the array has a length of:" + " " + len);
favoriteAnimals.pop("giraffe");
 console.log(favoriteAnimals);
 let katIndex = favoriteAnimals.indexOf("meerkat");
 console.log("the item you are looking for is at index:" + " " + katIndex);

// More javascript //1
let sum = function(x,y,z)
{
	return(x+y+z);
}
console.log(sum(1,1,1));
  
  //2     Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
  
  function colorCar(color)
{
    return "a" + " " + color + " " + "car";
}
console.log(colorCar("red"));


//3   Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let person = {
	name: "John";
	age: 34;
	eye-color: "blue";
	
}

//4
function vehicleType(color,code)
{
    let string = "a" + " " + color + " ";
if (code == 1)
{
    string = string + "car";
}
else if (code == 2)
{
    string = string + "motorbike";
}
return string;
}
console.log(vehicleType("blue", 2));

//5
console.log(3 === 3? "yes" : "no"); 

//6
function vehicle(color,code,age)
{
      let string = "a" + " "  + color + " ";
      if (age === 5) {
if (code === 1)
{
    string = string + "used car";
}
      }

else if (code === 2)
{
    string = string + "new car";
}
return string;
}
console.log(vehicle("blue", 1, 5));

//7
let vehicles = [motorbike,caravan,bike,car];
console.log(list);
//8
let myList = list[2];
console.log(myList);

//9

//10
function advert() {
let string = "Amazing Joe's Garage, we service ";
 for (let i = 0; i < vehicles.length; i++) {
        if (i === list.length - 1) {
            string = string + "and " + list[i] + "s.";
        } else {
            string = string + list[i] + "s, ";
        }
    }

//11
vehicles.push("truck");
advert()

//12
let obj = {};
console.log(obj);

//13
let teachers = 
{ 
Marco: "javascript",
	Fady: "HTML",
	Tommy:  "CSS"
	};
	//14
teachers.Marco.languages = "web-development";
console.log(teachers.Tommy);

//15

let x = [1,2,3];
let y = [1,2,3];
let z = y;
  
  console.log(x==y);  false //Even though x and y have same values they are not equal because they refer to the different reference in the memory.
  console.log(z==y);  true
  console.log(z==x); false
  
  //16
  let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

//17
let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar);
  // it return a string