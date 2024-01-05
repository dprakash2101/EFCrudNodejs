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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EmployeeEfCrud);
  }
}(this, function(expect, EmployeeEfCrud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EmployeeEfCrud.Employee();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Employee', function() {
    it('should create an instance of Employee', function() {
      // uncomment below and update the code to test Employee
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be.a(EmployeeEfCrud.Employee);
    });

    it('should have the property employeeId (base name: "employeeId")', function() {
      // uncomment below and update the code to test the property employeeId
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property age (base name: "age")', function() {
      // uncomment below and update the code to test the property age
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property experience (base name: "experience")', function() {
      // uncomment below and update the code to test the property experience
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property bloodGroup (base name: "bloodGroup")', function() {
      // uncomment below and update the code to test the property bloodGroup
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property fatherName (base name: "fatherName")', function() {
      // uncomment below and update the code to test the property fatherName
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "isDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property dateOfCreated (base name: "dateOfCreated")', function() {
      // uncomment below and update the code to test the property dateOfCreated
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property dateOfUpdated (base name: "dateOfUpdated")', function() {
      // uncomment below and update the code to test the property dateOfUpdated
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property isSupervisor (base name: "isSupervisor")', function() {
      // uncomment below and update the code to test the property isSupervisor
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

    it('should have the property isManager (base name: "isManager")', function() {
      // uncomment below and update the code to test the property isManager
      //var instance = new EmployeeEfCrud.Employee();
      //expect(instance).to.be();
    });

  });

}));
