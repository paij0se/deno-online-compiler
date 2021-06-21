"use strict";
// Wait for document to load
document.addEventListener("DOMContentLoaded", function (event) {
    if (!localStorage.getItem("bb-theme")) {
        localStorage.setItem("bb-theme", "light");
    }
    document.documentElement.setAttribute("data-theme", localStorage.getItem("bb-theme"));
    // Get our button switcher
    var themeSwitcher = document.getElementById("theme-switcher");
    // When our button gets clicked
    themeSwitcher.onclick = function () {
        // Get the current selected theme, on the first run
        // it should be `light`
        var currentTheme = localStorage.getItem("bb-theme");
        // Switch between `dark` and `light`
        if (currentTheme == "light") {
            localStorage.setItem("bb-theme", "dark");
        }
        else if (currentTheme == "dark") {
            localStorage.setItem("bb-theme", "light");
        }
        document.documentElement.setAttribute("data-theme", localStorage.getItem("bb-theme"));
    };
});
