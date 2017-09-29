$(document).ready(function(){
    $(".cajapadre").click(function(){
        $(this).hide();
        
    });
 //para desaparecer los pandas
    $(".extincion").click(function(){
        $("#textoextincion").hide();
    });//para desaparecer texto extincion

    $(".pandas").click(function(){
        $(".cajapadre").slideDown();
    });//para hacer aparecer las fotos

    $(".origen").click(function(){
        $("#textoextincion").slideDown();
    });//para hacer aparecer las fotos
        $("img").addClass("option animated jackInTheBox");
        $("button").addClass("option animated jackInTheBox");
        $(".close").addClass("option animated jackInTheBox");
   
});