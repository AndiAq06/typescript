"use strict";
//  Arrays
let names = ["Mario", "Luigi", "Peach"];
let ages = [25, 28, 24];
names.push("bowser");
ages.push(25);
// type infrenece with arrays
let fruits = ["apples", "pears", "bananas", ",mangos"];
fruits.push("peaches");
const f = fruits[3];
console.log(f);
let things = [1, true, "hello"];
const t = things[0]; // can be any of the types initially added
//-----------------
// object literals
//-----------------
let user = {
    firstName: "mario",
    age: 30,
    id: 1,
    // isFictional: true
};
// user.name = 25
// user.email = 'peach@netninja.dev'
user.firstName = "peach";
user.id = 2;
//-------------------------------------
// type inference with object literals
//-------------------------------------
let person = {
    name: "luigi",
    score: 35,
};
// person.name = true
// person.id = 3
person.name = "bowser";
const score = person.score; // infers number type
