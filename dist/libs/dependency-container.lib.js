"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyContainer = void 0;
require("reflect-metadata");
class DependencyContainer {
    static resolve(target) {
        if (!this.instances.has(target)) {
            const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
            const injections = tokens.map((token) => DependencyContainer.resolve(token));
            const instance = new target(...injections);
            this.instances.set(target, instance);
        }
        return this.instances.get(target);
    }
}
exports.DependencyContainer = DependencyContainer;
DependencyContainer.instances = new Map();
//# sourceMappingURL=dependency-container.lib.js.map