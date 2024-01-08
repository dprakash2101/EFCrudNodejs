# employee_ef_crud

EmployeeEfCrud - JavaScript client for employee_ef_crud
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install employee_ef_crud --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your employee_ef_crud from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/dprakash2101/EFCrudNodejs
then install it via:

```shell
    npm install dprakash2101/EFCrudNodejs --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var EmployeeEfCrud = require('employee_ef_crud');


var api = new EmployeeEfCrud.AuthApi()
var opts = {
  'userdto': new EmployeeEfCrud.Userdto() // {Userdto} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiAuthLoginPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:7217*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EmployeeEfCrud.AuthApi* | [**apiAuthLoginPost**](docs/AuthApi.md#apiAuthLoginPost) | **POST** /api/Auth/login | 
*EmployeeEfCrud.AuthApi* | [**apiAuthRegisterPost**](docs/AuthApi.md#apiAuthRegisterPost) | **POST** /api/Auth/register | 
*EmployeeEfCrud.EmployeesApi* | [**apiEmployeesGet**](docs/EmployeesApi.md#apiEmployeesGet) | **GET** /api/Employees | 
*EmployeeEfCrud.EmployeesApi* | [**apiEmployeesIdDelete**](docs/EmployeesApi.md#apiEmployeesIdDelete) | **DELETE** /api/Employees/{id} | 
*EmployeeEfCrud.EmployeesApi* | [**apiEmployeesIdGet**](docs/EmployeesApi.md#apiEmployeesIdGet) | **GET** /api/Employees/{id} | 
*EmployeeEfCrud.EmployeesApi* | [**apiEmployeesIdPut**](docs/EmployeesApi.md#apiEmployeesIdPut) | **PUT** /api/Employees/{id} | 
*EmployeeEfCrud.EmployeesApi* | [**apiEmployeesPost**](docs/EmployeesApi.md#apiEmployeesPost) | **POST** /api/Employees | 
*EmployeeEfCrud.FeaturesApi* | [**apiFeaturesIdDelete**](docs/FeaturesApi.md#apiFeaturesIdDelete) | **DELETE** /api/Features/{id} | 
*EmployeeEfCrud.FeaturesApi* | [**apiFeaturesIdPut**](docs/FeaturesApi.md#apiFeaturesIdPut) | **PUT** /api/Features/{id} | 
*EmployeeEfCrud.RolesApi* | [**apiRolesAddEmployeeRolePost**](docs/RolesApi.md#apiRolesAddEmployeeRolePost) | **POST** /api/Roles/Add-EmployeeRole | 
*EmployeeEfCrud.RolesApi* | [**apiRolesAddRolesPost**](docs/RolesApi.md#apiRolesAddRolesPost) | **POST** /api/Roles/Add-roles | 
*EmployeeEfCrud.RolesApi* | [**apiRolesDeleteEmpRoleDelete**](docs/RolesApi.md#apiRolesDeleteEmpRoleDelete) | **DELETE** /api/Roles/Delete-EmpRole | 
*EmployeeEfCrud.RolesApi* | [**apiRolesShowEmployeeRolesGet**](docs/RolesApi.md#apiRolesShowEmployeeRolesGet) | **GET** /api/Roles/Show-EmployeeRoles | 
*EmployeeEfCrud.RolesApi* | [**apiRolesShowRolesGet**](docs/RolesApi.md#apiRolesShowRolesGet) | **GET** /api/Roles/Show-roles | 


## Documentation for Models

 - [EmployeeEfCrud.Employee](docs/Employee.md)
 - [EmployeeEfCrud.Roles](docs/Roles.md)
 - [EmployeeEfCrud.User](docs/User.md)
 - [EmployeeEfCrud.UserRoles](docs/UserRoles.md)
 - [EmployeeEfCrud.Userdto](docs/Userdto.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### oauth2


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

