/* Cria as variávels utilizando os seletores HTML */

let botoes = document.querySelectorAll(".botoes button");
let passos = document.querySelectorAll(".passos > div");

/* Função principal que vai criar os botões e a estrutura para que cada página seja exibida na tela */

function aoClicar(event){ 
    let botaoAtual = event.target;
    let dataAlvo = botaoAtual.dataset.alvo;
    
    let elementoAlvo = document.querySelector(dataAlvo);
    let passoAnterior = document.querySelector('.passo-ativo');
    let botaoAnterior = document.querySelector('.botao-ativo');

    /* As próximas linhas de código mudam no HTML as classes das divs para que elas sejam mostradas na tela */
    
    if(botaoAtual !== botaoAnterior){
        passoAnterior.classList.remove('passo-ativo');

        elementoAlvo.classList.add('passo-ativo');

        botaoAtual.classList.add('botao-ativo');

        botaoAnterior.classList.remove('botao-ativo');
    }
}

/* Loop que cria o evento que clique */

for(let botao of botoes){
    botao.addEventListener('click', aoClicar);
}