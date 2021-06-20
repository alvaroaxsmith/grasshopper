// Neste desafio, foi usado uma if...else statement para jogar uma moeda. if...else statements permitem que você controle qual código é executado quando o teste é verdadeiro e qual código é executado quando o teste é falso.

var answer = pickRandom([
    'heads',
    'tails',
]);

print(answer);
if (answer === 'heads'){
    drawBoxes('gwg ggg gwg');
} else {
    drawBoxes('wbw wbw wbw');
}