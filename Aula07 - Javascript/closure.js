// Em Javascript, funções são cidadãs de primeira classe, ou seja:

// podem ser armazenadas em uma variável
let umaFuncao = function(){
    console.log("Fui armazenada em uma variável")
}
// e pode ser chamada assim
umaFuncao()

// podem receber outra função como parâmetro
function f (funcao){
    funcao() // executando a função que veio por parâmeto
}

// funções podem retornar outras funções
function g (){
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao()
}

// podemos chamar a funçã f() já criando outra função na passagem de parâmetro
// f()
f(function() {
    console.log("Estou sendo criada e já passada como parâmetro na chamada de f()")
})

// agora queremos executar a função que g() retorna
g() // dessa forma a função "outraFuncao()" é retornada porém não é executado
g()() // dessa forma a função "outraFuncao()" é retornada e também executada
// podemos guardar o retorno de g() dentro de uma constante/variavel
// e depois executar a função a partir da constante/variavel em que ela foi armazenada
const gResult = g() // gResult guarda "outraFuncao()", que é o retorna de g()
gResult() // agora sim a "outraFuncao()", armazenada na constante, é executada

// f recebe g por parâmetro
f(g) //função g() seria executada dentro de f e retornaria a "outraFuncao()"
f(g()) // o retorno da função g(), "outraFuncao()" será executado
f(1) // como f() recebe uma funçã por parâmetro, se eu passar um inteiro vai dar erro
// em tempo de execução

// funções internas / externas
function f() { // função externa
    let nome = "João" // variáveis criadas na função externa existem também na interna
    function g(){ // função interna
        console.log(nome);
    }
    g() // agora sim a função é executada
}
// como a função interna g() é criada/chamada dentro da função externa f(), para
// que g() sejá executado precisamos chamar f()
f()


// criando a função ola(), que retorna uma funcao
function ola(){
    let nome = "Joao";
    return function(){
        console.log("Olá, João")
    }
}

// atribuimos o retorno da funcao como valor para a variavel olaResult
olaResult = ola();
olaResult();

// O valor dos parâmetros que uma função recebe também podem ser passados para
// a função que ela retorna
// closure = reaproveitamos parâmetros recebidos na função externa para construir
// a função interna
function saudacao(saudacao, nome){
    return function(){
        console.log(saudacao + ", " + nome);
    }
}
let olaJoao = saudacao("Olá", "João");
olaJoao(); // imprime "Olá, João"