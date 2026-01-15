let semiJoias = [
    {
        id: 1,
        nome: "Brincos banhado à ouro",
        preco: "R$95.00",
        img: "./semijoias/brinco1.jpg",
    },
    {
        id: 2,
        nome: "Brincos banhado à ouro",
        preco: "R$95.00",
        img: "./semijoias/brinco2.jpg"
    },
    {
        id: 3,
        nome: "Brincos de prata",
        preco: "R$95.00",
        img: "./semijoias/brinco3.jpg"
    },
    {
        id: 4,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco4.jpg"
    },
    {
        id: 5,
        nome: "Brincos de prata",
        img: "./semijoias/brinco5.jpg"
    },
    {
        id: 6,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco6.jpg"
    },
    {
        id: 7,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco7.jpg"
    },
    {
        id: 8,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco8.jpg"
    },
    {
        id: 9,
        nome: "Brincos de prata",
        img: "./semijoias/brinco9.jpg"
    },
    {
        id: 10,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco10.jpg"
    },
    {
        id: 11,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco11.jpg"
    },
    {
        id: 12,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco12.jpg"
    },
    {
        id: 13,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco13.jpg"
    },
    {
        id: 14,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco14.png"
    },
    {
        id: 15,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco15.png"
    },
    {
        id: 16,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco16.png"
    },
    {
        id: 17,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco17.png"
    },
    {
        id: 18,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco18.png"
    },
    {
        id: 19,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco19.png"
    },
    {
        id: 20,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco20.png"
    },
    {
        id: 21,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco21.png"
    },
    {
        id: 22,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco22.png"
    },
    {
        id: 23,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco23.png"
    },
    {
        id: 24,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco24.png"
    },
    {
        id: 25,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco25.png"
    },
    {
        id: 26,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco26.png"
    },
    {
        id: 27,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco27.png"
    },
    {
        id: 28,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco28.png"
    },
    {
        id: 29,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco29.png"
    },
    {
        id: 30,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco30.png"
    },
    {
        id: 31,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco31.png"
    },
    {
        id: 32,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco32.png"
    },
    {
        id: 33,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco33.png"
    },
    {
        id: 34,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco34.png"
    },
    {
        id: 35,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco35.png"
    },
    {
        id: 36,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco36.png"
    },
    {
        id: 37,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco37.png"
    },
    {
        id: 38,
        nome: "Brincos banhado à ouro",
        img: "./semijoias/brinco38.png"
    },
    {
        id: 39,
        nome: "Colar banhado à ouro",
        preco: 95.00,
        img: "./semijoias/colar1.png"
    },
    {
        id: 40,
        nome: "Colar banhado à ouro",
        img: "./semijoias/colar2.png"
    },
    {
        id: 41,
        nome: "Colar banhado à ouro",
        img: "./semijoias/pulseira1.png"
    }

];

function exibirObjetos(listaItens) {
    const catalogo = document.getElementById("catalogo");

    listaItens.forEach(value => {
        const card = document.createElement("div");
        card.classList.add("card");


        const img = document.createElement("img");
        img.classList.add("img-card");
        img.src = value.img;
        img.alt = value.nome;

        const titulo = document.createElement("h3");
        titulo.classList.add("titulo-card");
        titulo.textContent = value.nome;

        const preco = document.createElement("p");
        preco.classList.add("preco");
        preco.textContent = value.preco;

        const buttonCard = document.createElement("button");
        buttonCard.classList.add("btn-comprar");
        buttonCard.textContent = "Comprar";

        buttonCard.addEventListener("click", () => iniciarConversa(value.nome));


        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(preco);
        card.appendChild(buttonCard);
        catalogo.appendChild(card);
    })
}

function iniciarConversa(nomeProduto) {
    const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto}`;
    const url = `https://wa.me/5531996322598?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}

exibirObjetos(semiJoias)