document.addEventListener('DOMContentLoaded', function() {
    renderizarCarrinho();
    document.getElementById('carrinho-modal').addEventListener('hide.bs.modal', atualizarItensLocalStorage);
    // Chame esta função quando a página carregar
    preencherInputsComDadosPedido(); // Preenche os inputs com os dados do pedido salvos no localStorage
    atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao carregar a página
});

function adicionarAoCarrinho(produtoID) {
    const produto = produtos.find(p => p.id === produtoID);
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemCarrinho = carrinho.find(item => item.id == produto.id);

    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            valor: produto.valor,
            quantidade: 1
        });
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
    abrirModalCarrinho();
    atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho após adicionar um novo item
}

function renderizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const tbody = document.querySelector('#carrinho-tbody');
    
    if (!tbody) {
        console.error('Elemento #carrinho-tbody não encontrado.');
        return;
    }

    tbody.innerHTML = '';

    carrinho.forEach(produto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="nome">${produto.nome}</td>
            <td class="valor-un">${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td class="qtd-produto">
                <button class="btn btn-outline-primary btn-sm btn-decrementar" data-id="${produto.id}">-</button>
                <input type="number" value="${produto.quantidade}" min="1" data-id="${produto.id}" class="input-quantidade">
                <button class="btn btn-outline-primary btn-sm btn-incrementar" data-id="${produto.id}">+</button>
            </td>
            <td><button class="btn btn-outline-danger btn-sm btn-remover" data-id="${produto.id}">&times;</button></td>
        `;

        tbody.appendChild(tr);
    });

    addEventListeners();
    
    updateTotal();
    verificarValorPedido();
    verificarEnderecoNome();
    atualizarItensLocalStorage();
    atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao renderizar
}

function addEventListeners() {
    document.querySelectorAll('.btn-decrementar').forEach(button => {
        button.addEventListener('click', () => {
            modificarQuantidade(button.getAttribute('data-id'), -1);
            atualizarItensLocalStorage();
            atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao modificar a quantidade
        });
    });

    document.querySelectorAll('.btn-incrementar').forEach(button => {
        button.addEventListener('click', () => {
            modificarQuantidade(button.getAttribute('data-id'), 1);
            atualizarItensLocalStorage();
            atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao modificar a quantidade
        });
    });

    document.querySelectorAll('.btn-remover').forEach(button => {
        button.addEventListener('click', () => {
            removerProduto(button.getAttribute('data-id'));
            atualizarItensLocalStorage();
            atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao remover um item
        });
    });

    document.querySelectorAll('.input-quantidade').forEach(input => {
        input.addEventListener('change', (event) => {
            const newQuantity = Math.max(1, parseInt(event.target.value, 10));
            event.target.value = newQuantity;
            updateTotal();
            verificarValorPedido();
            verificarEnderecoNome();
            atualizarItensLocalStorage();
            atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao alterar a quantidade diretamente
        });
    });
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('change', (event) => {  
            verificarEnderecoNome();
            atualizarItensLocalStorage(); 
        });
    });
}

function modificarQuantidade(productId, delta) {
    const input = document.querySelector(`input[data-id='${productId}']`);
    const currentValue = parseInt(input.value, 10);
    input.value = Math.max(1, currentValue + delta);
    updateTotal();
    verificarValorPedido();
    verificarEnderecoNome();
    atualizarItensLocalStorage();
    atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao modificar a quantidade
}

function removerProduto(productId) {
    const row = document.querySelector(`.btn-remover[data-id='${productId}']`).closest('tr');
    row.remove();
    updateTotal();
    verificarValorPedido();
    verificarEnderecoNome();
    atualizarItensLocalStorage();
    atualizarQuantidadeCarrinho(); // Atualiza a quantidade de itens no carrinho ao remover um item
}

function updateTotal() {
    let total = 0;

    document.querySelectorAll('#carrinho-tbody tr').forEach(row => {
        const quantityInput = row.querySelector('.input-quantidade');
        const priceElement = row.querySelector('.valor-un');

        if (quantityInput && priceElement) {
            const quantity = parseInt(quantityInput.value, 10);
            const price = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));

            if (!isNaN(quantity) && !isNaN(price)) {
                total += quantity * price;
            }
        }
    });

    document.querySelector('.valor-total-pedido').textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return total;
}

function preencherInputsComDadosPedido() {
    const dadosPedido = JSON.parse(localStorage.getItem('dadosPedido'));

    if (dadosPedido) {
        document.getElementById('nome').value = dadosPedido.nome || '';
        document.getElementById('cidade').value = dadosPedido.cidade || '';
        document.getElementById('rua').value = dadosPedido.rua || '';
        document.getElementById('numero').value = dadosPedido.numero || '';
        document.getElementById('complemento').value = dadosPedido.complemento || '';
    }
}

function verificarValorPedido(){
    const total = updateTotal();
    document.getElementById('btn-realizar-pedido').disabled = total < 15;
}

function verificarEnderecoNome(){
    const nome = document.getElementById('nome').value;
    const cidade = document.getElementById('cidade').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;

    document.getElementById('btn-realizar-pedido').disabled = nome == '' || cidade == '' || rua== '' || numero == '';
}

function atualizarItensLocalStorage() {
    const carrinho = [];
    document.querySelectorAll('#carrinho-tbody tr').forEach(row => {
        const id = row.querySelector('.btn-remover').getAttribute('data-id');
        const nome = row.querySelector('.nome').textContent;
        const valor = parseFloat(row.querySelector('.valor-un').textContent.replace('R$', '').replace(',', '.'));
        const quantidade = parseInt(row.querySelector('.input-quantidade').value, 10);

        if (!isNaN(valor) && !isNaN(quantidade)) {
            carrinho.push({ id, nome, valor, quantidade });
        }
    });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Capturando os dados do pedido
    const dadosPedido = {
        nome: document.getElementById('nome').value,
        cidade: document.getElementById('cidade').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value
    };

    // Salvando os dados do pedido no localStorage
    localStorage.setItem('dadosPedido', JSON.stringify(dadosPedido));


}

function atualizarQuantidadeCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    document.getElementById('carrinho-contagem').textContent = totalItens;
}

function abrirModalCarrinho() {
    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    modal.show();
}

// ao abrir tela verificar se loja esta berta ou fechada pra escrever na div class horario-func
document.addEventListener('DOMContentLoaded', () => {
    const horario_func = document.querySelector('.horario-func');
    const data = new Date();
    const dia_semana = data.getDay();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    const horario_func_loja = [
        { dia: 0, abertura: 7, fechamento: 23 }, //segunda
        { dia: 1, abertura: 18, fechamento: 23 }, //terça
        { dia: 2, abertura: 18, fechamento: 23 }, //quarta
        { dia: 3, abertura: 18, fechamento: 23 }, //quinta
        { dia: 4, abertura: 18, fechamento: 23 }, //sexta
        { dia: 5, abertura: 7, fechamento: 23.5 }, //sabado
        { dia: 6, abertura: 7, fechamento: 23.5 } //domingo
    ]

    let conteudo_loja_fechada =`<span class="badge bg-danger  rounded-3">Fechado</span>
                    Loja Fechada no Momento 
                    <button class="btn btn-sm btn-primary rounded-3" data-bs-toggle="modal" data-bs-target="#horarioFuncModal"> 
                        <i class="fas fa-clock fa-sm"></i>
                    </button>`;		
    
    let conteudo_loja_aberta = `<span class="badge bg-success rounded-3">Aberto</span>
                    Loja Aberta no Momento 
                    <button class="btn btn-sm btn-primary rounded-3" data-bs-toggle="modal" data-bs-target="#horarioFuncModal"> 
                        <i class="fas fa-clock fa-sm"></i>
                    </button>`;	

    //verificar se loja esta aberta ou fechada
    horario_func_loja.forEach(horario => {
        if (horario.dia == dia_semana) {
            if (hora >= horario.abertura && hora < horario.fechamento) {
                horario_func.innerHTML = conteudo_loja_aberta;
            } else {
                horario_func.innerHTML = conteudo_loja_fechada;
            }
        }
    });
});


function enviarPedido(){
    //montar mensagem bonita para enviar no whatsapp com os itens do carrinho
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const total = updateTotal();
    const nome = document.getElementById('nome').value;
    const cidade = document.getElementById('cidade').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    
    let mensagem = `Olá, tudo bem? Vim pelo site da Doceria e gostaria de fazer o seguinte pedido:\n\n`;

    mensagem += `🍫 *Pedido da Doceria Grace Gourmet* 🍫\n 🗓️ *Data: ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR')}*\n\n`;
    
    mensagem += `👤 *Nome:* ${nome}\n`;
    mensagem += `📍 *Endereço:* ${rua}, ${numero} - ${complemento} - ${cidade}\n\n`;
    
    mensagem += ` 🛒 *Itens do Pedido:* 🛒\n`;

    carrinho.forEach(item => {
        mensagem += `${item.quantidade}x ${item.nome} - ${item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
    });

    mensagem += `\n*TOTAL: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}*`;
    mensagem = encodeURIComponent(mensagem); 
    window.open(`https://wa.me/5532984595525?text=${mensagem}`, '_blank');
}