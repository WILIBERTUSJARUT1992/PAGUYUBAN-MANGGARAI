function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Login gagal!");
  }
}

// cek akses dashboard
function cekLogin() {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
  }
}

// logout
function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}