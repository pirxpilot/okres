var timeFormat = require('./format');

module.exports = okres;

var DURATION_FORMATS = {
  'year': ['y', 'yy'],
  'month': ['M', 'MM'],
  'day': ['d', 'dd'],
  'hour': ['h', 'hh'],
  'minute': ['m', 'mm']
};

function format(timeFormat, duration, options) {

  options = options || {};

  var withSuffix = options.future || options.past;

  var str =  Object.keys(DURATION_FORMATS)
    .filter(function(period) {
      return options.showZero ? period in duration : duration[period];
    })
    .map(function(period) {
      var value = duration[period];
      var unit = DURATION_FORMATS[period][value === 1 ? 0 : 1];
      return timeFormat.toString(value, unit, withSuffix);
    })
    .join(' ');

  if (withSuffix) {
    var when = options.future ? 'future' : 'past';
    str = timeFormat.toFutureOrPast(str, when);
  }

  return timeFormat.postformat(str);
}

var DEFAULT_FORMAT = format.bind(null, timeFormat());

function okres(locale) {
  var typeLocale = typeof locale;
  return typeLocale === 'string' || typeLocale === 'undefined'
    ? format.bind(null, timeFormat(locale))
    : DEFAULT_FORMAT.apply(null, arguments);
}
