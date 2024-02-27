let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let Tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Acertou!');
        let PalavraTentativa = Tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você acertou o número secreto com ${Tentativas} ${PalavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('Disabled');
        Tentativas = 1;
    }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        Tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

