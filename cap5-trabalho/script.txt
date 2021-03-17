window.addEventListener('load', () => {
    console.log('Questão 1: ')
    console.log(getGroupMembers());
    console.log('Questão 2: ')
    console.log(getFullName('Romulo', 'Lobato', 'Di', 'Motta'));
    console.log('Questão 3: ')
    console.log(transform([61, 72, 83, 94]));
    console.log('Questão 4: ')
    console.log(onlyNumbersFrom());   
})

//  Questão 1:
function getGroupMembers() {
    const nameArray = ['Romulo Lobato Di Motta', 'Renan Avner costa ', 'Ricardo Caetano de Souza ', 'Marcos Lopes', 'David Abreu de Sousa Junior '];
    const getGroupMembers = nameArray.sort();
    return getGroupMembers;
}

// Questão 2:
function getFullName (...args) {
    const newArgs = args.join(', ');
    
    return newArgs;
} 

// Questão 3:
function transform(number) {
    const result = number.map(number => number / 10 + 1);

    return result;
}

// Questão 4:
function onlyNumbersFrom() {
    const barCode = '445464-4545664-45 45-45';
    const onlyNumber = barCode.replace(/\.|\-/g, '').replace(' ','');

    return onlyNumber;
}