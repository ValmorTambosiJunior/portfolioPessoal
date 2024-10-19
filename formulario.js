document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contatoForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Evita o envio padrão do formulário

        // Captura os valores dos campos de texto
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        // Armazena os valores em localStorage para uso posterior
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("mensagem", mensagem);

        // Redireciona o usuário para a página que mostrará os dados
        window.location.href = "resposta.html";  // Redireciona para a página de resposta
    });
});
