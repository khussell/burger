var orm = require("../config/orm.js")

var burgers = {
selectAll = function(){
  orm.selectAll()
},

insertOne = function(){
  orm.insertOne()
},

updateOne = function(){
  orm.updateOne()
}
}

module.exports = burgers;