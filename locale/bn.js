//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

(function ({ defineLocale }) {
  const symbolMap = {
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
    0: '০'
  };

  const bn = defineLocale('bn', {
    relativeTime: {
      future: '%s পরে',
      past: '%s আগে',
      s: 'কয়েক সেকেন্ড',
      m: 'এক মিনিট',
      mm: '%d মিনিট',
      h: 'এক ঘন্টা',
      hh: '%d ঘন্টা',
      d: 'এক দিন',
      dd: '%d দিন',
      M: 'এক মাস',
      MM: '%d মাস',
      y: 'এক বছর',
      yy: '%d বছর'
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    }
  });

  return bn;
})(globalThis._okresLocales);
