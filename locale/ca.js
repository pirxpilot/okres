//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;(function (factory) {
  factory(this._okresLocales);
}(function (moment) { 'use strict';

var ca = moment.defineLocale('ca', {
    relativeTime : {
        future : "d'aquí %s",
        past : 'fa %s',
        s : 'uns segons',
        ss : '%d segons',
        m : 'un minut',
        mm : '%d minuts',
        h : 'una hora',
        hh : '%d hores',
        d : 'un dia',
        dd : '%d dies',
        M : 'un mes',
        MM : '%d mesos',
        y : 'un any',
        yy : '%d anys',
    },
});

return ca;

}));
