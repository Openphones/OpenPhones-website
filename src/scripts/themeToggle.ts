const themeToggleButton = document.getElementById("themeToggle")

themeToggleButton?.addEventListener("click", themeToggle)

themeToggleButton!.style.display = "initial";
if (sessionStorage.getItem("theme") == "light") {
    document.body.classList.add("light");
} else if (sessionStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
}

function themeToggle() {
    if (document.body.classList.length == 0) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            sessionStorage.setItem("theme", "light");
            document.body.classList.add("light");
        } else {
            sessionStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        }
    } else if (document.body.classList.contains("dark")) {
        sessionStorage.setItem("theme", "light");
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    } else {
        sessionStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
}
