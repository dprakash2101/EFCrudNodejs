# EmployeeEfCrud.EmployeesApi

All URIs are relative to *https://localhost:7217*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEmployeesGet**](EmployeesApi.md#apiEmployeesGet) | **GET** /api/Employees | 
[**apiEmployeesIdDelete**](EmployeesApi.md#apiEmployeesIdDelete) | **DELETE** /api/Employees/{id} | 
[**apiEmployeesIdGet**](EmployeesApi.md#apiEmployeesIdGet) | **GET** /api/Employees/{id} | 
[**apiEmployeesIdPut**](EmployeesApi.md#apiEmployeesIdPut) | **PUT** /api/Employees/{id} | 
[**apiEmployeesPost**](EmployeesApi.md#apiEmployeesPost) | **POST** /api/Employees | 



## apiEmployeesGet

> [Employee] apiEmployeesGet(opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.EmployeesApi();
let opts = {
  'name': "name_example", // String | 
  'role': new EmployeeEfCrud.UserRoles() // UserRoles | 
};
apiInstance.apiEmployeesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] 
 **role** | [**UserRoles**](.md)|  | [optional] 

### Return type

[**[Employee]**](Employee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiEmployeesIdDelete

> apiEmployeesIdDelete(id)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.EmployeesApi();
let id = 56; // Number | 
apiInstance.apiEmployeesIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiEmployeesIdGet

> Employee apiEmployeesIdGet(id)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.EmployeesApi();
let id = 56; // Number | 
apiInstance.apiEmployeesIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Employee**](Employee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiEmployeesIdPut

> apiEmployeesIdPut(id, opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.EmployeesApi();
let id = 56; // Number | 
let opts = {
  'employee': new EmployeeEfCrud.Employee() // Employee | 
};
apiInstance.apiEmployeesIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **employee** | [**Employee**](Employee.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiEmployeesPost

> Employee apiEmployeesPost(opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.EmployeesApi();
let opts = {
  'employee': new EmployeeEfCrud.Employee() // Employee | 
};
apiInstance.apiEmployeesPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**Employee**](Employee.md)|  | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

