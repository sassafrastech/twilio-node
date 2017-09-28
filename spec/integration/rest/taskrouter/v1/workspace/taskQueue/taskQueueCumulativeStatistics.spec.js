'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('TaskQueueCumulativeStatistics', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskQueues('WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskQueueCumulativeStatistics().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        taskQueueSid: 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/TaskQueues/<%= taskQueueSid %>/CumulativeStatistics')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'reservations_created': 100,
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'reservations_rejected': 100,
          'tasks_completed': 100,
          'end_time': '2015-07-30T20:00:00Z',
          'tasks_entered': 100,
          'tasks_canceled': 100,
          'reservations_accepted': 100,
          'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'reservations_timed_out': 100,
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
          'wait_duration_until_canceled': {
              'avg': 0,
              'min': 0,
              'max': 0,
              'total': 0
          },
          'wait_duration_until_accepted': {
              'avg': 0,
              'min': 0,
              'max': 0,
              'total': 0
          },
          'split_by_wait_time': {
              '5': {
                  'above': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  },
                  'below': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  }
              },
              '10': {
                  'above': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  },
                  'below': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  }
              }
          },
          'start_time': '2015-07-30T20:00:00Z',
          'tasks_moved': 100,
          'reservations_canceled': 100,
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'tasks_deleted': 100,
          'reservations_rescinded': 100,
          'avg_task_acceptance_time': 100
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskQueues('WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .taskQueueCumulativeStatistics().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

