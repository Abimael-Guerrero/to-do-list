

const createListButton = document.getElementById('create-list').addEventListener('click', createList)
const createNameListButton = document.getElementById('button-set-name-list').addEventListener('click', createNameList)

// Opens window
function createList() {
    document.getElementById('creation-table').setAttribute('style', 'visibility: visible;')
} 

// Close window and creates new todo-list
function createNameList() {
    const newList = document.createElement('div')
    const newH1 = document.createElement('h1')
    const newDiv = document.createElement('div')
    const newCheckbox = document.createElement('input')
    const newTodoText = document.createElement('input')
    const selectText = document.getElementById('list-name').value
    const newListTextName = document.createTextNode(selectText)

    newDiv.setAttribute('class', 'list-name')
    newCheckbox.setAttribute('type', 'checkbox')
    newTodoText.setAttribute('type', 'text')

    if (!selectText) {
        alert('Necesitas poner un texto')
    } else {
        // Creates text and adds it to the element 
        newH1.appendChild(newListTextName)
        newList.appendChild(newH1)
        newList.appendChild(newDiv)
        newDiv.appendChild(newCheckbox)
        newDiv.appendChild(newTodoText)
        document.body.appendChild(newList)

        document.getElementById('creation-table').removeAttribute('style')
    }
}