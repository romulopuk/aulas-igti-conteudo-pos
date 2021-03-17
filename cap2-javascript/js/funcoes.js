//Proposição Lógica: True ou False.

// Estruturas de decisão: If/Else, Switch, Operador Ternário.

// Estruturas de Repetição: While, do... While e for.

// Função de soma
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

// Função de comparar números:
function compareNumbers(a, b) {
    return a-b;
}

console.log("Compara 5 e 5: " + compareNumbers(5, 5));
console.log(`Compara 5 e 2: ${compareNumbers(5, 2)}`);
console.log(`Compara 2 e 5: ${compareNumbers(2, 5)}`);

function superSum(from, upTo) {
    var sum = 0;

    for (var i = from; i <= upTo; i++) {
        sum += i;
    }

    return sum;
}

console.log(superSum(1, 10));
console.log(superSum(9, 100));
console.log(superSum(200, 1000));