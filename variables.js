var arr = [1, 2, 3, 4];

//rest is ... - ES6
const newnums = [...arr, 100, 200, 300];

//let and const - ES6
//let is local variable while var is global
for(let i=0; i <arr.length; i++){
    console.log(arr[i]);
}

console.log(arr);
console.log(newnums);