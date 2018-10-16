// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    
  });

$(".crust").removeClass("crust-gluten-free")

$(".sauce").removeClass("sauce-white")

$(".btn-pepperonni").click(function(){
    $(".pep").toggle(".hidden");
    $(".btn.btn-pepperonni").toggleClass("active")
});

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle(".hidden");
    $(".btn.btn-mushrooms").toggleClass("active")
});

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle(".hidden");
    $(".btn.green-peppers").toggleClass("active")
});

$(".btn-sauce").click(function(){
    $(".sauce").toggle("sauce-white")
})

/* $(".btn-pepperonni").click(function(){
    $(".btn btn-pepperonni active").css(".btn btn-pepperonni btn:active")
}) */


/* gluten free
$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle(".hidden");
}); */





