// import { apiKey } from "./util.js"; //HTML Script tag must be of type module for export import to work
// import { apiKey, source } from "./util.js";
import * as util from './util.js';
import gameTitle from './util.js'; //Default Import
import { title as videoGameTitle } from './variables.js'; //Using alias
import * as newJsUtil from './newJavaScriptConcepts.js';

// console.log('Api Key Imported : ', apiKey);
console.log('Api Key Imported : ', util.apiKey);
console.log('Source Imported : ', util.source);
console.log('Rockstar Games Title : ', gameTitle);
console.log('Video Game Title : ', videoGameTitle);

const user = { //Object notation with Braces after equals | Key value pairs, separated by colon
    name: 'Arthur',
    age: 34,
    greet() {
        console.log(this.age);
        console.log('Logging from Object!');
    }
}

console.log(user);
console.log(user.name);
console.log(user.age);
user.greet();

class User {//1st character capitalized | Blueprint
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hi!');
    }
}

const user1 = new User('Juan', 29);
user1.greet();
