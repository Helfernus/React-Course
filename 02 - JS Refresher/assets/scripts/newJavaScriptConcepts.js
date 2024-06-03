import * as nested from './nestedFunction.js'
// const userNameData = ['Souradeep', 'Mukherjee']; | Destructured below

const [firstName, lastName] = ['Souradeep', 'Mukherjee'];
console.log(firstName);
console.log(lastName);

const { name: userName, age } = { //Using aliasing on name property, RHS of colon on LHS of =
    name: 'Souradeep',
    age: 27
}

console.log(userName);
console.log(age);


//Normal object received
function storeOrder(order) {
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
}

//Directly using destructuring | Receiving 1 parameter and Destructuring internally on argumemt receiving
function storeOrderNew({ id, currency }) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}


//Spread Operator
const hobbies = ['Music', 'Futbol', 'Gaming'];
const likes = ['Movies', 'Series', 'Exercising'];

const mergedArray = [...hobbies, ...likes];
console.log(mergedArray);

const user = {
    name: 'Souradeep',
    age: 27
}

const extendedUser = {
    ...user,
    isAdmin: true
}

console.log(extendedUser);


for (const hobby of hobbies) {
    console.log(hobby);
}


//Function passed as value

function handleTimeout() {
    console.log('Timed Out!');
}

const anotherTimeoutHandler = () => console.log('Again Timed Out!');

setTimeout(handleTimeout, 1000);
setTimeout(anotherTimeoutHandler, 2000);
setTimeout(()=> console.log('More timing out!'), 3000);


function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log('Hi! Greetings!')); //Function '() => console.log('Hi! Greetings!')' passed as value
