var modelos = [];

if (localStorage.getItem("modelos")) {
  modelos = JSON.parse(localStorage.getItem("modelos"));
}

var divContainer = document.createElement("div");
divContainer.classList = "container";

var ulModelo = document.createElement("ul");
ulModelo.classList = "modelo";

divContainer.appendChild(ulModelo);

for (const nomeModelo of modelos) {
  adicionarModeloNoDOM(nomeModelo);
}

console.log(divContainer);
var body = document.getElementsByTagName("body")[0];
body.appendChild(divContainer);

function adicionarModelo() {
  const inputNome = document.getElementById("inputName").value;
  const selectMarca = document.getElementById("marca").value;
  const inputSelect = inputNome + '-' + selectMarca;

  if (inputName.value == "") {
    alert("Campo não pode ser vazio!");
  } else {
    adicionarModeloNoDOM(inputSelect);
  }

  modelos.push(inputSelect);
  document.getElementById("inputName").value = "";
  window.alert("Modelo Cadastrado!");
  localStorage.setItem("modelos", JSON.stringify(modelos));
}

function adicionarModeloNoDOM(Nome_marca) {
  var liModelo = document.createElement("li");
  liModelo.classList = "modelo";
  liModelo.innerText = Nome_marca;
  ulModelo.appendChild(liModelo);
}
