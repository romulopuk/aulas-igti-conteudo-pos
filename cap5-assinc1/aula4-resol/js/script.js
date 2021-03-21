/* 
    Estado da Aplicação (state)
*/
/* https://restcountries.eu/rest/v2/all */

let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberformat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');

  totalPopulationList = document.querySelector('#totalPopulationList');
  totalPopulationFavorites = document.querySelector('#totalPopulationFavorites');

  numberformat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});


/* function fetchCountries() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(json => {
      allCountries = json;
  console.log(allCountries);
  });
} */

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map(country => {

    const { numericCode, translations, population, flag } = country;

    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag
    };
  });
  
  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSumary();
  renderCountryButtons();
  console.log('rendering...');
}

function renderCountryList() {
  let countriesHtml = '<div>';

  allCountries.forEach(country => {
    const { name, flag, id, population } = country;

    const countryHTML = `
    <div class="country">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    </div>
    `;
  });
}
function renderFavorites() {}
function renderSumary() {}
function renderCountryButtons() {}

