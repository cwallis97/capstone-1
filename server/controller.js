function saveInfo(inputId, label) {
    
    var value = document.getElementById(inputId).value;

    
    saveData(label.toLowerCase() + 's', value);

    
    var passwordsDiv = document.getElementById("passwords");
    passwordsDiv.innerHTML += `<p>${label}: ${value}</p>`;

   
    document.getElementById(inputId).value = "";
}