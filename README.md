# Angular Toastr
===================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

The lib is inspired by [angular-toastr] (https://github.com/Foxandxss/angular-toastr), and will show bootstrap-like toasts.

![Examples](toastr-examples.jpg?raw=true "Bootstrap Toasts")

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## ToastOptions Configurations

By default, the toastr will show up at top right corner of the page view, and will automatically dismiss in 3 seconds. 
You can configure the toasts using ToastOptions class. Currently we support following options:

## toastLife: (number)
Determines how long an auto-dismissed toast will be shown. Defaults to 3000 miliseconds.
 
### autoDismiss: (boolean)
Determines whether toast should dismiss itself. If false, the toast will be dismissed when user tap on toast. Defaults to true.

### maxShown: (number)
Determines maximum number of toasts can be shown on the page in the same time. Defaults to 5.

### positionClass: (string)
Determines where on the page the toasts should be shown. Here are list of values: 
* toast-top-right (Default)
* toast-top-center
* toast-top-left
* toast-top-full-width
* toast-bottom-right
* toast-bottom-center
* toast-bottom-left
* toast-bottom-full-width

### messageClass: (string)
CSS class for message within toast.

### titleClass: (string)
CSS class for title within toast.

Use Angular dependency inject for custom configurations. Here is code when you bootstrap your app:

```javascript
    import {provide} from 'angular2/core';
    import {ToastOptions} from "ng2-toastr/ng2-toastr";
    
    let options = {
      autoDismiss: false,
      positionClass: 'toast-bottom-right',
    };
    
    bootstrap(AppComponent, [
      ... ,   
      provide(ToastOptions, { useValue: new ToastOptions(options)}),
    ]);

```
