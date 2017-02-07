var okres = require('../');

describe('okres', function () {
  it('must format English durations', function () {
    okres({ hour: 10, minute: 5 }).should.be.eql('10 hours 5 minutes');
  });

  it('must skip zeros by default', function () {
    okres({ day: 1, hour: 0, minute: 5 }).should.be.eql('a day 5 minutes');
  });

  it('must show zeros when required', function () {
    okres({ day: 1, hour: 0, minute: 5 }, { showZero: true }).should.be.eql('a day 0 hours 5 minutes');
  });
});
