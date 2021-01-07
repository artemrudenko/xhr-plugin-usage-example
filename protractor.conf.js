require('ts-node/register');

exports.config = {
  framework: 'jasmine2',
  specs: [
    './sample.e2e.ts'
  ],
  allScriptsTimeout: 60000,
  defaultTimeoutInterval: 30000,
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
  },
  plugins: [
    { package: 'protractor-xhr-interceptor-plugin' }
  ]
};
