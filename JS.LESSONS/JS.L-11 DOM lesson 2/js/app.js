const content = document.querySelector('#content')
const input = document.querySelector('#text-input')
const button = document.querySelector('#save-btn')

const tasks = [
    // { id: Date.now(), text:'A plice work assigd A plice work assigd',  completed: false, },
    // { id: Date.now(), text:'A plice work assigd A plice work assigd',  completed: false, },
    // { id: Date.now(), text:'A plice work assigd A plice work assigd',  completed: false, },
    // { id: Date.now(), text:'A plice work assigd A plice work assigd',  completed: false, },
    // { id: Date.now(), text:'A plice work assigd A plice work assigd',  completed: false, }
]

function renderTasksFromArray () {
    const ul = document.createElement('ul')
    ul.className = 'flex flex-col gap-y-2 w-full rounded-md bg-gray-200 p-2 mt-4'

    tasks.map(task => {
        
        const li = document.createElement('li')
        const span = document.createElement('span')
        const button = document.createElement('button')
        const i = document.createElement('i')

        i.className = 'bx bx-trash'
        button.className = 'px-2 py-1 rounded-md shadow-md bg-red-500 text-white hover:bg-red-600 active:opacity-70 transition duration-200 linear'
        span.className = 'text-gray-700 font-semibold'
        li.className = 'p-2 bg-white rounded-md shadow-md flex justify-between items-center'

        span.innerHTML = task.text

        button.appendChild(i)
        li.appendChild(span)
        li.appendChild(button)
        ul.appendChild(li)
    })

    content.innerHTML= ''
    content.appendChild(ul)
}

renderTasksFromArray()