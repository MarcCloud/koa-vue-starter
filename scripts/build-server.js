const {VueBuilder} = require('vue-builder');
const {webpackServer} = require('../config');
let options = webpackServer({
  env: 'production',
  mode: 'server'
});

let builder = new VueBuilder(options);
builder.build().catch(console.log);
