var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger() {
    console.log("D1");
    return function (constructor) {
        console.log("Class Decorator");
        console.log(constructor);
    };
}
function logger2() {
    console.log("D2");
    return function (constructor) {
        console.log("Class Decorator2");
        console.log(constructor);
    };
}
function logProperty(target, name) {
    console.log("Property Decorator");
    console.log(target);
    console.log(name);
}
function logAccessor(target, name, description) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(description);
}
function addTemplate() {
    return function (_, template, selector) {
        const tag = document.getElementById(selector);
        tag.innerHTML = template;
    };
}
let Product = class Product {
    constructor(name) {
        this.name = "Revature";
    }
    set price(value) {
        this._price = value;
    }
    getPrice() {
        return this._price;
    }
};
__decorate([
    logProperty
], Product.prototype, "_price", void 0);
__decorate([
    logAccessor
], Product.prototype, "price", null);
__decorate([
    logAccessor
], Product.prototype, "getPrice", null);
Product = __decorate([
    logger2(),
    logger()
], Product);
