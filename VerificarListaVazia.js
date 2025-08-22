//Seleciona o elemeneto HTML com a classe "mensagem-lista-vazia" e armazena na variável
const MensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

//Define a função que verifia a lista
function VerificarListaVazia(ListaDeCompras) {
    //Seleciona todos os elementos <li> dentro da lista de compras
    //O js retorna como um array (lista)
    const ItemDaLista = ListaDeCompras.querySelectorAll("li");

    //Se não houver nenhum item na lista = lista vazia
    if(ItemDaLista.length === 0) {
        MensagemListaVazia.style.display = "block";
    } else {
        MensagemListaVazia.style.display = "none"
    }
}

export default VerificarListaVazia;