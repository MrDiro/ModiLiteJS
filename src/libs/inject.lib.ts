import { DependencyContainer } from "../libs/dependency-container.lib";
import { PrefixTarget } from "../enums/prefix-target.enum";
import 'reflect-metadata';

export function inject(target: any) {
  const prefix = Reflect.getMetadata('prefix', target);

  if (!prefix || !Object.values(PrefixTarget).includes(prefix)) {
    throw new Error(`
      ${target.name} class doesn't has a valid decorator.  
    `);
  }

  return DependencyContainer.resolve<any>(target);
}