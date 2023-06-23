function logger(){
    console.log("D1")
    
    return function(constructor:any){
    console.log("Class Decorator");
    console.log(constructor)

    }
}

function logger2(){
    console.log("D2")
    
    return function(constructor:any){
    console.log("Class Decorator2");
    console.log(constructor)

    }
}

function logProperty(target:any, name:any){

    console.log("Property Decorator");
    console.log(target);
    console.log(name);

}

function logAccessor(target:any, name:string, description:any){
    console.log("Accessor Decorator");
    console.log(target)
    console.log(name)
    console.log(description);

}

function addTemplate(){
    return function(_:any, template:string,selector:string){
        const tag = document.getElementById(selector);
    tag.innerHTML = template;
    }

}



@logger2()
@logger()
class Product{
    name:string;
    @logProperty
    _price:number;
    constructor(name:string){
        this.name = "Revature";

    }

    @logAccessor
    set price(value:number){
        this._price=value;
    }
    @logAccessor
    getPrice(){
        return this._price;
    }
}


