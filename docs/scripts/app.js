

const createListButton = document.getElementById('create-list').addEventListener('click', createList)
const createNameListButton = document.getElementById('button-set-name-list').addEventListener('click', createNameList)

//Object for to-do
const todo = {}

//Create 'add button' to add new to-do
const AddTodoButton = document.createElement('button')
const AddTodoButtonText = document.createTextNode('Añadir Tarea')
AddTodoButton.appendChild(AddTodoButtonText)

// Opens window
function createList() {
    document.getElementById('creation-table').setAttribute('style', 'visibility: visible;')
} 

// Close window and creates new todo-list
function createNameList() {
    //Add name value to object
    const nameList = document.getElementById('list-name').value  
    todo.listName = nameList   
    todo.completed = false   

    const newList = document.createElement('div')
    const nameListH1 = document.createElement('h1')
    const textNameList = document.createTextNode(todo.listName)
    const todoMainContainer = document.createElement('div')
    const todoContainer = document.createElement('div')
    const completedBox = document.createElement('input')
    const todoText = document.createElement('input')

    completedBox.type = 'checkbox'
    todoText.type = 'text'
    todoMainContainer.id = 'todo-main-container'
    
    newList.appendChild(nameListH1)
    nameListH1.appendChild(textNameList)
    newList.appendChild(todoMainContainer)
    todoMainContainer.appendChild(todoContainer)
    todoContainer.appendChild(completedBox)
    todoContainer.appendChild(todoText)
    newList.append(AddTodoButton)

    document.body.appendChild(newList)
    
    document.getElementById('creation-table').removeAttribute('style')
    console.log(todo)
}

AddTodoButton.addEventListener('click', addNewtodo)

function addNewtodo() {
    const todoContainer = document.createElement('div')
    const completedBox = document.createElement('input')
    const todoText = document.createElement('input')

    completedBox.type = 'checkbox'
    todoText.type = 'text'
    
    todoContainer.appendChild(completedBox)
    todoContainer.appendChild(todoText)

    const mainContainer = document.getElementById('todo-main-container')
    mainContainer.append(todoContainer)
}

// function createNameList() {
//     const newList = document.createElement('div')
//     const newH1 = document.createElement('h1')
//     const newDiv = document.createElement('div')
//     const newCheckbox = document.createElement('input')
//     const newTodoText = document.createElement('input')
//     const selectText = document.getElementById('list-name').value
//     const newListTextName = document.createTextNode(selectText)

//     newDiv.setAttribute('class', 'list-name')
//     newCheckbox.setAttribute('type', 'checkbox')
//     newTodoText.setAttribute('type', 'text')

//     if (!selectText) {
//         alert('Necesitas poner un texto')
//     } else {
//         // Creates text and adds it to the element 
//         newH1.appendChild(newListTextName)
//         newList.appendChild(newH1)
//         newList.appendChild(newDiv)
//         newDiv.appendChild(newCheckbox)
//         newDiv.appendChild(newTodoText)
//         document.body.appendChild(newList)

//         document.getElementById('creation-table').removeAttribute('style')
//     }
// }