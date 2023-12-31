// @ts-check

const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', '//app1.example.com'],
   *   ['app2', '//app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', '//example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', '//example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    ['catalog', `https://ebuy-catalog-1eba5.web.app/remoteEntry.js?${Date.now()}`],
    ['checkout', `https://ebuy-checkout-d04e1.web.app/remoteEntry.js?${Date.now()}`],
    ['store', 'https://ebuy-datastore-fa86a.web.app/'],
    ['recommendations', 'https://ebuy-recommendations-1f7b3.web.app/']
  ],
};

module.exports = withModuleFederation(prodConfig);
