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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActivityStats', 'model/ActivityTotal', 'model/ActivityType', 'model/ActivityZone', 'model/AltitudeStream', 'model/BaseStream', 'model/CadenceStream', 'model/ClubActivity', 'model/ClubAthlete', 'model/Comment', 'model/DetailedActivity', 'model/DetailedAthlete', 'model/DetailedClub', 'model/DetailedGear', 'model/DetailedSegment', 'model/DetailedSegmentEffort', 'model/DistanceStream', 'model/Error', 'model/ExplorerResponse', 'model/ExplorerSegment', 'model/Fault', 'model/HeartRateZoneRanges', 'model/HeartrateStream', 'model/Lap', 'model/LatLng', 'model/LatLngStream', 'model/MetaActivity', 'model/MetaAthlete', 'model/MetaClub', 'model/MovingStream', 'model/PhotosSummary', 'model/PhotosSummaryPrimary', 'model/PolylineMap', 'model/PowerStream', 'model/PowerZoneRanges', 'model/Route', 'model/SmoothGradeStream', 'model/SmoothVelocityStream', 'model/Split', 'model/SportType', 'model/StreamSet', 'model/SummaryActivity', 'model/SummaryAthlete', 'model/SummaryClub', 'model/SummaryGear', 'model/SummaryPRSegmentEffort', 'model/SummarySegment', 'model/SummarySegmentEffort', 'model/TemperatureStream', 'model/TimeStream', 'model/TimedZoneDistribution', 'model/TimedZoneRange', 'model/UpdatableActivity', 'model/Upload', 'model/ZoneRange', 'model/ZoneRanges', 'model/Zones', 'api/ActivitiesApi', 'api/AthletesApi', 'api/ClubsApi', 'api/GearsApi', 'api/RoutesApi', 'api/SegmentEffortsApi', 'api/SegmentsApi', 'api/StreamsApi', 'api/UploadsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ActivityStats'), require('./model/ActivityTotal'), require('./model/ActivityType'), require('./model/ActivityZone'), require('./model/AltitudeStream'), require('./model/BaseStream'), require('./model/CadenceStream'), require('./model/ClubActivity'), require('./model/ClubAthlete'), require('./model/Comment'), require('./model/DetailedActivity'), require('./model/DetailedAthlete'), require('./model/DetailedClub'), require('./model/DetailedGear'), require('./model/DetailedSegment'), require('./model/DetailedSegmentEffort'), require('./model/DistanceStream'), require('./model/Error'), require('./model/ExplorerResponse'), require('./model/ExplorerSegment'), require('./model/Fault'), require('./model/HeartRateZoneRanges'), require('./model/HeartrateStream'), require('./model/Lap'), require('./model/LatLng'), require('./model/LatLngStream'), require('./model/MetaActivity'), require('./model/MetaAthlete'), require('./model/MetaClub'), require('./model/MovingStream'), require('./model/PhotosSummary'), require('./model/PhotosSummaryPrimary'), require('./model/PolylineMap'), require('./model/PowerStream'), require('./model/PowerZoneRanges'), require('./model/Route'), require('./model/SmoothGradeStream'), require('./model/SmoothVelocityStream'), require('./model/Split'), require('./model/SportType'), require('./model/StreamSet'), require('./model/SummaryActivity'), require('./model/SummaryAthlete'), require('./model/SummaryClub'), require('./model/SummaryGear'), require('./model/SummaryPRSegmentEffort'), require('./model/SummarySegment'), require('./model/SummarySegmentEffort'), require('./model/TemperatureStream'), require('./model/TimeStream'), require('./model/TimedZoneDistribution'), require('./model/TimedZoneRange'), require('./model/UpdatableActivity'), require('./model/Upload'), require('./model/ZoneRange'), require('./model/ZoneRanges'), require('./model/Zones'), require('./api/ActivitiesApi'), require('./api/AthletesApi'), require('./api/ClubsApi'), require('./api/GearsApi'), require('./api/RoutesApi'), require('./api/SegmentEffortsApi'), require('./api/SegmentsApi'), require('./api/StreamsApi'), require('./api/UploadsApi'));
  }
}(function(ApiClient, ActivityStats, ActivityTotal, ActivityType, ActivityZone, AltitudeStream, BaseStream, CadenceStream, ClubActivity, ClubAthlete, Comment, DetailedActivity, DetailedAthlete, DetailedClub, DetailedGear, DetailedSegment, DetailedSegmentEffort, DistanceStream, Error, ExplorerResponse, ExplorerSegment, Fault, HeartRateZoneRanges, HeartrateStream, Lap, LatLng, LatLngStream, MetaActivity, MetaAthlete, MetaClub, MovingStream, PhotosSummary, PhotosSummaryPrimary, PolylineMap, PowerStream, PowerZoneRanges, Route, SmoothGradeStream, SmoothVelocityStream, Split, SportType, StreamSet, SummaryActivity, SummaryAthlete, SummaryClub, SummaryGear, SummaryPRSegmentEffort, SummarySegment, SummarySegmentEffort, TemperatureStream, TimeStream, TimedZoneDistribution, TimedZoneRange, UpdatableActivity, Upload, ZoneRange, ZoneRanges, Zones, ActivitiesApi, AthletesApi, ClubsApi, GearsApi, RoutesApi, SegmentEffortsApi, SegmentsApi, StreamsApi, UploadsApi) {
  'use strict';

  /**
   * The__Swagger_Playground_httpsdevelopers_strava_complayground_is_the_easiest_way_to_familiarize_yourself_with_the_Strava_API_by_submitting_HTTP_requests_and_observing_the_responses_before_you_write_any_client_code__It_will_show_what_a_response_will_look_like_with_different_endpoints_depending_on_the_authorization_scope_you_receive_from_your_athletes__To_use_the_Playground_go_to_httpswww_strava_comsettingsapi_and_change_your_Authorization_Callback_Domain_to_developers_strava_com__Please_note_we_only_support_Swagger_2_0__There_is_a_known_issue_where_you_can_only_select_one_scope_at_a_time__For_more_information_please_check_the_section_client_code_at_httpsdevelopers_strava_comdocs_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var StravaApiV3 = require('index'); // See note below*.
   * var xxxSvc = new StravaApiV3.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new StravaApiV3.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new StravaApiV3.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new StravaApiV3.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ActivityStats model constructor.
     * @property {module:model/ActivityStats}
     */
    ActivityStats: ActivityStats,
    /**
     * The ActivityTotal model constructor.
     * @property {module:model/ActivityTotal}
     */
    ActivityTotal: ActivityTotal,
    /**
     * The ActivityType model constructor.
     * @property {module:model/ActivityType}
     */
    ActivityType: ActivityType,
    /**
     * The ActivityZone model constructor.
     * @property {module:model/ActivityZone}
     */
    ActivityZone: ActivityZone,
    /**
     * The AltitudeStream model constructor.
     * @property {module:model/AltitudeStream}
     */
    AltitudeStream: AltitudeStream,
    /**
     * The BaseStream model constructor.
     * @property {module:model/BaseStream}
     */
    BaseStream: BaseStream,
    /**
     * The CadenceStream model constructor.
     * @property {module:model/CadenceStream}
     */
    CadenceStream: CadenceStream,
    /**
     * The ClubActivity model constructor.
     * @property {module:model/ClubActivity}
     */
    ClubActivity: ClubActivity,
    /**
     * The ClubAthlete model constructor.
     * @property {module:model/ClubAthlete}
     */
    ClubAthlete: ClubAthlete,
    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment: Comment,
    /**
     * The DetailedActivity model constructor.
     * @property {module:model/DetailedActivity}
     */
    DetailedActivity: DetailedActivity,
    /**
     * The DetailedAthlete model constructor.
     * @property {module:model/DetailedAthlete}
     */
    DetailedAthlete: DetailedAthlete,
    /**
     * The DetailedClub model constructor.
     * @property {module:model/DetailedClub}
     */
    DetailedClub: DetailedClub,
    /**
     * The DetailedGear model constructor.
     * @property {module:model/DetailedGear}
     */
    DetailedGear: DetailedGear,
    /**
     * The DetailedSegment model constructor.
     * @property {module:model/DetailedSegment}
     */
    DetailedSegment: DetailedSegment,
    /**
     * The DetailedSegmentEffort model constructor.
     * @property {module:model/DetailedSegmentEffort}
     */
    DetailedSegmentEffort: DetailedSegmentEffort,
    /**
     * The DistanceStream model constructor.
     * @property {module:model/DistanceStream}
     */
    DistanceStream: DistanceStream,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ExplorerResponse model constructor.
     * @property {module:model/ExplorerResponse}
     */
    ExplorerResponse: ExplorerResponse,
    /**
     * The ExplorerSegment model constructor.
     * @property {module:model/ExplorerSegment}
     */
    ExplorerSegment: ExplorerSegment,
    /**
     * The Fault model constructor.
     * @property {module:model/Fault}
     */
    Fault: Fault,
    /**
     * The HeartRateZoneRanges model constructor.
     * @property {module:model/HeartRateZoneRanges}
     */
    HeartRateZoneRanges: HeartRateZoneRanges,
    /**
     * The HeartrateStream model constructor.
     * @property {module:model/HeartrateStream}
     */
    HeartrateStream: HeartrateStream,
    /**
     * The Lap model constructor.
     * @property {module:model/Lap}
     */
    Lap: Lap,
    /**
     * The LatLng model constructor.
     * @property {module:model/LatLng}
     */
    LatLng: LatLng,
    /**
     * The LatLngStream model constructor.
     * @property {module:model/LatLngStream}
     */
    LatLngStream: LatLngStream,
    /**
     * The MetaActivity model constructor.
     * @property {module:model/MetaActivity}
     */
    MetaActivity: MetaActivity,
    /**
     * The MetaAthlete model constructor.
     * @property {module:model/MetaAthlete}
     */
    MetaAthlete: MetaAthlete,
    /**
     * The MetaClub model constructor.
     * @property {module:model/MetaClub}
     */
    MetaClub: MetaClub,
    /**
     * The MovingStream model constructor.
     * @property {module:model/MovingStream}
     */
    MovingStream: MovingStream,
    /**
     * The PhotosSummary model constructor.
     * @property {module:model/PhotosSummary}
     */
    PhotosSummary: PhotosSummary,
    /**
     * The PhotosSummaryPrimary model constructor.
     * @property {module:model/PhotosSummaryPrimary}
     */
    PhotosSummaryPrimary: PhotosSummaryPrimary,
    /**
     * The PolylineMap model constructor.
     * @property {module:model/PolylineMap}
     */
    PolylineMap: PolylineMap,
    /**
     * The PowerStream model constructor.
     * @property {module:model/PowerStream}
     */
    PowerStream: PowerStream,
    /**
     * The PowerZoneRanges model constructor.
     * @property {module:model/PowerZoneRanges}
     */
    PowerZoneRanges: PowerZoneRanges,
    /**
     * The Route model constructor.
     * @property {module:model/Route}
     */
    Route: Route,
    /**
     * The SmoothGradeStream model constructor.
     * @property {module:model/SmoothGradeStream}
     */
    SmoothGradeStream: SmoothGradeStream,
    /**
     * The SmoothVelocityStream model constructor.
     * @property {module:model/SmoothVelocityStream}
     */
    SmoothVelocityStream: SmoothVelocityStream,
    /**
     * The Split model constructor.
     * @property {module:model/Split}
     */
    Split: Split,
    /**
     * The SportType model constructor.
     * @property {module:model/SportType}
     */
    SportType: SportType,
    /**
     * The StreamSet model constructor.
     * @property {module:model/StreamSet}
     */
    StreamSet: StreamSet,
    /**
     * The SummaryActivity model constructor.
     * @property {module:model/SummaryActivity}
     */
    SummaryActivity: SummaryActivity,
    /**
     * The SummaryAthlete model constructor.
     * @property {module:model/SummaryAthlete}
     */
    SummaryAthlete: SummaryAthlete,
    /**
     * The SummaryClub model constructor.
     * @property {module:model/SummaryClub}
     */
    SummaryClub: SummaryClub,
    /**
     * The SummaryGear model constructor.
     * @property {module:model/SummaryGear}
     */
    SummaryGear: SummaryGear,
    /**
     * The SummaryPRSegmentEffort model constructor.
     * @property {module:model/SummaryPRSegmentEffort}
     */
    SummaryPRSegmentEffort: SummaryPRSegmentEffort,
    /**
     * The SummarySegment model constructor.
     * @property {module:model/SummarySegment}
     */
    SummarySegment: SummarySegment,
    /**
     * The SummarySegmentEffort model constructor.
     * @property {module:model/SummarySegmentEffort}
     */
    SummarySegmentEffort: SummarySegmentEffort,
    /**
     * The TemperatureStream model constructor.
     * @property {module:model/TemperatureStream}
     */
    TemperatureStream: TemperatureStream,
    /**
     * The TimeStream model constructor.
     * @property {module:model/TimeStream}
     */
    TimeStream: TimeStream,
    /**
     * The TimedZoneDistribution model constructor.
     * @property {module:model/TimedZoneDistribution}
     */
    TimedZoneDistribution: TimedZoneDistribution,
    /**
     * The TimedZoneRange model constructor.
     * @property {module:model/TimedZoneRange}
     */
    TimedZoneRange: TimedZoneRange,
    /**
     * The UpdatableActivity model constructor.
     * @property {module:model/UpdatableActivity}
     */
    UpdatableActivity: UpdatableActivity,
    /**
     * The Upload model constructor.
     * @property {module:model/Upload}
     */
    Upload: Upload,
    /**
     * The ZoneRange model constructor.
     * @property {module:model/ZoneRange}
     */
    ZoneRange: ZoneRange,
    /**
     * The ZoneRanges model constructor.
     * @property {module:model/ZoneRanges}
     */
    ZoneRanges: ZoneRanges,
    /**
     * The Zones model constructor.
     * @property {module:model/Zones}
     */
    Zones: Zones,
    /**
     * The ActivitiesApi service constructor.
     * @property {module:api/ActivitiesApi}
     */
    ActivitiesApi: ActivitiesApi,
    /**
     * The AthletesApi service constructor.
     * @property {module:api/AthletesApi}
     */
    AthletesApi: AthletesApi,
    /**
     * The ClubsApi service constructor.
     * @property {module:api/ClubsApi}
     */
    ClubsApi: ClubsApi,
    /**
     * The GearsApi service constructor.
     * @property {module:api/GearsApi}
     */
    GearsApi: GearsApi,
    /**
     * The RoutesApi service constructor.
     * @property {module:api/RoutesApi}
     */
    RoutesApi: RoutesApi,
    /**
     * The SegmentEffortsApi service constructor.
     * @property {module:api/SegmentEffortsApi}
     */
    SegmentEffortsApi: SegmentEffortsApi,
    /**
     * The SegmentsApi service constructor.
     * @property {module:api/SegmentsApi}
     */
    SegmentsApi: SegmentsApi,
    /**
     * The StreamsApi service constructor.
     * @property {module:api/StreamsApi}
     */
    StreamsApi: StreamsApi,
    /**
     * The UploadsApi service constructor.
     * @property {module:api/UploadsApi}
     */
    UploadsApi: UploadsApi
  };

  return exports;
}));
