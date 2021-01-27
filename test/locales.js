const locales = require('../lib/locales');

require('../locale/pl');

describe('locales', function () {
  it('should select english by default', function () {
    locales().should.have.property('relativeTime')
      .with.property('s', 'a few seconds');
    locales('en').should.be.exactly(locales());
  });

  it('should select english for unknown', function () {
    locales('##').should.have.property('relativeTime')
      .with.property('s', 'a few seconds');
  });

  it('should select locale when exact match found', function () {
    locales('pl').should.have.property('relativeTime')
      .with.property('s', 'kilka sekund');
  });

  it('should discard coutry when not found', function () {
    locales('pl-pl').should.have.property('relativeTime')
      .with.property('s', 'kilka sekund');
  });
});

