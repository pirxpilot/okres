//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga

(function ({ defineLocale }) {
  const nb = defineLocale('nb', {
    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'noen sekunder',
      m: 'ett minutt',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dager',
      M: 'en måned',
      MM: '%d måneder',
      y: 'ett år',
      yy: '%d år'
    }
  });

  return nb;
})(globalThis._okresLocales);
