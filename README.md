# scrapjob

[![travis build](https://img.shields.io/travis/ScrapThemAll/scrapjob.svg)](https://travis-ci.org/ScrapThemAll/scrapjob)
[![codecov coverage](https://img.shields.io/codecov/c/github/ScrapThemAll/scrapjob.svg)](https://codecov.io/github/ScrapThemAll/scrapjob)
[![MIT License](https://img.shields.io/npm/l/scrapjob.svg)](http://opensource.org/licenses/MIT)

## Install

```
$ npm install --save scrapjob
```

## Usage

```js
const bot = require('scrapjob');

const canalplus = bot('canalplus');

canalplus.scrap()
	.then(jobs => {
		console.log(jobs);
		/*[
			{
				date: '08/09/2016',
				poste: 'software engineer',
				duree: '',
				contrat: 'CDI',
				context: 'blabla',
				mission: '',
				niveau: 'Bac+3',
				experience: '1 an'
			},
			...
		]*/
	});
```

## API

### .scrap([options]): *Object[]*

Get jobs.

#### options

Type: `object`

##### nbPage

Type: `number`

Page number that will be scrap

## Available companies

Companies that are available in scrapjob:

- `canalplus`
