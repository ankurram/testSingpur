module.exports = function(router) {
   var productCtrl = require('./controller');
  
    //this api is user for save the sales data
    router.post('/product/sales', productCtrl.saveSales);

    //this api is user for get the data of sales by using params of d =day,w= week ,m=months
 
    //note - this api using for mongodb 3.4
    router.post('/product/get_sales', productCtrl.getSales);


    // this is other api which are base on mongodb 5.0 this is best way to solve this task but its run on my 
    // friend system bemuses my windows not sport of mongodb 5


    // router.post('/product/get_sales_best', productCtrl.getBestSales);


    return router

}