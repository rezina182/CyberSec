$(function () {
    $('.dropdown-toggle').dropdown();
  });

$(function () {

    let palavras  = ["Conceitos Básicos", "Habilidades", "Área de Atuação", "Certificação", "Conteúdos"]
    let inicio    = 0
    let intervalo = 1500


    $('#texto').text(palavras[inicio++])

        setInterval(function() {

    }, intervalo);


    setInterval(function() {

          //$('#texto').fadeOut(function() {
            $('#texto').slideUp(function() {

                if (inicio >= palavras.length) {
                 inicio = 0;
                }

          //$(this).text(palavras[inicio++]).fadeIn();
            $(this).text(palavras[inicio++]).slideDown();

            });
    }, intervalo);

});

