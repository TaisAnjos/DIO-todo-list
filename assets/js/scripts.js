var input = document.querySelector('input').addEventListener('blur', () => {
        input = document.querySelector('input').value
    })

var btn = document.querySelector('.btn').addEventListener('click', novaTarefa)

//CRIA UMA TAREFA
function novaTarefa () {
    var  newLi = document.createElement('li')
    var newLabel = document.createElement('label')
    var txtValue = document.createTextNode(input)
    var checkbox = document.createElement('input')
    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
 
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', input)
    checkbox.setAttribute('class', 'check')

    span.className = "close";

    newLabel.setAttribute('for', input)
    newLabel.appendChild(txtValue)

    span.appendChild(txt);

    newLi.appendChild(checkbox)
    newLi.appendChild(newLabel)
    
    newLi.appendChild(span);

    document.getElementById("ul").appendChild(newLi);
    document.querySelector('form').reset()
} 