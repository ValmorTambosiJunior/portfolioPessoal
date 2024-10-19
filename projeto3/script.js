document.getElementById("adicionar").addEventListener("click", function() {
    const itemText = document.getElementById("item").value;
    
    if (itemText === "") {
        alert("Digite um item para adicionar à lista.");
        return;
    }

    const lista = document.getElementById("lista");

    const li = document.createElement("li");
    li.textContent = itemText;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", function() {
        lista.removeChild(li);
    });

    li.appendChild(botaoRemover);
    lista.appendChild(li);

    document.getElementById("item").value = "";
    document.getElementById("item").focus();
});
