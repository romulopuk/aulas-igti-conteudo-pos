window.addEventListener('load', () => {

    fetchCountries();
    console.log(length());
})

let countries = [];
async function fetchCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = res.json();
    countries = json;
    console.log(countries);
}

function length() {
    
    return countries.length;
}