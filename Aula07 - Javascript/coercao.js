const n1 = 2;
const n2 = "3";

// coerção implicita: automaticamente n1 será transformado em uma string
const n3 = n1 + n2; // concatenação entre n1 e n2
console.log(n3);

// coerção explicita (Number()): manualmente fazemos a conversão de n2 para número, usando a classe Number()
const n4 = n1 + Number(n2);
console.log(n4);
