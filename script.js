var totalCarne;
var totalCerveja;
var totalBebida;

function resultado(){

    //style
    let botao = document.getElementById("botao");
    botao.value = "Calcular Novamente";
    botao.style.width = "40%";
    let center = document.getElementById("resultado");
    center.style.textAlign = "center";
    let h2 = document.getElementById("h2");
    h2.innerHTML = "Calculando...";
    h2.style.color = "#333333"

    setTimeout(valores, 1500);
     
    //calculos:
    let duracao = document.getElementById("duração");
    if(duracao.value < 6){
       let adultos = document.getElementById("adultos");
       let criancas = document.getElementById("crianças");
       totalCarne = adultos.value * 400 + criancas.value * 200;
       totalCerveja = adultos.value * 1200;
       totalBebida = adultos.value * 1000 + criancas.value * 500;
    }else{
       let adultos = document.getElementById("adultos");
       let criancas = document.getElementById("crianças");
       totalCarne = adultos.value * 650 + criancas.value * 300;
       totalCerveja = adultos.value * 2000;
       totalBebida = adultos.value * 1500 + criancas.value * 750;
    }
}

function valores(){
    let h2 = document.getElementById("h2");
    h2.innerHTML = "Vai precisar de:";
    h2.style.fontSize = "1.2vm"
    let carne = document.getElementById("carne");
    let cerveja = document.getElementById("cerveja");
    let bebida = document.getElementById("bebida");

    if(totalCarne >= 1000){
        totalCarne = totalCarne / 1000;
        carne.innerHTML = totalCarne + "Kg de carne";
    }else if(totalCarne > 0 && totalCarne < 1000){
        carne.innerHTML = totalCarne + "g de carne";
    }else{
        carne.innerHTML = "Nenhuma Carne";
    }

    //forma com garrafas e latas
    totalCerveja = totalCerveja / 350;
    totalCerveja = Math.ceil(totalCerveja);
    if(totalCerveja > 0 && totalCerveja <= 1){
        cerveja.innerHTML = totalCerveja + " Lata de Cerveja de 350ml";
    }else if(totalCerveja > 1){
        cerveja.innerHTML = totalCerveja + " Latas de Cerveja de 350ml";
    }else{
        cerveja.innerHTML = "Nenhuma Lata de Cerveja";
    }
    totalBebida = totalBebida / 2000;
    totalBebida = Math.ceil(totalBebida);
    if(totalBebida > 0 && totalBebida <= 1){
        bebida.innerHTML = totalBebida + " Garrafa de 2L de Bebidas";
    }else if(totalBebida > 1){
        bebida.innerHTML = totalBebida + " Garrafas de 2L de Bebidas";
    }else{
        bebida.innerHTML = "Nenhuma Garrafa de bebida";
    }

    //forma com L e ml
    /*if(totalCerveja >= 1000){
        totalCerveja = totalCerveja / 1000;
        cerveja.innerHTML = totalCerveja + " L de cerveja"; 
    }else{
        cerveja.innerHTML = totalCerveja + " ml de cerveja"; 
    }
    if(totalBebida >= 1000){
        totalBebida = totalBebida / 1000;
        bebida.innerHTML = totalBebida + " L de bebidas";
    }else{
        bebida.innerHTML = totalBebida + " ml de bebidas";
    }*/
}
