//Exporta a constante 'inputItem' para que ela possa ser usar em outros arquivos JavaScript
// Essa constante está ligada ao elemento HTML com o id "input-item" (geralmente um campo <input>)
export const InputItem = document.getElementById("input-item");

let contador = 0;

//Exporta a função  'CriarItemDaLista', que será usada para criar um novo item na lista de compras.
export function CriarItemDaLista() {

    //Verificar se o campo de entrada está vazio (ou seja, se o usuário não digitou nada).
    //Se estiver vazio, mostra um alerta na tela pedindo para inserir um item
    //e finaliza a funça com 'return', impedindo a continuação do código.
    if (InputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    //Cria um elemento HTML <li> (list item), que representará um item da lista.
    const ItemDaLista = document.createElement("li");

    //Cria uma <div> que servirá como um container para o conteúdo do item.
    const ContainerItemDaLista = document.createElement("div");

    //Adiciona uma calle CSS à <div> para que ela possa ser estilizada com CSS.
    ContainerItemDaLista.classList.add("lista-item-container");

    //Cria um parágrado <p> para mostrar o nome do item digitado.
    const NomeItem = document.createElement("p");

    //Cria um checkbox para o item da lista
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id - "checkbox-" + contador++;
    ContainerItemDaLista.appendChild(inputCheckBox);

    //Adiciona um evento para tiscar ou remover o risto do texto ao marcar/desmarcar um item
    inputCheckBox.addEventListener("change", function() {
        if(inputCheckBox.checked){
            NomeItem.style.textDecoration = "line-through";
        } else {
            NomeItem.style.textDecoration = "none";
        }
    });

    //Define o texto do parágrafo como o valor que o Usuário digitou no input.
    NomeItem.innerText = InputItem.value;

    //Adiciona o <p> como o nome do item dentro da <div> (o container).
    ContainerItemDaLista.appendChild(NomeItem);

    //Adiciona a <div> dentro do <li>, fomando a estrutura final do item.
    ItemDaLista.appendChild(ContainerItemDaLista);

    //Retorna o <li> completo, que já contém o item digitado, pronto para ser adicionado nalista.
    return ItemDaLista;
}