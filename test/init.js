var mkdirp = require('mkdirp');

before(function () {
	// create some empty dirs (cannot check-in empty dirs to git)
	mkdirp.sync('./test/fixtures/empty');
	mkdirp.sync('./test/tmp');

	assert.isDirectory('./test/fixtures');
	assert.isDirectory('./test/fixtures/empty');
	assert.isDirectory('./test/tmp');
});


var chai = require('chai');
chai.Assertion.includeStack = true;
chai.should();

var _ = require('underscore');

var chai_fs = require('../lib/index');

chai.use(chai_fs);
chai.use(require('chai-json-schema'));

//var expect = chai.expect;
var assert = chai.assert;

// import multi tester
require('./tester')(chai, _);

describe('chai-fs', function () {
	it('exports module', function () {
		assert.isFunction(chai_fs, 'chai_fs export');
	});
});