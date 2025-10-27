const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaVoltar = document.getElementById("btn-voltar");
const setaAvancar = document.getElementById("btn-avancar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", () => {
  const totalDeImagens = imagensPainel.length  -1;
  if (imagemAtual === totalDeImagens) {
    return;
  }

  imagemAtual++;

  imagensPainel.forEach(imagem => {
    imagem.classList.remove("mostrar");
  });

  imagensPainel[imagemAtual].classList.add("mostrar");
});

setaVoltar.addEventListener("click", () => {
  if (imagemAtual === 0) {
    return;
  }
  imagemAtual--;

  imagensPainel.forEach(imagem => {
    imagem.classList.remove("mostrar");
  });

  imagensPainel[imagemAtual].classList.add("mostrar");
});

