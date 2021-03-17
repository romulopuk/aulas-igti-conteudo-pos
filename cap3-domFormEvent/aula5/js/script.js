window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
    inputName = document.querySelector('#inputName');
    inputName.value = '';

    preventFormSubmit();
    activateInput();

    render();
    changeH2();
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    function insertName(newName) {
        globalNames.push(newName);
        render();
        changeH2();
    }

    function updateName(newName) {
        globalNames[currentIndex] = newName;
    }

    function handleTyping(event) {
        if (event.key === 'Enter' &&
            event.target.value.trim() !== '') {

            if (isEditing) {
                updateName(event.target.value);
            }else{
                insertName(event.target.value);
            }
            isEditing = false;
            clearInput();
            render();
            
        }
    }

    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);
}

function render() {
    function createDeleteButton(index) {
        function deleteName() {
            console.log(index);
            globalNames.splice(index, 1);
            render();
            changeH2();
        }

        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';
        button.addEventListener('click', deleteName);

        return button;
    }

    function createSpan(name, index) {
        function editItem() {
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }

        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem);

        return span;
    }

    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';

    var ul = document.createElement('ul');

    for (var i = 0; i < globalNames.length; i++) {
        var currentName = globalNames[i];

        var li = document.createElement('li');
        var button = createDeleteButton(i);
        var span = createSpan(currentName, i);

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();
}

function changeH2() {
    var hNames = document.querySelector('h2');
    var moreName = `Foram cadastrado(s) ${globalNames.length} até o momento.`;
    var noNames = `Não existem nomes cadastrados.`
    var listedNames;

    globalNames.length === 0 ? listedNames = noNames : listedNames = moreName;
    hNames.innerHTML = listedNames; 
}

function clearInput() {
    inputName.value = '';
    inputName.focus();
}