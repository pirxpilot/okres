const { describe, it, before } = require('node:test');
const assert = require('node:assert/strict');
const okres = require('../');

require('../locale');

describe('okres en', () => {
  it('should format durations', () => {
    assert.equal(okres({ hour: 10, minute: 5 }), '10 hours 5 minutes');
  });

  it('should skip zeros by default', () => {
    assert.equal(okres({ day: 1, hour: 0, minute: 5 }), 'a day 5 minutes');
  });

  it('should show zeros when required', () => {
    assert.equal(okres({ day: 1, hour: 0, minute: 5 }, { showZero: true }), 'a day 0 hours 5 minutes');
  });

  it('should format future', () => {
    assert.equal(okres({ hour: 10, minute: 5 }, { future: true }), 'in 10 hours 5 minutes');
  });

  it('should format past', () => {
    assert.equal(okres({ hour: 10, minute: 5 }, { past: true }), '10 hours 5 minutes ago');
  });
});

describe('okres pl', () => {
  let _okres;

  before(() => {
    _okres = okres('pl');
  });

  it('should format durations', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }), '10 godzin 5 minut');
  });

  it('should skip zeros by default', () => {
    assert.equal(_okres({ day: 1, hour: 0, minute: 5 }), '1 dzień 5 minut');
  });

  it('should show zeros when required', () => {
    assert.equal(_okres({ day: 1, hour: 0, minute: 5 }, { showZero: true }), '1 dzień 0 godzin 5 minut');
  });

  it('should format future', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { future: true }), 'za 10 godzin 5 minut');
  });

  it('should format past', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { past: true }), '10 godzin 5 minut temu');
  });

  it('should format singular forms properly', () => {
    assert.equal(_okres({ hour: 1, minute: 5 }), 'godzina 5 minut');
    assert.equal(_okres({ hour: 1, minute: 5 }, { future: true }), 'za godzinę 5 minut');
    assert.equal(_okres({ hour: 1, minute: 5 }, { past: true }), 'godzinę 5 minut temu');
  });
});

describe('okres ro', () => {
  let _okres;

  before(() => {
    _okres = okres('ro');
  });

  it('should format durations', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }), '10 ore 5 minute');
  });

  it('should format future', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { future: true }), 'peste 10 ore 5 minute');
  });

  it('should format past', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { past: true }), '10 ore 5 minute în urmă');
  });

  it('should format singular forms properly', () => {
    assert.equal(_okres({ hour: 1, minute: 5 }), 'o oră 5 minute');
    assert.equal(_okres({ hour: 1, minute: 5 }, { future: true }), 'peste o oră 5 minute');
    assert.equal(_okres({ hour: 1, minute: 5 }, { past: true }), 'o oră 5 minute în urmă');
  });
});

describe('okres catalan', () => {
  let _okres;

  before(() => {
    _okres = okres('ca');
  });

  it('should format durations', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }), '10 hores 5 minuts');
  });

  it('should format future', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { future: true }), "d'aquí 10 hores 5 minuts");
  });

  it('should format past', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { past: true }), 'fa 10 hores 5 minuts');
  });

  it('should format singular forms properly', () => {
    assert.equal(_okres({ hour: 1, minute: 5 }), 'una hora 5 minuts');
    assert.equal(_okres({ hour: 1, minute: 5 }, { future: true }), "d'aquí una hora 5 minuts");
    assert.equal(_okres({ hour: 1, minute: 5 }, { past: true }), 'fa una hora 5 minuts');
  });
});

describe('okres danish', () => {
  let _okres;

  before(() => {
    _okres = okres('da');
  });

  it('should format durations', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }), '10 timer 5 minutter');
  });

  it('should format future', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { future: true }), 'om 10 timer 5 minutter');
  });

  it('should format past', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { past: true }), '10 timer 5 minutter siden');
  });

  it('should format singular forms properly', () => {
    assert.equal(_okres({ hour: 1, minute: 5 }), 'en time 5 minutter');
    assert.equal(_okres({ hour: 1, minute: 5 }, { future: true }), 'om en time 5 minutter');
    assert.equal(_okres({ hour: 1, minute: 5 }, { past: true }), 'en time 5 minutter siden');
  });
});

describe('okres bn', () => {
  let _okres;

  before(() => {
    _okres = okres('bn');
  });

  it('should format durations and use postformat', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }), '১০ ঘন্টা ৫ মিনিট');
  });
});

describe('okres ar', () => {
  let _okres;

  before(() => {
    _okres = okres('ar');
  });

  it('should format durations and use postformat', () => {
    assert.equal(_okres({ hour: 10, minute: 5 }, { future: true }), 'بعد ١٠ ساعات ٥ دقائق');
  });
});
