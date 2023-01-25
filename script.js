nameInput = document.getElementById("name-input");
nameCard = document.getElementById("name-card");

numberInput = document.getElementById("number-input");
numCard = document.getElementById("num-card");

expMonth = document.getElementById("exp-month");
expMonthInput = document.getElementById("exp-month-input");

expYear = document.getElementById("exp-year");
expYearInput = document.getElementById("exp-year-input");

cvcInput = document.getElementById("cvc-input");
cvcCard = document.getElementById("cvc-card");

errorMsg = document.querySelectorAll(".error-msg");

form = document.querySelector("form");
successDiv = document.querySelector(".success-div");

mesLimite = 12;
anoLimite = 23;

function setCardNumber(e) {
  numCard.innerText = format(e.target.value);
}

function setCardName(e) {
  nameCard.innerText = e.target.value;
}

function setCardMonth(e) {
  expMonth.innerText = e.target.value;
}

function setCardYear(e) {
  expYear.innerText = e.target.value;
}

function setCardCvc(e) {
  cvcCard.innerText = e.target.value;
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

nameInput.addEventListener("keyup", setCardName);
nameInput.addEventListener("blur", validaNome);

numberInput.addEventListener("keyup", setCardNumber);
numberInput.addEventListener("blur", validaNumero);

expMonthInput.addEventListener("keyup", setCardMonth);
expMonthInput.addEventListener("blur", validaMes);

expYearInput.addEventListener("keyup", setCardYear);
expYearInput.addEventListener("blur", validaAno);

cvcInput.addEventListener("keyup", setCardCvc);
cvcInput.addEventListener("blur", validaCvc);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validaForm) {
    form.classList.toggle("inv");
    successDiv.classList.toggle("inv");
  }
});

const listaErros = [
  "Wrong format, numbers only",
  "Can't be blank",
  "Letters only",
  "Invalid date"
];

function validaNome() {
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    errorMsg[0].classList.remove("inv");
    errorMsg[0].innerText = listaErros[1];
    return false;
  } else if (nameInput.validity.patternMismatch) {
    nameInput.classList.add("error");
    errorMsg[0].classList.remove("inv");
    errorMsg[0].innerText = listaErros[2];
    return false;
  } else {
    errorMsg[0].classList.add("inv");
    nameInput.classList.remove("error");
    return true;
  }
}

function validaNumero() {
  if (numberInput.value === "") {
    numberInput.classList.add("error");
    errorMsg[1].innerText = listaErros[1];
    return false;
  } else if (numberInput.validity.patternMismatch) {
    numberInput.classList.add("error");
    errorMsg[1].innerText = listaErros[0];
    return false;
  } else {
    errorMsg[1].classList.add("inv");
    numberInput.classList.remove("error");
    return true;
  }
}

function validaMes() {
  if (expMonthInput.value === "") {
    expMonthInput.classList.add("error");
    errorMsg[2].innerText = listaErros[1];
    return false;
  } else if (expMonthInput.validity.patternMismatch) {
    expMonthInput.classList.add("error");
    errorMsg[2].innerText = listaErros[0];
    return false;
  } else if (expMonthInput.value > mesLimite.toString()) {
    expMonthInput.classList.add("error");
    errorMsg[2].innerText = listaErros[3];
    return false;
  } else {
    errorMsg[2].classList.add("inv");
    expMonthInput.classList.remove("error");
    return true;
  }
}

function validaAno() {
  if (expYearInput.value === "") {
    expYearInput.classList.add("error");
    errorMsg[2].innerText = listaErros[1];
    return false;
  } else if (expYearInput.validity.patternMismatch) {
    expYearInput.classList.add("error");
    errorMsg[2].innerText = listaErros[0];
    return false;
  } else if (expYearInput.value < anoLimite.toString()) {
    expYearInput.classList.add("error");
    errorMsg[2].innerText = listaErros[3];
    return false;
  } else {
    errorMsg[2].classList.add("inv");
    expYearInput.classList.remove("error");
    return true;
  }
}

function validaCvc() {
  if (cvcInput.value === "") {
    cvcInput.classList.add("error");
    errorMsg[3].innerText = listaErros[1];
    return false;
  } else if (cvcInput.validity.patternMismatch) {
    cvcInput.classList.add("error");
    errorMsg[3].innerText = listaErros[0];
    return false;
  } else {
    errorMsg[3].classList.add("inv");
    cvcInput.classList.remove("error");
    return true;
  }
}

function validaForm() {
  if (validaAno && validaCvc && validaMes && validaNome && validaNumero) {
    return true;
  }
}
