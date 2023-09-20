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
    define(['ApiClient', 'model/ActivityType', 'model/MetaAthlete', 'model/SportType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityType'), require('./MetaAthlete'), require('./SportType'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.ClubActivity = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ActivityType, root.StravaApiV3.MetaAthlete, root.StravaApiV3.SportType);
  }
}(this, function(ApiClient, ActivityType, MetaAthlete, SportType) {
  'use strict';

  /**
   * The ClubActivity model module.
   * @module model/ClubActivity
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ClubActivity</code>.
   * @alias module:model/ClubActivity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ClubActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClubActivity} obj Optional instance to populate.
   * @return {module:model/ClubActivity} The populated <code>ClubActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('athlete'))
        obj.athlete = MetaAthlete.constructFromObject(data['athlete']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('moving_time'))
        obj.movingTime = ApiClient.convertToType(data['moving_time'], 'Number');
      if (data.hasOwnProperty('elapsed_time'))
        obj.elapsedTime = ApiClient.convertToType(data['elapsed_time'], 'Number');
      if (data.hasOwnProperty('total_elevation_gain'))
        obj.totalElevationGain = ApiClient.convertToType(data['total_elevation_gain'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ActivityType.constructFromObject(data['type']);
      if (data.hasOwnProperty('sport_type'))
        obj.sportType = SportType.constructFromObject(data['sport_type']);
      if (data.hasOwnProperty('workout_type'))
        obj.workoutType = ApiClient.convertToType(data['workout_type'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:model/MetaAthlete} athlete
   */
  exports.prototype.athlete = undefined;

  /**
   * The name of the activity
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The activity's distance, in meters
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * The activity's moving time, in seconds
   * @member {Number} movingTime
   */
  exports.prototype.movingTime = undefined;

  /**
   * The activity's elapsed time, in seconds
   * @member {Number} elapsedTime
   */
  exports.prototype.elapsedTime = undefined;

  /**
   * The activity's total elevation gain.
   * @member {Number} totalElevationGain
   */
  exports.prototype.totalElevationGain = undefined;

  /**
   * Deprecated. Prefer to use sport_type
   * @member {module:model/ActivityType} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {module:model/SportType} sportType
   */
  exports.prototype.sportType = undefined;

  /**
   * The activity's workout type
   * @member {Number} workoutType
   */
  exports.prototype.workoutType = undefined;


  return exports;

}));
