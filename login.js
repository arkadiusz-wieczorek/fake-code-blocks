document.querySelector(".btn-login").addEventListener("click", login);

document
    .querySelector("input[type=text]")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            login();
        }
    });

document
    .querySelector("input[type=password]")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            login();
        }
    });

function login() {
    const login = document.querySelector("input[type=text]");
    const password = document.querySelector("input[type=password]");

    if (login.value === "admin" && password.value === "admin1") {
        document.location.replace("blog.html");
    } else {
        login.value = "";
        password.value = "";
        login.focus();
        alert("Incorrect login or password");
    }
}
