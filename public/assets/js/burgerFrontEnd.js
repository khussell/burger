$(function(){

$("#submitBurger").on("click", function(){
    event.preventDefault()

    var newBurger = $("#whatBurger").val().trim()
    $.ajax('/api/burgers/' + newBurger, {type:"POST"}).then(function(){
        console.log("posted " + newBurger)
        location.reload()
    })
})








})