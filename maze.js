var lose = false;

window.onload = ()=> {
    document.getElementById("boundary1").onmouseover = overBoundary1;
    document.getElementById("end").onmouseover = atEnd;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].onmouseover = overBoundary;
    }
    
};

function overBoundary1() {
    lose = true;
    let boundary = document.querySelector("div#maze div.boundary");
    boundary.classList.add("youlose");
}

function overBoundary() {
    lose = true;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].classList.add("youlose");
    } 
}

function atEnd() {
    if(lose) {

        document.getElementById("status").innerHTML = "You lost....";
    } else {
        
        document.getElementById("status").innerHTML = "You win!!! ";
    }
}