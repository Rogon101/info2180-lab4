window.onload = ()=> {
    document.getElementById("boundary1").onmouseover = overBoundary1;
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary1() {
    let boundary = document.querySelector("div#maze div.boundary");
    boundary.classList.add("youlose");
}

function overBoundary() {
    let boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}