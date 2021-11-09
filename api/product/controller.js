const Response = require('../../lib/commanService/response'),
      constants = require('../../lib/constant/constant'),
      Sales = require('./model'),
      query = require('../../lib/commanService/common_query');

      //this function is using save the sales
      exports.saveSales = async (req, res) => {
        if(Object.keys(req.body).length === 0){
            return res.json(Response(constants.statusCode.unauth, constants.validateMsg.requiredFieldsMissing))
            } if (!req.body.userName)
            return res.json(Response(constants.statusCode.unauth, constants.validateMsg.userNameReq))
            if (!req.body.amount)
            return res.json(Response(constants.statusCode.unauth, constants.validateMsg.amountRequire))
           
            let salesSaveObj ={
                userName: req.body.userName,
                amount: parseInt(req.body.amount),
            }
            let salseOBJ = await query.uniqueInsertIntoCollection(Sales, salesSaveObj);
            if (salseOBJ.status && salseOBJ.userData) {
                return res.json(
                  Response(
                    constants.statusCode.ok,
                    constants.messages.saveSales,
                  )
                );
               }else{
                return res.json(
                  Response(
                    constants.statusCode.internalservererror,
                    constants.validateMsg.internalError,
                  )
                );
               }     
        }


      exports.getSales = async (req, res) => {
        if(Object.keys(req.body).length === 0){
            return res.json(Response(constants.statusCode.unauth, constants.validateMsg.requiredFieldsMissing))
            } if (!req.body.type)
            return res.json(Response(constants.statusCode.unauth, constants.validateMsg.typeReq))
             
            if(req.body.type=='d'){
             data = await Sales.aggregate( [
            { "$project": {
              "h":{"$hour":"$date"},
              "amount":1 }
              },
              { "$group":{ 
                "_id": { "hour":"$h","sales":"$amount"},
               
            }
         
          }
        
            ])
           
          }  
          if(req.body.type=='w'){
             data = await Sales.aggregate( [
            { "$project": {
              "d":{"$dayOfMonth":"$date"},
              "amount":1 }
              },
              { "$group":{ 
                "_id": {"day":"$d","sales":"$amount"},
               
            }
          }
            ])
           
          } 

          if(req.body.type=='m'){
             data = await Sales.aggregate( [
            { "$project": {
              "m":{"$month":"$date"},
              "amount":1 }
              },
              { "$group":{ 
                "_id": {"month":"$m","sales":"$amount"},
               
            }
          }
            ])
           
          }
          
          if(data !== null){
          return res.json(
            Response(
              constants.statusCode.ok,
              data
            )
          );
            }else{
              return res.json(
                Response(
                  constants.statusCode.internalservererror,
                  constants.validateMsg.internalError,
                )
              );
            } 
    }


    //this is run on mongodb 5 version

  //   exports.getBestSales = async (req, res) => {
  //     if(Object.keys(req.body).length === 0){
  //         return res.json(Response(constants.statusCode.unauth, constants.validateMsg.requiredFieldsMissing))
  //         } if (!req.body.type)
  //         return res.json(Response(constants.statusCode.unauth, constants.validateMsg.typeReq))
            // var data;
  //        if(req.body.type=='d'){
  //          data = await Sales.aggregate( [
  //             {
           
  //               $project: {
  //                 _id: 1,
  //                 date: 1,
  //                 truncatedOrderDate: {
  //                   $dateTrunc: {
  //                     date: "$date", unit: "day", binSize: 6,
  //                  }
  //                 }
  //               }
  //             }
  //          ] )
  //       }  
  //       if(req.body.type=='w'){
  //            data = await Sales.aggregate( [
  //             {
           
  //               $project: {
  //                 _id: 1,
  //                 date: 1,
  //                 truncatedOrderDate: {
  //                   $dateTrunc: {
  //                     date: "$date", unit: "week", binSize: 2,
  //                      startOfWeek: "Monday"
  //                  }
  //                 },
  //                 amount: { $sum: "$amount" }
  //               }
                
  //             }
  //          ] )
         
  //        
  //       } 

  //       if(req.body.type=='m'){
  //          data = await Sales.aggregate( [
  //           {
         
  //             $project: {
  //               _id: 1,
  //               date: 1,
  //               truncatedOrderDate: {
  //                 $dateTrunc: {
  //                   date: "$date", unit: "month", binSize: 6,
  //                }
  //               },
  //               amount: { $sum: "$amount" }
  //             }
             
  //           }
  //        ] )
          
  //        
  //       }
           
  
    // return res.json(
    //           Response(
    //             constants.statusCode.ok,
    //             data
    //           )
    //         );
        
  // }