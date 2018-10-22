var lose = false;

window.onload = ()=> {
    document.getElementById("boundary1").onmouseover = overBoundary1;
    
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].onmouseover = overBoundary;
    }
    document.getElementById("end").onmouseover = atEnd;
    document.getElementById("start").onclick = restart;
    document.getElementById("maze").onmouseleave = cheatCheck;
};

function overBoundary1() {
    lose = true;
    let boundary = document.querySelector("div#maze div.boundary");
    boundary.classList.add("youlose");
    document.getElementById("status").innerHTML = "You lost....";
}

function overBoundary() {
    lose = true;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].classList.add("youlose");
    } 
    document.getElementById("status").innerHTML = "You lost....";
}

function atEnd() {
    if(lose) {

        return document.getElementById("status").innerHTML = "You lost....";
    } else {

        return document.getElementById("status").innerHTML = "You win!!! ";
    }
}

function restart() {
    lose = false;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].classList.remove("youlose");
    }
    document.getElementById("status").innerHTML = "Do your best to make it to the end";
}

function cheatCheck() {
    lose = true;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {

        boundaries[i].classList.add("youlose");
    }
    document.getElementById("status").innerHTML = "You are cheating, stay in the maze! Unless you're going back to the start, then that's fine.";
}



