# AmigoSecreto
# 🎁 Amigo Secreto

Este é um projeto simples de um sorteador de **Amigo Secreto**, onde os usuários podem adicionar nomes à lista e realizar um sorteio aleatório entre os participantes.

## 📌 Funcionalidades

- Adicionar amigos à lista.
- Impedir a inserção de nomes duplicados.
- Exibir a lista de amigos na tela.
- Sortear aleatoriamente um amigo da lista.
- Impedir sorteios com menos de 2 participantes.
- Limpar a lista após o sorteio.

## 🚀 Como usar

1. Digite um nome no campo de entrada e clique em **Adicionar**.
2. O nome será salvo e exibido na lista.
3. Repita o processo para adicionar mais amigos.
4. Clique em **Sortear Amigo** para realizar o sorteio.
5. O nome sorteado será exibido na tela e a lista será limpa automaticamente.

## 📜 Código Principal

### **JavaScript (app.js)**
```javascript
// Lista para armazenar os nomes
let amigosNomes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nomeInserido = input.value.trim();

    if (nomeInserido) {
        if (amigosNomes.includes(nomeInserido)) {
            alert("Este nome já foi adicionado!");
        } else {
            amigosNomes.push(nomeInserido);
            atualizarLista();
            input.value = "";
            input.focus();
        }
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let nome of amigosNomes) {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigosNomes.length < 2) {
        alert("Adicione no mínimo 2 nomes para que o sorteio seja válido.");
        return;
    }

    let sorteado = amigosNomes[Math.floor(Math.random() * amigosNomes.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${sorteado} foi sorteado!</li>`;

    console.log("Amigo sorteado:", sorteado);
    amigosNomes = []; // Armazena os elementos inseridos no input
    atualizarLista();
}
```

### **HTML (index.html)**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amigo Secreto</title>
</head>
<body>
    <h1>Amigo Secreto</h1>
    <input type="text" id="amigo" placeholder="Digite um nome">
    <button onclick="adicionarAmigo()">Adicionar</button>
    <ul id="listaAmigos"></ul>
    <button onclick="sortearAmigo()">Sortear Amigo</button>
    <ul id="resultado"></ul>
    <script src="app.js"></script>
</body>
</html>
```

## 📄 Licença
Este projeto é de código aberto e pode ser usado livremente! 😊

