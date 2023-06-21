"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frozen = exports.unique = exports.USer = void 0;
var USer = /** @class */ (function () {
    function USer() {
    }
    return USer;
}());
exports.USer = USer;
exports.unique = 10;
function Frozen(constructor) {
    Object.freeze(constructor);
}
exports.Frozen = Frozen;
