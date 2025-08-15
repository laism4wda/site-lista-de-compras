//importa a funão criarItemDaLista do arquivo especificado
import {CriarItemDaLista} from "./script/CriarItemDaLista.js";
import verificarListaVazia from "./script/VerificarListaVazia.js"
//salva o elemento input dentro da variável inputItem
const InputItem = document.getElementById("input-item");
const ListaDeCompras = document.getElementById("ListaDeCompras");
const BotaoAdicionar = document.getElementById("adicionar-item");

//Adiciona um evento fofoqueiro que ficará "escutando" quando um evento de clique no "botãoAdicionar" dor acionado
BotaoAdicionar.addEventListener("click", (evento) => {
    //Evita que a página atualize todos que todos os dado sejam perdidos
    evento.preventDefault();
    //Chama uma função que vai criar o item da lista
    const ItemDaLista = CriarItemDaLista();
    //Adiciona esse item criado dentro de da lista de compras
    ListaDeCompras.appendChild(ItemDaLista);
    //Chama a função que vai verificar se a lista está ou não vazia
    verificarListaVazia(ListaDeCompras);
    InputItem.value = " "; 
}); //Limpa o campo input ao clicar no botão

//faz uma verigicação inicial se a lista está vazia ao carregar a página
verificarListaVazia(ListaDeCompras);