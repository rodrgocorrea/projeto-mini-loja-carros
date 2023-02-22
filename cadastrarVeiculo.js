let listaVeiculos = [];

if (localStorage.getItem("listaVeiculos")) {
  listaVeiculos = JSON.parse(localStorage.getItem("listaVeiculos"));
}

function cadastrarVeiculo() {
  let modelo = document.getElementById("modelo").value;
  let marca = document.getElementById("marca").value;
  let nome = document.getElementById("nome").value;
  let km = parseInt(document.getElementById("km").value);
  let valor = parseInt(document.getElementById("valor").value);
  let cor = document.getElementById("cor").value;

  let novoVeiculo = {
    modelo: modelo,
    marca: marca,
    nome: nome,
    km: km,
    valor: valor,
    cor: cor,
  };

  listaVeiculos.push(novoVeiculo);
  modelo.value = "";
  marca.value = "";
  nome.value = "";
  km.value = "";
  valor.value = "";
  cor.value = "";

  localStorage.setItem("listaVeiculos", JSON.stringify(listaVeiculos));

  window.alert("Veículo cadastrado com sucesso!");
}
