module.exports = function(config){
  config.set({
    files: ['node_modules/**/*.js', '!node_modules/jasmine-core/**/*.js', '*.js'],
    mutate: ['*.js', '!*.spec.js', '!*.conf.js'],
    testFramework: 'jasmine',
    testRunner: 'karma',
    reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
    coverageAnalysis: 'all', // 'perTest'
    plugins: ['stryker-karma-runner', 'stryker-html-reporter']
  });
}
