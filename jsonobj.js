let customer={
    id: 1,
    name: 'John',
    email: 'john@gmail.com'
}

//console.log(customer);
//console.log(customer.id, customer.name);

let c = {...customer, email:'john@abc.com'};
console.log(c);


//destructuring json obj - ES6
let {id, name} = customer;
console.log(name);