"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppFactory = void 0;
const dependency_container_lib_1 = require("./dependency-container.lib");
class AppFactory {
    static create(module) {
        return new Promise((resolve, reject) => {
            if (!this.instance) {
                const moduleInstance = dependency_container_lib_1.DependencyContainer.resolve(module);
                this.instance = moduleInstance;
            }
            resolve(this.instance);
        });
    }
}
exports.AppFactory = AppFactory;
//# sourceMappingURL=app-factory.lib.js.map