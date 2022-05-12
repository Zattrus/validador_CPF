console.log("Carregou o arquivo validador_CPF.js");

function validaCPF(cpf) {
    console.log(cpf.length)
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        return true;
    }
}

function validacao() {
    console.log("Fui clicado");

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}