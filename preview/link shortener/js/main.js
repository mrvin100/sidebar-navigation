// Custom js File Build by jeanDoe

// declaration of variables

let error = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');

function shortLinkFunct(){
    // alert('test');
    // Verification of input
    if(!longLink.value == ""){
        // empty error
        error.innerHTML = "";

        // connection API
        let url = `https://api.shrtco.de/v2/shorten?url=${longLink.value}`;
        fetch(url)
        .then(reponse => reponse.json())
        // .then(data => console.log(data));
        .then(data => short.innerHTML = data.result.short_link)

        // fecth result
        short.style.display = "block";

        if(short.innerHTML.length == 0){
            short.innerHTML = "Lien invalide!";
        }
    }else{
        // error
        error.innerHTML = "Veuillez remplir ce champ!";

        // hide result
        short.style.display = "none";
    }
}