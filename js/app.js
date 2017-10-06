$(document).ready(function(){
    $(".cajapadre").click(function(){
        $(this).hide();
        
    });
 //para desaparecer los pandas
    $(".origen").click(function(){
        $("#textORIGEN").toggle();
    });//para desaparecer texto extincion
    $(".extincion").click(function(){
        $("#textoextincion").toggle();
    });//para desaparecer texto extincion
    $(".pandas").click(function(){
        $(".cajapadre").slideDown();
    });//para hacer aparecer las fotos

        $("img").addClass("option animated jackInTheBox");
        $("button").addClass("option animated jackInTheBox");
        $(".close").addClass("option animated jackInTheBox");
   
});