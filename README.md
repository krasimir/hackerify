# Hackerify

* ~30 lines of JavaScript for stubbing Browserify modules.
* Defining the stubs in only one place. Works for modules required deeply in your app.

## Instalation

`npm install hackerify`

## Usage

Let's say that you have the following modules:

```js
// label.js
module.exports = function() {
  return 'The answer is: ';
}

// answer.js
var label = require('./label');
module.exports = function() {
  return label() + 42;
}

// app.js
var a = require('./answer');
console.log(a());
```

And you want to stub the function in `label.js`. All you have to do is adding the following code in `app.js`.

```js
// app.js

var Hackerify = require('hackerify');
Hackerify(arguments, {
  './label': function() {
    return 'The answer is not always ';
  }
});

var a = require('./answer');
console.log(a());
```

Notice the `arguments` variable. No, that's not a typo. When you use Browserify your code is put in a closure. So `arguments` is refering the arguments passed to that closure.

## Testing

* `npm install`
* `npm test`

## The example

* `npm install`
* `cd ./example`
* `sh ./run.sh`
* Open `./example/index.html` in a browser