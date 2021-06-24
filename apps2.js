console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


// mine part one
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    info () { 
        console.log(`My name is ${this.name} and I have  ${this.pets} pets.  I live in ${this.residence}, and my hobbies are  ${this.hobbies}.`);
    }
    greeting(name) {
        console.log(`Hello ${name}`); 
    }
     
}

//part two does not bring in occupation

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies); 
    this.occupation = occupation;
    }
    greeting(name) {
        console.log(`${name} Back atcha`); 
    }
};


var Scott = new Person ("Scott", 0, "Burke", "3-d photography")

var Logan = new Coder ("Logan", 2, "Burke", ["music", "games"], "student")

Scott.greeting(); 
Scott.info();

Logan.greeting();
Logan.info();


//bonus this replaces the first one


Scott.greeting(Logan.name);
Logan.greeting(Scott.name);