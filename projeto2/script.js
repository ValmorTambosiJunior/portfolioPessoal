document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores inseridos pelo usuário
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Exibe a receita salva
    document.getElementById('output-name').textContent = "Nome da Receita: " + recipeName;
    document.getElementById('output-ingredients').textContent = "Ingredientes: " + ingredients;
    document.getElementById('output-instructions').textContent = "Modo de Preparo: " + instructions;

    document.getElementById('recipe-output').style.display = 'block';

    // Limpa o formulário
    document.getElementById('recipe-form').reset();
});
