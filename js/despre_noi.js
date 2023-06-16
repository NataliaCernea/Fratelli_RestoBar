//"Despre noi" animations

function revealMembers() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".reveal-members");

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

function revealGoalLeft() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".reveal-goal-left");

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

function revealGoalRight() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".reveal-goal-right");

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

function revealForm() {
    //Grabbing the inactive element ".reveal"
    var reveals = document.querySelectorAll(".reveal-form");

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

window.addEventListener("scroll", revealMembers);
window.addEventListener("scroll", revealGoalLeft);
window.addEventListener("scroll", revealGoalRight);
window.addEventListener("scroll", revealForm);


//Send email "Contacte"

emailjs.init("HxOjBfRZRSt08FV89");

function sendEmail() {

    if (document.getElementById("form").checkValidity() == false) {
        document.getElementById("form").reportValidity();
        return;
    }

    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        body: document.getElementById("body").value
    };

    emailjs.send("service_s5madv7", "template_733m0ik", params)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("form").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}



