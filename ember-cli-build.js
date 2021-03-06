/* eslint no-var:0*/
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var config = defaults.project.config(EmberAddon.env());

  var app = new EmberAddon(defaults, {
    sassOptions: {
      extension: 'sass'
    },
    favicons: {
      faviconsConfig: {
        appName: 'Ember Custom Actions',
        appDescription: 'Trigger custom API actions for Ember 2 applications and communicate with non-CRUD API servers',
        developerName: 'Exelord',
        developerURL: 'www.macsour.com',
        background: '#ffffff',
        path: config.rootURL,  // Path for overriding default icons path. `string`
        url: 'https://exelord.github.io/ember-custom-actions/images/og-image.jpg'  // Absolute URL for OpenGraph image. `string`
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  return app.toTree();
};
