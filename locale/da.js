//! moment.js locale configuration
//! locale : Danish [da]
//! author : Ulrik Nielsen : https://github.com/mrbase

;(function (factory) {
    factory(this._okresLocales);
 }(function (moment) { 'use strict';

var da = moment.defineLocale('da', {
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        ss: '%d sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år',
    }
});

return da;

}));
