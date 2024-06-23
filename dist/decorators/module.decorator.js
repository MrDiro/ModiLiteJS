"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = Module;
const prefix_target_enum_1 = require("../enums/prefix-target.enum");
const inject_lib_1 = require("../libs/inject.lib");
require("reflect-metadata");
function Module(options) {
    return function (target) {
        const { components, providers, imports } = options;
        Reflect.defineMetadata('prefix', prefix_target_enum_1.PrefixTarget.MODULE, target);
        if (imports) {
            for (const module of imports) {
                (0, inject_lib_1.inject)(module);
            }
        }
        if (providers) {
            for (const service of providers) {
                (0, inject_lib_1.inject)(service);
            }
        }
        if (components) {
            for (const component of components) {
                (0, inject_lib_1.inject)(component);
            }
        }
    };
}
//# sourceMappingURL=module.decorator.js.map