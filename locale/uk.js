//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire

(function ({ defineLocale }) {
  function plural(word, num) {
    const forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11
      ? forms[0]
      : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
        ? forms[1]
        : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    const format = {
      mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
      hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
      dd: 'день_дні_днів',
      MM: 'місяць_місяці_місяців',
      yy: 'рік_роки_років'
    };
    if (key === 'm') {
      return withoutSuffix ? 'хвилина' : 'хвилину';
    }
    if (key === 'h') {
      return withoutSuffix ? 'година' : 'годину';
    }
    return number + ' ' + plural(format[key], +number);
  }

  const uk = defineLocale('uk', {
    relativeTime: {
      future: 'за %s',
      past: '%s тому',
      s: 'декілька секунд',
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'годину',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      M: 'місяць',
      MM: relativeTimeWithPlural,
      y: 'рік',
      yy: relativeTimeWithPlural
    }
  });

  return uk;
})(globalThis._okresLocales);
