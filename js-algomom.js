document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("alertButton");
    if (button) {
        button.addEventListener("click", function () {
            alert("Welcome to Algomon!");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            fetch(this.href)
                .then(response => response.text())
                .then(html => {
                    document.getElementById("content").innerHTML = html;
                    history.pushState(null, "", this.href); // Atualiza a URL
                })
                .catch(error => console.error("Error loading page:", error));
        });
    });
});
