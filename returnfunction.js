function returnFunction(n){
    return function(x){
        return n*x;
    }
}

console.log(returnFunction(2));
console.log(returnFunction(2)(3));

let fun = returnFunction(5);
let res = fun(6);
console.log(res);