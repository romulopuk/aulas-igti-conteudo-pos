window.addEventListener('load', () => {
    doSpread();
    doRest();
    doDestructuring();
});

function doSpread() {
    const marriedMen = people.results.filter(
        person => (person.name.title === 'Mr')
    );

    const marriedWomen = people.results.filter(
        person => (person.name.title === 'Ms')
    );

    // console.log(marriedMen);
    // console.log(marriedWomen);

    const marriedPeople = [...marriedMen, ...marriedWomen, {msg: 'Oi'}];

    // console.log(marriedPeople);
}

function doRest() {
    // console.log(infiniteSum(1,2));
    // console.log(infiniteSum(1,2, 1000));
    // console.log(infiniteSum(1,2, 1000, 1));
}

function infiniteSum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
    const first = people.results[1];

    // Repetitivo
    // const username = first.login.username;
    // const password = first.login.password;

    // Destructuring
    const {username, password} = first.login;

    console.log(`User: ${username} e Pass: ${password}.`)
}