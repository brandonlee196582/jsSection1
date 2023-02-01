
// Declaring Variables
let x1;
let someString1;
let y1;

// Declairing Variables and assigning a value
let x = 343; //number
let someString = "Wow, we're learning JavaScript!"; //string
let y = true; //boolean
let n = null; //null
let z; //undefined

console.log("---> Declairing Variables and assigning a value");
console.log("x is - " + x);
console.log("someString is - " + someString);
console.log("y is - " + y);
console.log("n is - " + n);
console.log("z is - " + z);
console.log();

//reassign variable with value
z = 777;

console.log("---> reassigning a variable");
console.log("z is no longer undefined, z is - " + z);
console.log();

//Splicing and array (why use pop or upshift?)
let cities = ["Ottawa", "Tokyo"];
console.log("---> Splicing arrays");
console.log("array before splice - " + cities);
cities.splice(0,0,"Ft Worth");
console.log("array after splicing at the front - " + cities);
cities.splice(1,1,"some city");
console.log("replaced Ottawa - " + cities);
console.log();

//Loops
console.log("---> Loops");
for (let step = 0; step < 3; step++) {
    console.log('For loop, Loops 3 times, loop # - ' + step);
}

let number1 = 10;
let number2 = 20;
console.log('While loop, Loops while number1 < number2');
while(number1 < number2){
    number1 = number1 * 2;
    number2 = number2 + 10;
    
    console.log("number1", number1);
    console.log("number2", number2);
}
console.log();

//iterating Objects
console.log("---> iterating Objects");
var anObject = { a: 1, b: 2, c: 3 };
console.log("returns key name");
for (var key in anObject){
  console.log(key);
}
console.log("returns key value");
for (var key in anObject){
    console.log(anObject[key]);
}
console.log("nested object");
var unitedStates = {
    population : 331900000,
    states : {
      nd : {
        capital: 'Bismark',
        population : 774948,
        largestCity : {
          name: 'Fargo',
          population : 126748
        }
      },
      tx : {
        capital : 'Austin',
        population : 29530000,
        largestCity : {
          name: 'Houston',
          population : 2326000
        }
      }
    }
  }
  console.log("returns population and states")
  for (key in unitedStates){
    console.log(key)
  }
  console.log("returns population number and states objects")
  for (key in unitedStates){
    console.log(unitedStates[key])
  }

  console.log("returns the largest city for each state with")
  for (key in unitedStates){
    if (typeof unitedStates[key] === 'object'){
        //console.log(unitedStates[key])
        for (subKey in unitedStates[key]){
            for (subSubKey in unitedStates[key][subKey]){
                if (typeof unitedStates[key][subKey][subSubKey] === 'object'){
                    console.log(unitedStates[key][subKey][subSubKey].name + ', ' + subKey + ' with a population of ' + unitedStates[key][subKey][subSubKey].population);
                }
            }
        }
    }
  }

console.log();

//iterating over Arrays
const apartments = [ ["001", "002", "003", "004", "005"], ["101", "102", "103", "104", "105"], ["201", "202", "203", '204', "205"], ["301", "302", "303", "304", "305"] ];

let myApt = "301";

console.log("---> iterating over Arrays");
for(let index = 0; index < apartments.length; index++){
  if (Array.isArray(apartments[index])){
  	let subArray = apartments[index];
    for(let subIndex = 0; subIndex < subArray.length; subIndex++){
    	if(subArray[subIndex] == myApt){
        console.log("procede to floor " + (index + 1));
      }
    }
  }
}
console.log();