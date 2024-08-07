
const categorias = [
    {
        id: 1,
        nome: 'Copos'
    },
    {
        id: 2,
        nome: 'Bomboniere'
    },
    {
        id: 3,
        nome: 'Açaí'
    },
    {
        id: 4,
        nome: 'Afogadinhos'
    },
    {
        id: 5,
        nome: 'Trufadinhos'
    },
    {
        id: 6,
        nome: 'Pudim'
    },
    {
        id: 7,
        nome: 'Tortas'
    },
    {
        id: 8,
        nome: 'Bolos'
    },
    {
        id: 9,
        nome: 'Cones'
    },
    {
        id: 10,
        nome: 'Brownies'
    },
    {
        id: 11,
        nome: 'Barras'
    },
    {
        id: 12,
        nome: 'Premium'
    },
    {
        id: 13,
        nome: 'Presentes'
    },
    {
        id: 20,
        nome: 'Outros'
    },
];

const produtos = [
    {
        id: 1,
        nome: 'Açaí 300ml',
        valor: 'R$ 12,99',
        descricao: 'Escolha até 2 complementos grátis: Paçoca, Leite Condensado, Leite Ninho ou Banana',
        categoria: 3,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_acai1.jpeg'
        ]
    },
    {
        id: 2,
        nome: 'Açaí 500ml',
        valor: 'R$ 16,99',
        descricao: 'Escolha até 2 complementos grátis: Paçoca, Leite Condensado, Leite Ninho ou Banana',
        categoria: 3,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_acai1.jpeg'
        ]
    },
    {
        id: 3,
        nome: 'Açaí 750ml',
        valor: 'R$ 21,99',
        descricao: 'Escolha até 2 complementos grátis: Paçoca, Leite Condensado, Leite Ninho ou Banana',
        categoria: 3,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_acai1.jpeg'
        ]
    },
    {
        id: 4,
        nome: 'Trio Cremoso',
        valor: 'R$ 13,99',
        descricao: '',
        categoria: 20,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/trio_cremoso1.jpeg'
        ]
    },
    {
        id: 5,
        nome: 'Brigadeiro',
        valor: 'R$ 2,50',
        descricao: '',
        categoria: 2,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/brigadeiro1.jpeg'
        ]
    },
    {
        id: 6,
        nome: 'Trufas',
        valor: 'R$ 4,99',
        descricao: '',
        categoria: 2,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/trufa1.jpeg',
            './img/produtos/trufa2.jpeg'
        ]
    },
    {
        id: 7,
        nome: 'Bombom de Morango',
        valor: 'R$ 12,99',
        descricao: '',
        categoria: 2,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bombom_morango1.jpeg',
            './img/produtos/bombom_morango2.jpeg'
        ]
    },
    {
        id: 8,
        nome: 'Coxinha de Morango',
        valor: 'R$ 9,99',
        descricao: '',
        categoria: 2,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/coxinha_morango1.jpeg' 
        ]
    },
    {
        id: 9,
        nome: 'Espetinho de Morango',
        valor: 'R$ 12,99',
        descricao: '',
        categoria: 2,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/espetinho_morango1.jpeg' 
        ]
    },
    {
        id: 10,
        nome: 'Copo Premium da Casa',
        valor: 'R$ 13,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade12.jpeg' 
        ]
    },
    {
        id: 11,
        nome: 'Copo Cenourita',
        valor: 'R$ 14,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade13.jpeg' 
        ]
    },
    {
        id: 12,
        nome: 'Copo Morango',
        valor: 'R$ 13,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade6.jpeg' 
        ]
    },
    {
        id: 13,
        nome: 'Copudim',
        valor: 'R$ 17,50',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade14.jpeg' 
        ]
    },
    {
        id: 14,
        nome: 'Copo Delica Y',
        valor: 'R$ 16,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade16.jpeg' 
        ]
    },
    {
        id: 15,
        nome: 'Copo Supremo Premium',
        valor: 'R$ 16,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade17.jpeg' 
        ]
    },
    {
        id: 16,
        nome: 'Copo Brownie Kinder Bueno',
        valor: 'R$ 16,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade7.jpeg' 
        ]
    },
    {
        id: 17,
        nome: 'Copo Brownie de Uva',
        valor: 'R$ 16,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade9.jpeg' 
        ]
    }, 
    {
        id: 18,
        nome: 'Copo Brownie Grace',
        valor: 'R$ 16,99',
        descricao: '',
        categoria: 1,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cp_felicidade5.jpeg' 
        ]
    }, 
    {
        id: 19,
        nome: 'Afogadinho de Morango',
        valor: 'R$ 11,99',
        descricao: '',
        categoria: 4,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/afogadinho_morango1.png' 
        ]
    }, 
    {
        id: 20,
        nome: 'Afogadinho de Brownie',
        valor: 'R$ 14,99',
        descricao: '',
        categoria: 4,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/escondidinho_brownie1.jpeg' 
        ]
    }, 
    {
        id: 21,
        nome: 'Trufadinho de Maracujá',
        valor: 'R$ 13,99',
        descricao: '',
        categoria: 5,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/trufadinho1.png' 
        ]
    }, 
    {
        id: 22,
        nome: 'Trufadinho de Uva',
        valor: 'R$ 13,99',
        descricao: '',
        categoria: 5,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/trufadinho1.png'  
        ]
    }, 
    {
        id: 23,
        nome: 'Trufadinho de Morango',
        valor: 'R$ 13,99',
        descricao: '',
        categoria: 5,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/trufadinho1.png'  
        ]
    }, 
    {
        id: 24,
        nome: 'Pudim Tradicional',
        valor: 'R$ 5,50',
        descricao: '',
        categoria: 6,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/pudim1.jpeg' 
        ]
    }, 
    {
        id: 25,
        nome: 'Pudim de Paçoca',
        valor: 'R$ 6,99',
        descricao: '',
        categoria: 6,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/pudim1.jpeg'  
        ]
    }, 
    {
        id: 26,
        nome: 'Pudim de Chocolate',
        valor: 'R$ 6,99',
        descricao: '',
        categoria: 6,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/pudim1.jpeg'  
        ]
    }, 
    {
        id: 27,
        nome: 'Torta Josefina',
        valor: 'R$ 55,99',
        descricao: '',
        categoria: 7,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/torta1.png', 
            './img/produtos/torta2.png' 
        ]
    }, 
    {
        id: 28,
        nome: 'Torta de Brigadeiro com Morango',
        valor: 'R$ 55,99',
        descricao: '',
        categoria: 7,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/torta2.png', 
            './img/produtos/torta1.png' 
        ]
    }, 
    {
        id: 29,
        nome: 'Torta de Ninho com Geleia de Morango',
        valor: 'R$ 55,99',
        descricao: '',
        categoria: 7,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/torta1.png', 
            './img/produtos/torta2.png' 
        ]
    }, 
    {
        id: 30,
        nome: 'Torta Supreme Brownie',
        valor: 'R$ 60,99',
        descricao: '',
        categoria: 7,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/torta1.png', 
            './img/produtos/torta2.png' 
        ]
    }, 
    {
        id: 31,
        nome: 'Torta de Maracujá com Brigadeiro e Brownie',
        valor: 'R$ 60,99',
        descricao: '',
        categoria: 7,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/torta2.png', 
            './img/produtos/torta1.png' 
        ]
    }, 
    {
        id: 32,
        nome: 'Bolo no Pote Dois Amores',
        valor: 'R$ 7,99',
        descricao: '',
        categoria: 8,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bolo_pote1.jpeg',
            './img/produtos/bolo_pote2.jpeg'
        ]
    }, 
    {
        id: 33,
        nome: 'Bolo no Pote Ninho',
        valor: 'R$ 7,99',
        descricao: '',
        categoria: 8,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bolo_pote1.jpeg',
            './img/produtos/bolo_pote2.jpeg'
        ]
    }, 
    {
        id: 34,
        nome: 'Bolo no Pote Ninho com Geleia de Morango',
        valor: 'R$ 7,99',
        descricao: '',
        categoria: 8,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bolo_pote1.jpeg',
            './img/produtos/bolo_pote2.jpeg'
        ]
    }, 
    {
        id: 35,
        nome: 'Bolo no Pote Chocolatudo',
        valor: 'R$ 7,99',
        descricao: '',
        categoria: 8,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bolo_pote1.jpeg',
            './img/produtos/bolo_pote2.jpeg'
        ]
    }, 
    {
        id: 36,
        nome: 'Bolo no Pote de Paçoca',
        valor: 'R$ 7,99',
        descricao: '',
        categoria: 8,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bolo_pote1.jpeg',
            './img/produtos/bolo_pote2.jpeg'
        ]
    }, 
    {
        id: 37,
        nome: 'Bolo no Pote de Ninho com Morango',
        valor: 'R$ 7,99',
        descricao: '',
        categoria: 8,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bolo_pote1.jpeg',
            './img/produtos/bolo_pote2.jpeg'
        ]
    },  
    {
        id: 38,
        nome: 'Cone Trufado de Ninho',
        valor: 'R$ 9,99',
        descricao: '',
        categoria: 9,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cone_trufado1.jpeg'
        ]
    },
    {
        id: 39,
        nome: 'Cone Trufado de Brigadeiro',
        valor: 'R$ 9,99',
        descricao: '',
        categoria: 9,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cone_trufado1.jpeg'
        ]
    },
    {
        id: 40,
        nome: 'Cone Trufado de Paçoca',
        valor: 'R$ 9,99',
        descricao: '',
        categoria: 9,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cone_trufado1.jpeg'
        ]
    },
    {
        id: 41,
        nome: 'Cone Trufado Kinder Bueno',
        valor: 'R$ 9,99',
        descricao: '',
        categoria: 9,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cone_trufado1.jpeg'
        ]
    },
    {
        id: 42,
        nome: 'Cone Trufado de Mousse de Maracujá',
        valor: 'R$ 9,99',
        descricao: '',
        categoria: 9,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cone_trufado1.jpeg'
        ]
    },
    {
        id: 43,
        nome: 'Bolo Chocomaracujá',
        valor: 'R$ 9,50',
        descricao: '',
        categoria: 8,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bolo1.jpeg'
        ]
    }, 
    {
        id: 44,
        nome: 'Pão de Mel',
        valor: 'R$ 9,90',
        descricao: '',
        categoria: 20,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/pao_mel1.jpeg'
        ]
    }, 
    // {
    //     id: 45,
    //     nome: 'Pão de Mel',
    //     valor: 'R$ 9,90',
    //     descricao: '',
    //     categoria: 20,
    //     disponibilidade: true,
    //     imagens: [ 
    //         './img/produtos/pao_mel1.jpeg'
    //     ]
    // }, 
    {
        id: 46,
        nome: 'Sanduba de Brownie com Ninho',
        valor: 'R$ 12,99',
        descricao: '',
        categoria: 10,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/sdb_brownie2.jpeg',
            './img/produtos/sdb_brownie1.jpeg'
        ]
    }, 
    {
        id: 47,
        nome: 'Sanduba de Brownie com Doce de Leite',
        valor: 'R$ 12,99',
        descricao: '',
        categoria: 10,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/sdb_brownie2.jpeg',
            './img/produtos/sdb_brownie1.jpeg'
        ]
    }, 
    {
        id: 48,
        nome: 'Sanduba de Brownie com Brigadeiro',
        valor: 'R$ 12,99',
        descricao: '',
        categoria: 10,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/sdb_brownie1.jpeg',
            './img/produtos/sdb_brownie2.jpeg'
        ]
    },
    {
        id: 49,
        nome: 'Sanduba de Brownie com Ninho e Nutella',
        valor: 'R$ 13,99',
        descricao: '',
        categoria: 10,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/sdb_brownie1.jpeg',
            './img/produtos/sdb_brownie2.jpeg'
        ]
    },
    {
        id: 50,
        nome: 'Brownie',
        valor: 'R$ 8,99',
        descricao: '',
        categoria: 10,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/brownie1.jpeg'
        ]
    },
    {
        id: 51,
        nome: 'Barra Trufada de Ninho',
        valor: 'R$ 15,99',
        descricao: '',
        categoria: 11,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/barra_trufada4.jpeg',
            './img/produtos/barra_trufada1.jpeg',
            './img/produtos/barra_trufada2.jpeg'
        ]
    },
    {
        id: 52,
        nome: 'Barra Trufada de Brigadeiro',
        valor: 'R$ 15,99',
        descricao: '',
        categoria: 11,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/barra_trufada4.jpeg',
            './img/produtos/barra_trufada1.jpeg',
            './img/produtos/barra_trufada2.jpeg'
        ]
    },
    {
        id: 53,
        nome: 'Barra Trufada Mousse de Maracujá',
        valor: 'R$ 15,99',
        descricao: '',
        categoria: 11,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/barra_trufada4.jpeg',
            './img/produtos/barra_trufada1.jpeg',
            './img/produtos/barra_trufada2.jpeg'
        ]
    },
    {
        id: 54,
        nome: 'Barra Trufada de Brigadeiro com Morango',
        valor: 'R$ 17,99',
        descricao: '',
        categoria: 11,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/barra_trufada4.jpeg',
            './img/produtos/barra_trufada1.jpeg',
            './img/produtos/barra_trufada2.jpeg'
        ]
    },
    {
        id: 55,
        nome: 'Barra Trufada de Ninho com Morango',
        valor: 'R$ 17,99',
        descricao: '',
        categoria: 11,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/barra_trufada4.jpeg',
            './img/produtos/barra_trufada3.jpeg', 
            './img/produtos/barra_trufada2.jpeg'
        ]
    },
    {
        id: 56,
        nome: 'Canjica',
        valor: 'R$ 8,50',
        descricao: '',
        categoria: 20,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/canjica1.jpeg' 
        ]
    },  
    {
        id: 57,
        nome: 'Donuts de Churros',
        valor: 'R$ 2,50',
        descricao: '',
        categoria: 12,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/donuts1.jpeg' 
        ]
    },  
    {
        id: 58,
        nome: 'Donuts de Brigadeiro',
        valor: 'R$ 2,50',
        descricao: '',
        categoria: 12,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/donuts1.jpeg' 
        ]
    },  
    {
        id: 59,
        nome: 'Donuts de Ninho',
        valor: 'R$ 2,50',
        descricao: '',
        categoria: 12,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/donuts1.jpeg' 
        ]
    },  
    {
        id: 60,
        nome: 'Fondue Grace Gourmet',
        valor: 'R$ 28,99',
        descricao: '',
        categoria: 12,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/fondue1.jpeg' 
        ]
    },  
    {
        id: 61,
        nome: 'Barras com Escritas',
        valor: 'R$ 49,99',
        descricao: '',
        categoria: 12,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/barra_escrita1.jpeg',
            './img/produtos/barra_escrita2.jpeg',
            './img/produtos/barra_escrita3.jpeg'
        ]
    },  
    {
        id: 62,
        nome: 'Roleta da Felicidade',
        valor: 'R$ 35,99',
        descricao: '',
        categoria: 13,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/roleta_felicidade1.jpeg' 
        ]
    },  
    {
        id: 63,
        nome: 'Caixa Kit Cerveja com Trufas',
        valor: 'R$ 49,99',
        descricao: '',
        categoria: 13,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cerveja_trufas1.jpeg',
            './img/produtos/cerveja_trufas2.jpeg'
        ]
    },  
    {
        id: 64,
        nome: 'Ursinho Trufado',
        valor: 'R$ 39,99',
        descricao: '',
        categoria: 13,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/urso_trufado1.jpeg' 
        ]
    },  
    {
        id: 65,
        nome: 'Bombons Rosa',
        valor: 'R$ 4,99',
        descricao: '',
        categoria: 2,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/bombom_rosa1.jpeg' 
        ]
    },  
    {
        id: 66,
        nome: 'Cento de Brownie',
        valor: 'R$ ',
        descricao: '',
        categoria: 10,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/cento_brownie1.jpeg' 
        ]
    },  
    {
        id: 67,
        nome: 'Fatia de Brownie',
        valor: 'R$ ',
        descricao: '',
        categoria: 10,
        disponibilidade: true,
        imagens: [ 
            './img/produtos/fatia_brownie1.jpeg' 
        ]
    },  
    {
        id: 68,
        nome: 'Brownie com Escrita Amor',
        valor: 'R$ 15,99',
        descricao: '',
        categoria: 10,
        disponibilidade: false,
        imagens: [ 
            './img/produtos/brownie_escrita1.jpeg' 
        ]
    },  
    
    
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
        tab.classList.add('row', 'g-3','tab-pane', 'fade', 'p-0', );
        if (categoria.id === 1) {
            tab.classList.add('active', 'show');
        }
        //salvar avaliação e trocar status do produto
        tab.id = `tab-${categoria.id}`;
        div_produtos.appendChild(tab);
    });

    produtos.forEach(produto => {
        const tab = document.querySelector(`#tab-${produto.categoria}`);
        if (tab) {
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-md-4', 'col-sm-12', 'py-2'); 
            const carrosselId = `carousel${produto.id}`;

            div.innerHTML = `
                <div class="d-flex h-100 w-100">
                    <div class="flex-shrink-0">
                        <!-- Carrossel de Imagens -->
                        <div id="${carrosselId}" class="carousel slide" data-bs-ride="false">
                            <div class="carousel-indicators">
                                ${produto.imagens.map((imagem, index) => `
                                    <button type="button" data-bs-target="#${carrosselId}" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-current="true" aria-label="Slide ${index + 1}"></button>
                                `).join('')}
                            </div>
                            <div class="carousel-inner">
                                ${produto.imagens.map((imagem, index) => `
                                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                        <img src="${imagem}" class="d-block w-100 img-fluid fixed-size" alt="${produto.nome}">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${carrosselId}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${carrosselId}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <h4 class="bg-dark text-primary p-2 m-0">${produto.valor}</h4>
                    </div>
                    <div class="d-flex flex-column justify-content-between text-start bg-secondary border-inner border-inner-dark px-4">
                        <p class="mt-3"><b>${produto.nome}</b></p>
                        <span>${produto.descricao}</span>
                        ${produto.disponibilidade ? `
                            <button class="btn btn-primary btn-sm mb-3" onclick="adicionarAoCarrinho(${produto.id})"> <i class="bi bi-cart-plus"></i> Adicionar ao carrinho </button>
                        ` : ` 
                            <button class="btn btn-dark btn-sm mb-3" disabled> <i class="fas fa-ban"></i> Produto Indisponível </button>
                        `}
                    </div>
                </div>
            `;


            tab.appendChild(div);
        }
    });
});



// function alterarQuantidade(produtoID, quantidade) {
//     const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
//     const itemCarrinho = carrinho.find(item => item.id === produtoID);
//     if (itemCarrinho) {
//         itemCarrinho.quantidade += quantidade;
//         if (itemCarrinho.quantidade <= 0) {
//             carrinho.splice(carrinho.indexOf(itemCarrinho), 1);
//         }
//     }
//     localStorage.setItem('carrinho', JSON.stringify(carrinho));
//     renderizarCarrinho();
// }

function removerDoCarrinho(produtoID) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const novoCarrinho = carrinho.filter(item => item.id !== produtoID);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    renderizarCarrinho();
}


////////////////////////////
function abrirModalCarrinho() {
    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    modal.show();
}


////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const div_produtos_sortidos = document.querySelector('#produtos-sortidos');
    div_produtos_sortidos.innerHTML = '';

    const produtos_sortidos = [];
    while (produtos_sortidos.length < 3) {
        const produto = produtos[Math.floor(Math.random() * produtos.length)];
        if (!produtos_sortidos.includes(produto)) {
            produtos_sortidos.push(produto);
        }
    }
    
    produtos_sortidos.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-sm-12', 'py-2');
        const carrosselId = `carousel${produto.id}`;

        div.innerHTML = `
            <div class="d-flex h-100 w-100">
                <div class="flex-shrink-0">
                    <!-- Carrossel de Imagens -->
                    <div id="${carrosselId}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            ${produto.imagens.map((imagem, index) => `
                                <button type="button" data-bs-target="#${carrosselId}" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-current="true" aria-label="Slide ${index + 1}"></button>
                            `).join('')}
                        </div>
                        <div class="carousel-inner">
                            ${produto.imagens.map((imagem, index) => `
                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <img src="${imagem}" class="d-block w-100 img-fluid fixed-size" alt="${produto.nome}">
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${carrosselId}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${carrosselId}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <h4 class="bg-dark text-primary p-2 m-0">${produto.valor}</h4>
                </div>
                <div class="w-100 d-flex flex-column justify-content-center text-start bg-secondary border-inner border-inner-dark px-4">
                    <h6 class="mt-3"><b>${produto.nome}</b></h6>
                    <span>${produto.descricao}</span>
                </div>
            </div>
        `;
        div_produtos_sortidos.appendChild(div);
    });
});
