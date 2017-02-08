var locales = require('./locales');

module.exports = timeFormat;

function formatInt(format, value) {
  return format.replace('%d', value);
}

function formatStr(format, value) {
  return format.replace('%s', value);
}

function identity(str) {
  return str;
}

function timeFormat(locale) {
  var localeData = locales(locale);
  var rt = localeData.relativeTime;

  function toString(value, unit, withSuffix) {
    var term = rt[unit];
    return typeof term === 'function'
      ? term(value, withSuffix, unit)
      : formatInt(term, value);
  }

  function toFutureOrPast(value, when) {
    var term = rt[when];
    return typeof term === 'function'
      ? term(value)
      : formatStr(term, value);
  }

  return {
    toString: toString,
    toFutureOrPast: toFutureOrPast,
    postformat: localeData.postformat || identity
  };
}
