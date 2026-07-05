function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "manggarai123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau Password salah!");
    }
}
