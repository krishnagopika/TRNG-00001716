"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let IceCream = class IceCream {
    constructor() {
        this.flavor = 'vanila';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
};
__decorate([
    Emoji()
], IceCream.prototype, "flavor", void 0);
__decorate([
    Confirmable('Are you sure?'),
    Confirmable('Are you super, super sure? There is no going back!')
], IceCream.prototype, "addTopping", null);
IceCream = __decorate([
    Frozen
], IceCream);
function Confirmable(message) {
    return function (target, key, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const allow = confirm(message);
            if (allow) {
                const result = original.apply(this, args);
                return result;
            }
            else {
                return null;
            }
        };
        return descriptor;
    };
}
function Emoji() {
    return function (target, key) {
        let val = target[key];
        const getter = () => {
            return val;
        };
        const setter = (next) => {
            console.log('updating flavor...');
            val = `🍦 ${next} 🍦`;
        };
    };
}
function Frozen(constructor) {
    Object.freeze(constructor);
}
