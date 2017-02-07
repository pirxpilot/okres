var okres = require('../');

describe('okres', function () {
  it('must format English durations', function () {
    okres({ hours: 10, minute: 5 }).should.be.eql('10 hours 5 minutes');
  });
});
