var express = require("express")
var burger = require("../models/burger.js")

var router = express.Router()

router.get("/", function(req, res){
    burger.selectAll(function(data){
        res.render("index", {burgers: data} )
    })
})

router.post("/api/burgers/:newBurger", function(req,res){
    var newBurger = req.params.newBurger
    burger.insertOne("burger_name", newBurger, function(result){
        res.json({id: result.inserId})
    })
})


//exporting routes for server.js to use
module.exports = router;