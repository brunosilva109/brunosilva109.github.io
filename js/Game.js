var resposta = 0;
var upgrad1 = 1;
var upgrad2 = 1;
var upgrad3 = 1;
var upgrad4 = 1;
var upgrad5 = 1;
var upgrad6 = 1;
$(document).ready(function () {
    $('#divGame').hide();
    $('.upgrads').hide();

    $('.Game').click(function () {
        $("#Doce").hide();
        $('#Menu').hide();
        $('#Contatos').hide();
        $('#divGame').show();
    });
    $('.comeco').click(function () {
        $("#divcomeco").show();
        $('#divshop').hide();
        $('#divup').hide();
    });

    $('.shop').click(function () {
        $("#divcomeco").hide();
        $('#divshop').show();
        $('#divup').hide();
    });

    $('.up').click(function () {
        $("#divcomeco").hide();
        $('#divshop').hide();
        $('#divup').show();
        $('.upgrads').show();
    });

    var valor1 = 120;
    var valor2 = 600;
    var valor3 = 1000;
    var valor4 = 1500;
    var valor5 = 3000;
    var valor6 = 10000000;

    var Valor1 = document.getElementById("Valor1");
    var Valor2 = document.getElementById("Valor2");
    var Valor3 = document.getElementById("Valor3");
    var Valor4 = document.getElementById("Valor4");
    var Valor5 = document.getElementById("Valor5");
    var Valor6 = document.getElementById("Valor6");
    Valor1.textContent = valor1;
    Valor2.textContent = valor2;
    Valor3.textContent = valor3;
    Valor4.textContent = valor4;
    Valor5.textContent = valor5;
    Valor6.textContent = valor6;

    $('.btUpgrad1').click(function () {

        if (upgrad1 == 7) {
            alert('Voce Ja esta no Maximo desse Upgrad');
            Valor1.textContent = "MAX";
        }
        else if (resposta < valor1) {
            alert('Voce Não Tem Pontos o Suficiente');
        }

        else if (resposta >= valor1) {
            resposta = resposta - valor1;
            upgrad1 = upgrad1 + 1
            HScore.textContent = resposta;
            valor1 = valor1 * 2;
            Valor1.textContent = valor1;
            if (upgrad1 == 7) {

                Valor1.textContent = "MAX";
            }
        }

    });
    $('.btUpgrad2').click(function () {

        if (upgrad2 == 7) {
            alert('Voce Ja esta no Maximo desse Upgrad');
            Valor2.textContent = "MAX";}
       else if (resposta < valor2) {
                alert('Voce Não Tem Pontos o Suficiente');
            }

        
        else if (resposta > valor12) {
            resposta = resposta - valor2;
            upgrad2 = upgrad2 + 1
            HScore.textContent = resposta;
            valor2 = valor2 * 2;
            Valor2.textContent = valor2;
            if (upgrad2 == 7) {

                Valor2.textContent = "MAX";
            }
        }

    });
    $('.btUpgrad3').click(function () {

        if (upgrad3 == 7) {
            alert('Voce Ja esta no Maximo desse Upgrad');
            Valor3.textContent = "MAX";
        }
        else if (resposta < valor3) {
            alert('Voce Não Tem Pontos o Suficiente');
        }

        else if (resposta > valor3) {
            resposta = resposta - valor3;
            upgrad3 = upgrad3 + 1
            HScore.textContent = resposta;
            valor3 = valor3 * 2;
            Valor3.textContent = valor3;
            if (upgrad3 == 7) {

                Valor3.textContent = "MAX";
            }
        }

    });
    $('.btUpgrad4').click(function () {

        if (upgrad4 == 7) {
            alert('Voce Ja esta no Maximo desse Upgrad');
            Valor4.textContent = "MAX";
        }
        else if (resposta < valor4) {
            alert('Voce Não Tem Pontos o Suficiente');
        } else if (resposta > valor4) {

            resposta = resposta - valor4;
            upgrad4 = upgrad4 + 1
            HScore.textContent = resposta;
            valor4 = valor4 * 2;
            Valor4.textContent = valor4;
            if (upgrad4 == 7) {

                Valor4.textContent = "MAX";
            }
        }

    });
    $('.btUpgrad5').click(function () {

        if (upgrad5 == 7) {
            alert('Voce Ja esta no Maximo desse Upgrad');
            Valor5.textContent = "MAX";
        }
        else if (resposta < valor5) {
            alert('Voce Não Tem Pontos o Suficiente');
        }
        else if (resposta > valor5) {
            resposta = resposta - valor5;
            upgrad5 = upgrad5 + 1
            HScore.textContent = resposta;
            valor5 = valor5 * 2;
            Valor5.textContent = valor5;
            if (upgrad1 == 7) {

                Valor1.textContent = "MAX";
            }
        }

    });
    $('.btUpgrad6').click(function () {

        if (upgrad6 == 7) {
            alert('Voce Ja esta no Maximo desse Upgrad');
            Valor6.textContent = "MAX";
        }
        else if (resposta < valor6) {
            alert('Voce Não Tem Pontos o Suficiente');
        }
        else if (resposta > valor6) {
            resposta = resposta - valor6;
            upgrad6 = upgrad6 + 1
            HScore.textContent = resposta;
            valor6 = valor6 * 2;
            Valor6.textContent = valor6;
            if (upgrad1 == 7) {

                Valor1.textContent = "MAX";
            }
        }

    });

    $('.btPersonagem').click(function () {

        if (upgrad1 == 1) {
            resposta = resposta + 10;

            HScore.textContent = resposta;
        }
        else {
            var mais = 10 * (upgrad1 * 1.2)
            resposta = resposta + Math.floor(mais);

            HScore.textContent = resposta;

        }


    });
});

var pontos = "";
var HScore = document.getElementById('HScore');

