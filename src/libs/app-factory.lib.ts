import { DependencyContainer } from "./dependency-container.lib";

export class AppFactory {
  private static instance: AppFactory;

  static create(module: any) {    
    return new Promise((resolve, reject) => {
      if (!this.instance) {
        const moduleInstance = DependencyContainer.resolve<any>(module);
        this.instance = moduleInstance;
      }

      resolve(this.instance);
    });
  }
}