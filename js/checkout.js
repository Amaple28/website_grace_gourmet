// //ao clicar no btn remover, remove o item (tr) do carrinho
// document.addEventListener('DOMContentLoaded', () => {
//     const btn_remover = document.querySelectorAll('#btn-remover');
//     btn_remover.forEach(btn => {
//         btn.addEventListener('click', () => {
//             btn.parentElement.parentElement.remove();
//         });
//     }); 

//     //ao cliccar no btn decrementar ou incrementar, altera a quantidade do item no carrinho 
//     const btn_decrementar = document.querySelectorAll('#btn-decrementar');
//     const btn_incrementar = document.querySelectorAll('#btn-incrementar');
//     btn_decrementar.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const quantidade = btn.nextElementSibling;
//             if (quantidade.value > 1) {
//                 quantidade.value--;

//                 //atualizar o valor total do item de acordo com o valor unitário e a quantidade
//                 const valor_unitario = btn.parentElement.previousElementSibling;
//                 const valor_total = btn.parentElement.nextElementSibling;
//                 valor_total.textContent = `R$ ${(parseFloat(valor_unitario.textContent.replace('R$ ', '').replace(',', '.')) * quantidade.value).toFixed(2).replace('.', ',')}`;
//                 //atualizar o valor total do carrinho somando todos os itens cujo valores estão no formato R$ 00,00 na div 'valor-total'
//                 atualizaPedido();
//             }
//         });
//     });
//     btn_incrementar.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const quantidade = btn.previousElementSibling;
//             quantidade.value++;

//             //atualizar o valor total do item de acordo com o valor unitário e a quantidade
//             const valor_unitario = btn.parentElement.previousElementSibling;
//             const valor_total = btn.parentElement.nextElementSibling;
//             valor_total.textContent = `R$ ${(parseFloat(valor_unitario.textContent.replace('R$ ', '').replace(',', '.')) * quantidade.value).toFixed(2).replace('.', ',') }`;
//             //atualizar o valor total do carrinho somando todos os itens cujo valores estão no formato R$ 00,00 na div 'valor-total'
//             atualizaPedido();
//         });
//     });

//     //calcular o valor total do carrinho somando todos os itens cujo valores estão no formato R$ 00,00 na div 'valor-total'
//     const valor_total = document.querySelector('.valor-total-pedido');
//     const valores = document.querySelectorAll('.valor-total');
//     let total = 0;
//     valores.forEach(valor => {
//         total += parseFloat(valor.textContent.replace('R$ ', '').replace(',', '.'));
//     });
//     valor_total.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;



// });

// function atualizaPedido() {
//     //calcular o valor total do carrinho somando todos os itens cujo valores estão no formato R$ 00,00 na div 'valor-total'
//     const valor_total = document.querySelector('.valor-total-pedido');
//     const valores = document.querySelectorAll('.valor-total');
//     let total = 0;
//     valores.forEach(valor => {
//         total += parseFloat(valor.textContent.replace('R$ ', '').replace(',', '.'));
//     });
//     valor_total.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
// }



function enviarPedido(){
    //enviar pedido para o whatsapp 
    window.open("https://wa.me/5531991805907?text=PedidoGrace Gourmet");
}