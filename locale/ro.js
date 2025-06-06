//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
//! author : Emanuel Cepoi : https://github.com/cepem

(function ({ defineLocale }) {
  function relativeTimeWithPlural(number, _withoutSuffix, key) {
    const format = {
      ss: 'secunde',
      mm: 'minute',
      hh: 'ore',
      dd: 'zile',
      ww: 'săptămâni',
      MM: 'luni',
      yy: 'ani'
    };
    let separator = ' ';
    if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
      separator = ' de ';
    }
    return number + separator + format[key];
  }

  const ro = defineLocale('ro', {
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
      yy: relativeTimeWithPlural
    }
  });

  return ro;
})(globalThis._okresLocales);
