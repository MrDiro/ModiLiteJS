# ModiLiteJS

ModiLiteJS is a typescript library for writing modular code with components and dependency injection. It simplifies the development process by allowing you to easily define and manage modules, components, and services, enabling a clean and organized codebase.

## Installation

You can install the library using npm:

```bash
npm install modilitejs
```

## Usage

Below is a basic example of how to use the library:

### Decorators
The library provides three main decorators:

`Component`

Defines a class as a component.

```typescript
@Component()
export class MyComponent {
  constructor(private readonly myService: MyService) {
    this.myService.greet();
  }
}
```

`Injectable`

Defines a class as an injectable service.

```typescript
@Injectable()
export class MyService {
  public greet() {
    console.log('Hello, I am a service');
  }
}
```

`Module`

Defines a module that can group components, services, and other modules.

```typescript
@Module({
  components: [MyComponent],
  providers: [MyService],
  imports: [AnotherModule]
})
export class MyModule {}
```
### Libraries

`AppFactory`

Creates the application instance from a root module.

```typescript
function bootstrap() {
  AppFactory.create(MyModule).catch((err: Error) => {
    console.error(`[App] Error:`, err.message);
  });
}

bootstrap();
```
## Complete Example

```typescript
import { Component, Injectable, Module, AppFactory } from 'app-factory';

@Injectable()
export class AppService {
  public greeting() {
    console.log('Hello, I am a service');
  }
}

@Component()
export class AppComponent {
  constructor(private readonly service: AppService) {
    this.service.greeting();
  }
}

@Module({
  components: [
    AppComponent
  ],
  providers: [
    AppService
  ]
})
export class AppModule {}

function bootstrap() {
  AppFactory.create(AppModule).catch((err: Error) => {
    console.error(`[App] Error:`, err.message);
  });
}

bootstrap();
```
## Contributions
Contributions are welcome. Please open an issue or submit a pull request.

## License
This library is licensed under the MIT License. You can see more details in the LICENSE file.