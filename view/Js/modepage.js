document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const themeLink = document.getElementById("theme-link");
    const icon1 = document.getElementById("modepage");
    const icon2 = document.getElementById("modepage2");

    if (savedTheme) {
        themeLink.setAttribute("href", savedTheme);
        if (savedTheme === "lightmode.css") {
            icon1.style.display = "none";
            icon2.style.display = "block";
        } else {
            icon1.style.display = "block";
            icon2.style.display = "none";
        }

        
    }
    
});

function togglemode() {
    const themeLink = document.getElementById("theme-link");
    const darkTheme = "darkmode.css";
    const lightTheme = "lightmode.css";
    const icon1 = document.getElementById("modepage");
    const icon2 = document.getElementById("modepage2");

    if (themeLink.getAttribute("href") === darkTheme) {
        themeLink.setAttribute("href", lightTheme);
        localStorage.setItem("theme", lightTheme);
        icon1.style.display = "none";
        icon2.style.display = "block";
    } else {
        themeLink.setAttribute("href", darkTheme);
        localStorage.setItem("theme", darkTheme);
        icon1.style.display = "block";
        icon2.style.display = "none";
    }  
    }