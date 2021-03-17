async function fetchCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = res.json();
    const fs = require('fs');
    await fs.appendFile('countries.json', json, (err) => {
        if (err) {
            throw err;
        }
        console.log('Arquivo Salvo');
        
    })
    console.log(json);
}