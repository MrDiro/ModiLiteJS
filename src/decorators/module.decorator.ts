
import { PrefixTarget } from "../enums/prefix-target.enum";
import { ModuleOptions } from "../types/module-options.type";
import { inject } from "../libs/inject.lib";
import 'reflect-metadata';

export function Module(options: ModuleOptions) {
  return function (target: Function) {
    const { components, providers, imports } = options;

    Reflect.defineMetadata('prefix', PrefixTarget.MODULE, target);

    if (imports) {
      for (const module of imports) {
        inject(module);
      }
    }

    if (providers) {
      for (const service of providers) {
        inject(service);
      }
    }

    if (components) {
      for (const component of components) {
        inject(component);
      }
    }
  }
}

