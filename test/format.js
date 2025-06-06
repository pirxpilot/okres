const { describe, it, before } = require('node:test');
const assert = require('node:assert/strict');
const format = require('../lib/format');

require('../locale/pl');
require('../locale/it');

describe('format en', () => {
  let _format;

  before(() => {
    _format = format();
  });

  it('should format units', () => {
    assert.equal(_format.toString(5, 'mm'), '5 minutes');
  });

  it('should format future', () => {
    assert.equal(_format.toFutureOrPast('10 days', 'future'), 'in 10 days');
  });

  it('should format past', () => {
    assert.equal(_format.toFutureOrPast('3 minutes', 'past'), '3 minutes ago');
  });
});

describe('format pl', () => {
  let _format;

  before(() => {
    _format = format('pl');
  });

  it('should format units', () => {
    assert.equal(_format.toString(5, 'mm'), '5 minut');
  });

  it('should format future', () => {
    assert.equal(_format.toFutureOrPast('10 dni', 'future'), 'za 10 dni');
  });

  it('should format past', () => {
    assert.equal(_format.toFutureOrPast('3 minuty', 'past'), '3 minuty temu');
  });
});

describe('format it', () => {
  let _format;

  before(() => {
    _format = format('it');
  });

  it('should format units', () => {
    assert.equal(_format.toString(5, 'mm'), '5 minuti');
  });

  it('should format future', () => {
    assert.equal(_format.toFutureOrPast('5 minuti', 'future'), 'tra 5 minuti');
  });

  it('should format past', () => {
    assert.equal(_format.toFutureOrPast('5 minuti', 'past'), '5 minuti fa');
  });
});
