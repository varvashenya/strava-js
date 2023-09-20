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
    root.StravaApiV3.Split = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Split model module.
   * @module model/Split
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Split</code>.
   * @alias module:model/Split
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Split</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Split} obj Optional instance to populate.
   * @return {module:model/Split} The populated <code>Split</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('average_speed'))
        obj.averageSpeed = ApiClient.convertToType(data['average_speed'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('elapsed_time'))
        obj.elapsedTime = ApiClient.convertToType(data['elapsed_time'], 'Number');
      if (data.hasOwnProperty('elevation_difference'))
        obj.elevationDifference = ApiClient.convertToType(data['elevation_difference'], 'Number');
      if (data.hasOwnProperty('pace_zone'))
        obj.paceZone = ApiClient.convertToType(data['pace_zone'], 'Number');
      if (data.hasOwnProperty('moving_time'))
        obj.movingTime = ApiClient.convertToType(data['moving_time'], 'Number');
      if (data.hasOwnProperty('split'))
        obj.split = ApiClient.convertToType(data['split'], 'Number');
    }
    return obj;
  }

  /**
   * The average speed of this split, in meters per second
   * @member {Number} averageSpeed
   */
  exports.prototype.averageSpeed = undefined;

  /**
   * The distance of this split, in meters
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * The elapsed time of this split, in seconds
   * @member {Number} elapsedTime
   */
  exports.prototype.elapsedTime = undefined;

  /**
   * The elevation difference of this split, in meters
   * @member {Number} elevationDifference
   */
  exports.prototype.elevationDifference = undefined;

  /**
   * The pacing zone of this split
   * @member {Number} paceZone
   */
  exports.prototype.paceZone = undefined;

  /**
   * The moving time of this split, in seconds
   * @member {Number} movingTime
   */
  exports.prototype.movingTime = undefined;

  /**
   * N/A
   * @member {Number} split
   */
  exports.prototype.split = undefined;


  return exports;

}));
