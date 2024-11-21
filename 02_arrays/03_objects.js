//object literals

const JsUser = {
    name : "Manay",
    "fullname" : "Manay rawal",

    age : 22,
    location : "New York",
    email : "manny@google.com",
    loggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["fullname"]);
console.log(JsUser["email"]);

console.log(typeof JsUser["fullname"]);
console.log(typeof JsUser);


//changing the email
JsUser.email = "manny@gmail.com"
console.log(JsUser["email"]);

Object.freeze(JsUser)   // above changes in email are freez and cannot be change further
//lets try to change the email 
JsUser.email = "manny@mcirosoft.com"
console.log(JsUser);


// below is use the object so run below you have to comment the freez code line*(line no. 27)* then only it works


JsUser.greeting = function() {
    console.log("Hello JS users");
}

JsUser.greetingTwo = function(){
    console.log(`Helle JS users, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






// ----------------------------------- Symbol----------------------------------
// Symbol is a built-in object whose constructor returns a symbol primitive
// Symbols are often used to add unique property keys to an object 
// that won't collide with keys any other code might add to the object, 
// and which are hidden from any mechanisms other code will typically 
// use to access the object.

const mySym = Symbol('key1')

const user = {
    [mySym] : "myKey1"
}

console.log(user);
console.log(user[mySym]);
console.log(typeof user[mySym]);