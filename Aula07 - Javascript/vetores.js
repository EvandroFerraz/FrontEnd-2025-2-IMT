v1 = []; // tamanho e tipagem atribuidos de forma dinamica
v1[0] = 3.4; // vetor tem 1 posição: 0
v1[10] = 2; // vetor tem 11 posições: 0 até 10, totalizando 11
v1[2] = "abc"; // vetor tem 11 posições, atribuindo valor para a 3 posição
console.log(v1.length); // imprime 11, pois imprime o tamanho do vetor

// declarando explicitamente
v2 = [2, 'abc', true];
console.log(v2);
// iterar (percorrer) a coleção e imprimir os valores dentro do vetor
for(let i = 0; i < v2.length; i++){
    console.log(v2[i]);
}

// testando a função filter() e a função starstWith()
const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);

// função map() e charAt()
const res = nomes.map((nome) => nome.charAt(0));
console.log(res);

// verifica se todas as posições do vetor seguem a condição statsWith("A")
const todosComecamComA = nomes.every((n) => n.startsWith("A"));
console.log(todosComecamComA);

// reduce(), percorrer o vetor mantendo o valor calculado a cada iteração
const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v);
console.log(soma);