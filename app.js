// Criar variável para armazenar os nomes
let amigosNomes = [];
let input = document.getElementById("amigo");

function adicionarAmigo() {
    let input = document.getElementById("amigo"); //variavél que dá valor ao input(captura tudo que está dentro)
    let nomeInserido = input.value.trim(); //váriavél para remover espaços extras

    if (nomeInserido) { 
        amigosNomes.push(nomeInserido); //adiciona o nome ao array(.push serve para adicionar)

        let lista = document.getElementById("listaAmigos"); //parte onde será exibido os nomes adicionados
        let li = document.createElement("li"); //cria um novo item da lista

        

        li.textContent = nomeInserido; //define o texto do item como o nome digitado
        lista.appendChild(li); //adiciona o item na lista visualmente

        input.value = ""; //limpa o campo de input após adicionar
        input.focus(); //mantém o cursor no campo de input

    } else {
        alert("Por favor, insira um nome.");
    }
}

//função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpa a lista antes de recriar os itens

    for (let nome of amigosNomes) { //Percorre o array
        let li = document.createElement("li"); //cria um novo "li"
        li.textContent = nome; //define o nome como texto do "li"
        lista.appendChild(li); //adiciona o item na lista
    }
}
//criei essa função para evitar nomes repetidos
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nomeInserido = input.value.trim();

    if (nomeInserido) {
        if (amigosNomes.includes(nomeInserido)) { //verifica se o nome já existe no array
            alert("Este nome já foi adicionado!");
        } else {
            amigosNomes.push(nomeInserido); //adiciona o nome ao array
            atualizarLista(); //atualiza a lista na tela
            input.value = ""; //limpa o campo de input
            input.focus(); //mantém o cursor no input
        }
    } else {
        alert("Por favor, insira um nome.");
    }

    console.log("Lista de amigos:", amigosNomes); //exibe a lista no console
}


function sortearAmigo() {
    if (amigosNomes.length < 2) {
        alert("Adicione no mínimo 2 nomes para que o sorteio sejá válido.");
        return;
    }
 
    let amigoSorteado = amigosNomes[Math.floor(Math.random() * amigosNomes.length)]; //variavél que define qual será o amigo sorteado
    let resultado = document.getElementById("resultado"); //váriavel que define onde será exibido o resultado
    resultado.innerHTML = `<li>${amigoSorteado} foi sorteado!</li>`; //exibe o amigo sortudo 

    console.log("Amigo sorteado:", amigoSorteado); //resultado no console

    //apagar a lista após o sorteio
    amigosNomes = []; //limpa o array
    document.getElementById("listaAmigos").innerHTML = ""; //limpa os nomes da tela

}
