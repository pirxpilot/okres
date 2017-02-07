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

function okres(duration, locale, options) {

  if (typeof locale === 'object') {
    options = locale;
    locale = undefined;
  }

  var showZero = options && options.showZero;
  var relativeTime = relativeTimeFormat(locale);

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
