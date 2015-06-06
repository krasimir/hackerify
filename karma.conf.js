module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['browserify', 'mocha', 'chai'],
    files: ['test/**/*.spec.js'],
    preprocessors: {
      'test/**/*.spec.js': [ 'browserify' ]
    },
    exclude: [],
    reporters: ['mocha'],
    // web server port
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    client: {
      captureConsole: true
    },
    browserify: {
      debug: false,
      insertGlobals: false,
      detectGlobals: true,
      noBuiltins: true,
      transform: []
    }
  });
}