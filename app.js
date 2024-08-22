let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    //com parametros(mais versatil)
    let campo = document.querySelector(tag);
    campo.innerHtml = texto;
    resposiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1' , 'Adivinhe do número secreto');
    exibirTextoNaTela('p' ,'Escolha um número entre 1 e 10');
    

}

exibirMensagemInicial();
//Chamanda a função

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTenativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTenativa}`;
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(chute >numeroSecreto){
                exibirTextoNaTela('p', 'O número secereto é menor');
            }else{
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
            exibirTextoNaTela('h1', 'ERRROU');
        }
}
function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).innerText = texto;
}
//iclude verifica se está na lista
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quanridadeElementosNaLista = listaDeNumeroSorteados.length;

if(quanridadeElementosNaLista == numeroLimite){
    listaDeNumeroSorteados = [];
}

   if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    /*push adiciona item ao final da lista*/ 
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

