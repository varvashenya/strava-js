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
    root.StravaApiV3.SportType = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class SportType.
   * @enum {String}
   * @readonly
   */
  var exports = {
    /**
     * value: "AlpineSki"
     * @const
     */
    alpineSki: "AlpineSki",

    /**
     * value: "BackcountrySki"
     * @const
     */
    backcountrySki: "BackcountrySki",

    /**
     * value: "Badminton"
     * @const
     */
    badminton: "Badminton",

    /**
     * value: "Canoeing"
     * @const
     */
    canoeing: "Canoeing",

    /**
     * value: "Crossfit"
     * @const
     */
    crossfit: "Crossfit",

    /**
     * value: "EBikeRide"
     * @const
     */
    eBikeRide: "EBikeRide",

    /**
     * value: "Elliptical"
     * @const
     */
    elliptical: "Elliptical",

    /**
     * value: "EMountainBikeRide"
     * @const
     */
    eMountainBikeRide: "EMountainBikeRide",

    /**
     * value: "Golf"
     * @const
     */
    golf: "Golf",

    /**
     * value: "GravelRide"
     * @const
     */
    gravelRide: "GravelRide",

    /**
     * value: "Handcycle"
     * @const
     */
    handcycle: "Handcycle",

    /**
     * value: "HighIntensityIntervalTraining"
     * @const
     */
    highIntensityIntervalTraining: "HighIntensityIntervalTraining",

    /**
     * value: "Hike"
     * @const
     */
    hike: "Hike",

    /**
     * value: "IceSkate"
     * @const
     */
    iceSkate: "IceSkate",

    /**
     * value: "InlineSkate"
     * @const
     */
    inlineSkate: "InlineSkate",

    /**
     * value: "Kayaking"
     * @const
     */
    kayaking: "Kayaking",

    /**
     * value: "Kitesurf"
     * @const
     */
    kitesurf: "Kitesurf",

    /**
     * value: "MountainBikeRide"
     * @const
     */
    mountainBikeRide: "MountainBikeRide",

    /**
     * value: "NordicSki"
     * @const
     */
    nordicSki: "NordicSki",

    /**
     * value: "Pickleball"
     * @const
     */
    pickleball: "Pickleball",

    /**
     * value: "Pilates"
     * @const
     */
    pilates: "Pilates",

    /**
     * value: "Racquetball"
     * @const
     */
    racquetball: "Racquetball",

    /**
     * value: "Ride"
     * @const
     */
    ride: "Ride",

    /**
     * value: "RockClimbing"
     * @const
     */
    rockClimbing: "RockClimbing",

    /**
     * value: "RollerSki"
     * @const
     */
    rollerSki: "RollerSki",

    /**
     * value: "Rowing"
     * @const
     */
    rowing: "Rowing",

    /**
     * value: "Run"
     * @const
     */
    run: "Run",

    /**
     * value: "Sail"
     * @const
     */
    sail: "Sail",

    /**
     * value: "Skateboard"
     * @const
     */
    skateboard: "Skateboard",

    /**
     * value: "Snowboard"
     * @const
     */
    snowboard: "Snowboard",

    /**
     * value: "Snowshoe"
     * @const
     */
    snowshoe: "Snowshoe",

    /**
     * value: "Soccer"
     * @const
     */
    soccer: "Soccer",

    /**
     * value: "Squash"
     * @const
     */
    squash: "Squash",

    /**
     * value: "StairStepper"
     * @const
     */
    stairStepper: "StairStepper",

    /**
     * value: "StandUpPaddling"
     * @const
     */
    standUpPaddling: "StandUpPaddling",

    /**
     * value: "Surfing"
     * @const
     */
    surfing: "Surfing",

    /**
     * value: "Swim"
     * @const
     */
    swim: "Swim",

    /**
     * value: "TableTennis"
     * @const
     */
    tableTennis: "TableTennis",

    /**
     * value: "Tennis"
     * @const
     */
    tennis: "Tennis",

    /**
     * value: "TrailRun"
     * @const
     */
    trailRun: "TrailRun",

    /**
     * value: "Velomobile"
     * @const
     */
    velomobile: "Velomobile",

    /**
     * value: "VirtualRide"
     * @const
     */
    virtualRide: "VirtualRide",

    /**
     * value: "VirtualRow"
     * @const
     */
    virtualRow: "VirtualRow",

    /**
     * value: "VirtualRun"
     * @const
     */
    virtualRun: "VirtualRun",

    /**
     * value: "Walk"
     * @const
     */
    walk: "Walk",

    /**
     * value: "WeightTraining"
     * @const
     */
    weightTraining: "WeightTraining",

    /**
     * value: "Wheelchair"
     * @const
     */
    wheelchair: "Wheelchair",

    /**
     * value: "Windsurf"
     * @const
     */
    windsurf: "Windsurf",

    /**
     * value: "Workout"
     * @const
     */
    workout: "Workout",

    /**
     * value: "Yoga"
     * @const
     */
    yoga: "Yoga"
  };

  /**
   * Returns a <code>SportType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/SportType} The enum <code>SportType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));