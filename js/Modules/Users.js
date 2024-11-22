export class Users {
    constructor() {
        this.name = ""
        this.email = ""
    }

    //Methode inscription
    Inscription(InscriptionSubmit, password, message, btnSubmit, email, nom, prenom, btnModal) {
        InscriptionSubmit.addEventListener("submit", (e) => {
            e.preventDefault() 
    
            //On fait patienter l'utilisateur
            btnSubmit.classList.replace("btn-primary", "btn-warning")
            btnSubmit.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Traitement en cours...`
    
            message.innerHTML = "" //On vide d'abord le message d'erreur
            message.style.display = "none"
    
            //On test si les champs sont bien rempli
            let test = (nom.value !== "" && prenom.value !== "" && email.value !== "" && password.value !== "") ? true : false

            if (!test) {
                //On attentd 2ms avant d'afficher l'erreur
                setTimeout(() => {
                    message.innerHTML = "Veuillez remplir tous les champs"
                    message.style.display = "block"
                    btnSubmit.classList.replace("btn-warning", "btn-primary")
                    btnSubmit.innerHTML = "Créer un compte"
                }, 1000);
            } else {
                //On recupére les données dans le localStorage
                let table = JSON.parse(localStorage.getItem("utilisateurs")) || []
    
                //Générons les id des utilisateurs en utilisant la fonction Math.random()
                let id = Math.random().toString(30)
                //On stock les données en localStorage
                table.push({ 
                    id: id, 
                    nom: nom.value + " " + prenom.value, 
                    email: email.value, 
                    password: password.value 
                })
                localStorage.setItem("utilisateurs", JSON.stringify(table))
                setTimeout(() => {
                    btnModal.click() //Ouvre le modal de success
                    btnSubmit.classList.replace("btn-warning", "btn-primary")
                    btnSubmit.innerHTML = "Créer un compte"
                    InscriptionSubmit.reset() //La propriété reset permet de vider le formulaire
                }, 2000)
            }
        })
    }

    //Connexion
    Connexion(loginSubmit, password, message, btnSubmit, email) {
       
        //Exutons notre formulaire
        loginSubmit.addEventListener("submit", (e) => {
            e.preventDefault() // preventDefault() empêche que la page soit rafraichi lorsque on soumet le formulaire

            //On fait patienter l'utilisateur
            btnSubmit.classList.replace("btn-primary", "btn-warning")
            btnSubmit.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Traitement en cours...`

            message.innerHTML = "" //On vide d'abord le message d'erreur
            message.style.display = "none"

            //On test si les champs sont bien rempli
            let test = (email.value !== "" && password.value !== "") ? true : false

            if (!test) {
                //On attentd 2ms avant d'afficher l'erreur
                setTimeout(() => {
                    message.innerHTML = "Email et mot de passe requis"
                    message.style.display = "block"
                    btnSubmit.classList.replace("btn-warning", "btn-primary")
                    btnSubmit.innerHTML = "Se connecter"
                }, 1000);
            } else {
                //On recupére les données dans le localStorage
                let table = JSON.parse(localStorage.getItem("utilisateurs")) || []

                if (table && table.length > 0) {
                    //On test si les valeurs saisis correspondent à ce que nous avons dans la BD
                    let testUser = table.find(index => index.email === email.value && index.password === password.value)
                    if (testUser !== undefined) {
                        localStorage.setItem("userID", testUser.id) 
                        location.href = "/chat.html" //On redirige l'utilisateur vers la page profil.html lorsque la connexion est reussi
                    } else {
                        setTimeout(() => {
                            message.innerHTML = "Email ou mot passe incorrect"
                            message.style.display = "block"
                            btnSubmit.classList.replace("btn-warning", "btn-primary")
                            btnSubmit.innerHTML = "Se connecter"
                        }, 2000)
                    }
                } else {
                    //Le tableau est vide
                    setTimeout(() => {
                        message.innerHTML = "Ce compte n'existe pas"
                        message.style.display = "block"
                        btnSubmit.classList.replace("btn-warning", "btn-primary")
                        btnSubmit.innerHTML = "Se connecter"
                    }, 2000)
                }
            }
        })
    }

    //Affichage des infos users
    UserInfo(id) {
        let table = JSON.parse(localStorage.getItem("utilisateurs")) || []
        let info = table.find(index => index.id === id)
        if (info) {
            this.name = info.nom
            this.email = info.email
        }
    }

    //Mettre à jour le profil
    Update(id) {
        let table = JSON.parse(localStorage.getItem("utilisateurs")) || []
        let info = table.find(index => index.id === id)
        if (info) {
            let UpdateSubmit = document.getElementById("UpdateSubmit")
            UpdateSubmit.addEventListener('submit', (e) => {
                e.preventDefault()
                let nom = document.getElementById("nom").value
                let email = document.getElementById("email").value
                let btnSubmit = document.getElementById("btnSubmit")
                let message = document.getElementById("message")

                btnSubmit.classList.replace("btn-primary", "btn-warning")
                btnSubmit.innerHTML = `<i class="fa fa-spin fa-spinner"></i> Mis à jour en cours...`

                message.innerHTML = "" //On vide d'abord le message d'erreur
                message.style.display = "none"

                //On créé un tableau qui servira de mettre à jour notre profil
                let tableAjour = []
                
                //On parcoure le premier tableau qui contient tous les utilisateurs
                table.forEach(index => {
                    //On verifie si notre utilisateur existe dans ce tableau puis en met à jour le tableauAjour avec les nouvelle informations de l'utilisateur
                    if(index.id === id) {
                        tableAjour.push({
                            id,
                            nom,
                            email
                        })
                    } else {
                        tableAjour.push(index)
                    }
                });

                if (tableAjour.length > 0) localStorage.setItem("utilisateurs", JSON.stringify(tableAjour))
                
                setTimeout(() => {
                    this.name = nom
                    this.email = email
                    let parametre = document.getElementById("parametre")
                    parametre.click()
                    message.innerHTML = "Profil mis à jour"
                            message.style.display = "block"
                            btnSubmit.classList.replace("btn-warning", "btn-primary")
                            btnSubmit.innerHTML = "Mettre à jour"
                }, 1000)
            })
        }
    }
}