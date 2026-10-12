const formulario = document.getElementById("form-contato"); // Seleciona o formulário de contato pelo seu ID
const campoNome = document.getElementById("nome"); // Campo de entrada para o nome do usuário
const campoEmail = document.getElementById("email"); // Campo de entrada para o email do usuário
const erroNome = document.getElementById("erro-nome"); // Elementos de erro que serão exibidos caso os campos não sejam válidos
const erroEmail = document.getElementById("erro-email"); // Elementos de erro que serão exibidos caso os campos não sejam válidos
const botaoEnviar = document.getElementById("botao-enviar"); // Botão de envio do formulário
const mensagemSucesso = document.getElementById("mensagem-sucesso"); // Mensagem de sucesso que será exibida após o envio do formulário

function nomeEhValido() {

    return campoNome.value.trim().length >= 3; // Verifica se o nome tem pelo menos 3 caracteres, desconsiderando espaços em branco no início e no fim
}

const molde = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function emailEhValido() {
    return molde.test(campoEmail.value.trim());  // Verifica se o email corresponde ao padrão definido pelo molde
}

function atualizarEstadoBotao() { // Função para atualizar o estado do botão de envio
    const tudocerto = nomeEhValido() && emailEhValido();
    botaoEnviar.disabled = !tudocerto; // Habilita o botão de envio apenas se ambos os campos forem válidos
}

campoNome.addEventListener("input", function () { // Adiciona um ouvinte de evento para o campo de nome, que será acionado sempre que o usuário digitar algo    

    if (campoNome.value.trim() !== "" && !nomeEhValido()) { // Verifica se o campo de nome não está vazio e se o nome não é válido

        erroNome.textContent = "O nome precisa ter pelo menos 3 letras.";
    } else {
        erroNome.textContent = "";  // Limpa a mensagem de erro se o nome for válido ou se o campo estiver vazio
    }
    atualizarEstadoBotao();
});
campoEmail.addEventListener("input", function () {
    if (campoEmail.value.trim() !== "" && !emailEhValido()) {
        erroEmail.textContent = "Digite um e-mail válido (ex.: nome@email.com).";
    } else {
        erroEmail.textContent = ""; // Limpa a mensagem de erro se o email for válido ou se o campo estiver vazio
    }
    atualizarEstadoBotao();
});
formulario.addEventListener("submit", function (evento) { //    Adiciona um ouvinte de evento para o envio do formulário

    evento.preventDefault();


    if (!nomeEhValido() || !emailEhValido()) { // Verifica novamente se os campos são válidos antes de enviar o formulário
        return;
    }

    mensagemSucesso.textContent =
        "Obrigado, " + campoNome.value.trim() + "! Sua mensagem foi enviada com sucesso.";

    formulario.reset();
    botaoEnviar.disabled = true; // Desabilita o botão de envio após o envio do formulário
});