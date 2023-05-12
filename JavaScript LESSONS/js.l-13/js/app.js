'use sctict'

const menu = document.querySelector("#menu")
const form = document.querySelector("#post-form")
const input = document.querySelector("#input")

let posts = [] 
let updated = null

function fetchingPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        renderPosts(data)
        posts = data
    })
    .catch(err => console.log(err))
}
fetchingPosts()

function renderPosts(array) {
    menu.innerHTML = ""
    array.forEach(item => {
        menu.innerHTML += `
        <li class="px-6 py-2 mb-2 shadow-md rounded-md bg-white flex justify-between items-center gap-x-8">
        <h3>
        <b>${item.id}</b>${item.title}
        </h3>
        <div class="flex gap-x-2">
            <button onclick="getValuesForUpdate(${item.id})" class="px-4 py-4 bg-indigo-500 rounded-md text-white ">Update</button>
            <button onclick="deletePost(${item.id})" class="px-4 py-4 bg-red-500 rounded-md text-white ">Delete</button>
        </div>
        </li>`
        
    })
}

//**************************************** method DELETE
function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(data => {
        posts = posts.filter(item => item.id !== id)
        renderPosts(posts)
    })
    .catch(err => console.log(err))
    .finally(() => console.log("request complated"))
}



// // *************************************** METHOD POST

// function createNewPost () {
//     console.log(input.value);
//     fetch('https://jsonplaceholder.typicode.com/users',{
//         method: "POST",
//         body: JSON.stringify({
//             name: input.value,
//             body: "",
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json'
//         },
//     })
//     .then(res => res.json())
//     .then(data => {
//         posts.push(data)
//         renderPosts(posts)
//         input.value = ""
//     })
//     .catch(err => console.log(err))
// }

// // **************************************  GET VALUES FOR UPDATE ====== PAATCH/PUT

// function getValuesForUpdate(id) {
//     const currentPost = posts.find(item => item.id === id)
//     input.value = currentPost.name
//     updatedPostID = currentPost.id
//     console.log(id)
// }

// function updatePost() {
//     fetch(`https://jsonplaceholder.typicode.com/users/${updatedPostID}`, {
//         method: "PUT",
//         body: JSON.stringify({
//             title:input.value,
//         }),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         const newArray = posts.map(item => {
//             if(item.id === data.id) {
//                 return {
//                     ...item,
//                     title: data.name
//                 }
//             } else {
//                 return item
//             }
//         })
//         renderPosts(newArray)
//     })
//     .catch(err => console.log(err))
// }




// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     if(updatedPostID) {
//         updatePost()
//     }  else {
//         createNewPost()
//     }
// })
