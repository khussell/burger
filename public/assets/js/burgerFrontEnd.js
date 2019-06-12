

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
    
    var id = $(this).data("id")
    console.log(id)

    $.ajax("/api/burgers/" + id, {type: "PUT"}).then(function(){
        console.log("updated " + id)
        location.reload()
    })
})

$(".remake").on("click")








})