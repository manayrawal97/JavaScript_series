const my = {
    first_name : 'Manay',
    last_name : 'Rawal',
    age : '28',
    address : 'shyam nagar',
    fullname : function(){
        return this.first_name;
    }
}

console.log(my.fullname());
// console.log(`${my.first_name}`);
