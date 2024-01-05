# EmployeeEfCrud.FeaturesApi

All URIs are relative to *https://localhost:7217*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiFeaturesIdDelete**](FeaturesApi.md#apiFeaturesIdDelete) | **DELETE** /api/Features/{id} | 
[**apiFeaturesIdPut**](FeaturesApi.md#apiFeaturesIdPut) | **PUT** /api/Features/{id} | 



## apiFeaturesIdDelete

> apiFeaturesIdDelete(id, opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.FeaturesApi();
let id = 56; // Number | 
let opts = {
  'isdeleted': true, // Boolean | 
  'isactive': true // Boolean | 
};
apiInstance.apiFeaturesIdDelete(id, opts, (error, data, response) => {
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
 **isdeleted** | **Boolean**|  | [optional] 
 **isactive** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiFeaturesIdPut

> apiFeaturesIdPut(id, opts)



### Example

```javascript
import EmployeeEfCrud from 'employee_ef_crud';
let defaultClient = EmployeeEfCrud.ApiClient.instance;
// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new EmployeeEfCrud.FeaturesApi();
let id = 56; // Number | 
let opts = {
  'isman': true, // Boolean | 
  'issup': true // Boolean | 
};
apiInstance.apiFeaturesIdPut(id, opts, (error, data, response) => {
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
 **isman** | **Boolean**|  | [optional] 
 **issup** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

