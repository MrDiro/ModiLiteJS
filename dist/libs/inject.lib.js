"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inject = inject;
const dependency_container_lib_1 = require("../libs/dependency-container.lib");
const prefix_target_enum_1 = require("../enums/prefix-target.enum");
require("reflect-metadata");
function inject(target) {
    const prefix = Reflect.getMetadata('prefix', target);
    if (!prefix || !Object.values(prefix_target_enum_1.PrefixTarget).includes(prefix)) {
        throw new Error(`
      ${target.name} class doesn't has a valid decorator.  
    `);
    }
    return dependency_container_lib_1.DependencyContainer.resolve(target);
}
//# sourceMappingURL=inject.lib.js.map