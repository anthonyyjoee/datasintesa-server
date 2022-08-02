@xingrz/decompress-tarbz2 [![test](https://github.com/xingrz/decompress-tarbz2/actions/workflows/test.yml/badge.svg)](https://github.com/xingrz/decompress-tarbz2/actions/workflows/test.yml)
==========

[![][npm-version]][npm-url] [![][npm-downloads]][npm-url] [![license][license-img]][license-url] [![issues][issues-img]][issues-url] [![stars][stars-img]][stars-url] [![commits][commits-img]][commits-url]

[@xingrz/decompress](https://github.com/xingrz/decompress) .tar.bz2 plugin.

## Install

```sh
npm install --save @xingrz/decompress-tarbz2
```

## Usage

```ts
import decompress from '@xingrz/decompress';
import decompressTarbz2 from '@xingrz/decompress-tarbz2';

(async () => {
	await decompress('unicorn.tar.bz2', 'dist', {
		plugins: [
			decompressTarbz2()
		]
	});

	console.log('Files decompressed');
})();
```

## API

### `decompressTarbz2(): (input: Buffer | Readable) => Promise<File[]>`

Returns a `Promise<File[]>`.

#### input

Type: `Buffer` or [`stream.Readable`](https://nodejs.org/dist/latest-v16.x/docs/api/stream.html#class-streamreadable)

Buffer or stream to decompress.

## License

[MIT License](LICENSE)

[npm-version]: https://img.shields.io/npm/v/@xingrz/decompress-tarbz2.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/@xingrz/decompress-tarbz2.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@xingrz/decompress-tarbz2
[license-img]: https://img.shields.io/github/license/xingrz/decompress-tarbz2?style=flat-square
[license-url]: LICENSE
[issues-img]: https://img.shields.io/github/issues/xingrz/decompress-tarbz2?style=flat-square
[issues-url]: https://github.com/xingrz/decompress-tarbz2/issues
[stars-img]: https://img.shields.io/github/stars/xingrz/decompress-tarbz2?style=flat-square
[stars-url]: https://github.com/xingrz/decompress-tarbz2/stargazers
[commits-img]: https://img.shields.io/github/last-commit/xingrz/decompress-tarbz2?style=flat-square
[commits-url]: https://github.com/xingrz/decompress-tarbz2/commits/master
