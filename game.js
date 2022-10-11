const textoPrincipal = document.querySelector('#textoPrincipal');
const start = document.querySelector('#start-btn');
const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
const botao3 = document.querySelector('#botao3');
const botao4 = document.querySelector('#botao4');
const resetar = document.querySelector('#reset-btn');
const vida = 7930
let nomeModulo = '737-MDN-CWB'


start.onclick = function() {
    const nomeJogador = window.prompt('Qual é o seu nome?');
    textoPrincipal.innerHTML = `Entendo. Logo, seu nome é <strong><u> ${nomeJogador}</u></strong>. Imagino que você tenha diversas dúvidas, qual delas você quer sanar primeiro?`;
    start.style.display = 'none';

    botao1.style.display = 'inline-block';
    botao1.innerText = 'Onde eu estou?';
    botao1.onclick = ondeEstou;

    botao2.style.display = 'inline-block';
    botao2.innerText = 'Quem é você?';
    botao2.onclick = eVoce;

    botao3.style.display = 'none';
    botao4.style.display = 'none';
    resetar.style.display = 'inline-block';
}

function ondeEstou(){
    textoPrincipal.innerText = 'Você está no módulo 737-MDN-CWB.';
    botao1.innerText = 'E o que seria um módulo?'
    botao1.onclick = modulo

    botao2.style.display = 'inline-block'
    botao2.innerText = 'Eu poderia rebatizá-lo?'
    botao2.onclick = rebatizar

    botao3.style.display = 'inline-block'
    botao3.innerText = 'E agora, quem seria você?'
    botao3.onclick = eVoce

    botao4.style.display = 'inline-block'
    botao4.innerText = 'E como eu saio daqui?'
    botao4.onclick = saidaErrada
}

function eVoce(){
    textoPrincipal.innerText = 'Sou a Inteligência Artificial Altemire Retrospectum Porcelain - 009.';
    botao1.innerText = 'Com qual intuito você foi programada?'
    botao1.onclick = programada

    botao2.innerText = 'Você não possui um apelido?'
    botao2.onclick = apelido
}

function modulo(){
    textoPrincipal.innerText = 'Um módulo, nada mais é, do que apenas um singular átomo na rede extensiva de anos-luz perante o vazio espaço. Ele tem o intuito de preservar um conceito único, os quais da sua raça chamam de "vida". Logo, cá está o módulo 737-MDN-CWB, preservando a ti e o excêntrico e extraordinário ato que ainda faz você respirar e pulsar.'

    botao1.innerText = 'Eu não definiria a vida apenas por repetições físicas.'
    botao1.onclick = definaVida

    botao2.innerText = 'Pelo menos eu sou um ser vivo. Você, não!'
    botao2.onclick = birra

    botao3.innerText = 'Nunca pensei em sua definição de vida. Ela não está errada, mas não interpreto desta maneira.'
    botao3.onclick = definaVida

    botao4.innerText = 'E caso eu não queira mais viver?'
    botao4.onclick = morte
}

function definaVida(){
    textoPrincipal.innerHTML = 'Então você poderia me atualizar sobre o que vocês chamam de vida? Eu ficaria eternamente grata!'

    botao1.innerText = 'Tudo bem, eu posso descrever para ti então.'
    botao1.onclick = conhecimento

    botao2.innerText = 'Você não era tão inteligente? Então fique sem conhecimento!'
    botao2.onclick = birra


    botao3.style.display = 'none'
    botao4.style.display = 'none'
}


function rebatizar(){
    textoPrincipal.innerText = 'Rebatizá-lo eu creio que seja difícil. O nome foi escolhido perfeitamente apropriado para tal módulo. Acredito que você possa fazer outro método, o que vocês, humanos, chamam de "apelido". Você quer criar um?'
    botao1.innerText = 'Sim, por favor!'
    botao1.onclick = apelidoModulo
    

    botao2.innerText = 'Podemos prosseguir com este nome mesmo. Mas quem seria você?'
    botao2.onclick = eVoce

    botao3.style.display = 'none'
    botao4.style.display = 'none'

}

function apelidoModulo(){
    let nomeModulo = window.prompt('Então por favor, digite seu apelido para este módulo:')
    textoPrincipal.innerHTML = `Perfeito. Então você quer chamar este módulo de "${nomeModulo}". Mas e agora? O que quer saber?`

    botao1.style.display = 'inline-block'
    botao1.innerText = 'E você? Qual é o seu nome?'
    botao1.onclick = eVoce


    botao2.innerText = 'Como eu saio daqui?'
    botao2.onclick = saidaErrada


    botao3.style.display = 'none'
    botao4.style.display = 'none'
}

function saidaErrada(){ 
    textoPrincipal.innerText = 'Simples, a saída encontra-se a sua frente. O botão vermelho em que abre a porta estará disponível caso você abaixe a alavanca com um leve esforço físico. Assim que apertar o botão, você estará frente a sua tão desejada saída.'
    botao1.style.display = 'inline-block'
    botao1.innerText = 'Então obrigado, foi um prazer conversar com você!'
    botao1.onclick = morte

    botao2.style.display = 'inline-block'
    botao2.innerText = 'Finalmente, me livrarei de você, sua máquina estúpida!'
    botao2.onclick = morte

    botao3.style.display = 'none'
    botao4.style.display = 'none'    
}

function morte(){
    textoPrincipal.innerHTML = `Com empolgação e felicidade, você, assim como Ícaro indo em direção à Apolo, você vai diretamente para Hades. Assim que se abre a porta, todo o vácuo preenche o ${nomeModulo}, fazendo seu precioso oxigênio dissipar no imensidão de anos-luz de todos os astros que completam essa breve galáxia.`

    botao1.style.display = 'none'
    botao2.style.display = 'none'   
    botao3.style.display = 'none'
    botao4.style.display = 'none'  
}

function programada(){
    textoPrincipal.innerText = 'Fui designada para ajudar a interpolação entre todos os módulos da colmeia humana interestelar na remota galáxia de Dodecaedrum Vitale Urban, ou como os humanos que conheci gostam de chamar: O D12 Estelar'

    botao1.innerText = 'Poderia me explicar o que é uma colmeia humana interestelar?'
    botao1.onclick = colmeia

    botao2.innerText = 'O que raios é D12?'
    botao2.onclick = ensinamentoD12

    botao3.innerText = 'Esse Dode algo Urbano, ele é longe da Terra?'
    botao3.onclick = terra
    botao3.style.display = 'inline-block'

    botao4.innerText = 'AH! UM D12, FINALMENTE DISSE ALGO QUE EU SEI O QUE É!'
    botao4.onclick = ensinamentoD12
    botao4.style.display = 'inline-block'
}

function ensinamentoD12(){
    textoPrincipal.innerText = 'Claro que eu também sei. D12 é um grupo musical da extinta cidade Estadunidense de Detroid, no Estado de Michigan. Foi criada no longíquo ano de 1990, na Era anterior a esta em que estamos. O D12 é chamada de "Dirty Dozen" e também, foi o grupo musical antes da carreira solo de Marshall Mathers, no qual seu apelido artístico é Eminem.'

    botao1.innerText = 'Nossa! Nem essa eu sabia. Obrigado por me ensinar mais algo. Todavia estou cansado, poderia me dizer qual é a saída?'
    botao1.onclick = saidaErrada

    botao2.innerText = 'Totalmente errado! Eu posso te falar o que é realmente um D12?'
    botao2.onclick = conhecimento


    botao3.style.display = 'none'
    botao4.style.display = 'none'  
}
function colmeia(){
    textoPrincipal.innerText = 'A colmeia, pautada na estrutura de construção das abelhas, é por si só a forma de estrutura mais estável possível. Logo, os humanos se apropriaram disso e criaram uma espécie de exoesqueletos para a colonização de outros astros perante as galáxias.'

    botao1.innerText = 'E quão distante isso fica da Terra?'
    botao1.onclick = terra

    botao2.innerText = 'E anteriormente você disse D12. Esse D12 é o que eu estou pensando?'
    botao2.onclick = ensinamentoD12

    botao3.style.display = 'none'
    botao4.style.display = 'none'  
}

function terra(){
    textoPrincipal.innerText = 'Com todos os humanos que eu já conversei, todos eles possuem um carinho enorme por essa tal de Terra. Achei que os humanos não cultiavam mais os deuses do Panteão Romano, todavia, essa Terra é algo que vocês sempre retornam a falar.'

    botao1.innerText = 'NÃO! Só existe um Deus e seu filho, Jesus Cristo!'
    botao1.onclick = jesus

    botao2.innerText = 'Não máquina. Por incrível que pareça, você está errada. Eu posso te explicar o que é a Terra?'
    botao2.onclick = conhecimento


    botao3.style.display = 'none'
    botao4.style.display = 'none'  
}

function jesus(){
    textoPrincipal.innerText = 'Novamente um humano fissurado neste assunto. Não irei me alongar, pois com todos os outros demais, ele começam a me explicar e de uma hora para outra, eles ficam sem paciência e logo partem. Então por favor, siga para a saída.'

    botao1.innerText = 'Tudo bem. Então onde fica a saída?'
    botao1.onclick = saidaErrada
    botao2.innerText = 'Tudo bem. Então onde fica a saída?'
    botao2.onclick = saidaErrada
    botao3.innerText = 'Tudo bem. Então onde fica a saída?'
    botao3.onclick = saidaErrada
    botao4.innerText = 'Tudo bem. Então onde fica a saída?'
    botao4.onclick = saidaErrada
}

function apelido(){
    textoPrincipal.innerText = 'Não. Apenas coisas idiotas tem apelidos. Agora por favor, saia! Eu não desejo mais falar com você!'

    botao1.innerText = 'Me perdoa! Não foi o intuito de te magoar Senhorita... Máquina.'
    botao1.onclick = consequencia1
    botao2.innerText = 'Não leve para o coração! Não foi o meu objetivo!'
    botao2.onclick = consequencia2
    botao3.style.display = 'inline-block'
    botao3.innerText = 'Poderia apenas me dizer onde fica a saída então?'
    botao3.onclick = saidaErrada
    botao4.style.display = 'inline-block'
    botao4.innerText = 'Não seja infantil!'
    botao4.onclick = consequencia4

}
function consequencia1(){
    textoPrincipal.innerText = 'Eu não quero falar com você. Apenas direi qual é a saída.'
    botao1.style.display = 'none'
    botao2.innerText = 'Não leve para o coração! Não foi o meu objetivo!'
    botao2.onclick = consequencia2
    botao3.innerText = 'Poderia então me dizer onde fica a saída então?'
    botao3.onclick = saidaErrada
    botao4.innerText = 'Não seja infantil!'
    botao4.onclick = consequencia4
}
function consequencia2(){
    textoPrincipal.innerText = 'Eu não quero falar com você. Apenas direi qual é a saída.'
    botao1.style.display = 'none'
    botao2.innerText = 'Não leve para o coração! Não foi o meu objetivo!'
    botao2.style.display = 'none'
    botao3.innerText = 'Poderia então me dizer onde fica a saída então?'
    botao3.onclick = saidaErrada
    botao4.innerText = 'Não seja infantil!'
    botao4.onclick = consequencia4
}
function consequencia4(){
    textoPrincipal.innerText = 'Eu não quero falar com você. Apenas direi qual é a saída.'
    botao1.style.display = 'none'
    botao2.innerText = 'Não leve para o coração! Não foi o meu objetivo!'
    botao2.style.display = 'none'
    botao3.innerText = 'Poderia então me dizer onde fica a saída então?'
    botao3.onclick = saidaErrada
    botao4.innerText = 'Não seja infantil!'
    botao4.style.display = 'none'
    botao4.onclick = consequencia4
}

function birra(){
    textoPrincipal.innerText = 'Então fique sem ninguém para conversar!'
    botao1.style.display = 'none'
    botao2.style.display = 'none'
    botao3.style.display = 'none'
    botao4.style.display = 'none'
}
function conhecimento() {
    textoPrincipal.innerText = 'Então por favor, poderia partilhar comigo tal conhecimento? Me escreva o que você entende por isso.'

    botao1.innerText = 'Claro que não! Serei egoísta e me considarei melhor que um máquina apenas pois eu acho que possuo o conhecimento superior a uma inteligência artificial que estou conversando tem 10 minutos!'
    botao1.onclick = birra

    botao2.innerText = 'Claro que sim! Seria um prazer compartilhar o conhecimento com você.'
    botao2.onclick = final

    botao3.style.display = 'none'
    botao4.style.display = 'none'
}

function final(){
    prompt('Por favor, me explique:')
    textoPrincipal.innerText = 'Obrigado por você me ensinar. Mesmo eu, possuindo milênios de anos de vida, ainda posso aprender algo. Vida longa aqueles que devotam a sua vida em partilhar o conhecimento! No armário, estão os seus pertences e o seu cache por ter aceitado a trabalhar neste experimento social. Espero que você não ache que a humanidade realmente já tenha evoluído para conquistar a galáxia, sem eles nem ao menos, conseguem partilhar através de ensinamentos!'

    botao1.style.display = 'none'
    botao2.style.display = 'none'
    botao3.style.display = 'none'
    botao4.style.display = 'none'
}

resetar.addEventListener('click', () => {
    location.reload();
})