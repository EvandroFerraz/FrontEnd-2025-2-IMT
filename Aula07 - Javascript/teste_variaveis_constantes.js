
// dinamicamente tipada
// variavel global
var linguagem = "Javascript"; // String 
console.log("Aprendendo " + linguagem); // Aprendendo Javascript
// consigo alterar o valor pois "linguagem" é uma variável
linguagem = "Java";
console.log("Aprendendo " + linguagem); // Aprendendo Java

const nome = "João";
console.log(`Oi, ${nome}`);

var idade = 18;
// estrutura de seleção
if(idade >= 18){
    // var idade = 18; // idade é uma variavel global
    // let idade = 18; // idade é uma variavel local, só existe no bloco onde foi definida
    console.log(`Parabéns, ${nome}. Você pode dirigir.`);
}// else{}

console.log("Você tem " + idade + " anos."); // funciona se idade é global

// Erro em tempo de execução, pois estamos tentando mudar um valor constante
// nome = "Maria"; 