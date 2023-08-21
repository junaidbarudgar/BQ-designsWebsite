
// navbar toggle on smaller and medium screen

let mainlist = document.getElementById("mainListDiv")
let mediabutton = document.getElementById("mediaButton")

mediabutton.onclick = function () {
    mainlist.classList.toggle("show_list")
}


// navbar background color change on scroll

document.addEventListener("scroll", () => {
    let navbar = document.querySelector("nav")

    if (window.scrollY > 10) {
        navbar.classList.add("solid_nav")
    } else {
        navbar.classList.remove("solid_nav")
    }
})



// var about = document.getElementById("nav-about-us")

// about.onmouseover = function () {
//     about.style.backgroundColor = "red"
// }
// about.onmouseout = function () {
//     about.style.backgroundColor = ""
// }


// navbar onclick scroll to navlinks sections //

let links = document.querySelectorAll(".nav-links")

links.forEach((list) => {
    console.log(list)

    list.addEventListener("click", () => {
        let click_items = document.getElementById(list.getAttribute("data-links")) // unique id passed on every links 
        // console.log(click_items)
        click_items.scrollIntoView({ behavior: "smooth", block: "start" })

    })

})

var project = setInterval(project1, 10)
var clients = setInterval(clients1, 3.5)
var current = setInterval(current1, 30)
let counts1 = 1;
let counts2 = 1;
let counts3 = 1;

function project1() {
    counts1++;
    document.querySelector("#projects-stats").innerHTML = counts1 + "+";
    if (counts1 == 108) {
        clearInterval(project)
    }
}
function clients1() {
    counts2++;
    document.querySelector("#clients-stats").innerHTML = counts2 + "+";
    if (counts2 == 180) {
        clearInterval(clients)
    }
}
function current1() {
    counts3++;
    document.querySelector("#current-stats").innerHTML = counts3;
    if (counts3 == 18) {
        clearInterval(current)
    }
}


// form 
var contactform = document.getElementById("contactform")
function validate() {

    // inputs id
    let firstname = document.getElementById("fullname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let phonenumber = document.getElementById("phonenumber")

    // texts id
    let validname = document.getElementById("validname")
    let validname2 = document.getElementById("validname2")
    let validEmail = document.getElementById("validEmail")

    let validpassword = document.getElementById("validPassword")
    let passwordlength = document.getElementById("validPassword-length")
    let validphone = document.getElementById("validPhone")


    let radios = document.getElementsByClassName(".radios")


    var submit = document.getElementById("input3")

    var flag = false;
    if (firstname.value.trim() == "") {
        validname.style.display = "block"

        flag = false
    }
    else if (firstname.value.length < 2 || firstname.value.length < 10) {

        validname2.style.display = "block"

    }

    else {
        validname.style.display = "none"
        validname2.style.display = "none"
    }

    if (email.value.trim() == "") {
        validEmail.style.display = "block"

        flag = false;
    }
    else {
        validEmail.style.display = "none"
    }

    if (password.value.trim() == "") {
        validpassword.style.display = "block"

    } else if (password.value.length < 2 || password.value.length > 7) {

        passwordlength.style.display = "block"
    }
    else {
        validpassword.style.display = "none"
    }

    if (phonenumber.value.trim() == "") {
        validphone.style.display = "block"

    } else {
        validphone.style.display = "none"
    }



    return flag;

}


