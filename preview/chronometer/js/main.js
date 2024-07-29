// Custom js File Build by jeanDoe

// declaration of variables

var sp, btn_start, btn_stop, t, ms, s, mn, h;

// founction to reset page when it's load
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

// Build Counter

function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1;
        s+=1
    }
    if(s == 60){
        s = 0;
        mn+=1
    }
    if(mn == 60){
        mn = 0;
        h+=1;
    }
    // Insertion of values into span
    // [0] select the first pan
    // [1]          ...second pan
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}

// Buil function for start button

function start(){
    // this following line explain execution of function update_chrono
    // repeat it evry 100ms
    t =setInterval(update_chrono,100);
    btn_start.disabled = true;
}

// stop the chrono

function stop(){
    clearInterval(t); // Delete t interval that we have created 
    btn_start.disabled = false;
}

// Reset the controls values

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    // insert these new values in span
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}