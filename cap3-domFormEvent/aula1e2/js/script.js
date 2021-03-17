console.log("Ola, mundo!");

var title = document.querySelector('h1');
title.textContent = 'Mudei o valor';

var newId = document.querySelector('#city');
newId.textContent = 'Change ID';

var data = Array.from(document.querySelectorAll('.data'));
console.log(data);

for (var i = 0; i < data.length; i++) {
    var currentElement = data[i];
    // currentElement.style.color = 'green';
    // currentElement.classList.add('emphasis');
    // currentElement.classList.remove('data');
}