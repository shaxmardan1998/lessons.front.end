'use strict' 
const myInput = document.querySelector('#text-input');
const myBtn = document.querySelector('#save-btn');
const content = document.querySelector('#content');




let tasks = [
    // {id: Date.now(), text: 'Lorem ipsum dolor sit amet 1', completed: false, },
    // {id: Date.now(), text: 'Lorem ipsum dolor sit amet 2', completed: false, },
    // {id: Date.now(), text: 'Lorem ipsum dolor sit amet 3', completed: false, },
    // {id: Date.now(), text: 'Lorem ipsum dolor sit amet 4', completed: false, },
]
//
function renderTasks() {
    
if (tasks.length !== 0) {
    const ul = document.createElement('ul');
    ul.className = 'menu'

        tasks.map(task => {
            const li = document.createElement('li')
            const span = document.createElement('span')
            const button = document.createElement('button')
            const i = document.createElement('i')

            i.className = 'bx bx-trash'
            button.className = 'btn'
            span.className = 'txt'
            li.className =  'menu-li' 

            span.innerHTML = task.text
            
            button.addEventListener('click', () => {
                deleteTask(task.id)
            })
            
            li.addEventListener('click', () => {
                completeToggler(task.id);
            })

            button.appendChild(i)
            button.appendChild(i)
            li.appendChild(span)
            li.appendChild(button)
            ul.appendChild(li) 
        })

        content.innerHTML = ''
        content.appendChild(ul)
    }  else {
        content.innerHTML = `<h1>ESH ZAT JAZIMADI</h1>`
}
}
 
function addNewTask() {
    if(myInput.value) {
        const  newObjectForNewTask = {
            id: Date.now(),
            text: myInput.value,
            completed: false,
        } 

        tasks.unshift(newObjectForNewTask)
        renderTasks()
        myInput.value = "";
    } else {
        alert ("❌❌❌")
    }
}

function deleteTask (id) {
    tasks = tasks.filter(singleTask => singleTask.id !== id)
    renderTasks()
}

function completeToggler (id) {
    tasks = tasks.map(item => {
        if (item.id === id) {
            return {...item, completed: !item.completed}
        } else {
            return item
        }
    })
renderTasks()
// completeToggler() 
}

myBtn.addEventListener('click', addNewTask)
renderTasks()