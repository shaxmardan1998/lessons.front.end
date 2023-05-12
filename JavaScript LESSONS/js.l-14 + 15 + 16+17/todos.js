const todoForm = document.querySelector("#todo-form");
const tosoInput = document.querySelector("#todo-input");
const todoBtn = document.querySelector("#todo-btn");

const clientName = document.querySelector("#clientName")

clientName.innerHTML = localStorage.getItem('username')

const postsMenu = document.querySelector("#posts-menu")

const baseUrl = "https://todo.paydali.uz"

//fetchtodos from backend

function setToken() {
    return {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
            'Content-type': "Application/json"
        },
    }
}
// *********************************  FECHING POSTS

let posts = []

function fetchTodos() {
    fetch(`${baseUrl}/api/tasks`, setToken())
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

fetchTodos()

function fechingPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        renderPosts(data)
        posts = data
    })
    .catch(err => console.log(err))
}

fechingPosts()

function renderPosts(array) {
    postsMenu.innerHTML = ""
    array.forEach((item) => {
        postsMenu.innerHTML += `
            <li class="bg-indigo-200 shadow-md m-2 flex items-center justify-between text-black p-2 rounded-md">
                <div class="flex items-center gap-2">
                    <input class="cursor-pointer" type="checkbox">
                    ${item.id}.
                    ${item.title}
                </div>
                <div class="flex items-center gap-2">
                <button class="border-[2px] px-2">Update</button>
                    <button onclick="deletePosts(${item.id})" class="text-2xl text-red-500"><i class='bx bxs-trash'></i></button>
                </div>
            </li>`
    })
}

// *****************************************  DELETE POSTS

function deletePosts(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(data => {
        posts = posts.filter(item => item.id !== id)
        renderPosts(posts)
    })
    .catch(err => console.log(err))
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
})