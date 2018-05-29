'use strict';

module.exports = function(Stockdata) {
    Stockdata.getName = function(companyId, cb) {
        Stockdata.findById( companyId, function (err, instance) {
            var response = "Name of the company is " + instance.name;
            cb(null, response);
            console.log(response);
        });
      }
      Stockdata.remoteMethod (
            'getName',
            {
              http: {path: '/getname', verb: 'get'},
              accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
              returns: {arg: 'name', type: 'string'}
            }
        );
};
