'use strict';

module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('eta_data', function(err) {
    if (err) throw err;
        //
  });
};
