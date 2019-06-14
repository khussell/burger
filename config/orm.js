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
     var queryString = "INSERT INTO " + table + "(" + col + ") VALUES (?)"
    val= val.toString()
    console.log(val)
    console.log(queryString)

     connection.query(queryString, val, function(err, result){
         if(err) throw err;
         cb(result)
     })
  },

  updateOne : function(table, col, val, val2, cb){
      var whatNow = val2
      if(whatNow === "true"){
          whatNow = "false"
      }else{
          whatNow = "true"
      }
      console.log(whatNow)
      var queryString = "UPDATE " + table + " SET " + col + " = " + whatNow +" WHERE id = " + val
      console.log(queryString)
      connection.query(queryString, function(err, result){
          if (err) throw err
          cb(result)
      })
  }
}

module.exports = orm;