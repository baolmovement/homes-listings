var $address = $("#address") 
var $bathrooms = $("#bathrooms") 
var $bedrooms = $("#bedrooms") 
var $homes = $("#homes") 
var $form = $("form") 

$form.on("submit", function(evt){ 
    evt.preventDefault()
    var addressValue = $address.val()
    var bedrooms = $bedrooms.val() 
    var bathrooms = $bathrooms.val()   
    
    $homes.append(`<li style="display:none">Address: ${addressValue} || Bedrooms: ${bedrooms} || Bathrooms: ${bathrooms}`) 
    $('li').last().fadeIn(2000) 
    
}) 
//if user clicks anywhere on the list 
//'this' refers to the specific thing within
//that was clicked
$homes.on("click", "li", function(){
    $(this).fadeOut(function(){
        $(this).remove()
    })
})