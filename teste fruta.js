// Criação do array com os nomes das frutas
let frutas = [];

// Função para exibir os nomes das frutas
function mostrarFrutas() {
    const listaFrutas = document.getElementById("listaFrutas");
    listaFrutas.innerHTML = ""; // Limpa a lista atual
    frutas.forEach((fruta, index) => {
        const li = document.createElement("li");
        li.textContent = fruta;
        listaFrutas.appendChild(li);
    });
}

// Função para adicionar uma fruta à lista
function adicionarFruta() {
    const nomeFruta = document.getElementById("nomeFruta").value;
    if (nomeFruta) {
        frutas.push(nomeFruta);
        document.getElementById("nomeFruta").value = ""; // Limpa o campo de input
        mostrarFrutas();
    }
}

// Função para remover todas as frutas com um nome específico
function removerFruta() {
    const nomeFruta = document.getElementById("nomeFruta").value;
    if (nomeFruta) {
        frutas = frutas.filter(fruta => fruta.toLowerCase() !== nomeFruta.toLowerCase());
        document.getElementById("nomeFruta").value = ""; // Limpa o campo de input
        mostrarFrutas();
    }
}

// Chama a função mostrarFrutas quando a página carrega
document.addEventListener("DOMContentLoaded", mostrarFrutas);
