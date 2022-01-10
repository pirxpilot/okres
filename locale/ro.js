//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
//! author : Emanuel Cepoi : https://github.com/cepem

;(function (factory) {
  factory(this._okresLocales);
}(function (moment) { 'use strict';

  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: 'secunde',
      mm: 'minute',
      hh: 'ore',
      dd: 'zile',
      ww: 'săptămâni',
      MM: 'luni',
      yy: 'ani',
    },
      separator = ' ';
    if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
      separator = ' de ';
    }
    return number + separator + format[key];
  }

  var ro = moment.defineLocale('ro', {
    relativeTime: {
      future: 'peste %s',
      past: '%s în urmă',
      s: 'câteva secunde',
      ss: relativeTimeWithPlural,
      m: 'un minut',
      mm: relativeTimeWithPlural,
      h: 'o oră',
      hh: relativeTimeWithPlural,
      d: 'o zi',
      dd: relativeTimeWithPlural,
      w: 'o săptămână',
      ww: relativeTimeWithPlural,
      M: 'o lună',
      MM: relativeTimeWithPlural,
      y: 'un an',
      yy: relativeTimeWithPlural,
    }
  });

  return ro;

}));
