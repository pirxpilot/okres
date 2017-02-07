var locales = require('./locales');

module.exports = okres;

function formatInt(format, value) {
  return format.replace('%d', value);
}

function relativeTimeFormat(locale) {
  var relativeTime = locales(locale).relativeTime;

  return function(value, unit) {
    var term = relativeTime[unit];

    return typeof term === 'function' ? term(value, true, unit) : formatInt(term, value);
  };
}

var DURATION_FORMATS = {
  'year': ['y', 'yy'],
  'month': ['M', 'MM'],
  'day': ['d', 'dd'],
  'hour': ['h', 'hh'],
  'minute': ['m', 'mm']
};

function format(relativeTime, duration, options) {

  var showZero = options && options.showZero;

  return Object.keys(DURATION_FORMATS)
    .filter(function(period) {
      return showZero ? period in duration : duration[period];
    })
    .map(function(period) {
      var value = duration[period];
      var unit = DURATION_FORMATS[period][value === 1 ? 0 : 1];
      return relativeTime(value, unit);
    })
    .join(' ');

}

var DEFAULT_FORMAT = format.bind(null, relativeTimeFormat());

function okres(locale) {
  var typeLocale = typeof locale;
  return typeLocale === 'string' || typeLocale === 'undefined'
    ? format.bind(null, relativeTimeFormat(locale))
    : DEFAULT_FORMAT.apply(null, arguments);
}
