import 'reflect-metadata';
export declare class DependencyContainer {
    private static instances;
    static resolve<T>(target: any): T;
}
