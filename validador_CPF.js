console.log("Carregou o arquivo validador_CPF.js");

function validaCPF(cpf) {
  return false;
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