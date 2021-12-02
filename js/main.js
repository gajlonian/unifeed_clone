var nav = document.querySelector(".nav")
var btnNav = nav.querySelector(".nav__menu__btn")
var navbar = nav.querySelector(".nav__navbar")

btnNav.addEventListener("click", function() {
	if(navbar.classList.contains("hidden")) {
		navbar.classList.remove("hidden")
	} else {
		navbar.classList.add("hidden")
	}
})
