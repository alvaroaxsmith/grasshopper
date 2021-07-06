// Neste desafio, você usará o operador e && para combinar 2 verificações em 1 if statement. Por exemplo, a if statement if(bColor === 'blue' && gColor === 'green') só executa o código nas {} do bloco se bColor contiver o valor 'blue' e gColor contiver o valor 'green'.

print('pinNumber is ' + pinNumber);
print('foundKey is ' + foundKey);
if (foundKey === 'yes' && pinNumber === 10) {
  print('You opened the lock!');
}
if (foundKey === 'no' && pinNumber === 10) {
  print('The pin number is right, but you are missing the key.');
}