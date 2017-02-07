var okres = require('../');

require('../locale/pl');

describe('okres en', function () {
  it('should format durations', function () {
    okres({ hour: 10, minute: 5 }).should.be.eql('10 hours 5 minutes');
  });

  it('should skip zeros by default', function () {
    okres({ day: 1, hour: 0, minute: 5 }).should.be.eql('a day 5 minutes');
  });

  it('should show zeros when required', function () {
    okres({ day: 1, hour: 0, minute: 5 }, { showZero: true }).should.be.eql('a day 0 hours 5 minutes');
  });
});

describe('okres pl', function () {
  it('should format durations', function () {
    okres({ hour: 10, minute: 5 }, 'pl').should.be.eql('10 godzin 5 minut');
  });

  it('should skip zeros by default', function () {
    okres({ day: 1, hour: 0, minute: 5 }, 'pl').should.be.eql('1 dzień 5 minut');
  });

  it('should show zeros when required', function () {
    okres({ day: 1, hour: 0, minute: 5 }, 'pl', { showZero: true }).should.be.eql('1 dzień 0 godzin 5 minut');
  });
});
