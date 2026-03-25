// Operadores de Comparação

let a = 5, b = 10;

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)


//Operadores Lógicos

let idade = 25;
let temCarteira = true;

// AND (&&) - ambas condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}

// OR (||) - pelo menos uma condição deve ser verdadeira
if (idade < 18 || !temCarteira) {
  console.log("Não pode dirigir");
}

// NOT (!) - inverte o valor booleano
if (!temCarteira) {
  console.log("Precisa de carteira");
}
//Dica: Use === e !== em vez de == e != para comparações mais seguras que verificam tipo e valor.



// Estruturas Condicionais (if / else)

let tarefaConcluida = true;

if (tarefaConcluida) {
  console.log("A tarefa está concluída!");
}


let prioridade = 2; // 1: baixa, 2: média, 3: alta

if (prioridade === 3) {
  console.log("Prioridade Alta");
} else {
  console.log("Prioridade não é alta");
}


if (prioridade === 1) {
  console.log("Prioridade Baixa");
} else if (prioridade === 2) {
  console.log("Prioridade Média");
} else if (prioridade === 3) {
  console.log("Prioridade Alta");
} else if (prioridade === 4){
    console.log('prioridade altíssima')
  } else {
  console.log("Prioridade desconhecida");
}


// Switch Case

let diaSemana = new Date().getDay(); // 0: Domingo, 1: Segunda, etc.

switch (diaSemana) {
    case 0:
    console.log("Domingo");
    break;
    case 1:
    console.log("Segunda-feira");
    break;
    case 2:
    console.log("Terça-feira");
    break;
    case 3:
    console.log("Quarta-feira");
    break;
    case 4:
    console.log("Quinta-feira");
    break;
    case 5:
    console.log("Sexta-feira");
    break;
    case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
} //O uso de break é essencial para evitar que a execução "pule" para o próximo caso.



// Loops (for, while, do/while)

for (let i = 0; i < 5; i++) { // no primeiro quadrante declaramos a variável, no segundo estabelecemos o limite para a repetição do laço, e no terceiro fazemos o incremento da variável em cada repetição (i++ === i = i + 1)
  console.log("Contagem:", i);
}

let contador = 0; // aqui declaramos a variável antes do loop
while (contador < 5) { // aqui estabelece o limite de repetição
  console.log("Contagem:", contador);
  contador++; // e apenas no final colocamos o incremento
}

let numero = 5; // declaramos a variável antes
do { 
  console.log("Número é:", numero);
  numero--; // decremento da variável
} while (numero > 0); // e so no final estabelece o limite 
// sla pq esse do/while seria útil, mas tá ai




// Loops 'avançados'


//for...in (itera sobre propriedades)
let pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };

for (let propriedade in pessoa) {
  console.log(propriedade + ": " + pessoa[propriedade]);
}
// nome: João
// idade: 30
// cidade: São Paulo


//for...of (itera sobre valores)
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
// maçã
// banana
// laranja


//break e continue
// break - sai do loop completamente
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - pula para a próxima iteração
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9 (apenas ímpares)
}

