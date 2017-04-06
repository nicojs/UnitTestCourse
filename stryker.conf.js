module.exports = function(config){
  config.set({
    mutate: ['app.js'],
    testFramework: 'jasmine',
    testRunner: 'karma',
    karmaConfigFile: 'karma.conf.js',
    reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
    coverageAnalysis: 'off', // 'perTest'
    plugins: ['stryker-karma-runner', 'stryker-html-reporter']
  });
}
