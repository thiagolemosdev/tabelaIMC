function meuEscopo() {
  const botao = document.querySelector(".submit");
  const resultado = document.querySelector(".resultado");

  function calculaImc(peso, altura) {
    const imc = (peso / (altura * altura)).toFixed(2);
    // resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} <p/>`;
    if (imc < 18.5) {
      resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Abaixo do peso)<p/>`;
    } else if (imc >= 18.5 && imc < 25) {
      resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Peso normal)<p/>`;
    } else if (imc >= 25 && imc < 30) {
      resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Sobrepeso)<p/>`;
    } else if (imc >= 30 && imc < 35) {
      resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Obesidade grau 1) <p/>`;
    } else if (imc >= 35 && imc < 40) {
      resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Obesidade grau 2) <p/>`;
    } else if (imc >= 40) {
      resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Obesidade grau 3) <p/>`;
    }
  }

  function validaPesoAltura(event) {
    event.preventDefault();
    const peso = Number(document.querySelector(".peso").value);
    const altura = Number(document.querySelector(".altura").value);

    if (!altura || !peso) {
      resultado.innerHTML = `<p class="invalido">Peso e Altura devem ser numeros <p/>`;
    } else if (altura <= 0.49 || altura >= 2.52) {
      resultado.innerHTML = `<p class="invalido">Altura invalida. Altura deve estar entre 0.50 e 2.51 <p/>`;
    } else if (peso < 20 || peso > 452) {
      resultado.innerHTML = `<p class="invalido">Peso Invalido. Peso deve estar entre 20 e 452 <p/>`;
    } else {
      calculaImc(peso, altura);
    }
  }

  botao.addEventListener("click", validaPesoAltura);
}

meuEscopo();
