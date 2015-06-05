# Hackerify

~30 lines of JavaScript for stubbing Browserify modules

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
var m = require('./module');
console.log(m());
```

And you want to stub the function in `label.js`. All you have to do is adding the following code in `app.js`.

```js
var Hackerify = require('hackerify');
Hackerify(arguments, {
  './label': function() {
    return 'Maybe it is: ';
  }
});
```

Notice the `arguments` variable. No, that's not a typo. When you use Browserify your code is put on a closure. So `arguments` is refering the arguments passed to that closure.