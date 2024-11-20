// 1. Encapsulation (Keeping Data Safe)

// class Person {
//     constructor(name, age){
//         this.name = name;
//         let _age = age;

//         this.getAge = function(){
//             return _age;
//         };
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// }

// const person = new Person('Manay', 28);
// console.log(person.name);
// console.log(person.getAge());









class Person{
    constructor(name, age){
        this.name = name;
        let _age = age;

        this.getAge = function(){
            return _age;
        }
    }   
    greet(){
        console.log(`hello, my name is ${this.name}.`);
    }
}
const person = new Person('Manay', 28);
console.log(person.name);
console.log(person.getAge());