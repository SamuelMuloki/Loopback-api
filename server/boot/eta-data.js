'use strict';

module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('eta', function(err) {
    if (err) throw err;
  });
};
