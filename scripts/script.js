let sliderDisplay = document.querySelector(".slider img");

let i = 0;

setInterval(() => {
    (i >= 4) ? i = 1 : i++;
    sliderDisplay.src = `./img/slider_${i}.png`;
}, 5000);

const userNameInput = document.querySelector("#user_name");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector("#login_button");
const passwordShowButton = document.querySelector("#password_show_button");

passwordShowButton.addEventListener("click", showPassword);

window.addEventListener("keyup", () => {
    if (userNameInput.value.length > 0 && passwordInput.value.length > 5) {
        enableLoginButton();
    } else {
        loginButton.disabled = true;
    }
    displayShowPasswordButton();
});

function enableLoginButton() {
    loginButton.disabled = false;
}

function showPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordShowButton.innerHTML = "Ocultar";
    } else {
        passwordInput.type = "password";
        passwordShowButton.innerHTML = "Mostrar";
    }
}

function displayShowPasswordButton() {
    if (passwordInput.value.length < 1) {
        passwordShowButton.style.display = "none";
        passwordInput.type = "password";
    } else {
        passwordShowButton.style.display = "block";
        passwordShowButton.innerHTML = "Mostrar";
    }
};