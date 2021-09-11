# Getting Started  
Baseline Project For Developing With DevExtreme Angular Components + Angular Material Components.
---  
  
1. [Prerequisites](#prerequisites)    
1. [Create Angular Project](#)  
1. [Packages](#packages)  
  
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