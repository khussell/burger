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

router.put("/api/burgers/:id", function(req,res){
    var id = req.params.id
    var devoured = req.body.isDevoured
    console.log(devoured)
    console.log(id)
    burger.updateOne("devoured", id, devoured, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})


//exporting routes for server.js to use
module.exports = router;