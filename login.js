
let logined;
let email = document.getElementById('email');
let password = document.getElementById('password');
console.log(password.value);
let users = [];
let firstName;
let lastName;

let current_user = {
    email : "email",
    password : "password",
    userName : "username"
}

logins();


// email.value.addEventListener('onchange', (ev)=>{
//     let em = email.value
// })
// password.value.addEventListener('onchange',(ev)=>{
//     let pass = password.value
// })

async function logins(){
    try {
        if(! localStorage.getItem("count")){
            localStorage.setItem("count", 0)
        }
        class User{
            constructor(email, password, id, userName){
                this.email = email;
                this.password = password;
                this.id = id;
                this.userName = userName;
            }
        }
        users.length = 0
        const response = await fetch('https://fakestoreapi.com/users')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        data.forEach(user => {
            let usered = new User(user.email, user.password, user.id, user.userName)
            console.log(usered);
            localStorage.setItem(`user${usered.id}`, JSON.stringify(usered))
        });

        console.log(users);
    } catch (error) {
        console.error("Error Fetching Users")
    }
}


// console.log(logined)

document.addEventListener('DOMContentLoaded', ()=>{
    logined = document.getElementById('login');
    logined.addEventListener('click', (ev)=>{
        let pass = password.innerText;
        let emm = email.value;
        console.log(pass);
        for (let i = 0; i < localStorage.length; i++) {
            let used = JSON.parse(localStorage.getItem(`user${i}`))
            users.push(used)
            console.log(used);
        }
        console.log(users);
        users.filter((user) =>{
            if(user.email === emm && pass === password){
                current_user.password = user.password
                current_user.email = user.email
                if (localStorage.getItem("current")) {
                    localStorage.removeItem("current")
                }else{
                    localStorage.setItem("current", current_user)
                }
            }
        })
    ev.preventDefault})
})

