var orm = require("../config/orm.js")

var burgers = {
selectAll : function(cb){
  orm.selectAll("burgers", function(res){
      cb(res)
  })
},

insertOne : function(col,val,cb){
  orm.insertOne("burgers", col, val, function(res){
      cb(res)
  })
},

updateOne : function(col, val, val2, cb){
  orm.updateOne("burgers", col, val, val2, function(res){
      cb(res)
  })
}
}

module.exports = burgers;