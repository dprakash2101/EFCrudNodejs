/**
 * EmployeeEFCrud
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Employee from '../model/Employee';
import UserRoles from '../model/UserRoles';

/**
* Employees service.
* @module api/EmployeesApi
* @version 1.0
*/
export default class EmployeesApi {

    /**
    * Constructs a new EmployeesApi. 
    * @alias module:api/EmployeesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiEmployeesGet operation.
     * @callback module:api/EmployeesApi~apiEmployeesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Employee>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [name] 
     * @param {module:model/UserRoles} [role] 
     * @param {module:api/EmployeesApi~apiEmployeesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Employee>}
     */
    apiEmployeesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'role': opts['role']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [Employee];
      return this.apiClient.callApi(
        '/api/Employees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiEmployeesIdDelete operation.
     * @callback module:api/EmployeesApi~apiEmployeesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/EmployeesApi~apiEmployeesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiEmployeesIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiEmployeesIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/Employees/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiEmployeesIdGet operation.
     * @callback module:api/EmployeesApi~apiEmployeesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/EmployeesApi~apiEmployeesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */
    apiEmployeesIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiEmployeesIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = Employee;
      return this.apiClient.callApi(
        '/api/Employees/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiEmployeesIdPut operation.
     * @callback module:api/EmployeesApi~apiEmployeesIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Employee} [employee] 
     * @param {module:api/EmployeesApi~apiEmployeesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiEmployeesIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['employee'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiEmployeesIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/Employees/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiEmployeesPost operation.
     * @callback module:api/EmployeesApi~apiEmployeesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Employee} [employee] 
     * @param {module:api/EmployeesApi~apiEmployeesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */
    apiEmployeesPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['employee'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = Employee;
      return this.apiClient.callApi(
        '/api/Employees', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
