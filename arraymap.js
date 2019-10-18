let arr = ['Angular', 'React'];

let narray = arr.map(ele => {
    return ele.toUpperCase();
})

let nlarray = arr.map((ele, index) => {
    return ele + index;
})

console.log(narray);
console.log(nlarray);