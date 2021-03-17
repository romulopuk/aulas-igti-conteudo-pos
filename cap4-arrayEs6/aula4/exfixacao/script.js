window.addEventListener('load', () => {
    console.log(f3());
    // console.log(f2());
});

const array = [1, 2, 3, 4, 5, 6];
// const array = [1, '2', '3', 4, 5];

function f3() {
    return array
    .map(item => item * 2)
    .filter(item => item % 3 === 0)
    .reduce((accumulator, current) => accumulator + current, 0);
}

function f2() {
    return array.filter(item => typeof item === 'string');
}