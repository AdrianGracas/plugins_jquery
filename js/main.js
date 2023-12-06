
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000');

    $('#CPF').mask('000.000.000-00');

    $('#CEP').mask('00000-000')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required:true
            },
            VeiculoDeInteresse: {
                required: false
            },
            endereco: {
                required: true
            },
            CPF: {
                required:true
            },
            CEP: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorrentos = validador.numberOfInvalids();
            if (camposIncorrentos) {
                alert(`Existem ${camposIncorrentos} campos incorretos`)
            }
        }
    })
})
