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

  beforeEach(function() {
    instance = new StravaApiV3.ClubsApi();
  });

  describe('(package)', function() {
    describe('ClubsApi', function() {
      describe('getClubActivitiesById', function() {
        it('should call getClubActivitiesById successfully', function(done) {
          // TODO: uncomment, update parameter values for getClubActivitiesById call and complete the assertions
          /*
          var id = 789;
          var opts = {};
          opts.page = 56;
          opts.perPage = 30;

          instance.getClubActivitiesById(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StravaApiV3.ClubActivity);
              expect(data.athlete).to.be.a(StravaApiV3.MetaAthlete);
                    expect(data.athlete.id).to.be.a('number');
                expect(data.athlete.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.distance).to.be.a('number');
              expect(data.distance).to.be(0.0);
              expect(data.movingTime).to.be.a('number');
              expect(data.movingTime).to.be(0);
              expect(data.elapsedTime).to.be.a('number');
              expect(data.elapsedTime).to.be(0);
              expect(data.totalElevationGain).to.be.a('number');
              expect(data.totalElevationGain).to.be(0.0);
              expect(data.type).to.be.a(StravaApiV3.ActivityType);
                  expect(data.sportType).to.be.a(StravaApiV3.SportType);
                  expect(data.workoutType).to.be.a('number');
              expect(data.workoutType).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getClubAdminsById', function() {
        it('should call getClubAdminsById successfully', function(done) {
          // TODO: uncomment, update parameter values for getClubAdminsById call and complete the assertions
          /*
          var id = 789;
          var opts = {};
          opts.page = 56;
          opts.perPage = 30;

          instance.getClubAdminsById(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StravaApiV3.SummaryAthlete);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.resourceState).to.be.a('number');
              expect(data.resourceState).to.be(0);
              expect(data.firstname).to.be.a('string');
              expect(data.firstname).to.be("");
              expect(data.lastname).to.be.a('string');
              expect(data.lastname).to.be("");
              expect(data.profileMedium).to.be.a('string');
              expect(data.profileMedium).to.be("");
              expect(data.profile).to.be.a('string');
              expect(data.profile).to.be("");
              expect(data.city).to.be.a('string');
              expect(data.city).to.be("");
              expect(data.state).to.be.a('string');
              expect(data.state).to.be("");
              expect(data.country).to.be.a('string');
              expect(data.country).to.be("");
              expect(data.sex).to.be.a('string');
              expect(data.sex).to.be("M");
              expect(data.premium).to.be.a('boolean');
              expect(data.premium).to.be(false);
              expect(data.summit).to.be.a('boolean');
              expect(data.summit).to.be(false);
              expect(data.createdAt).to.be.a(Date);
              expect(data.createdAt).to.be(new Date());
              expect(data.updatedAt).to.be.a(Date);
              expect(data.updatedAt).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getClubById', function() {
        it('should call getClubById successfully', function(done) {
          // TODO: uncomment, update parameter values for getClubById call and complete the assertions
          /*
          var id = 789;

          instance.getClubById(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.DetailedClub);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.resourceState).to.be.a('number');
            expect(data.resourceState).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.profileMedium).to.be.a('string');
            expect(data.profileMedium).to.be("");
            expect(data.coverPhoto).to.be.a('string');
            expect(data.coverPhoto).to.be("");
            expect(data.coverPhotoSmall).to.be.a('string');
            expect(data.coverPhotoSmall).to.be("");
            expect(data.sportType).to.be.a('string');
            expect(data.sportType).to.be("cycling");
            {
              let dataCtr = data.activityTypes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.ActivityType);

                      }
            }
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data._private).to.be.a('boolean');
            expect(data._private).to.be(false);
            expect(data.memberCount).to.be.a('number');
            expect(data.memberCount).to.be(0);
            expect(data.featured).to.be.a('boolean');
            expect(data.featured).to.be(false);
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");
            expect(data.membership).to.be.a('string');
            expect(data.membership).to.be("member");
            expect(data.admin).to.be.a('boolean');
            expect(data.admin).to.be(false);
            expect(data.owner).to.be.a('boolean');
            expect(data.owner).to.be(false);
            expect(data.followingCount).to.be.a('number');
            expect(data.followingCount).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getClubMembersById', function() {
        it('should call getClubMembersById successfully', function(done) {
          // TODO: uncomment, update parameter values for getClubMembersById call and complete the assertions
          /*
          var id = 789;
          var opts = {};
          opts.page = 56;
          opts.perPage = 30;

          instance.getClubMembersById(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StravaApiV3.ClubAthlete);
              expect(data.resourceState).to.be.a('number');
              expect(data.resourceState).to.be(0);
              expect(data.firstname).to.be.a('string');
              expect(data.firstname).to.be("");
              expect(data.lastname).to.be.a('string');
              expect(data.lastname).to.be("");
              expect(data.member).to.be.a('string');
              expect(data.member).to.be("");
              expect(data.admin).to.be.a('boolean');
              expect(data.admin).to.be(false);
              expect(data.owner).to.be.a('boolean');
              expect(data.owner).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLoggedInAthleteClubs', function() {
        it('should call getLoggedInAthleteClubs successfully', function(done) {
          // TODO: uncomment, update parameter values for getLoggedInAthleteClubs call and complete the assertions
          /*
          var opts = {};
          opts.page = 56;
          opts.perPage = 30;

          instance.getLoggedInAthleteClubs(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StravaApiV3.SummaryClub);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.resourceState).to.be.a('number');
              expect(data.resourceState).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.profileMedium).to.be.a('string');
              expect(data.profileMedium).to.be("");
              expect(data.coverPhoto).to.be.a('string');
              expect(data.coverPhoto).to.be("");
              expect(data.coverPhotoSmall).to.be.a('string');
              expect(data.coverPhotoSmall).to.be("");
              expect(data.sportType).to.be.a('string');
              expect(data.sportType).to.be("cycling");
              {
                let dataCtr = data.activityTypes;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(StravaApiV3.ActivityType);
  
                        }
              }
              expect(data.city).to.be.a('string');
              expect(data.city).to.be("");
              expect(data.state).to.be.a('string');
              expect(data.state).to.be("");
              expect(data.country).to.be.a('string');
              expect(data.country).to.be("");
              expect(data._private).to.be.a('boolean');
              expect(data._private).to.be(false);
              expect(data.memberCount).to.be.a('number');
              expect(data.memberCount).to.be(0);
              expect(data.featured).to.be.a('boolean');
              expect(data.featured).to.be(false);
              expect(data.verified).to.be.a('boolean');
              expect(data.verified).to.be(false);
              expect(data.url).to.be.a('string');
              expect(data.url).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
