//ES6
class Product{
    constructor(code, name){
        this.code = code;
        this.name = name;
    }

    display(){
        console.log(this.code + " : " + this.name);
    }
}

let p = new Product(1, 'Marker');
p.display();