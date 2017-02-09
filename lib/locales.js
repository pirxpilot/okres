module.exports = getLocale;

var en = {
  relativeTime : {
    future : 'in %s',
    past : '%s ago',
    s : 'a few seconds',
    m : 'a minute',
    mm : '%d minutes',
    h : 'an hour',
    hh : '%d hours',
    d : 'a day',
    dd : '%d days',
    M : 'a month',
    MM : '%d months',
    y : 'a year',
    yy : '%d years'
  }
};

var LOCALES = {
  _: en
};

function getLocale(locale) {
  if (!locale || typeof locale !== 'string') {
    return LOCALES._;
  }
  locale = locale.toLowerCase();
  var selected = LOCALES[locale];
  if (selected) {
    return selected;
  }
  var lang = locale.split('-')[0];
  if (lang !== locale) {
    selected = LOCALES[lang];
  }
  return selected || LOCALES._;
}

function defineLocale(locale, obj) {
  LOCALES[locale] = obj;
}

(function () {
  var global = this;
  global._okresLocales = { defineLocale: defineLocale };
}());
