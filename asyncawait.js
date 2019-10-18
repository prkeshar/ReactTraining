async function add(a,b){
    throw new Error('throwing error');
    return a+b;
}

async function testAdd(){
    try{
        let res = await add(1,2);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

testAdd();
console.log('Hello');
console.log('Hello');
console.log('Hello');