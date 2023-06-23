"use strict";
// import { unique as u } from "./file2";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceCream = void 0;
// console.log(u);
// export {unique as notUniqie} from "./file2";
const file2_1 = require("./file2");
let IceCream = exports.IceCream = class IceCream {
};
exports.IceCream = IceCream = __decorate([
    file2_1.Frozen
], IceCream);
class froyo extends IceCream {
}
