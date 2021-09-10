var totalCarne;
var totalCerveja;
var totalLatão;
var totalBebida;

function resultado() {

    //style
    let botao = document.getElementById("botao");
    botao.value = "Calcular Novamente";
    botao.style.width = "45%";
    let h2 = document.getElementById("h2");
    h2.innerHTML = "Calculando...";

    setTimeout(valores, 1200);

    //calculos:
    let duracao = document.getElementById("duração");
    if (duracao.value < 6) {
        let adultos = document.getElementById("adultos");
        let criancas = document.getElementById("crianças");
        totalCarne = adultos.value * 400 + criancas.value * 200;
        totalCerveja = adultos.value * 1200;
        totalBebida = adultos.value * 1000 + criancas.value * 500;
    } else {
        let adultos = document.getElementById("adultos");
        let criancas = document.getElementById("crianças");
        totalCarne = adultos.value * 650 + criancas.value * 300;
        totalCerveja = adultos.value * 2000;
        totalBebida = adultos.value * 1500 + criancas.value * 750;
    }
}

function valores() {

    let h2 = document.getElementById("h2");
    h2.innerHTML = "Vai precisar de:";
    let carne = document.getElementById("carne");
    let cerveja = document.getElementById("cerveja");
    let bebida = document.getElementById("bebida");
    let latao = document.getElementById("latao");

    //carne
    if (totalCarne >= 1000) {
        totalCarne = totalCarne / 1000;
        carne.innerHTML = totalCarne + "Kg de carnes em geral";
    } else if (totalCarne > 0 && totalCarne < 1000) {
        carne.innerHTML = totalCarne + "g de carnes em geral";
    } else {
        carne.innerHTML = "Nenhuma Carne";
    }

    //cerveja
    totalLatinha = totalCerveja / 350;
    totalLatinha = Math.ceil(totalLatinha);
    totalLatão = totalCerveja / 473;
    totalLatão = Math.ceil(totalLatão);
    if (totalLatinha > 0 && totalLatinha <= 1 && totalLatão > 0 && totalLatão <= 1) {
        cerveja.innerHTML = totalLatinha + " Lata de Cerveja de 350ml ou " +
        totalLatão + "Latão de Cerveja de 473ml";
    } else if (totalLatinha > 1 && totalLatão > 1) {
        cerveja.innerHTML = totalLatinha + " Latas de Cerveja de 350ml (" +
        totalLatinha * 350 + "ml) ou " + totalLatão + " Latões de Cerveja de 473ml (" + 
        totalLatão * 473 + "ml)";
    } else {
        cerveja.innerHTML = "Nenhuma Lata de Cerveja";
    }

    //bebidas
    totalBebida = totalBebida / 2000;
    totalBebida = Math.ceil(totalBebida);
    if (totalBebida > 0 && totalBebida <= 1) {
        bebida.innerHTML = totalBebida + " Garrafa de 2L de Bebidas";
    } else if (totalBebida > 1) {
        bebida.innerHTML = totalBebida + " Garrafas de 2L de Bebidas";
    } else {
        bebida.innerHTML = "Nenhuma Garrafa de bebida";
    }
    
}
