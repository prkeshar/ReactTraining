function add(a=3, b=4) {
    return a+b;
}

//variable number of arguments
//ES6 onwards
function print(...msg){
    console.log(msg);
}

print(add(1,2));
console.log(add());
console.log(add(b=10, a=2));

print(1,2,3,4,5);