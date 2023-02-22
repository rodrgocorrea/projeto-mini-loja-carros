var marcas = [];

if (localStorage.getItem("marcas")) {
  marcas = JSON.parse(localStorage.getItem("marcas"));
}
var divContainer = document.createElement("div");
divContainer.classList = "container";

var ulMarcas = document.createElement("ul");
ulMarcas.classList = "marcas";

divContainer.appendChild(ulMarcas);

for (const nomeMarca of marcas) {
  adicionarMarcaNoDOM(nomeMarca);
}

console.log(divContainer);
var body = document.getElementsByTagName("body")[0];
body.appendChild(divContainer);

function adicionarMarca() {
  const inputNome = document.getElementsByName("nome")[0];

  if (inputNome.value == "") {
    alert("Campo não pode ser vazio!");
  } else {
    adicionarMarcaNoDOM(inputNome.value);
  }

  marcas.push(inputNome.value);
  console.log(marcas);
  inputNome.value = "";
  window.alert('Marca Cadastrada!');
  localStorage.setItem("marcas", JSON.stringify(marcas));
}

function adicionarMarcaNoDOM(nome) {
  var liMarca = document.createElement("li");
  liMarca.classList = "marca";
  liMarca.innerText = nome;
  ulMarcas.appendChild(liMarca);
}
