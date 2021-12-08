var nav = document.querySelector(".nav")
var btnNav = nav.querySelector(".nav__menu__btn")
var navbar = nav.querySelector(".nav__navbar")

btnNav.addEventListener("click", function() {
	navbar.classList.toggle("hidden")
})
