// Refererer til HTLML elementet med id="display"
const display = document.getElementById("display");

// Definerer en funksjon for å legge til input i displayet.
function appendToDisplay(input) {
  // Legger til input i displayet.
  display.value += input;
}

// Definerer en funksjon for å fjerne input fra displayet.
function clearDisplay() {
  // Fjerner input i displayet og gjør om til en tom string.
  display.value = "";
}

// Definerer en funksjon for å kalkulere det som er i displayet.
function calculate() {
  // Bruker eval() for å kalkulere det som er i displayet.
  // Setter resultatet i displayet.
  display.value = eval(display.value);
}
