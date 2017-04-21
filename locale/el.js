//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

;(function (factory) {
   factory(this._okresLocales);
}(function (moment) { 'use strict';

var el = moment.defineLocale('el', {
    relativeTime : {
        future : 'σε %s',
        past : '%s πριν',
        s : 'λίγα δευτερόλεπτα',
        m : 'ένα λεπτό',
        mm : '%d λεπτά',
        h : 'μία ώρα',
        hh : '%d ώρες',
        d : 'μία μέρα',
        dd : '%d μέρες',
        M : 'ένας μήνας',
        MM : '%d μήνες',
        y : 'ένας χρόνος',
        yy : '%d χρόνια'
    }
});

return el;

}));
