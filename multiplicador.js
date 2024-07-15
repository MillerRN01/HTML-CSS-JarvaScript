// Função para exibir os números pares
function mostrarPares(pares) {
  const listaPares = document.getElementById("listaPares");
  listaPares.innerHTML = ""; // Limpa a lista atual
  pares.forEach(par => {
      const li = document.createElement("li");
      li.textContent = par;
      listaPares.appendChild(li);
  });
}

// Função para gerar e exibir todos os números pares até o número fornecido
function gerarPares() {
  const numero = document.getElementById("numero").value;
  if (numero) {
      const pares = [];
      for (let i = 0; i <= numero; i++) {
          if (i % 2 === 0) {
              pares.push(i);
          }
      }
      mostrarPares(pares);
      document.getElementById("numero").value = ""; // Limpa o campo de input
  }
}

// Chama a função mostrarPares quando a página carrega
document.addEventListener("DOMContentLoaded", () => mostrarPares([]));
