# EmployeeEfCrud.RolesApi

All URIs are relative to *https://localhost:7217*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRolesAddEmployeeRolePost**](RolesApi.md#apiRolesAddEmployeeRolePost) | **POST** /api/Roles/Add-EmployeeRole | 
[**apiRolesAddRolesPost**](RolesApi.md#apiRolesAddRolesPost) | **POST** /api/Roles/Add-roles | 
[**apiRolesDeleteEmpRoleDelete**](RolesApi.md#apiRolesDeleteEmpRoleDelete) | **DELETE** /api/Roles/Delete-EmpRole | 
[**apiRolesShowEmployeeRolesGet**](RolesApi.md#apiRolesShowEmployeeRolesGet) | **GET** /api/Roles/Show-EmployeeRoles | 
[**apiRolesShowRolesGet**](RolesApi.md#apiRolesShowRolesGet) | **GET** /api/Roles/Show-roles | 



## apiRolesAddEmployeeRolePost

> apiRolesAddEmployeeRolePost(opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.RolesApi();
let opts = {
  'name': "name_example", // String | 
  'role': new EmployeeEfCrud.UserRoles() // UserRoles | 
};
apiInstance.apiRolesAddEmployeeRolePost(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **role** | [**UserRoles**](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiRolesAddRolesPost

> apiRolesAddRolesPost(opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.RolesApi();
let opts = {
  'roles': new EmployeeEfCrud.Roles() // Roles | 
};
apiInstance.apiRolesAddRolesPost(opts, (error, data, response) => {
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
 **roles** | [**Roles**](Roles.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiRolesDeleteEmpRoleDelete

> apiRolesDeleteEmpRoleDelete(opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.RolesApi();
let opts = {
  'name': "name_example", // String | 
  'role': new EmployeeEfCrud.UserRoles() // UserRoles | 
};
apiInstance.apiRolesDeleteEmpRoleDelete(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **role** | [**UserRoles**](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiRolesShowEmployeeRolesGet

> apiRolesShowEmployeeRolesGet()



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.RolesApi();
apiInstance.apiRolesShowEmployeeRolesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiRolesShowRolesGet

> apiRolesShowRolesGet()



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.RolesApi();
apiInstance.apiRolesShowRolesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

