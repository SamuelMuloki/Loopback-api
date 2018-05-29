module.exports = function(app) {
    app.dataSources.mysqlDs.automigrate('StockData', function(err) {
      if (err) throw err;
  
      app.models.StockData.create([{
        name: 'MSFT',
        Open: 130.50,
        High: 131.25,
        Low: 130.25,
        Mkt_cap: '320.40B',
        PE_Ratio: 10.2
      }, {
        name: 'TSLA',
        Open: 1100.50,
        High: 1100.25,
        Low: 1100.25,
        Mkt_cap: '720.40B',
        PE_Ratio: 15.2
      }, {
        name: 'GOOG',
        Open: 1300.50,
        High: 1300.25,
        Low: 1300.25,
        Mkt_cap: '820.40B',
        PE_Ratio: 10.2
      }], function(err, StockData) {
        if (err) throw err;
  
        console.log('Models created: \n', StockData);
      });
    });
  };