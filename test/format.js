const { describe, it, before } = require('node:test');
const format = require('../lib/format');

require('../locale/pl');
require('../locale/it');

describe('format en', function () {
  let _format;

  before(function() {
    _format = format();
  });

  it('should format units', function () {
    _format.toString(5, 'mm').should.be.eql('5 minutes');
  });

  it('should format future', function() {
    _format.toFutureOrPast('10 days', 'future').should.eql('in 10 days');
  });

  it('should format past', function() {
    _format.toFutureOrPast('3 minutes', 'past').should.eql('3 minutes ago');
  });
});

describe('format pl', function () {
  let _format;

  before(function() {
    _format = format('pl');
  });

  it('should format units', function () {
    _format.toString(5, 'mm').should.be.eql('5 minut');
  });

  it('should format future', function() {
    _format.toFutureOrPast('10 dni', 'future').should.eql('za 10 dni');
  });

  it('should format past', function() {
    _format.toFutureOrPast('3 minuty', 'past').should.eql('3 minuty temu');
  });
});

describe('format it', function () {
  let _format;

  before(function() {
    _format = format('it');
  });

  it('should format units', function () {
    _format.toString(5, 'mm').should.be.eql('5 minuti');
  });

  it('should format future', function() {
    _format.toFutureOrPast('5 minuti', 'future').should.eql('tra 5 minuti');
  });

  it('should format past', function() {
    _format.toFutureOrPast('5 minuti', 'past').should.eql('5 minuti fa');
  });
});
