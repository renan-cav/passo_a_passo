let botoes = document.querySelectorAll(".botoes button");
let passos = document.querySelectorAll(".passos > div");

function aoClicar(event){ 
    let botaoAtual = event.target;
    let dataAlvo = botaoAtual.dataset.alvo;
    
    let elementoAlvo = document.querySelector(dataAlvo);
    let passoAnterior = document.querySelector('.passo-ativo');
    let botaoAnterior = document.querySelector('.botao-ativo');

    if(botaoAtual !== botaoAnterior){
        passoAnterior.classList.remove('passo-ativo');

        elementoAlvo.classList.add('passo-ativo');

        botaoAtual.classList.add('botao-ativo');

        botaoAnterior.classList.remove('botao-ativo');
    }
}

for(let botao of botoes){
    botao.addEventListener('click', aoClicar);
}