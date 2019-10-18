//promise - ES6
function divide(a, b){
    let p = new Promise((resolve, reject) => {
        if(b == 0){
            reject('divider cannot be zero');
        } else{
            let div = a/b;
            resolve(div);
        }
    });
    return p;
}

divide(10,2).then(res => console.log(res)).catch(err => console.log(err));
divide(10,0).then(res => console.log(res)).catch(err => console.log(err));

//divide(10,0).then(res => console.log(res)), (err => console.log(err));