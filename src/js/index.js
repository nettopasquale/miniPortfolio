/*
Objetivo - quando clicarmos na aba temos que mostrar o conteúdo da aba
que foi clicada pelo usuário e esconder o conteúdo da aba anterior

1º pegar o elemento  que representa a 'aba' no html
2º identificar o clicar da aba 
3º ao clicar na aba-> desmarcar ?
4º marcar a aba clicada como selecionada
5º E esconder conteúdo da outra aba
6º mostra conteúdo da aba selecionada
7º... processo inverso
*/

// 1º pegar o elemento  que representa a 'aba' no html
const abas = document.querySelectorAll(".aba");
console.log(abas)

// 2º identificar o clicar da aba 
abas.forEach(aba => {
    aba.addEventListener("click", () =>{
        if(aba.classList.contains("selecionada")) return;

        selecionarAba(aba);
        mostrarInformacaoDaAba(aba);
    });
})

function selecionarAba(aba){
    // 3º ao clicar na aba-> desmarcar ?
    const abaSelecionada = document.querySelector(".aba.selecionada")
    abaSelecionada.classList.remove("selecionada")
    // 4º marcar a aba clicada como selecionada
    aba.classList.add("selecionada")
}

function mostrarInformacaoDaAba(aba){
    // 5º E esconder conteúdo da outra aba
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");

    // 6º mostra conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionada")
}