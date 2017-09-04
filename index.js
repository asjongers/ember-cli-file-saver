/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-file-saver',

  included(app) {
    this.bowerDirectory = app.bowerDirectory;
    this._super.included.apply(this, app);

    this.import(this.bowerDirectory + '/FileSaver/FileSaver.js', {
      type: 'vendor'
    });

    this.import('vendor/jquery-ajax-arraybuffer.js', {
      type: 'vendor'
    });

    this.import('vendor/file-saver.shim.js', {
      type: 'vendor',
      exports: {
        rison: ['default']
      }
    });
  }
};
