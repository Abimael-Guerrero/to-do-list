

const createListButton = document.getElementById('create-list').addEventListener('click', createList)
const createNameListButton = document.getElementById('button-set-name-list').addEventListener('click', createNameList)

//Object for to-do
const listsContainer = []

// Opens 'Create list' window
function createList() {
    document.getElementById('creation-table').setAttribute('style', 'visibility: visible;')
} 

// Close window and creates new todo-list
function createNameList() {
    const list = []
    const todo = {}

    //Add name property to object
    const nameList = document.getElementById('list-name').value  
    list.push(nameList)  
    listsContainer.push(list) 

    const newList = document.createElement('div')
    const nameListH1 = document.createElement('h1')
    const textNameList = document.createTextNode(list[0])
    const todoMainContainer = document.createElement('div')
    // const todoContainer = document.createElement('div')
    //Create 'add button' to add new to-do
    const AddTodoButton = document.createElement('button')
    const AddTodoButtonText = document.createTextNode('Añadir Tarea')
    AddTodoButton.appendChild(AddTodoButtonText)

    todoMainContainer.id = 'todo-main-co[ntainer'
    
    newList.appendChild(nameListH1)
    nameListH1.appendChild(textNameList)
    newList.appendChild(todoMainContainer)
    newList.append(AddTodoButton)
    document.body.append(newList)
    document.getElementById('creation-table').removeAttribute('style')

    AddTodoButton.addEventListener('click', addNewtodo)
    console.log(list)
    console.log(listsContainer)

    function addNewtodo() {
        const todoContainer = document.createElement('div')
        const completedBox = document.createElement('input')
        const todoText = document.createElement('input')

        completedBox.type = 'checkbox'
        todoText.type = 'text'
        todoText.setAttribute('placeholder', 'Doble click para editar')
        
        todoContainer.appendChild(completedBox)
        todoContainer.appendChild(todoText)
        todoMainContainer.append(todoContainer)

        // document.getElementById('todo-main-container').append(todoContainer)

        todo.completed = false
        list.push(todo)

        // if (lists[0] ) {
        //     lists.push(todo)
        // }
        console.log(todo)
        console.log(list)
        console.log(listsContainer)
    }
}

// array = [
//     array[
//         String,
//         Object{

//         },
//         Object{

//         },
//     ],
//     array[],
//     array[],
//     array[],
// ]