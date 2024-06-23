import { PrefixTarget } from '../enums/prefix-target.enum';
import 'reflect-metadata';

export function Component() {
  return function (target: Function) {
    Reflect.defineMetadata('prefix', PrefixTarget.COMPONENT, target);
  }
}