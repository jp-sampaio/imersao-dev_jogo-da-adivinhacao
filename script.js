const numberSecret = parseInt(Math.random() * 1000) + 1;
let numberReported = prompt("Informe um número entre 0 e 1000:");
let kicks = 1;

while (parseInt(numberReported) !== numberSecret) {
  if (isNaN(numberReported) || numberReported == null) {
    alert("Por favor, informe um número válido.");
    kicks--
  } else if (numberReported > numberSecret) {
    alert(`Errou... O número ${numberReported} é maior que o número secreto.`);
  } else if (numberReported < numberSecret) {
    alert(`Errou... O número ${numberReported} é menor que o número secreto.`);
  } else {
    alert(
      `Acertou... O número secreto é ${numberSecret}. Parabéns! Você acertou em ${kicks} tentativa(s)`
    );
  }

  alert(`Essa foi sua ${kicks} tentativa`);
  kicks++;

  if (kicks > 10) {
    break;
  }
  numberReported = prompt("Tente novamente. Informe um número entre 0 e 1000:");
}

alert(`Infelizmente acabou suas chances. O número secreto é ${numberSecret}.`);