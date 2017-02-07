var locales = require('./locales');

module.exports = timeFormat;

function formatInt(format, value) {
  return format.replace('%d', value);
}

function formatStr(format, value) {
  return format.replace('%s', value);
}

function timeFormat(locale) {
  var rt = locales(locale).relativeTime;

  function toString(value, unit, withSuffix) {
    var term = rt[unit];
    return typeof term === 'function'
      ? term(value, withSuffix, unit)
      : formatInt(term, value);
  }

  function toFutureOrPast(value, when) {
    var term = rt[when];
    return formatStr(term, value);
  }

  return {
    toString: toString,
    toFutureOrPast: toFutureOrPast
  };
}
