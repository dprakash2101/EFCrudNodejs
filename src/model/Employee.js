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

import ApiClient from '../ApiClient';

/**
 * The Employee model module.
 * @module model/Employee
 * @version 1.0
 */
class Employee {
    /**
     * Constructs a new <code>Employee</code>.
     * @alias module:model/Employee
     */
    constructor() { 
        
        Employee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Employee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Employee} obj Optional instance to populate.
     * @return {module:model/Employee} The populated <code>Employee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Employee();

            if (data.hasOwnProperty('employeeId')) {
                obj['employeeId'] = ApiClient.convertToType(data['employeeId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('age')) {
                obj['age'] = ApiClient.convertToType(data['age'], 'Number');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('experience')) {
                obj['experience'] = ApiClient.convertToType(data['experience'], 'Number');
            }
            if (data.hasOwnProperty('bloodGroup')) {
                obj['bloodGroup'] = ApiClient.convertToType(data['bloodGroup'], 'String');
            }
            if (data.hasOwnProperty('fatherName')) {
                obj['fatherName'] = ApiClient.convertToType(data['fatherName'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('dateOfCreated')) {
                obj['dateOfCreated'] = ApiClient.convertToType(data['dateOfCreated'], 'Date');
            }
            if (data.hasOwnProperty('dateOfUpdated')) {
                obj['dateOfUpdated'] = ApiClient.convertToType(data['dateOfUpdated'], 'Date');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], 'String');
            }
            if (data.hasOwnProperty('isSupervisor')) {
                obj['isSupervisor'] = ApiClient.convertToType(data['isSupervisor'], 'Boolean');
            }
            if (data.hasOwnProperty('isManager')) {
                obj['isManager'] = ApiClient.convertToType(data['isManager'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Employee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Employee</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['department'] && !(typeof data['department'] === 'string' || data['department'] instanceof String)) {
            throw new Error("Expected the field `department` to be a primitive type in the JSON string but got " + data['department']);
        }
        // ensure the json data is a string
        if (data['bloodGroup'] && !(typeof data['bloodGroup'] === 'string' || data['bloodGroup'] instanceof String)) {
            throw new Error("Expected the field `bloodGroup` to be a primitive type in the JSON string but got " + data['bloodGroup']);
        }
        // ensure the json data is a string
        if (data['fatherName'] && !(typeof data['fatherName'] === 'string' || data['fatherName'] instanceof String)) {
            throw new Error("Expected the field `fatherName` to be a primitive type in the JSON string but got " + data['fatherName']);
        }
        // ensure the json data is a string
        if (data['roles'] && !(typeof data['roles'] === 'string' || data['roles'] instanceof String)) {
            throw new Error("Expected the field `roles` to be a primitive type in the JSON string but got " + data['roles']);
        }

        return true;
    }


}



/**
 * @member {Number} employeeId
 */
Employee.prototype['employeeId'] = undefined;

/**
 * @member {String} name
 */
Employee.prototype['name'] = undefined;

/**
 * @member {Number} age
 */
Employee.prototype['age'] = undefined;

/**
 * @member {String} department
 */
Employee.prototype['department'] = undefined;

/**
 * @member {Number} experience
 */
Employee.prototype['experience'] = undefined;

/**
 * @member {String} bloodGroup
 */
Employee.prototype['bloodGroup'] = undefined;

/**
 * @member {String} fatherName
 */
Employee.prototype['fatherName'] = undefined;

/**
 * @member {Boolean} isDeleted
 */
Employee.prototype['isDeleted'] = undefined;

/**
 * @member {Boolean} isActive
 */
Employee.prototype['isActive'] = undefined;

/**
 * @member {Date} dateOfCreated
 */
Employee.prototype['dateOfCreated'] = undefined;

/**
 * @member {Date} dateOfUpdated
 */
Employee.prototype['dateOfUpdated'] = undefined;

/**
 * @member {String} roles
 */
Employee.prototype['roles'] = undefined;

/**
 * @member {Boolean} isSupervisor
 */
Employee.prototype['isSupervisor'] = undefined;

/**
 * @member {Boolean} isManager
 */
Employee.prototype['isManager'] = undefined;






export default Employee;

