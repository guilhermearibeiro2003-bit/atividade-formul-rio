
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
    } 
    else if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
    } 
    else {
        alert("Login realizado com sucesso!");
    }

const perfilForm = document.getElementById("perfilForm");

if (perfilForm) {
    perfilForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;

        const interesses = document.querySelectorAll(
            'input[name="interesses"]:checked'
        );

        if (nome.trim() === "") {
            alert("Informe seu nome!");
        }
        else if (interesses.length === 0) {
            alert("Selecione pelo menos um interesse!");
        }
        else {
            alert("Perfil salvo com sucesso!");
        }

    });
}


});
