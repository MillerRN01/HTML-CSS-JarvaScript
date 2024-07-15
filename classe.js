// Criação do array com os nomes dos colegas de classe
let colegasDeClasse = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"];

// Função para exibir os nomes dos colegas de classe
function mostrarNomes() {
    const listaColegas = document.getElementById("lista-colegas");
    listaColegas.innerHTML = ""; // Limpa a lista atual
    colegasDeClasse.forEach((colega, index) => {
        const li = document.createElement("li");
        li.textContent = colega;
        listaColegas.appendChild(li);
    });
}

// Função para adicionar um colega ao início da lista
function adicionarInicio() {
    const novoNome = prompt("Digite o nome do novo colega a ser adicionado ao início:");
    if (novoNome) {
        colegasDeClasse.unshift(novoNome);
        mostrarNomes();
    }
}

// Função para remover um colega do início da lista
function removerInicio() {
    colegasDeClasse.shift();
    mostrarNomes();
}

// Função para adicionar um colega ao fim da lista
function adicionarFim() {
    const novoNome = prompt("Digite o nome do novo colega a ser adicionado ao fim:");
    if (novoNome) {
        colegasDeClasse.push(novoNome);
        mostrarNomes();
    }
}

// Função para remover um colega do fim da lista
function removerFim() {
    colegasDeClasse.pop();
    mostrarNomes();
}

// Chama a função mostrarNomes quando a página carrega
document.addEventListener("DOMContentLoaded", mostrarNomes);
