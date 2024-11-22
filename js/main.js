import { MessageRecu } from "./Modules/MessageRecu.js";
import { Navbar } from "./Modules/Navbar.js";
import { Users } from "./Modules/Users.js";


let path = location.pathname

document.addEventListener("DOMContentLoaded", () => {

    //On affiche le navbar
    Navbar()
    MessageRecu()


    if (path === "/" || path === "/index.html") {

        let loginSubmit = document.getElementById("loginSubmit")
        let viewPassword = document.getElementById("viewPassword")
        let password = document.getElementById("password")

        let message = document.getElementById("message")
        let btnSubmit = document.getElementById("btnSubmit")
        let email = document.getElementById("email")

        //Afficher et masquer le mot de passe
        viewPassword.addEventListener("click", () => {
            if (password.type === "password") {
                password.type = "text"
                viewPassword.innerHTML = `<i class="fa fa-eye-slash"></i>`
            } else {
                password.type = "password"
                viewPassword.innerHTML = `<i class="fa fa-eye"></i>`
            }
        })

        const user = new Users()
        user.Connexion(loginSubmit, password, message, btnSubmit, email)

    } else if(path === "/inscription.html") {

        let InscriptionSubmit = document.getElementById("InscriptionSubmit")
        let viewPassword = document.getElementById("viewPassword")
        let btnModal = document.getElementById("btnModal")
        let password = document.getElementById("password")

        let message = document.getElementById("message")
        let btnSubmit = document.getElementById("btnSubmit")
        let nom = document.getElementById("nom")
        let prenom = document.getElementById("prenom")
        let email = document.getElementById("email")
    
        //Afficher et masquer le mot de passe
        viewPassword.addEventListener("click", () => {
            if (password.type === "password") {
                password.type = "text"
                viewPassword.innerHTML = `<i class="fa fa-eye-slash"></i>`
            } else {
                password.type = "password"
                viewPassword.innerHTML = `<i class="fa fa-eye"></i>`
            }
        })

        const user = new Users()
        user.Inscription(InscriptionSubmit, password, message, btnSubmit, email, nom, prenom, btnModal)
    
    } else if (path === "/chat.html"){
        let userID = localStorage.getItem("userID") || ""
        if (userID && userID !== "") {
            const user = new Users()
            user.UserInfo(userID)
            let info = document.getElementById("info")
            info.innerHTML = `
                <p>Bonjour, </p>
                <h1 class="text-primary fw-bold h3">${user.name}</h1>
                <h2>Selectionnez un ami pour discuter</h2>
            `

            //Afficher le profil ou les parametres
            let parametre = document.getElementById("parametre")
            parametre.addEventListener("click", () => {
                let profiluser = document.getElementById("profil-user")
                let discussion = document.getElementById("discussion")
                discussion.style.display = "none"
                profiluser.style.display = "block"

                let nomUser = document.getElementById("nomUser")
                let emailUser = document.getElementById("emailUser")
                let nom = document.getElementById("nom")
                let email = document.getElementById("email")

                nomUser.innerHTML = user.name
                nom.value = user.name
                emailUser.innerHTML = user.email
                email.value = user.email
            })

            //Mis à jour du profil
            user.Update(userID)

        } else {
            location.href = "/"
        }
        

    }
})
