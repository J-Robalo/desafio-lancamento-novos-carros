function enviar(e) {
  e.preventDefault();

  const nome = document.querySelector("#nomesobrenome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const finalidade = document.getElementById("finalidade").value;
  const mensagem = document.getElementById("mensagem").value;

  const dados = { nome, email, telefone, finalidade, mensagem };
}
