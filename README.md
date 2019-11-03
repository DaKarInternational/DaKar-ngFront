# DaKarNgFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `npm install` to install all dependencies.  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## SSL
Run `ng serve --ssl --ssl-key ssl/server.key --ssl-cert ssl/server.crt` to serve with HTTPS

// enable or disable SSL
--ssl <boolean: defaults to false>
// path to root certificate
--ssl-cert <string: defaults to "ssl/server.crt">
// path to private key
--ssl-key <string: defaults to "ssl/server.key">

// Create a certificat
openssl req -newkey rsa:2048 -x509 -nodes -keyout server.key -new -out server.crt -sha256 -days 365

// Certificat format

C = FR
ST = France
L = Paris
O = DaKar
OU = DaKar Unit
emailAddress = email@domain.com
CN = localhost

// Trust certificat
If your launch the app, you'll see a warning on your browser because the created certificat is not signed. You can request a Certification Authority to sign it or sign it yourself (local solution).

// Ressources
https://blog.fullstacktraining.com/serve-an-angular-app-on-localhost-via-https/
https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a

## PWA - Progressive Web App

// Launch Services Workers

1) Build the application

ng build --prod

2) Serve the application

http-server -p 8181 -c-1 dist/DaKar-ngFront/

// Test PWA - Caching (Statics content)

1) Go to your web browser an launch developper tool

2) Go to "Network" tab

3) Click on dropdown menu "Online" et choose "Offline"

4) Reload the page, then you see that the application is still running

// Test PWA - New version notification

If you want to service worker take in account a new version of your app, you have the rebuild it.

1) Make a change on a web file (for example on css)

2) Rebuild the app => ng build --prod

3) When the build is done, reload the page

4) Then a dialog suggest you to a load a new version of the application

5) Then accept, and you'll see your changes


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
