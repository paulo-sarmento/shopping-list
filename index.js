var input = document.querySelector('input')
var btn = document.querySelector('button')
var ul = document.querySelector('ul')
var li = document.querySelectorAll('li')

//função que retorna o tamanho do input
function inputLength() {
    return input.value.length
}

//função que cria li/p, insere p dentro de li e li dentro de ul
function createListElement() {
    li = document.createElement('li')
    p = document.createElement('p')
    p.innerText = input.value
    li.appendChild(p)
    ul.appendChild(li)
    input.value = ''
}

//função que cria o botão para deletar o LI
function createCloseBtn() {
    closeBtn = document.createElement('button')
    closeBtn.innerHTML = 'X'
    li.appendChild(closeBtn)
}

//função que adiciona lista depois de clicar. verifica se o tamanho do input é maior que zero e chama função pra criar o LI e o BTN
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
        createCloseBtn()
    }
}

//função que adiciona lista depois de pressionar o enter.
function addListAfterPress(e) {
    if (inputLength() > 0 && e.code === 'Enter') {
        createListElement()
        createCloseBtn()
    }
}

//função que adiciona a classe .done
function toggleDoneList(e) {
    e.target.classList.toggle('done')
}

//função que remove a tag LI do DOM
function removeLi(e) {
    let li = e.target.parentElement
    li.remove()
}

//função que verifica qual o target de click e dependendo chama a função para adicionar a classe .done ou remover a tag LI do DOM
function action(e) {
    if (e.target.nodeName === 'P' || e.target.nodeName === 'LI') {
        toggleDoneList(e)
    } else if (e.target.nodeName === 'BUTTON') {
        removeLi(e)
    }
}

btn.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', addListAfterPress)

ul.addEventListener('click', action)