function Customer(id, name){
    this.id = id;
    this.name = name;

    /*
    this.display = function(){
        setTimeout(function(){
            console.log(this.id + " : " + this.name);
        }, 1000);
    }
    */

   this.display = () => {
    setTimeout(() => {
        console.log(this.id + " : " + this.name);
    }, 1000);
}
}

let c = new Customer(1, "John");
c.display();