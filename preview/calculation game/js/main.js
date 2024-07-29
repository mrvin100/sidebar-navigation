// Custom js File Build by jeanDoe

// declaration of variables

var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var message = document.querySelector('.message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur = 0;

// Random number on starting Game

random1 = Math.random()*11 << 0; //for Generate number between 0 & 11
random2 = Math.random()*11 << 0; //for Generate number between 0 & 11

console.log(random1);
console.log(random2);

// Insert randomly number to variables nb1 & nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

// verification function 

function verifier(){
    // alert('that\'s works');

    // Get result enter by player

    var res = document.querySelector('.res').value;
    // alert(res);
    if(random1 + random2 == res){
        message.style.background = 'green';
        message.innerHTML = 'Correct.';

        // Create another random number
        random1 = Math.random()*11 << 0; //for Generate number between 0 & 11
        random2 = Math.random()*11 << 0; //for Generate number between 0 & 11

        console.log(random1);
        console.log(random2);

        // Insert randomly number to variables nb1 & nb2
        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        
        compteur = compteur + 1

    }else{
        message.style.background = 'red';
        message.innerHTML = 'Vous avez perdu.';

        section.innerHTML = ' ';
        score.innerHTML = `<span>${compteur}</span><br/> Score`;
        link.style.display = 'block';
    }
}
