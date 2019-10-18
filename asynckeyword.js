async function add(a,b){
    throw new Error('throwing error');
    return a+b;
}

add(1,2).then(res => console.log(res)).catch(err => console.log(err));
console.log('Hello');
console.log('Hello');
console.log('Hello');