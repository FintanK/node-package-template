var should = require('chai').should(),
    main = require('../main');

describe('#output', function() {
  it('verifies that the input matches the output', function() {
    var input = "test";
    main.helloWorld(input).should.equal(input);
  });
});
