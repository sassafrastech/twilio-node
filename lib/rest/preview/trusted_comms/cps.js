'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var CpsList;
var CpsPage;
var CpsInstance;
var CpsContext;

/* jshint ignore:start */
/**
 * Initialize the CpsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CpsList
 *
 * @param {Twilio.Preview.TrustedComms} version - Version of the resource
 */
/* jshint ignore:end */
CpsList = function CpsList(version) {
  /* jshint ignore:start */
  /**
   * @function cps
   * @memberof Twilio.Preview.TrustedComms#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.TrustedComms.CpsContext}
   */
  /* jshint ignore:end */
  function CpsListInstance(sid) {
    return CpsListInstance.get(sid);
  }

  CpsListInstance._version = version;
  // Path Solution
  CpsListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a cps
   *
   * @function get
   * @memberof Twilio.Preview.TrustedComms.CpsList#
   *
   * @returns {Twilio.Preview.TrustedComms.CpsContext}
   */
  /* jshint ignore:end */
  CpsListInstance.get = function get() {
    return new CpsContext(this._version);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Preview.TrustedComms.CpsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  CpsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  CpsListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return CpsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the CpsPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CpsPage
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {CpsSolution} solution - Path solution
 *
 * @returns CpsPage
 */
/* jshint ignore:end */
CpsPage = function CpsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(CpsPage.prototype, Page.prototype);
CpsPage.prototype.constructor = CpsPage;

/* jshint ignore:start */
/**
 * Build an instance of CpsInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.TrustedComms.CpsPage#
 *
 * @param {CpsPayload} payload - Payload response from the API
 *
 * @returns CpsInstance
 */
/* jshint ignore:end */
CpsPage.prototype.getInstance = function getInstance(payload) {
  return new CpsInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.CpsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
CpsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CpsPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CpsContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CpsInstance
 *
 * @property {string} cpsUrl - CPS URL of the phone number.
 * @property {string} phoneNumber - Phone number passed.
 * @property {string} url - The URL of this resource.
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {CpsPayload} payload - The instance payload
 */
/* jshint ignore:end */
CpsInstance = function CpsInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.cpsUrl = payload.cps_url; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
};

Object.defineProperty(CpsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CpsContext(this._version);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a CpsInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.TrustedComms.CpsInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CpsInstance
 */
/* jshint ignore:end */
CpsInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.CpsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
CpsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CpsInstance.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CpsContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.CpsContext
 *
 * @param {TrustedComms} version - Version of the resource
 */
/* jshint ignore:end */
CpsContext = function CpsContext(version) {
  this._version = version;

  // Path Solution
  this._solution = {};
  this._uri = `/CPS`;
};

/* jshint ignore:start */
/**
 * fetch a CpsInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.TrustedComms.CpsContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CpsInstance
 */
/* jshint ignore:end */
CpsContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new CpsInstance(this._version, payload));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.CpsContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
CpsContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

CpsContext.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  CpsList: CpsList,
  CpsPage: CpsPage,
  CpsInstance: CpsInstance,
  CpsContext: CpsContext
};
