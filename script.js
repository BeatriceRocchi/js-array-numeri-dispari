let numOdd = [];

for (let i = 0; i < 6; i++) {
  const number = parseInt(prompt("Inserisci un numero: "));
  console.log(number);

  if (number % 2) {
    numOdd.push(number);
  }
}

console.log(numOdd);
document.querySelector("div").innerHTML = numOdd.join(" | ");
