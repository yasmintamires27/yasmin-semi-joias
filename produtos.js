let semiJoias = [
    {
        id: 1,
        nome: "Brincos",
        img: "./semijoias/semijoias1.jpg"
    },
    {
        id: 2,
        nome: "Brincos",
        img: "./semijoias/semijoias1.jpg"
    },
    {
        id: 3,
        nome: "Brincos",
        img: "./semijoias/semijoias1.jpg"
    },
    {
        id: 4,
        nome: "Brincos",
        img: "./semijoias/semijoias1.jpg"
    },
    {
        id: 5,
        nome: "Brincos",
        img: "./semijoias/semijoias1.jpg"
    },
    {
        id: 6,
        nome: "Brincos",
        img: "./semijoias/semijoias1.jpg"
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

        const buttonCard = document.createElement("button");
        buttonCard.classList.add("btn-comprar");
        buttonCard.textContent = "Comprar";

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(buttonCard);
        catalogo.appendChild(card);
    })
}

exibirObjetos(semiJoias)