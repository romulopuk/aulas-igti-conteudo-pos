window.addEventListener('load', function() {
    doFetch();
    doFetchAsync();
    
    // Resultado Promisse

    console.log(divisionPromise(12,6));
    console.log(divisionPromise(5,0));

    // Resultado tratado

    divisionPromise(20, 5).then(result => {
        console.log(result);
    })
    
    // Resultado com Promisses: Then/Cath Async/Await

    executeDivisionPromise();
    executeDivisionPromiseAsyncAwait();
});

function doFetch() {
    fetch('https://api.github.com/users/romulomotta').then(response => {
        response.json().then(data => {
            showData(data);
        });
    }).catch(error => {
        console.log('Erro na requisição.');
    });
}

async function doFetchAsync() {
    const res = await fetch('https://api.github.com/users/romulomotta');
    const json = await res.json();
    console.log(json);
}

function showData(data) {
    const user = document.querySelector('#user');
    user.textContent = data.login + ' ' + data.name;
}

function divisionPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('- Não é possível dividir por 0 -');
        }else{
            resolve (a / b);
        }
    });
}

function executeDivisionPromise() {
    divisionPromise(12,2)
    .then(result => {
        console.log(result);
    })
    .catch(errorMessage => {
        console.log('Falha na divisão ' +errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
    const division = await divisionPromise(12,20)
    console.log(division);
}