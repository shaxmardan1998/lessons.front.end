const tbody = document.getElementById('tbody')

const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const addressInput = document.getElementById("address")
const button = document.getElementById("btn")
const form = document.querySelector("form")

let users = [
    // {id: 1, name: "Shaka", age:24, address:"Kegeyli"},
    // {id: 1, name: "Shaka", age:24, address:"Kegeyli"},
    // {id: 1, name: "Shaka", age:24, address:"Kegeyli"}
]

function renderUsersFromArray() {
    tbody.innerHTML = ''
    users.map(item => {
        tbody.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.address}</td>
        <tr>`
    })
}

function clearInputs() {
    nameInput.value = ""
    ageInput.value = ""
    address.value = ""
}

function addNewUser(e) {
    e.preventDefault()
    const newUserObject = {
        id: users.length + 1,
        name: nameInput.value,
        age: ageInput.value,
        address: addressInput.value,
    }
    users = [...users, newUserObject]
    clearInputs()
    renderUsersFromArray()
}
form.addEventListener('submit', addNewUser)
renderUsersFromArray()