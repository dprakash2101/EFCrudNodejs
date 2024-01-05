# EmployeeEfCrud.AuthApi

All URIs are relative to *https://localhost:7217*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthLoginPost**](AuthApi.md#apiAuthLoginPost) | **POST** /api/Auth/login | 
[**apiAuthRegisterPost**](AuthApi.md#apiAuthRegisterPost) | **POST** /api/Auth/register | 



## apiAuthLoginPost

> User apiAuthLoginPost(opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';

let apiInstance = new EmployeeEfCrud.AuthApi();
let opts = {
  'userdto': new EmployeeEfCrud.Userdto() // Userdto | 
};
apiInstance.apiAuthLoginPost(opts, (error, data, response) => {
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
 **userdto** | [**Userdto**](Userdto.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## apiAuthRegisterPost

> User apiAuthRegisterPost(opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';

let apiInstance = new EmployeeEfCrud.AuthApi();
let opts = {
  'role': "role_example", // String | 
  'userdto': new EmployeeEfCrud.Userdto() // Userdto | 
};
apiInstance.apiAuthRegisterPost(opts, (error, data, response) => {
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
 **role** | **String**|  | [optional] 
 **userdto** | [**Userdto**](Userdto.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

