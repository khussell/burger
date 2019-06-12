var connection= require("../config/connection.js")

var orm = {
  selectAll : function(table, cb){
    connection.query("SELECT * FROM ??", [table], function(err,result){
        if (err) throw err;
        console.log(result)
        cb(result)
    })
  },

  insertOne : function(table, col, val, cb){
    var queryString = "INSERT INTO ?? (" + col +") VALUES ?"

     connection.query(queryString, [table, val], function(err, result){
         if(err) throw err;
         cb(result)
     })
  },

  updateOne : function(){

  }
}

module.exports = orm;