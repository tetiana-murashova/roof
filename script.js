/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//FAQ

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("activ");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// phone


document.getElementById("phone").onmouseover = function() {mouseOver()};
document.getElementById("phone").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.querySelector(".fa-hover").classList.add("fa-spin");
}

function mouseOut() {
    document.querySelector(".fa-hover").classList.remove("fa-spin");
}
