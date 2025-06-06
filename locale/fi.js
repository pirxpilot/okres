//! moment.js locale configuration
//! locale : Finnish [fi]
//! author : Tarmo Aidantausta : https://github.com/bleadof

(function ({ defineLocale }) {
  const numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
  const numbersFuture = [
    'nolla',
    'yhden',
    'kahden',
    'kolmen',
    'neljän',
    'viiden',
    'kuuden',
    numbersPast[7],
    numbersPast[8],
    numbersPast[9]
  ];
  function translate(number, _withoutSuffix, key, isFuture) {
    let result = '';
    switch (key) {
      case 's':
        return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
      case 'm':
        return isFuture ? 'minuutin' : 'minuutti';
      case 'mm':
        result = isFuture ? 'minuutin' : 'minuuttia';
        break;
      case 'h':
        return isFuture ? 'tunnin' : 'tunti';
      case 'hh':
        result = isFuture ? 'tunnin' : 'tuntia';
        break;
      case 'd':
        return isFuture ? 'päivän' : 'päivä';
      case 'dd':
        result = isFuture ? 'päivän' : 'päivää';
        break;
      case 'M':
        return isFuture ? 'kuukauden' : 'kuukausi';
      case 'MM':
        result = isFuture ? 'kuukauden' : 'kuukautta';
        break;
      case 'y':
        return isFuture ? 'vuoden' : 'vuosi';
      case 'yy':
        result = isFuture ? 'vuoden' : 'vuotta';
        break;
    }
    result = verbalNumber(number, isFuture) + ' ' + result;
    return result;
  }
  function verbalNumber(number, isFuture) {
    return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
  }

  const fi = defineLocale('fi', {
    relativeTime: {
      future: '%s päästä',
      past: '%s sitten',
      s: translate,
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

  return fi;
})(globalThis._okresLocales);
