const listaSelecaoGotys = document.querySelectorAll(".goty");

listaSelecaoGotys.forEach(goty =>{
    goty.addEventListener("click", () =>{
        esconderCartaoGoty();

        const idGotySelecionado = mostrarCartaoGotySelecionado(goty);

        desativarGotyNaListagem();

        ativarGotySelecionadoNaListagem(idGotySelecionado);
    })
})

function ativarGotySelecionadoNaListagem(idGotySelecionado) {
    const gotySelecionadoNaListagem = document.getElementById(idGotySelecionado);
    gotySelecionadoNaListagem.classList.add("ativo");
}

function desativarGotyNaListagem() {
    const gotyAtivoNaListagem = document.querySelector(".ativo");
    gotyAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoGotySelecionado(goty) {
    const idGotySelecionado = goty.attributes.id.value;
    const idDoCartaoGotyParaAbrir = "cartao-" + idGotySelecionado;
    const cartaoGotyParaAbrir = document.getElementById(idDoCartaoGotyParaAbrir);
    cartaoGotyParaAbrir.classList.add("aberto");
    return idGotySelecionado;
}

function esconderCartaoGoty() {
    const cartaoGotyAberto = document.querySelector(".aberto");
    cartaoGotyAberto.classList.remove("aberto");
}
