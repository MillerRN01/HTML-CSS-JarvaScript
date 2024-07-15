// Criação do array com as notas dos alunos
let notas = [];

// Função para exibir as notas dos alunos
function mostrarNotas() {
    const listaNotas = document.getElementById("listaNotas");
    listaNotas.innerHTML = ""; // Limpa a lista atual
    notas.forEach(nota => {
        const li = document.createElement("li");
        li.textContent = nota;
        listaNotas.appendChild(li);
    });
}

// Função para adicionar uma nota à lista
function adicionarNota() {
    const nota = document.getElementById("nota").value;
    if (nota) {
        notas.push(parseFloat(nota));
        document.getElementById("nota").value = ""; // Limpa o campo de input
        mostrarNotas();
    }
}

// Função para calcular a média das notas
function calcularMedia() {
    if (notas.length === 0) {
        alert("Adicione algumas notas primeiro!");
        return;
    }
    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    const media = soma / notas.length;
    document.getElementById("mediaNotas").textContent = media.toFixed(2);
}

// Chama a função mostrarNotas quando a página carrega
document.addEventListener("DOMContentLoaded", mostrarNotas);
