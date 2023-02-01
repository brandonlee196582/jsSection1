//Scope
console.log("---> Scope");
var conversation = [];

function myFunct(greeting){

    if(greeting === "Hello"){
        farewell = "Goodbye!"; 
        return [greeting, farewell];
    }
    if(greeting === "Good Day"){
        farewell = "Good Day to you too!";
        return [greeting, farewell];
    }
}

const myFunct2 = (greeting) => {

    if(greeting === "Hello"){
        farewell = "Goodbye!"; 
        return [greeting, farewell];
    }
    if(greeting === "Good Day"){
        farewell = "Good Day to you too!";
        return [greeting, farewell];
    }
}

console.log("function syntax - function");
conversation = myFunct("Hello");
console.log(conversation[0]);
console.log(conversation[1]);
conversation = myFunct("Good Day");
console.log(conversation[0]);
console.log(conversation[1]);

console.log("function syntax - =>");
conversation = myFunct2("Hello");
console.log(conversation[0]);
console.log(conversation[1]);
conversation = myFunct2("Good Day");
console.log(conversation[0]);
console.log(conversation[1]);