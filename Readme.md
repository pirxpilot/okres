[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

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

okres({ hours: 10, minute: 5 });         // 10 hours 5 minutes
okres({ hours: 10 }, { future: true });  // in 10 hours

var okres_pl = okres('pl');

okres_pl({ day: 3, minute: 0 }, { showZero: true });  // 3 dni 0 minut
okres_pl({ minute: 5 }, { past: true });              // 5 minut temu

```

## API

### `okres(locale)`

returns a formatting function for a specified locale, if locale is not specified built-in English
locale is used

The module defining the `locale` needs to be loaded as well.

```js
require('okres/locale/pl')    // loads a single (in this case Polish) locale
require('okres/locale');      // loads all available locales
```

### `okres(duration, options)`

returns formatted string representing `duration`

- `duration` - { year, month, day, hour, minute } - if period is not specified it is skipped in
  a formatted string
- `options.showZero` - if truthy format will include 0 amounts, otherwise zero amounts are skipped
- `options.future` - set to make format include future indication e.g. 'in 5 hours'
- `options.past` - set to make format include past indication e.g. '5 hours ago'

## Locales

`okres` locales can be created from [moment] locales by removing all parts with the exception of
`relativeTime` and - optionally - `postformat` function.

## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[moment]: http://momentjs.com/
[DateTimeFormat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat

[npm-image]: https://img.shields.io/npm/v/okres.svg
[npm-url]: https://npmjs.org/package/okres

[build-url]: https://github.com/pirxpilot/okres/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/workflow/status/pirxpilot/okres/check

[deps-image]: https://img.shields.io/librariesio/release/npm/okres
[deps-url]: https://libraries.io/npm/okres
