
window.onload = function(){
    const loginButton = document.getElementById("login-button");
    const loginBox = document.getElementById("login-box");
    loginButton.onclick = function(){
        loginBox.classList.toggle("hidden"); //modifica l'attributo (del loginbox div) class="", aggiungendo o togliendo "hidden", una classe css che è in global.css
};
}