// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    // Verificar se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nomeAmigo);
        
        // Limpa o campo de entrada
        document.getElementById("amigo").value = "";

        // Atualiza a lista de amigos na página
        exibirAmigos();
    }
}

// Função para exibir a lista de amigos na tela
function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de adicionar novos amigos
    lista.innerHTML = "";

    // Adiciona cada amigo como um item <li> na lista
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um amigo.");
        return;
    }

    // Sorteia um amigo aleatório
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado na tela
    document.getElementById("resultado").textContent = `O amigo secreto é: ${amigoSorteado}`;
}
