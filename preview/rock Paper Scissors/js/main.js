// Custom js File Build by jeanDoe

// declaration of variables

const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let resultat
let choixOrdinateur

// Event click on button

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e)=>{
    // recup Id of clicked button
    // alert(e.target.id);
    choixUtilisateur = e.target.id;
    contenantChoixUtilisateur.innerHTML = `<img src="img/${choixUtilisateur}.png" alt="image">`;
    generer_choix_ordinateur()
    verification()
}))


// Function to generate choice of computer
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) + 1 //Generte a number between 1 and 3
    // alert(random)
    if(random === 1){ //if random = 1 the computer choisr is rock:`pierre`
        choixOrdinateur = "pierre"
    }
    if(random === 1){ //if random = 1 the computer choisr is rock:`papier`
        choixOrdinateur = "papier"
    }
    if(random === 3){ //if random = 1 the computer choisr is rock:`ciseaux`
        choixOrdinateur = "ciseaux"
    }
    // We add corespondant image to choice
    contenantChoixOrdinateur.innerHTML = `<img src="img/${choixOrdinateur}.png" alt="image">`
}


// Function to verify if user have winned

function verification(){
    if(choixUtilisateur == choixUtilisateur){
        resultat = "Égalité !";
    }

    // Cases where Gamer lose
    
    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        resultat = "Perdu !";
    }

    // Cases where Gamer win

    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
        resultat = "Gagné !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
        resultat = "Gagné !";
    }
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "Gagné !";
    }
    contenantResultat.innerHTML = resultat;
}