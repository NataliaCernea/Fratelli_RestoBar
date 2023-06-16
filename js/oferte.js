function revealActivitiesIMG() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".img");

    //Getting the element position on the page
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0; //The height at which the element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function revealActivitiesP() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".p");

    //Getting the element position on the page
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0; //The height at which the element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}


window.addEventListener("scroll", revealActivitiesIMG);
window.addEventListener("scroll", revealActivitiesP);