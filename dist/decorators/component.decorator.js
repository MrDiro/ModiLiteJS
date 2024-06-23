"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = Component;
const prefix_target_enum_1 = require("../enums/prefix-target.enum");
require("reflect-metadata");
function Component() {
    return function (target) {
        Reflect.defineMetadata('prefix', prefix_target_enum_1.PrefixTarget.COMPONENT, target);
    };
}
//# sourceMappingURL=component.decorator.js.map