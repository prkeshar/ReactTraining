function add(a, b){
    return a+b;
}

let addAsync = (a, b, cb) => {
    setTimeout(() => {
        let sum=a+b;
        cb(sum);
    }, 5000);
}

addAsync(2,3, res => {
    console.log(res);
});

//synchronous
let z = add(10,20);
console.log(z);
console.log("end");
console.log("hello");
console.log("hello");
console.log("hello");