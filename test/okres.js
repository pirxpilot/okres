const { describe, it, before } = require('node:test');
const okres = require('../');

require('../locale');

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

  it('should format future', function () {
    okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('in 10 hours 5 minutes');
  });

  it('should format past', function () {
    okres({ hour: 10, minute: 5 }, { past: true }).should.be.eql('10 hours 5 minutes ago');
  });
});

describe('okres pl', function () {
  let _okres;

  before(function() {
    _okres = okres('pl');
  });

  it('should format durations', function () {
    _okres({ hour: 10, minute: 5 }).should.be.eql('10 godzin 5 minut');
  });

  it('should skip zeros by default', function () {
    _okres({ day: 1, hour: 0, minute: 5 }).should.be.eql('1 dzień 5 minut');
  });

  it('should show zeros when required', function () {
    _okres({ day: 1, hour: 0, minute: 5 }, { showZero: true }).should.be.eql('1 dzień 0 godzin 5 minut');
  });

  it('should format future', function () {
    _okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('za 10 godzin 5 minut');
  });

  it('should format past', function () {
    _okres({ hour: 10, minute: 5 }, { past: true }).should.be.eql('10 godzin 5 minut temu');
  });

  it('should format singular forms properly', function () {
    _okres({ hour: 1, minute: 5 }).should.be.eql('godzina 5 minut');
    _okres({ hour: 1, minute: 5 }, { future: true }).should.be.eql('za godzinę 5 minut');
    _okres({ hour: 1, minute: 5 }, { past: true }).should.be.eql('godzinę 5 minut temu');
  });
});

describe('okres ro', function () {
  let _okres;

  before(function() {
    _okres = okres('ro');
  });

  it('should format durations', function () {
    _okres({ hour: 10, minute: 5 }).should.be.eql('10 ore 5 minute');
  });

  it('should format future', function () {
    _okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('peste 10 ore 5 minute');
  });

  it('should format past', function () {
    _okres({ hour: 10, minute: 5 }, { past: true }).should.be.eql('10 ore 5 minute în urmă');
  });

  it('should format singular forms properly', function () {
    _okres({ hour: 1, minute: 5 }).should.be.eql('o oră 5 minute');
    _okres({ hour: 1, minute: 5 }, { future: true }).should.be.eql('peste o oră 5 minute');
    _okres({ hour: 1, minute: 5 }, { past: true }).should.be.eql('o oră 5 minute în urmă');
  });
});

describe('okres catalan', function () {
  let _okres;

  before(function() {
    _okres = okres('ca');
  });

  it('should format durations', function () {
    _okres({ hour: 10, minute: 5 }).should.be.eql('10 hores 5 minuts');
  });

  it('should format future', function () {
    _okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('d\'aquí 10 hores 5 minuts');
  });

  it('should format past', function () {
    _okres({ hour: 10, minute: 5 }, { past: true }).should.be.eql('fa 10 hores 5 minuts');
  });

  it('should format singular forms properly', function () {
    _okres({ hour: 1, minute: 5 }).should.be.eql('una hora 5 minuts');
    _okres({ hour: 1, minute: 5 }, { future: true }).should.be.eql('d\'aquí una hora 5 minuts');
    _okres({ hour: 1, minute: 5 }, { past: true }).should.be.eql('fa una hora 5 minuts');
  });
});

describe('okres danish', function () {
  let _okres;

  before(function() {
    _okres = okres('da');
  });

  it('should format durations', function () {
    _okres({ hour: 10, minute: 5 }).should.be.eql('10 timer 5 minutter');
  });

  it('should format future', function () {
    _okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('om 10 timer 5 minutter');
  });

  it('should format past', function () {
    _okres({ hour: 10, minute: 5 }, { past: true }).should.be.eql('10 timer 5 minutter siden');
  });

  it('should format singular forms properly', function () {
    _okres({ hour: 1, minute: 5 }).should.be.eql('en time 5 minutter');
    _okres({ hour: 1, minute: 5 }, { future: true }).should.be.eql('om en time 5 minutter');
    _okres({ hour: 1, minute: 5 }, { past: true }).should.be.eql('en time 5 minutter siden');
  });
});


describe('okres bn', function () {
  let _okres;

  before(function() {
    _okres = okres('bn');
  });

  it('should format durations and use postformat', function () {
    _okres({ hour: 10, minute: 5 }).should.be.eql('১০ ঘন্টা ৫ মিনিট');
  });
});

describe('okres ar', function () {
  let _okres;

  before(function() {
    _okres = okres('ar');
  });

  it('should format durations and use postformat', function () {
    _okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('بعد ١٠ ساعات ٥ دقائق');
  });
});
