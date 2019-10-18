//promise - ES6
function divide(strArray){
    let p = new Promise((resolve, reject) => {
        for(let i=0; i<strArray.length;i++){
            strArray[i] = strArray[i].toUpperCase();
        }
        resolve(strArray);
    });
    return p;
}

var fruits = ["apple", "orange", "cherry"];
divide(fruits).then(res=> {console.log(res)});