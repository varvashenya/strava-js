/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.Error = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Error model module.
   * @module model/Error
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('field'))
        obj.field = ApiClient.convertToType(data['field'], 'String');
      if (data.hasOwnProperty('resource'))
        obj.resource = ApiClient.convertToType(data['resource'], 'String');
    }
    return obj;
  }

  /**
   * The code associated with this error.
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * The specific field or aspect of the resource associated with this error.
   * @member {String} field
   */
  exports.prototype.field = undefined;

  /**
   * The type of resource associated with this error.
   * @member {String} resource
   */
  exports.prototype.resource = undefined;


  return exports;

}));
