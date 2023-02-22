function listarVeiculos() {
 
  const veiculos = JSON.parse(localStorage.getItem("listaVeiculos")) || [];

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";
  veiculos.forEach((veiculo) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imagem = document.createElement("img");
    imagem.src = veiculo.imagem;
    imagem.alt = `${veiculo.marca} ${veiculo.modelo}`;
    card.appendChild(imagem);

    const marcaModelo = document.createElement("p");
    marcaModelo.textContent = `${veiculo.marca} ${veiculo.modelo}`;
    card.appendChild(marcaModelo);

    const km = document.createElement("p");
    km.textContent = `Kilometragem: ${veiculo.km} km`;
    card.appendChild(km);

    const valor = document.createElement("p");
    valor.textContent = `Valor: R$ ${veiculo.valor.toLocaleString("pt-BR")}`;
    card.appendChild(valor);

    const cor = document.createElement("p");
    cor.textContent = `Cor: ${veiculo.cor}`;
    card.appendChild(cor);

    cardsContainer.appendChild(card);
  });
}

