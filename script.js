var totalCarne;
var totalCerveja;
var totalLatão;
var totalBebida;

var carneBovina;
var carneOutras;

function calcNovamente() {
    let adultos = document.getElementById("adultos");
    let adultoSemAlcool = document.getElementById("adultoSemAlcool");
    let crianca = document.getElementById("crianças");
    let duracao = document.getElementById("duração");

    adultos.value = "";
    adultoSemAlcool.value = "";
    crianca.value = "";
    duracao.value = "";

    let tela1 = document.getElementById("tela1");
    let tela2 = document.getElementById("tela2");
    tela1.style.display = "flex";
    tela2.style.display = "none";
}

function resultado() {

    //style
    let tela1 = document.getElementById("tela1");
    let tela2 = document.getElementById("tela2");
    tela1.style.display = "none";
    tela2.style.display = "flex";

    let resultado = document.getElementById("resultado");
    resultado.style.display = "inline";

    let botao = document.getElementById("botao2");
    botao.style.display = "block";

    //calculos:
    let adultos = document.getElementById("adultos");
    let adultoSemAlcool = document.getElementById("adultoSemAlcool");
    let crianca = document.getElementById("crianças");
    let duracao = document.getElementById("duração");

    if (duracao.value < 6) {
        totalCarne = (adultos.value * 400) + (adultoSemAlcool.value * 400) + (crianca.value * 200);
        totalCerveja = adultos.value * 1200;
        totalBebida = (adultos.value * 1000) + (adultoSemAlcool.value * 1000) + (crianca.value * 500);
    } else {
        totalCarne = (adultos.value * 650) + (adultoSemAlcool.value * 650) + (crianca.value * 300);
        totalCerveja = adultos.value * 2000;
        totalBebida = (adultos.value * 1500) + (adultoSemAlcool.value * 1500) + (crianca.value * 750);
    }

    valores();
}

function valores() {

    let h2 = document.getElementById("h2");
    h2.innerHTML = "Vai precisar de:";

    let carne = document.getElementById("carneTotal");
    let carneBovina = document.getElementById("carneBovina");
    let carneOutras = document.getElementById("carneOutras");
    let cerveja = document.getElementById("lata");
    let latao = document.getElementById("latao");
    let bebida = document.getElementById("bebida");

    //carne

    if (totalCarne >= 1000) {

        let totalCarneBovina = totalCarne * 0.7;
        let totalCarneOutras = totalCarne * 0.3;

        if (totalCarneBovina >= 1000 && totalCarneOutras >= 1000) {

            totalCarneBovina = totalCarneBovina / 1000;
            totalCarneOutras = totalCarneOutras / 1000;
            totalCarne = totalCarne / 1000;

            carneBovina.innerHTML = "Carne Bovina = " + Math.round(totalCarneBovina * 10) / 10 + "kg";
            carneOutras.innerHTML = "Outras Carnes = " + Math.round(totalCarneOutras * 10) / 10 + "kg";
            carne.innerHTML = "Total de carne = " + Math.round(totalCarne * 10) / 10 + "kg";

        } else if (totalCarneBovina >= 1000 && totalCarneOutras < 1000) {

            totalCarneBovina = totalCarneBovina / 1000;
            totalCarne = totalCarne / 1000;

            carneBovina.innerHTML = "Carne Bovina = " + Math.round(totalCarneBovina * 10) / 10 + "kg";
            carneOutras.innerHTML = "Outras Carnes = " + totalCarneOutras + "g";
            carne.innerHTML = "Total de carne = " + Math.round(totalCarne * 10) / 10 + "kg";

        } else {

            totalCarne = totalCarne / 1000;

            carneBovina.innerHTML = "Carne Bovina = " + totalCarneBovina + "g";
            carneOutras.innerHTML = "Outras Carnes = " + totalCarneOutras + "g";
            carne.innerHTML = "Total de carne = " + Math.round(totalCarne * 10) / 10 + "kg";
        }

    } else if (totalCarne > 0 && totalCarne < 1000) {

        let totalCarneBovina = totalCarne * 0.7;
        let totalCarneOutras = totalCarne * 0.3;

        carne.innerHTML = "Total de carne = " + totalCarne + "g";
        carneBovina.innerHTML = "Carne Bovina = " + totalCarneBovina + "g";
        carneOutras.innerHTML = "Outras Carnes = " + totalCarneOutras + "g";

    } else {
        carneBovina.innerHTML = "Nenhuma Carne Bovina";
        carneOutras.innerHTML = "Nenhum Outro Tipo de Carne";
        carne.innerHTML = "Nenhuma Carne";
    }

    //cerveja
    totalLatinha = totalCerveja / 350;
    totalLatão = totalCerveja / 473;
    totalLatinha = Math.ceil(totalLatinha);
    totalLatão = Math.ceil(totalLatão);

    if (totalLatinha >= 1 && totalLatão >= 1) {
        cerveja.innerHTML = "Latas de cerveja 375ml = " + totalLatinha;
        let ou = document.getElementById("ou");
        ou.innerHTML = "OU";
        latao.innerHTML = "Latões de cerveja 473ml = " + totalLatão;

    } else {
        cerveja.innerHTML = "Nenhuma Lata de Cerveja";
        let ou = document.getElementById("ou");
        ou.innerHTML = "OU";
        latao.innerHTML = "Nenhum Latão de Cerveja";
    }

    //bebidas
    totalBebida = totalBebida / 2000;
    totalBebida = Math.ceil(totalBebida);
    if (totalBebida > 0 && totalBebida <= 1) {
        bebida.innerHTML = "Garrafa de 2L de Bebida = " + totalBebida;
    } else if (totalBebida > 1) {
        bebida.innerHTML = " Garrafas de 2L de Bebida = " + totalBebida;
    } else {
        bebida.innerHTML = "Nenhuma Garrafa de bebida";
    }
    
}
