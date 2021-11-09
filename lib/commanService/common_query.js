'use strict'
const constant = require('../../lib/constant/constant')
const mongoose = require('mongoose')
const fs = require('fs')
const commonQuery = {}
let SALT_WORK_FACTOR = 10
let bcrypt = require('bcrypt')

const request = require('request')


commonQuery.uniqueInsertIntoCollection = function uniqueInsertIntoCollection(
  model,
  obj
) {
  let result = {
    status: false,
  }
  // console.log("\n uniqueInsertIntoCollection called \n", obj);
  return new Promise(function (resolve, reject) {
    new model(obj).save(function (err, userData) {
      if (err) {
        console.log('\n uniqueInsertIntoCollection error \n', err)
        result.status = false
        result.err = err
        reject(result)
      } else {
        // console.log("\n uniqueInsertIntoCollection sucessss \n", userData);
        result.status = true
        result.userData = userData
        resolve(result)
      }
    })
  })
}



module.exports = commonQuery
