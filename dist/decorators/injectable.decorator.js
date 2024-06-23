"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = Injectable;
const prefix_target_enum_1 = require("../enums/prefix-target.enum");
require("reflect-metadata");
function Injectable() {
    return function (target) {
        Reflect.defineMetadata('prefix', prefix_target_enum_1.PrefixTarget.SERVICE, target);
    };
}
//# sourceMappingURL=injectable.decorator.js.map