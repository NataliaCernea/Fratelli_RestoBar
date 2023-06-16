function scaleUp() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".scale-up");

    //Getting the element position on the page
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20; //The height at which the element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function scaleUpRight() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".scale-up-right");

    //Getting the element position on the page
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; //The height at which the element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function downUp() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".down-up");

    //Getting the element position on the page
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; //The height at which the element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", scaleUp);
window.addEventListener("scroll", scaleUpRight);
window.addEventListener("scroll", downUp);