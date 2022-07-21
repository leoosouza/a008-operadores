// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```

const primeiroNumero = prompt ('Escolha um número')
const segundoNumero = prompt ('Agora, escolha outro número')

console.log(primeiroNumero > segundoNumero);
console.log(primeiroNumero === segundoNumero);
console.log(primeiroNumero / segundoNumero);
console.log(segundoNumero / primeiroNumero);