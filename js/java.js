$(document).ready(function(){

$("#btDoces").click(function(){
   $("#Doce").show();
   $('#Menu').hide();
   $('#Contatos').hide();
  $('.showcard').show();
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

var TextTitle=document.getElementById("TextTitle");
var TextInfo=document.getElementById("TextInfo");
var TextTamanhoP=document.getElementById("TextTamanhoP");
var TextTamanhoG=document.getElementById("TextTamanhoG");
var TextTamanhoM=document.getElementById("TextTamanhoM");

$(".btBrigadeiro").click(function(){
    TextTitle.textContent="Brigadeiro"
    TextInfo.textContent="Leite condensado e chocolate meio amargo";
    TextTamanhoP.textContent="Pequeno : 2cm";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btBrigadeiroBranco").click(function(){
    TextTitle.textContent="Brigadeiro Branco";
    TextInfo.textContent="Leite condensado e açúcar";
    TextTamanhoP.textContent="Pequeno : 2cm";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btQuindim").click(function(){
    TextTitle.textContent="Quindim";
    TextInfo.textContent="Ovo,coco e açúcar ";
    TextTamanhoP.textContent="Pequeno : 2× 1,5 cm ";
    TextTamanhoG.textContent="Normal: 6× 4 cm ";
    TextTamanhoM.textContent="";
});
$(".btQuindimNozes").click(function(){
    TextTitle.textContent="Quindim de Nozes";
    TextInfo.textContent="Ovo,Nozes e açúcar ";
    TextTamanhoP.textContent="Pequeno : 2× 1,5 cm ";
    TextTamanhoG.textContent="Normal: 6× 4 cm ";
    TextTamanhoM.textContent="";
});
$(".btBombomMorango").click(function(){
    TextTitle.textContent="Bombom de Morango";
    TextInfo.textContent="leite condensado,morango e chocolate meio amargo";
    TextTamanhoP.textContent="Medio : 4×3 cm ";
    TextTamanhoG.textContent="Grande : 6×4 cm ";
    TextTamanhoM.textContent="";
});
$(".btBombomNozes").click(function(){
    TextTitle.textContent="Bombom de nozes.";
    TextInfo.textContent="Leite condensado,nozes e chocolate meio amargo";
    TextTamanhoP.textContent="Pequeno : 2cm ";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btBombomCoco").click(function(){
    TextTitle.textContent="Bombom de coco";
    TextInfo.textContent="Leite condensado, coco, chocolate meio amargo";
    TextTamanhoP.textContent="Pequeno : 2cm ";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btNinhos").click(function(){
    TextTitle.textContent="Ninhos";
    TextInfo.textContent="Ovos, açucar,  baunilha e farinha";
    TextTamanhoP.textContent="Pequeno : 2,5×1,5×1,5 cm";
    TextTamanhoG.textContent="Normal : 4×2×2 cm";
    TextTamanhoM.textContent="";
});
$(".btQueijadinha").click(function(){
    TextTitle.textContent="Queijadinha";
    TextInfo.textContent="Ovo, açucar, queijo e passa de uva.";
    TextTamanhoP.textContent="Pequeno : 2 × 1,5 cm ";
    TextTamanhoG.textContent="Normal : 4× 3 cm ";
    TextTamanhoM.textContent="";
});
$(".btPaposAnjo").click(function(){
    TextTitle.textContent="Papo de anjo";
    TextInfo.textContent="Ovo, açucar,  baunilha";
    TextTamanhoP.textContent="Normal: 4cm×1,5 cm";
    TextTamanhoG.textContent="";
    TextTamanhoM.textContent="";
});
$(".btOlhoSogra").click(function(){
    TextTitle.textContent="Olho de Sogra";
    TextInfo.textContent="Coco,ameixa, ovo e açúcar";
    TextTamanhoP.textContent="Pequeno : 2cm ";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btBeijinhoGemas").click(function(){
    TextTitle.textContent="Beijinho de coco e gemas";
    TextInfo.textContent="Coco,ovo,açúcar e fondant.";
    TextTamanhoP.textContent="Pequeno : 2cm";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btPanelinhaCoco").click(function(){
    TextTitle.textContent="Panelinha de Coco";
    TextInfo.textContent="Coco, ovo,açúcar e farinha";
    TextTamanhoP.textContent="Pequeno : 2,5×1.5 cm ";
    TextTamanhoG.textContent="Normal : 6×3 cm ";
    TextTamanhoM.textContent="";
});
$(".btBeijoMulata").click(function(){
    TextTitle.textContent="Beijo de Mulata";
    TextInfo.textContent="Leite condensado, nozes, cacau, creme de leite e chocolate meio amargo";
    TextTamanhoP.textContent="Pequeno : 2cm";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btBeijoAlemao").click(function(){
    TextTitle.textContent="Beijo alemao";
    TextInfo.textContent="Leite condensado,castanhas de caju, creme de leite e chocolate meio amargo";
    TextTamanhoP.textContent="Pequeno : 2cm";
    TextTamanhoG.textContent="Grande : 4cm";
    TextTamanhoM.textContent="";
});
$(".btBemCasado").click(function(){
    TextTitle.textContent="Bem Casados";
    TextInfo.textContent="Farinha, ovo, açucar,  baunilha e fondant";
    TextTamanhoP.textContent="Pequeno :  2,5 × 1,5 cm";
    TextTamanhoM.textContent="Medios : 4×2,5 cm";
    TextTamanhoG.textContent="Grandes : 6×3 cm";
});
$(".btCamafeu").click(function(){
    TextTitle.textContent="Camafeu";
    TextInfo.textContent="Nozes,  ovo, açucar e fondant.";
    TextTamanhoP.textContent="Pequeno :2,5×1,5×1,5 cm";
    TextTamanhoG.textContent="Normal: 4×2×2 cm ";
    TextTamanhoM.textContent="";
});
$(".btTrouxinhasNozes").click(function(){
    TextTitle.textContent="Trouxinha de Nozes";
    TextInfo.textContent="Leite condensado, nozes, ovo e açucar";
    TextTamanhoP.textContent="Pequeno :2,5×1,5×1,5 cm";
    TextTamanhoG.textContent="Normal: 4×2×2 cm ";
    TextTamanhoM.textContent="";
});
$(".btTrouxa").click(function(){
    TextTitle.textContent="Trouxinha de fios de ovos";
    TextInfo.textContent="Ovo, açucar e amêndoas ";
    TextTamanhoP.textContent="Pequeno :2,5×1,5×1,5 cm";
    TextTamanhoG.textContent="Normal: 4×2×2 cm ";
    TextTamanhoM.textContent="";
});
$(".btFatiasBraga").click(function(){
    TextTitle.textContent="Fatias de braga";
    TextInfo.textContent="Amêndoas, ovo,açucar e leite. Opcional cereja";
    TextTamanhoP.textContent="Pequeno :2×2× 1, 5 cm";
    TextTamanhoG.textContent="Normal : 5×5×2 cm ";
    TextTamanhoM.textContent="";
});
$(".btPasteisBelem").click(function(){
    TextTitle.textContent="Pasteis de Belém";
    TextInfo.textContent="Massa folheada, ovo, açucar, leite e baunilha. Opcional canela em pó ";
    TextTamanhoP.textContent="Pequeno : 2,5×1.5 cm ";
    TextTamanhoG.textContent="Normal : 6×3 cm ";
    TextTamanhoM.textContent=""; 

});
});


