# gig-repeater
[Gigigo](http://www.gigigo.com/app/en/home)  Web Component to clone elements of forms

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
bower install gig-repeater --save
```

## Run Demo

We use npm package [local-web-server](https://www.npmjs.com/package/local-web-server) to serve our files, but you are free to use whatever you want.

```sh
npm sun serve
```

## Develop / Contributions

All code changes must be done inside src/ folder and then run gulp release task to 'create' distribution.
Distribution files are the ones in the project root folder.

## Release

Be responsible releasing a package! Check the npm scripts for release and understand it.

### Release patch
- example: 0.1.0 -> 0.1.1

```sh
npm run release:patch
```

### Release minor
- example: 3.1.1 -> 3.2.0

```sh
npm run release:minor
```

### Release major
- example: 2.50.3 -> 3.0.0

```sh
npm run release:major
```

## Tests

```sh
npm install
npm test
```

## Other NPM Scripts

To check both our npm and bower dependencies we are using package [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

1. Check npm dependencies:

```sh
npm run check-npm-deps
```

2. Check bower dependencies

```sh
npm run update-deps
```

3. Update all dependecies

```sh
npm run update-deps
```

## TODO
- Add vulcanize task
- Write tests on test folder

## Dependencies

## Dev Dependencies

## License

ISC
