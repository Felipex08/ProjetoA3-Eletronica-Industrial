function PegaEstadoBotao() {
    var estadoBotao = document.querySelector("#testeLogica");
    var estadoBotaoValue = estadoBotao.innerHTML;
    return estadoBotaoValue
}

function BotaoBoleano() {
    var estadoBotao = document.querySelector("#testeLogica");
    console.log("Passou aqui");
    var estadoBotaoValor = PegaEstadoBotao();
    console.log(estadoBotaoValor);
    
    if(estadoBotaoValor == "1") {
        console.log("É 1");
        estadoBotaoValor = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor = "1";
    }
    console.log(estadoBotaoValor);
    estadoBotao.innerHTML = estadoBotaoValor;

    LogicaLigaDesligaLedCircuito1();
}

function LogicaLigaDesligaLedCircuito1() {
    var estadoBotaoValor = PegaEstadoBotao();
    var led;
    
    if(estadoBotaoValor == "1") {
        console.log("É 1");
        led = "0";
    } else {
        console.log("É 0");
        led = "1";
    }

    if(led == "1") {
        CriaCircuito1();
        CriaLedAcesso();
        //document.querySelector("#respostaLed").innerHTML = "Ligado";
    } else {
        CriaCircuito1();
        CriaLedApagado();
        //document.querySelector("#respostaLed").innerHTML = "Desligado";
    }
}

function CriaCircuito1() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "green";
    pincel.fillRect(0, 80, 553, 3);

    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(260, 60);
    pincel.lineTo(260, 100);
    pincel.lineTo(300, 81);
    pincel.fill();

    pincel.beginPath();
    pincel.arc(300, 80, 7, 2 * Math.PI, 0);
    pincel.fill();
}

function CriaLedAcesso() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "grey";
    pincel.fillRect(552, 50, 2, 30);

    pincel.fillStyle = "red";
    pincel.beginPath();
    pincel.arc(552, 30, 20, 3.14, 2 * 3.14);
    pincel.fill();
    pincel.fillRect(532, 30, 39, 20);
    pincel.fillRect(571, 30, 1, 20);
    pincel.fillRect(532, 50, 40, 1);
}

function CriaLedApagado() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "grey";
    pincel.fillRect(552, 50, 2, 30);
    pincel.beginPath();
    pincel.arc(552, 30, 20, 3.14, 2 * 3.14);
    pincel.fill();
    pincel.fillRect(532, 30, 39, 20);
    pincel.fillRect(571, 30, 1, 20);
    pincel.fillRect(532, 50, 40, 1);
}