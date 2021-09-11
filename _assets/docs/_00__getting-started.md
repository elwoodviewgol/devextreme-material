# Getting Started  
  
Baseline Project For Developing With DevExtreme Angular Components + Angular Material Components.  
  
1. [Prerequisites](#prerequisites)    
1. [Create Angular Project](#create-angular-project)  
1. [Packages](#packages)  
1. [House Keeping]()
  
---  
  
## Prerequisites  
Required as a prior condition to development of an Angular project using DevExtreme Angular & Angular Material components.  
  
1. Node | [v10+](https://nodejs.org/en/download/)  
1. NPM CLI | [npm - a JavaScript package manager](https://github.com/npm/cli#npm---a-javascript-package-manager)  
1. Angular CLI | [Angular CLI's command-line interface tool](https://angular.io/cli)  
1. DevExtreme CLI | See [documentation](https://js.devexpress.com/Documentation/Guide/Common/DevExtreme_CLI/) for the DevExtreme CLI.
  
## Create Angular Project  
  
Create a basic project with routing and stylesheets set to SASS.  
```  
$ ng new project --routing --style=scss
```  
  
Change to the new project directory and run the new project.  
```  
$ cd project/  
  
$ ng serve  
```  
  
## Packages  

### DevExtreme  
DevExtreme is a set of enterprise-ready UI component suites. See [documentation](https://www.npmjs.com/package/devextreme) on this NPM package.  
  
**Install DevExtreme** in the new Angular project. It will be added to the dependencies in the project's package.json.  
```  
$ npm i devextreme  
``` 
  
### DevExtreme Angular  
Allows you to use DevExtreme widgets in an Angular application. See [documentation](https://www.npmjs.com/package/devextreme-angular) on this NPM package. 
```  
$ npm i devextreme-angular  
``` 
  
### Angular Material  
See [documentation](https://www.npmjs.com/package/@angular/material) on Angular Material
```  
$ npm i @angular/material  
```   
  
### Angular fxLayout  
See [documentation](https://www.npmjs.com/package/@angular/flex-layout) on fxLayout
```  
  
$ npm i @angular/flex-layout    
```  
  
### Angular CDK  
See [documentation](https://www.npmjs.com/package/@angular/cdk) on Angular CDK
```  
$ npm i @angular/cdk  
``` 
  
## House Keeping  

**Update App Selector** (optional)  
This is purely cosmetic. Not required.
```ts  
@Component({
  selector: 'uranium',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
``` 
  
**Update Core HTML**  
Update the core HTML file to include [Material Icons](https://fonts.google.com/icons) and [Roboto](https://fonts.google.com/specimen/Roboto) Google Fonts.  
```html  
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <title>Uranium</title>
  <base href="/">
</head>
<body>
  <uranium></uranium>
</body>
</html>
```  