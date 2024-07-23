const produtos = [
    {
        id: 1,
        nome: 'Bolo',
        imagem: 'https://th.bing.com/th/id/OIP.z6zkTRDh6VVFApA9_-w5zgHaFj?rs=1&pid=ImgDetMain',
        valor: 'R$ 34,00',
        descricao: 'Bolo de chocolate',
        categoria: 1,
        disponibilidade: true
    },
    {
        id: 2,
        nome: 'Açaí',
        imagem: 'https://th.bing.com/th/id/R.c0904517a9a7337ae016189505b3ebf0?rik=Lf%2fEvVl5FUGQiw&pid=ImgRaw&r=0',
        valor: 'R$ 18,00',
        descricao: 'Açaí com morango e banana',
        categoria: 2,
        disponibilidade: true
    }
];

const categorias = [
    {
        id: 1,
        nome: 'Bolos'
    },
    {
        id: 2,
        nome: 'Açaí'
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const div_categorias = document.querySelector('#categorias');
    const div_produtos = document.querySelector('#produtos');
    div_categorias.innerHTML = '';
    div_produtos.innerHTML = '';

    categorias.forEach(categoria => {
        // Criar e adicionar categoria à lista
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link', 'text-white');
        a.setAttribute('data-bs-toggle', 'pill');
        a.href = `#tab-${categoria.id}`;
        a.textContent = categoria.nome;
        if (categoria.id === 1) {
            a.classList.add('active');
        }
        li.appendChild(a);
        div_categorias.appendChild(li);

        // Criar e adicionar tab de produtos
        const tab = document.createElement('div');
        tab.classList.add('tab-pane', 'fade', 'p-0');
        if (categoria.id === 1) {
            tab.classList.add('active', 'show');
        }
        tab.id = `tab-${categoria.id}`;
        div_produtos.appendChild(tab);
    });

    produtos.forEach(produto => {
        const tab = document.querySelector(`#tab-${produto.categoria}`);
        if (tab) {
            const div = document.createElement('div');
            div.classList.add('row', 'g-3');
            div.innerHTML = `
                <div class="col-lg-6">
                    <div class="d-flex h-100">
                        <div class="flex-shrink-0">
                            <img class="img-fluid" src="${produto.imagem}" alt="${produto.nome}" style="width: 150px; height: 85px;">
                            <h4 class="bg-dark text-primary p-2 m-0">${produto.valor}</h4>
                        </div>
                        <div class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                            <h5 class="text-uppercase">${produto.nome}</h5>
                            <span>${produto.descricao}</span>
                        </div>
                    </div>
                </div>
            `;
            tab.appendChild(div);
        }
    });
});
