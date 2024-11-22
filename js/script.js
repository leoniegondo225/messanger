// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.querySelector('.send');
    const messageInput = document.querySelector('.write-message');
    const messagesChat = document.querySelector('.messages-chat');

    // Fonction pour charger les messages depuis localStorage
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.forEach(message => {
            addMessageToChat(message.text, message.time);
        });
    }

    // Fonction pour envoyer un message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            addMessageToChat(messageText, timestamp);
            
            // Enregistrer le message dans localStorage
            saveMessageToLocalStorage(messageText, timestamp);
            messageInput.value = ''; // Effacer le champ de saisie
        }
    }

    // Fonction pour ajouter un message au chat
    function addMessageToChat(text, time) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message text-only';
        messageDiv.innerHTML = `<div class="response">
            <p class="text">${text}</p>
        </div>`;
        
        messagesChat.appendChild(messageDiv);
        messagesChat.scrollTop = messagesChat.scrollHeight; // Faire défiler vers le bas
    }

    // Fonction pour enregistrer un message dans localStorage
    function saveMessageToLocalStorage(text, time) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push({ text, time });
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    // Écouteur d'événements pour le clic sur le bouton d'envoi
    sendButton.addEventListener('click', sendMessage);

    // Écouteur d'événements pour la touche Entrée
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
            event.preventDefault(); // Empêcher l'envoi du formulaire
        }
    });

    // Charger les messages lors du chargement de la page
    loadMessages();
});


document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    let isNightMode = false; // Variable pour suivre le mode actuel

    themeToggle.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        isNightMode = !isNightMode; // Inverse l'état du mode

        // Bascule les classes
        document.body.classList.toggle('night', isNightMode);
        const elementsToToggle = document.querySelectorAll('.menu, .discussions, .chat, .footer-chat');
        elementsToToggle.forEach(el => el.classList.toggle('night', isNightMode));

        // Change l'icône en fonction du mode
        themeToggle.querySelector('i').className = isNightMode ? 'fa fa-moon' : 'fa fa-sun';
    });
});