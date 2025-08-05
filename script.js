import {CriarItemDaLista} from "./Scripts/CriarItemDaLista.js";
//salva o elemento input dentro da variável inputItem
const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("listaDeCompras");
const botaoAdicionar = document.getElementById("adicionar-item");
//Adiciona um evento fofoqueiro que ficará "escutando" quando um evento de clique no "botãoAdicionar" dor acionado
botaoAdicionar.addEventListener("click", (evento) => {
    //Evita que a página atualize todos que todos os dado sejam perdidos
    evento.preventDefault();
    //Chama uma função que vai criar o item da lista
    const itemDaLista = CriarItemDaLista();
    //Adiciona esse item criado dentro de da lista de compras
    listaDeCompras.appendChild(itemDaLista);
    //Chama a função que vai verificar se a lista está ou não vazia
    verificarListaVazia(listaDeCompras);
    inputItem.value = ""; 
}); //Limpa o campo input ao clicar no botão