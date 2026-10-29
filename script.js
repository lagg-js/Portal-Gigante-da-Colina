
const botao = document.querySelector("#botao-torcida");
const mensagem = document.querySelector("#mensagem-torcida");

botao.addEventListener("click", function () {
  mensagem.hidden = !mensagem.hidden;

  if (mensagem.hidden) {
    botao.textContent = "Conhecer a torcida";
  } else {
    botao.textContent = "Ocultar mensagem";
  }
});
