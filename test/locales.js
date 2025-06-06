const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const locales = require('../lib/locales');

require('../locale/pl');

describe('locales', () => {
  it('should select english by default', () => {
    const defaultLocale = locales();
    assert.ok('relativeTime' in defaultLocale);
    assert.equal(defaultLocale.relativeTime.s, 'a few seconds');

    assert.equal(locales('en'), defaultLocale);
  });

  it('should select english for unknown', () => {
    const unknownLocale = locales('##');
    assert.ok('relativeTime' in unknownLocale);
    assert.equal(unknownLocale.relativeTime.s, 'a few seconds');

    assert.equal(locales('en'), unknownLocale);
  });

  it('should select locale when exact match found', () => {
    const pl = locales('pl');
    assert.ok('relativeTime' in pl);
    assert.equal(pl.relativeTime.s, 'kilka sekund');
  });

  it('should discard coutry when not found', () => {
    const plpl = locales('pl-PL');
    assert.ok('relativeTime' in plpl);
    assert.equal(plpl.relativeTime.s, 'kilka sekund');

    assert.equal(locales('pl'), plpl);
  });
});
