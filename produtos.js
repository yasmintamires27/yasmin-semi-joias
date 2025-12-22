const produtos = [
  { id: 1, nome: 'Brincos', img: './semijoias/semijoias1.jpg' },
  { id: 2, nome: 'Colar', img: './semijoias/semijoias1.jpg' },
  { id: 3, nome: 'Pulseira', img: './semijoias/semijoias1.jpg' },
  { id: 4, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
  { id: 5, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
  { id: 6, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
  { id: 7, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
  { id: 8, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
  { id: 9, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
  { id: 10, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
  { id: 11, nome: 'Anel', img: './semijoias/semijoias1.jpg' },
];

function adicionarCards(listaProdutos) {
  const catalogo = document.getElementById('catalogo');

  listaProdutos.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('img-card');
    img.src = produto.img;
    img.alt = produto.nome;

    const titulo = document.createElement('h3');
    titulo.textContent = produto.nome;

    const botao = document.createElement('button');
    botao.textContent = 'Comprar';
    botao.classList.add('btn-comprar');

    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(botao);

    catalogo.appendChild(card);
  });
}

// Renderiza TODOS os produtos de uma vez
adicionarCards(produtos);
