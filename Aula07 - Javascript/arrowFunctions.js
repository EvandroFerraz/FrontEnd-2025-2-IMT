const hello = () => console.log("Hello");
hello();

const dobro = (valor) => valor * 2;
console.log(dobro(10)); // valor = 10, retorno (implicito) = 20

// se a arrow function possui mais de uma linha de instrução, é necessário utilizar 
// chaves e explicitamente escrever o comando return
const triplo = (valor) => {
    console.log("Calculando o triplo do valor enviado...");
    return valor*3;
};
console.log(triplo(3));

// retorna se o número é par ou não
const ehPar = (n) => n % 2 === 0;
console.log(ehPar(10));