// Função para validar o formulário de contato
function validarFormulario(event) {
    event.preventDefault(); // Previne o envio do formulário caso algum campo esteja errado

    // Obtendo os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verificando se os campos estão vazios
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return; // Se algum campo estiver vazio, não envia o formulário
    }

    // Se todos os campos forem preenchidos corretamente
    mostrarMensagemSucesso();
}

// Função para mostrar uma mensagem de sucesso
function mostrarMensagemSucesso() {
    const formulario = document.querySelector('form');
    const sucessoDiv = document.createElement('div');
    sucessoDiv.classList.add('mensagem-sucesso');
    sucessoDiv.innerHTML = 'Mensagem enviada com sucesso!';

    // Adicionando a mensagem de sucesso abaixo do formulário
    formulario.appendChild(sucessoDiv);

    // Limpando os campos após o envio
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}

// Função para inicializar a validação ao submeter o formulário
function init() {
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', validarFormulario);
}

// Chamando a função init para garantir que a validação seja ativada
document.addEventListener('DOMContentLoaded', init);
