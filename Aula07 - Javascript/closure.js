// funções como parâmetro de outras funções
// testes para mostrar que funções são de fato cidadãs de primeira classe

function f (funcao){
    return funcao();
}

// podemos retornar (com o comando return) uma função dentro de outra
function g(){
    function outraFuncao(){
        console.log("Fui criado por g");
    }
    return outraFuncao();
}

// chamamos a função f() que recebe outra função como parâmetro
// conseguimos passar uma função como parâmetro de outra função
f(function () {
    console.log("Estou sendo passada para f");
})
const r = g(); // recebe como retorno a função que g() retorna
// r();

// outros testes
// f chama g, que somente devolve (não executa) uma função: nada propriamente é exibido
f(g);
// f chama a função devolvida por g, então ela é propriamente executada
f(g());

// f tenta chamar o que a função criada por g devolve, porém ela não devolve nada
f(g()());

// O que acontece? Não funciona pois 1 é um valor fixo e não uma função
f(1);