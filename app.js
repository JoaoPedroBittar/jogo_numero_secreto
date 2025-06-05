alert('Bem vindo ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroDigitado;
let tentativas = 1;


while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt(`Digite um número entre 1 e ${numeroMaximo}`)
    //se o chute for igual ao numero secreto
    if (numeroDigitado == numeroSecreto) {
        break;
    } else {
        if (numeroDigitado > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroDigitado}`);
        } else {
            alert(`O número secreto é maior que ${numeroDigitado}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

//Operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Voce arrasou! O número secreto era ${numeroSecreto}, você acertou com ${tentativas} ${palavraTentativa}`);