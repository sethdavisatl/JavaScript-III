/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.  Window Binding - Where 'this' binds to the window, when there is nothing else to bind to
 * 2.  Implicit Binding - It binds to the object containing the function
 * 3.  Explicit Binding - It binds to what we tell to using bind to using call, bind or apply
 * 4.  New Binding - It binds to the newly created objects
 *	*
 *
 * write out a code example of each explanation above
 */

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const example = {
    name: 'object example',
    exampleFnc: function () {
        console.log(`${this.name}`)
    }
}


// Principle 3

// code example for New Binding
const Person = {

    name: 'Jimmy'
}
const skills = ['Drinking', 'Sleeping', 'Walking'];

function sayHello(skills1, skills2, skills3) {
    console.log(`Hello! My name is ${this.name}, and I like ${skills1}, ${skills2}, ${skills3}`);
}

sayHello.call(Person, ...skills);
sayHello.apply(Person, skills);

// Principle 4

// code example for Explicit Binding

const Person1 = function (person, skillz, age) {

    this.name = person;
    this.skillz = skillz;
    this.age = age;
}

const skills2 = ['Drinking', 'Sleeping', 'Walking'];

function sayHello(skills1, skills2, skills3) {
    console.log(`Hello! My name is ${this.name}, and I like ${this.skillz} and I am ${this.age}.`);
}

const rickyBobby = new Person1("Ricky Bobby", ["weeping", " running", " eating"], 35);

sayHello.call(rickyBobby, ...skills2);
sayHello.apply(rickyBobby, skills2);