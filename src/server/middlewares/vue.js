/*
* Returns the Vue.js production rendering middleware.
*/

exports.vueBundleRenderer = function (config) {
  let {bundleRenderer} = require('koa-vue-builder');

  return bundleRenderer(`${__dirname}/../../../dist/server/bundle.js`);
}

/*
* Returns the Vue.js development server middleware.
*/

exports.vueDevServer = function (config) {
  let {webpackServer, webpackClient} = config;
  let {devServer} = require('./koa-vue-dev');

  return devServer({
    server: webpackServer(),
    client: webpackClient()
  });
}

/*
* Returns the Vue middleware which handles the rendering.
*/

exports.vueHandler = function(config) {
  let isDev = config.env === 'development';

  if (isDev) {
    return exports.vueDevServer(config);
  }
  else {
    return exports.vueBundleRenderer(config);
  }
};
