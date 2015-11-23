# This repository is no longer maintained.

# attachevent

Polyfil for event handling when addEventListener isn't available

# install

With [npm](http://npmjs.org) do:

```
npm install attachevent
```

## Usage

With [browserify](https://github.com/substack/node-browserify)

``` js
var attachevent = require('attachevent');

attachevent.attachEvent(window, 'load', function load() {
  attachevent.detachEvent(load);
});

```

# license
MIT
