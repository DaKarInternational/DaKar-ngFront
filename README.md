# DaKarNgFront


https://dakarinternational.github.io/DaKar-ngFront  
http://dakar.lambla.eu/

## Development server

Run `npm install` to install all dependencies.  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## SSL
Run `ng serve --ssl --ssl-key ssl/server.key --ssl-cert ssl/server.crt` to serve with HTTPS
add `--configuration=ssl` to use the https server endpoint

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

// Resources
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

## Environments

For each environment you are managing, you can have a different configuration.

On `src/environments`, you have a file for each environment.
The default one is environment.ts, then you have others for production, etc...

To launch the app on a specific environmment, just do 
`ng build --configuration=production`for prod environment for example
or you can also `ng serve --configuration=production``

In order to your app knows the environment file to use when you add the `configuration` parameter, you have to go on angular.json file, and on `configurations` you have to add the environment name, then on `fileReplacements` specify the environment file to take on account. 

Also you have to add on `serve`part your new environment if you want to launch it with ng serve.

You can see the existed environments to inspire you. 


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

## Github pages

1. Builds the application for production with this command :  

ng build --prod --base-href "https://dakarinternational.github.io/DaKar-ngFront/"

It puts the build files in the dist folder and also sets up the address where the site will be hosted.

2. Hosting

npx ngh --dir=dist/DaKar-ngFront

By default angular-cli-ghpages will create a new branch inside the repository and Github Pages will use that branch for hosting. To specify a different branch you can add the branch option
--branch=branchname
But if you specify be careful, because it could remove the contents of the branch
Otherwise the default branch is "gh-pages"

source : https://medium.com/@Mister_10k/3-commands-to-host-your-angular-application-on-github-pages-3ae1056eefc8


## Run with docker-compose
```bash
docker-compose -f docker-compose.yml up -d --no-deps app-ng
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
