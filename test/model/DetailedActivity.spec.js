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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DetailedActivity', function() {
      beforeEach(function() {
        instance = new StravaApiV3.DetailedActivity();
      });

      it('should create an instance of DetailedActivity', function() {
        // TODO: update the code to test DetailedActivity
        expect(instance).to.be.a(StravaApiV3.DetailedActivity);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property photos (base name: "photos")', function() {
        // TODO: update the code to test the property photos
        expect(instance).to.have.property('photos');
        // expect(instance.photos).to.be(expectedValueLiteral);
      });

      it('should have the property gear (base name: "gear")', function() {
        // TODO: update the code to test the property gear
        expect(instance).to.have.property('gear');
        // expect(instance.gear).to.be(expectedValueLiteral);
      });

      it('should have the property calories (base name: "calories")', function() {
        // TODO: update the code to test the property calories
        expect(instance).to.have.property('calories');
        // expect(instance.calories).to.be(expectedValueLiteral);
      });

      it('should have the property segmentEfforts (base name: "segment_efforts")', function() {
        // TODO: update the code to test the property segmentEfforts
        expect(instance).to.have.property('segmentEfforts');
        // expect(instance.segmentEfforts).to.be(expectedValueLiteral);
      });

      it('should have the property deviceName (base name: "device_name")', function() {
        // TODO: update the code to test the property deviceName
        expect(instance).to.have.property('deviceName');
        // expect(instance.deviceName).to.be(expectedValueLiteral);
      });

      it('should have the property embedToken (base name: "embed_token")', function() {
        // TODO: update the code to test the property embedToken
        expect(instance).to.have.property('embedToken');
        // expect(instance.embedToken).to.be(expectedValueLiteral);
      });

      it('should have the property splitsMetric (base name: "splits_metric")', function() {
        // TODO: update the code to test the property splitsMetric
        expect(instance).to.have.property('splitsMetric');
        // expect(instance.splitsMetric).to.be(expectedValueLiteral);
      });

      it('should have the property splitsStandard (base name: "splits_standard")', function() {
        // TODO: update the code to test the property splitsStandard
        expect(instance).to.have.property('splitsStandard');
        // expect(instance.splitsStandard).to.be(expectedValueLiteral);
      });

      it('should have the property laps (base name: "laps")', function() {
        // TODO: update the code to test the property laps
        expect(instance).to.have.property('laps');
        // expect(instance.laps).to.be(expectedValueLiteral);
      });

      it('should have the property bestEfforts (base name: "best_efforts")', function() {
        // TODO: update the code to test the property bestEfforts
        expect(instance).to.have.property('bestEfforts');
        // expect(instance.bestEfforts).to.be(expectedValueLiteral);
      });

    });
  });

}));
