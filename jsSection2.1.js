console.log(document.querySelector('div'))
console.log(document.querySelectorAll('div'))
console.log(document.querySelectorAll('div')[0])
console.log(document.querySelectorAll('div')[1])
console.log(document.querySelector('#myHello'))
console.log(document.querySelector('#myGoodbye'))
console.log(document.querySelector('.myDivs'))

let goodbyeElement = document.querySelector('#myGoodbye')
console.log(goodbyeElement.style)

goodbyeElement.style.backgroundColor = "blue";

console.log(document.querySelector('input').id);
let myInputElement = document.querySelector('#myInput');
console.log(myInputElement.style);

myInputElement.placeholder = "input here";

let newH1 = document.createElement('h1');
let content = document.createTextNode('Greetings Page');
newH1.appendChild(content);
let container = document.querySelector("#container");

container.insertBefore(newH1, document.querySelector("#container").childNodes[0]);
