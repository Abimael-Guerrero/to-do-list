const createListButton = document.getElementById('create-list').addEventListener('click', createList)

const createNameListButton = document.getElementById('button-set-name-list').addEventListener('click', createNameList)

//Main array to contain every list 
const listsContainer = []


// Opens 'Create list' window
function createList() {
    document.getElementById('creation-table').setAttribute('style', 'visibility: visible;')
} 

// Close window and creates new list of todos
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
    
    // Create 'add button' to add new to-do
    const addTodoButton = document.createElement('button')
    addTodoButton.textContent = 'Add To-Do'
    
    // Create 'delete todo' to delte to-dos
    const deleteTodoButton = document.createElement('button')
    deleteTodoButton.textContent = 'Delete To-do'

    newList.appendChild(nameListH1)
    nameListH1.appendChild(textNameList)
    newList.appendChild(todoMainContainer)
    newList.append(addTodoButton)
    newList.appendChild(deleteTodoButton)
    document.body.append(newList)

    // console.log(list)
    // console.log(listsContainer)
    
    let increse = 0

    // Button add to-do funcition
    addTodoButton.addEventListener('click', addNewtodo)

    function addNewtodo() {
        const todoContainer = document.createElement('div')
        const completedBox = document.createElement('input')
        const todoText = document.createElement('input')

        completedBox.type = 'checkbox'
        todoText.type = 'text'
        todoText.setAttribute('placeholder', 'Escribe todo')
        // todoText.setAttribute('id', 'todo-1')
        
        todoContainer.append(completedBox)
        todoContainer.append(todoText)
        todoMainContainer.append(todoContainer)

        increse++
        console.log(increse)

        list.push(todo)
        todo.completed = false
        todo.todoText = ''
        // todo.id = increse
        list[1].id = increse
        
        // Adds text property todo text 
        todoText.addEventListener('focusout', function () {
            listsContainer.find(function(e, i, a) { 
                if (e[0] === nameList) {
                    console.log('funciona')
                    // console.log(todo)
                    // console.log(list)
                    // console.log(e[1].todoText.value)
                    // todo.todoText = todoText.value
                } 
            })
        })
        
        console.log(listsContainer)
    }
    
    // Close window 
    document.getElementById('creation-table').removeAttribute('style')
}