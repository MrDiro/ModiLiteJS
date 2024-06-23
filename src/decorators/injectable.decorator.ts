import { PrefixTarget } from '../enums/prefix-target.enum';
import 'reflect-metadata';

export function Injectable() {
  return function (target: Function) {
    Reflect.defineMetadata('prefix', PrefixTarget.SERVICE, target);
  }
}