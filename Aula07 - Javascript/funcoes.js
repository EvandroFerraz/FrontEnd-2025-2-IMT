// primeiro compila-se o código de todas as funções, nesse momento
// se existirem funções com o mesmo nome, a última versão escrita é a que vai prevalecer
// no exemplo, a segunda versão de hello() das linhas 11 ate 13 substitui a
// primeira versão da função nas linhas 6 ate 9 

function hello(){
    console.log("Oi");
}
hello(); // imprimir "Oi" inicialmente, porém será sobrescrita a partir da linha 11

function hello(nome){
    console.log("Hello, " + nome);
}
hello("Pedro"); // imprimir "Hello, Pedro"

// próximo teste: podemos guardar o retorno de uma função em uma constante/variável
function soma(a, b){
    return a + b;
}
const res = soma(2,3); // retorna 5
console.log(res); //imprimindo o resultado da soma (que no exemplo é 5)

// funções sem nome (anônimas) podem ser atribuídas para variáveis/constantes
const dobro = function (n) {
    return n * 2;
}
const resDobro = dobro(4);
console.log(resDobro);