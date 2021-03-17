window.addEventListener('load', start);

function start() {
    console.log('Aula 04');
    console.log('Página totalmente carregada');

    var nameInput = document.querySelector('#nameInput');
    var nameInput = addEventListener('keyup', countName);

    var form = document.querySelector('form');
    form.addEventListener('submit', preventSubmit);
}


function countName(event) {
    var count = event.target.value;
    
    var span = document.querySelector('#nameLength');
    
    if (count.length > 0) { 
        span.textContent = count.length;
    } else {
        span.textContent = '';
    }   
}

function preventSubmit(event) {
    event.preventDefault();

    alert(nameInput.value + " Cadastrado.");
}