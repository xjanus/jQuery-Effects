$("#btn1").on("click", function(){
    $("#div1 .divs").fadeOut(1000, function(){
        $(this).remove();
    });
});

$("#btn2").on("click", function(){
    $("#div2 .divs").fadeToggle(500);
});

$("#btn3").on("click", function(){
    $("#div3 .divs").slideUp();
});

$("#btn5").on("click", function(){
    $("#div5 .divs").slideToggle(1000, function(){
    });
});