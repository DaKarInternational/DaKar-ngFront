# DaKarNgFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `npm install` to install all dependencies.  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## i18n

https://alligator.io/angular/internationalization/

Add "i18n" directive to the that you'd like to translate

use npm run int:extract to generate translate files (on locales folder)

messages.xlf is the default file generated

messages.fr.xlf should be fill by the content generated on messages.xlf
then you have to translate each text adding a target element below source element

To run the translate version, use : npm run start:fr -- --port=4201 (you can also run without specifying port, so it would be 4200)



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
