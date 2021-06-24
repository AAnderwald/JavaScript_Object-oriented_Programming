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
       if (this.occupation){
           console.log(`My name is ${this.name} and I have ${this.pets} pets. I live in ${this.residence}, and my hobbies are ${this.hobbies}, his occupation is ${this.occupation}.`);
        } else {console.log(`My name is ${this.name} and I have ${this.pets} pets. I live in ${this.residence}, and my hobbies are ${this.hobbies}.`)
        }
    }
    greeting() {
        console.log("Hello friends!");
    }  
}


class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies); 
    this.occupation = occupation;
    }
    greeting(){                                 //override the greeting
        console.log("hello peeps!");
    }
};


var Scott = new Person ("Scott", 0, "Burke", "3-d photography", "data-scientist")

var Logan = new Coder ("Logan", 2, "Burke", ["music ", "games"], "student")

Scott.greeting(); 
Scott.info();

Logan.greeting();
Logan.info();

/*
//bonus this replaces the first one

greeting(name) {
    console.log(`Hello ${name}`); 
}

//second ong
greeting(name) {
    console.log(`${name} Back atcha`); 
}
Scott.greeting(Logan.name);
Logan.greeting(Scott.name);
*/


/*

// going over excerise in class

  class Person {     // create a class Person with four parameters constructor has a capital letter
    constructor (name, pets, residence, hobbies)    {    //add constructo
        this.name = name;
        this.pets = pets;                           //assisn properties 
        this.residence = residence;
        this.hobbies = hobbies;       
    }           


  }
*/
