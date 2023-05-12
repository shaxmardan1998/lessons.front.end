const registerForm = document.querySelector("#register-form");
const registerPhone = document.querySelector("#registerPhone");
const registerPassword = document.querySelector("#registerPassword");
const registerName = document.querySelector("#registerName")

const loginForm = document.querySelector("#login-form")
const loginPhone = document.querySelector("#loginPhone")
const loginPassword = document.querySelector("#loginPassword")

const loginBtn = document.querySelector("#login-btn")
const registerBtn = document.querySelector("#register-btn")

const appContent = document.querySelector("#app")
const controllers = document.querySelector("#controllers")

const logoutBtn = document.querySelector("#logout")

function changeContentType(type) {
    if(type === "login") {
        registerForm.classList.add("hidden")
        loginForm.classList.remove("hidden")

        loginBtn.classList.add("bg-blue-500")
        loginBtn.classList.add("text-white")

        registerBtn.classList.remove("bg-blue-500")
        registerBtn.classList.remove("text-white")

        appContent.classList.add("hidden")

        controllers.classList.remove("hidden")

    } else if(type === "register")  {
        registerForm.classList.remove("hidden")
        loginForm.classList.add("hidden")

        loginBtn.classList.remove("bg-blue-500")
        loginBtn.classList.remove("text-white")

        registerBtn.classList.add("bg-blue-500")
        registerBtn.classList.add("text-white")
        appContent.classList.add("hidden")

        controllers.classList.remove("hidden")


    } else {
        registerForm.classList.add("hidden");
        loginForm.classList.add("hidden")
        appContent.classList.remove("hidden")
        controllers.classList.add("hidden")
    }
}

function login(e) {
    e.preventDefault()
    try {
        fetch("https://todo.paydali.uz/api/login", {
            method: "POST",
            headers: {
                "content-type": "Application/json",
            },
            body:JSON.stringify({
                phone: loginPhone.value,
                password: loginPassword.value,
            }),
        })
        .then(res => res.json())
        .then(data => {
            if(data.code === 200) {
                localStorage.setItem('token', data.payload.token)
                localStorage.setItem('username', data.payload.name)
                localStorage.setItem('phone', data.payload.phone)
                changeContentType('app')
            }
        })
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

function register(e) {
    e.preventDefault()
    try {
        fetch("https://todo.paydali.uz/api/register", {
            method: "POST",
            headers: {
                'content-type': 'Application/json'
            },
            body:JSON.stringify({
                name: registerName.value,
                phone: registerPhone.value,
                password: registerPassword.value
            }),
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error);
    }
}

function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("phone")
    changeContentType('login')
}



if(localStorage.getItem("token")) {
    changeContentType('app')
} else {
    changeContentType('login')
}

loginBtn.addEventListener("click", e => {
    changeContentType('login')
})
registerBtn.addEventListener("click", e => {
    changeContentType("register")
})

logoutBtn.addEventListener("click", () => {
    logout()
})

registerForm.addEventListener('submit', register)
loginForm.addEventListener('submit', login)