[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# okres

Localized formatting for durations. It's a small subset of the [moment] functionality to be used on the client.

Modern browsers support localized [DateTimeFormat], but localized duration formating is not part of the standard.
This modules takes a subset of [moment] localization data to fill that gap.

## Install

```sh
$ npm install --save okres
```

## Usage

```js
var okres = require('okres');

okres({ hours: 10, minute: 5 });    // 10 hours 5 minutes
okres({ day: 3, minute: 0 }, 'pl')  // 3 dni 0 minut


```

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
