const express = require('express');
const mysql = require('mysql');
const config = require('../../config');
const connection = mysql.createConnection(config.mysqldb);
      
exports.getProperty = (req, res, next) => {
    console.log("hiii");
   const emailId=req.headers.email;
    connection.query('select addr_street_name from property where created_by="'+emailId+'"', function (error, results, fields) {
        if (error) {
            throw error;
        }
        else {
            console.log("biii");
            res.end(JSON.stringify(results));
        }
    });
}
                  
exports.getPmProperty = (req, res, next) => {
    const propertyId=req.headers.id;     
     connection.query('select addr_street_name from property where id="'+propertyId+'"', function (error, results, fields) {
         if (error) {
             throw error;
         }
         else {           
             res.end(JSON.stringify(results));
         }
     });
 }
  
    
   








    