document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Simulando o envio da mensagem
    document.getElementById("mensagemSucesso").style.display = "block";

    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
});
