window.onload = ()=> {
    document.getElementById("boundary1").onmouseover = overBoundary ;
};

function overBoundary() {
    let boundary = document.querySelector("div#maze div.boundary");
    boundary.classList.add("youlose");
}