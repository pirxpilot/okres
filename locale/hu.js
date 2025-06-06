//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
//! author : Peter Viszt  : https://github.com/passatgt

(function ({ defineLocale }) {
  function translate(number, withoutSuffix, key, isFuture) {
    const num = number;
    switch (key) {
      case 's':
        return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';
      case 'ss':
        return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
      case 'm':
        return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'mm':
        return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'h':
        return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'hh':
        return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'd':
        return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'dd':
        return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'M':
        return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'MM':
        return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'y':
        return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
      case 'yy':
        return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
  }

  const el = defineLocale('hu', {
    relativeTime: {
      future: '%s múlva',
      past: '%s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    }
  });

  return el;
})(globalThis._okresLocales);
