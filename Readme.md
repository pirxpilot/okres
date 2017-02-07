[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# okres

Localized formatting for duration. It's a small subset of the [moment] functionality to be used on
the client.

Modern browsers support localized [DateTimeFormat], but localized duration formatting is not part of
the standard. This modules takes a subset of [moment] localization data to fill that gap.

## Install

```sh
$ npm install --save okres
```

## Usage

```js
var okres = require('okres');

okres({ hours: 10, minute: 5 });    // 10 hours 5 minutes

var okres_pl = okres('pl');

okres_pl({ day: 3, minute: 0 }, { showZero: true })  // 3 dni 0 minut


```

## API

### `okres(locale)`

returns a formatting function for a specified locale, if locale is not specified built-in English
locale is used

### `okres(duration, options)`

returns formatted string representing `duration`

- `duration` - { year, month, day, hour, minute } - if period is not specified it is skipped in
  a formatted string
- `options.showZero` - if truthy format will include 0 amounts, otherwise zero amounts are skipped


## License

MIT © [Damian Krzeminski](https://code42day.com)

[moment]:
[DateTimeFormat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat

[npm-image]: https://img.shields.io/npm/v/okres.svg
[npm-url]: https://npmjs.org/package/okres

[travis-url]: https://travis-ci.org/code42day/okres
[travis-image]: https://img.shields.io/travis/code42day/okres.svg

[gemnasium-image]: https://img.shields.io/gemnasium/code42day/okres.svg
[gemnasium-url]: https://gemnasium.com/code42day/okres
