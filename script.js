function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // USERNAME & PASSWORD
    const correctUsername = "admin";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("homePage").classList.remove("hidden");
    } else {
        alert("Username atau Password salah!");
    }
}

function logout() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("logoutPage").classList.remove("hidden");
}

function backToLogin() {
    document.getElementById("logoutPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}
