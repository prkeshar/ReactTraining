let customers=[
    {id: 1, name: 'John', email: 'john@gmail.com'},
    {id: 2, name: 'Jer', email: 'john@gmail.com'},
    {id: 3, name: 'Jon', email: 'john@gmail.com'}
];

let ncust = customers.filter(c => c.name=='Jon' || c.id==2);
customers.splice(1, 1);
//console.log(ncust);
console.log(customers);