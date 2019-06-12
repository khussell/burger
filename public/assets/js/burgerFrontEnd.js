

$(function(){

$("#submitBurger").on("click", function(){
    event.preventDefault()

    var newBurger = $("#whatBurger").val().trim()
    console.log(newBurger)
    $.ajax('/api/burgers/' + newBurger, {type:"POST"}).then(function(){
        console.log("posted " + newBurger)
        location.reload()
    })
})


$(".devour").on("click", function(){
    var devoured = $(this).data("devoured")
    var id = $(this).data("id")
    console.log(id)
    var data = {
        isDevoured : devoured
    }

    $.ajax("/api/burgers/" + id, {type: "PUT", data: data}).then(function(){
        console.log("updated " + id)
        location.reload()
    })
})

$(".remake").on("click",function(){
   var id = $(this).data("id")
   var devoured = $(this).data("devoured")
   var data = {
       isDevoured : devoured
   }
   console.log(data)
   $.ajax("/api/burgers/" + id, {type:"PUT", data: data}).then(function(){
       
       location.reload()
   })
})








})