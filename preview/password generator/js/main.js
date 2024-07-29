// Custom js File Build by jeanDoe

// declaration of variables

var copyBtn = document.getElementById('copy');

function getPassword() {
    // alert('cliked');
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength =  16;
    var password = "";

    // Generate password
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1)

        // fetch password
        document.getElementById('password').value = password;

        // Change button style

        copyBtn.style.background="#6c757d";
        copyBtn.style.color="#fff";

    }
}


// Copy password

function copyMdp(){
    var inputPassword = document.getElementById('password');

    // Verify pasword length

    if(inputPassword.value.length == 16){
        // copy password
        inputPassword.select();
        document.execCommand("copy");

        // Change copy button style
        copyBtn.style.background = "transparent";
        copyBtn.style.color = "#000";

        // fetch an alert box
        alert('Copie du mot de passe réussie!');
    }else{
        alert('veuillez générer un mot de passe!');
    }
}