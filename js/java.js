$(document).ready(function(){
    $('.btX').hide();
    $('.hideDive').hide();

$("#btDoces").click(function(){
   $("#Doce").show();
   $('#Menu').hide();
   $('#Contatos').hide();
  $('.showcard').show();
   $('.hideDive').hide();
   $('.btX').hide();
   $('#divGame').hide();
});
$("#btMenu").click(function(){
   $("#Doce").hide();
   $('#Menu').show();
   $('#Contatos').hide();
   $('#divGame').hide();
   
});
$("#btContatos").click(function(){
   $("#Doce").hide();
   $('#Menu').hide();
   $('#Contatos').show();
   $('#divGame').hide();
});


$(".bthide").click(function(){
    $(".hidecard").hide();
    $('.btX').show();
});

$(".btBombomMorango").click(function(){
    $('#divBombomMorango').show();
});
$(".btBombomNozes").click(function(){
    $('#divBombomNozes').show();
});
$(".btBombomCoco").click(function(){
    $('#divBombomCoco').show();
});
$(".btBrigadeiro").click(function(){
    $('#divBrigadeiro').show();
});
$('.btQuindim').click(function(){
    $('#divQuindim').show();
})
$('.btNinhos').click(function(){
    $('#Ninhos').show();
})
$('.btTrouxa').click(function(){
    $('#Trouxa').show();
})
$('.btQueijadinha').click(function(){
    $('#Queijadinha').show();
})
$('.btPaposAnjo').click(function(){
    $('#PaposAnjo').show();
})
$('.btOlhoSogra').click(function(){
    $('#OlhoSogra').show();
})
$('.btBeijinhoGemas').click(function(){
    $('#BeijinhoGemas').show();
})
$('.btBeijoMulata').click(function(){
    $('#BeijoMulata').show();
})
$('.btBeijoAlemao').click(function(){
    $('#BeijoAlemao').show();
})
$('.btBemCasado').click(function(){
    $('#BemCasado').show();
})
$('.btCamafeu').click(function(){
    $('#Camafeu').show();
})
$('.btFatiasBraga').click(function(){
    $('#FatiasBraga').show();
})
$('.btPasteisBelem').click(function(){
    $('#PasteisBelem').show();
})
$('.btTrouxinhasNozes').click(function(){
    $('#TrouxinhasNozes').show();
})
$(".btX").click(function(){
    $(".showcard").show();
    $('.hideDive').hide();
    $('.btX').hide();
});


});


