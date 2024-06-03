export let title = 'Title';

//Types of Values - String, Number, Boolean, Null and undefined

//Variables - Data Containers
//Const - Read only


//Functions
function createGreeting(username, message = 'Hello!') { //Definition with parameters
    // console.log('Hello!');
    // console.log(username);
    // console.log(message);
    return 'Hi!, I am ' + username + '.' + message;
}

console.log(createGreeting('Max', 'Buen Dia!')); //Call
console.log(createGreeting('John'));
console.log(createGreeting('Sadie', 'Hola!'));

const hobbies = ['Music', 'Futbol', 'Gaming'];
console.log(hobbies[1]);
hobbies.push('Drawing');
console.log(hobbies);

const musicIndex = hobbies.findIndex((item) => {
    return item === 'Music';
});

const futbolIndex = hobbies.findIndex((item) => item === 'Futbol'); //Similar to above but shortened even more

console.log(musicIndex);
console.log(futbolIndex);

const exclaimedHobbies = hobbies.map((item) => item + '!'); //Original Array unchanged
console.log(exclaimedHobbies);
console.log(hobbies);

//Use map to transform array into object array
const hobbiesObject = hobbies.map(item => ({name: item}));
console.log(hobbiesObject);
