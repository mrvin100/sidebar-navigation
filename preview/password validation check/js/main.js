// Custom js File Build by jeanDoe

// declaration of variables

var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');

// When user click on password field, fetch the box message

myInput.onfocus = function(){
    document.getElementById("message").style.display = 'block';
}

// When user click out of field password, hide box message

myInput.onblur = function(){
    document.getElementById('message').style.display = 'none';
}

// When user starts complete something in password field

myInput.onkeyup = function(){
    // valid lowercase letter
    var lowerCaseletters = /[a-z]/g

    if(myInput.value.match(lowerCaseletters)){
        // if password contain lowercase letter remove the class 'invalid and add valid'
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        // else remove 'valid' class and add 'inavlid' class
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    // valid uppercase letter
    var upperCaseletters = /[A-Z]/g

    if(myInput.value.match(upperCaseletters)){
        // if password contain uppercase letter remove the class 'invalid and add valid'
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else{
        // else remove 'valid' class and add 'inavlid' class
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    // valid numbers
    var numbers = /[0-9]/g
    
    if(myInput.value.match(numbers)){
        // if password contain number remove the class 'invalid and add valid'
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        // else remove 'valid' class and add 'inavlid' class
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    // valid length

    if(myInput.value.length >= 8){
        // if password contain is longer than 8  characters remove the class 'invalid and add valid'
        length.classList.remove('invalid');
        length.classList.add('valid');
    }else{
        // else remove 'valid' class and add 'inavlid' class
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
}
