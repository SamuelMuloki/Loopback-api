'use strict';

module.exports = function enableAuthentication(server) {
  server.enableAuth({datasource: 'mysqlDs'});
};
