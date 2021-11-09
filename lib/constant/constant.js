const statusCode = {
    ok: 200,
    unauth: 401,
    notFound: 404,
    validation: 400,
    failed: 1002,
    invalidURL: 1001,
    paymentReq: 402,
    internalError: 1004,
    forbidden: 403,
    internalservererror: 500,
    alreadyExist: 409, //conflict
  }

 
  const messages = {
     saveSales:"Sales save successfully"
  }

 
  const validateMsg = {
    requiredFieldsMissing: 'All field is empty',
    amountRequire: 'Amount is required',
    userNameReq:'User Name is required',
    typeReq:"type is required",
    internalError: "Some internal error"
 
  }
 
  const obj = {
    statusCode: statusCode,
    messages: messages,
    validateMsg: validateMsg,
 
  }
  module.exports = obj