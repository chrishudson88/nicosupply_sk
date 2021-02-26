let currentLocation = window.location.pathname.split("/").pop().split("-").shift().split(".").shift() || "home";
if (currentLocation === "index") {
    currentLocation = "home";
}

const activeNavLink = Array.from(
    document.querySelectorAll(".nav-link")
).find(element => element.innerHTML.split(" ").shift().toLowerCase() === currentLocation.toLowerCase());

if (activeNavLink) {
    activeNavLink.classList.add("active");
    activeNavLink.setAttribute("aria-current", "page");
}