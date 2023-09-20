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
    describe('ExplorerSegment', function() {
      beforeEach(function() {
        instance = new StravaApiV3.ExplorerSegment();
      });

      it('should create an instance of ExplorerSegment', function() {
        // TODO: update the code to test ExplorerSegment
        expect(instance).to.be.a(StravaApiV3.ExplorerSegment);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property climbCategory (base name: "climb_category")', function() {
        // TODO: update the code to test the property climbCategory
        expect(instance).to.have.property('climbCategory');
        // expect(instance.climbCategory).to.be(expectedValueLiteral);
      });

      it('should have the property climbCategoryDesc (base name: "climb_category_desc")', function() {
        // TODO: update the code to test the property climbCategoryDesc
        expect(instance).to.have.property('climbCategoryDesc');
        // expect(instance.climbCategoryDesc).to.be(expectedValueLiteral);
      });

      it('should have the property avgGrade (base name: "avg_grade")', function() {
        // TODO: update the code to test the property avgGrade
        expect(instance).to.have.property('avgGrade');
        // expect(instance.avgGrade).to.be(expectedValueLiteral);
      });

      it('should have the property startLatlng (base name: "start_latlng")', function() {
        // TODO: update the code to test the property startLatlng
        expect(instance).to.have.property('startLatlng');
        // expect(instance.startLatlng).to.be(expectedValueLiteral);
      });

      it('should have the property endLatlng (base name: "end_latlng")', function() {
        // TODO: update the code to test the property endLatlng
        expect(instance).to.have.property('endLatlng');
        // expect(instance.endLatlng).to.be(expectedValueLiteral);
      });

      it('should have the property elevDifference (base name: "elev_difference")', function() {
        // TODO: update the code to test the property elevDifference
        expect(instance).to.have.property('elevDifference');
        // expect(instance.elevDifference).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

    });
  });

}));
