console.log("JS Connected");

function savePassword() {
    saveInfo("passwordInput", "Password");
}

function saveUsername() {
    saveInfo("usernameInput", "Username");
}

function saveNotes() {
    saveInfo("notesInput", "Notes");
}

function saveInfo(inputId, label) {
    var value = document.getElementById(inputId).value;

    
    if (value !== null) {
        var passwordsDiv = document.getElementById("passwords");
        passwordsDiv.innerHTML += `<p>${label}: ${value}</p>`;

        
        document.getElementById(inputId).value = "";
    }
}


async function getAllData() {
    try {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();

        var passwordsDiv = document.getElementById("passwords");
        if (passwordsDiv !== null) {
            passwordsDiv.innerHTML = '';
            data.passwords.forEach(password => {
                passwordsDiv.innerHTML += `<p>Password: ${password}</p>`;
            });
        }

        var usernamesDiv = document.getElementById("usernames");
        if (usernamesDiv !== null) {
            usernamesDiv.innerHTML = '';
            data.usernames.forEach(username => {
                usernamesDiv.innerHTML += `<p>Username: ${username}</p>`;
            });
        }

        var notesDiv = document.getElementById("notes");
        if (notesDiv !== null) {
            notesDiv.innerHTML = '';
            data.notes.forEach(note => {
                notesDiv.innerHTML += `<p>Note: ${note}</p>`;
            });
        }
    } catch (error) {
        console.error('Error in API request:', error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const passwordFormBtn = document.getElementById("passwordFormBtn");
    const usernameFormBtn = document.getElementById("usernameFormBtn");
    const notesFormBtn = document.getElementById("notesFormBtn");

    if (passwordFormBtn !== null) {
        passwordFormBtn.addEventListener("click", savePassword);
    }

    if (usernameFormBtn !== null) {
        usernameFormBtn.addEventListener("click", saveUsername);
    }

    if (notesFormBtn !== null) {
        notesFormBtn.addEventListener("click", saveNotes);
    }

    getAllData();
});