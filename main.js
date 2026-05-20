
window.onload = function(){                                         //questa funzione viene chiamata dopo che la pagina html ha finito di caricare
    const loginButton = document.getElementById("login-button");
    const loginBox = document.getElementById("login-box");          //associa il nome loginBox all'elemento html con id "login-box"
    loginButton.onclick = function(){                               //modifica il bottone in modo che chiami questa funzione (senza nome e qui definita) quando cliccato
        loginBox.classList.toggle("hidden");                        //modifica l'attributo (del loginbox div) class="", aggiungendo o togliendo "hidden", una classe css che è in global.css
};
}