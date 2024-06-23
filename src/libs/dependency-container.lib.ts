import 'reflect-metadata';

export class DependencyContainer {
  private static instances = new Map();

  static resolve<T>(target: any): T {
    if (!this.instances.has(target)) {
      const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
      const injections = tokens.map((token: any) => DependencyContainer.resolve<any>(token));
      const instance = new target(...injections);
      this.instances.set(target, instance);
    }

    return this.instances.get(target);
  }
}