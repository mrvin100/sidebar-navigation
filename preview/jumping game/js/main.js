// Custom js File Build by jeanDoe

// declaration of variables

var perso = document.querySelector('.perso');
var obstacles = document.querySelector('.obstacles');

function sauter(){
    // alert('you clicked on jump button');
    if(perso.classList != 'animation'){
        perso.classList.add('animation');
    }
    setTimeout(function(){
        perso.classList.remove('animation');
    }, 500)
}


// Verify if obstacle touch jumper

var verification = setInterval(function() {
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue('top'));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue('left'));

    if(obstacleLeft < 20 && obstacleLeft > 0 && persoTop >= 130){
        obstacles.style.animation = "none";
        alert('Game over!');
    }
}, 1);

