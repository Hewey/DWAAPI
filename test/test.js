var expect = require('expect');
var request = require('supertest');

describe('API', function() {
	var server;

	beforeEach(function() {
		server = require('../server.js');
	});

	afterEach(function(){
		server.close();
	});

	it('Should load correctly', function(done){
		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { hello: "world"}, done);
	});
});