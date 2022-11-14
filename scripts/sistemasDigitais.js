function CriaLed(acesso, posicaoInicialX, posicaoInicialY, canvas) {
    var tela = document.querySelector(canvas);
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "grey";
    pincel.fillRect(posicaoInicialX, posicaoInicialY, 2, 30);

    if(acesso == 1) {
        pincel.fillStyle = "red";
    }

    pincel.beginPath();
    pincel.arc(posicaoInicialX, posicaoInicialY - 20, 20, 3.14, 2 * 3.14);
    pincel.fill();
    pincel.fillRect(posicaoInicialX - 20, posicaoInicialY - 20, 39, 20);
    pincel.fillRect(posicaoInicialX + 19, posicaoInicialY - 20, 1, 20);
    pincel.fillRect(posicaoInicialX - 20, posicaoInicialY, 40, 1);
}

// ----------- Circuito 1 --------------

function BotaoBoleanoCircuito1() {
    var estadoBotao = document.querySelector("#botaoCircuito1");
    var estadoBotaoValue = estadoBotao.innerHTML;
    console.log("Passou aqui");
    var estadoBotaoValor = estadoBotaoValue;
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
    var estadoBotao = document.querySelector("#botaoCircuito1");
    var estadoBotaoValue = estadoBotao.innerHTML;
    var estadoBotaoValor = estadoBotaoValue;
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
        CriaLed(1, 552, 50, "#canvasCircuito1");
    } else {
        CriaCircuito1();
        CriaLed(0, 552, 50, "#canvasCircuito1");
    }
}

function CriaCircuito1() {
    var tela = document.querySelector("#canvasCircuito1");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "green";
    pincel.fillRect(0, 80, 553, 3);

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(260, 60);
    pincel.lineTo(260, 100);
    pincel.lineTo(300, 81);
    pincel.fill();

    pincel.beginPath();
    pincel.arc(300, 80, 7, 2 * Math.PI, 0);
    pincel.fill();
}

// --------- Circuito 2 ---------

function Botao1BoleanoCircuito2() {
    var estadoBotao1 = document.querySelector("#botao1Circuito2");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    if(estadoBotaoValor1 == "1") {
        console.log("É 1");
        estadoBotaoValor1 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor1 = "1";
    }
    
    estadoBotao1.innerHTML = estadoBotaoValor1;

    LogicaLigaDesligaLedCircuito2();
}

function Botao2BoleanoCircuito2() {
    var estadoBotao2 = document.querySelector("#botao2Circuito2");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;

    if(estadoBotaoValor2 == "1") {
        console.log("É 1");
        estadoBotaoValor2 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor2 = "1";
    }
    
    estadoBotao2.innerHTML = estadoBotaoValor2;

    LogicaLigaDesligaLedCircuito2();
}

function LogicaLigaDesligaLedCircuito2() {
    var estadoBotao1 = document.querySelector("#botao1Circuito2");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    var estadoBotao2 = document.querySelector("#botao2Circuito2");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;
    var led;
    
    if(estadoBotaoValor1 == "1" && estadoBotaoValor2 == "1") {
        led = "1";
    } else {
        led = "0";
    }

    if(led == "1") {
        CriaCircuito2();
        CriaLed(1, 552, 48, "#canvasCircuito2");
    } else {
        CriaCircuito2();
        CriaLed(0, 552, 48, "#canvasCircuito2");
    }
}

function CriaCircuito2() {
    var tela = document.querySelector("#canvasCircuito2");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "green";
    pincel.fillRect(0, 25, 230, 3);
    pincel.fillRect(0, 125, 230, 3);

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(260, 75, 70, 3 * Math.PI / 2, Math.PI / 2);
    pincel.fill();
    pincel.fillRect(260 - 30, 5, 30, 140);

    pincel.fillStyle = "green";
    pincel.fillRect(330, 75, 223, 3);
}

// ----------- Circuito 3 --------------

function Botao1BoleanoCircuito3() {
    var estadoBotao1 = document.querySelector("#botao1Circuito3");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    if(estadoBotaoValor1 == "1") {
        console.log("É 1");
        estadoBotaoValor1 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor1 = "1";
    }
    
    estadoBotao1.innerHTML = estadoBotaoValor1;

    LogicaLigaDesligaLedCircuito3();
}

function Botao2BoleanoCircuito3() {
    var estadoBotao2 = document.querySelector("#botao2Circuito3");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;

    if(estadoBotaoValor2 == "1") {
        console.log("É 1");
        estadoBotaoValor2 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor2 = "1";
    }
    
    estadoBotao2.innerHTML = estadoBotaoValor2;

    LogicaLigaDesligaLedCircuito3();
}

function LogicaLigaDesligaLedCircuito3() {
    var estadoBotao1 = document.querySelector("#botao1Circuito3");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    var estadoBotao2 = document.querySelector("#botao2Circuito3");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;
    var led;
    
    if(estadoBotaoValor1 == "1" && estadoBotaoValor2 == "1") {
        led = "0";
    } else {
        led = "1";
    }

    if(led == "1") {
        CriaCircuito3();
        CriaLed(1, 552, 48, "#canvasCircuito3");
    } else {
        CriaCircuito3();
        CriaLed(0, 552, 48, "#canvasCircuito3");
    }
}

function CriaCircuito3() {
    var tela = document.querySelector("#canvasCircuito3");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "green";
    pincel.fillRect(0, 25, 230, 3);
    pincel.fillRect(0, 125, 230, 3);

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(260, 75, 70, 3 * Math.PI / 2, Math.PI / 2);
    pincel.fill();
    pincel.fillRect(260 - 30, 5, 30, 140);
    
    pincel.beginPath();
    pincel.arc(340, 75, 10, 2 * Math.PI, 0);
    pincel.fill();

    pincel.fillStyle = "green";
    pincel.fillRect(350, 75, 203, 3);
}

// ----------- Circuito 4 --------------

function Botao1BoleanoCircuito4() {
    var estadoBotao1 = document.querySelector("#botao1Circuito4");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    if(estadoBotaoValor1 == "1") {
        console.log("É 1");
        estadoBotaoValor1 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor1 = "1";
    }
    
    estadoBotao1.innerHTML = estadoBotaoValor1;

    LogicaLigaDesligaLedCircuito4();
}

function Botao2BoleanoCircuito4() {
    var estadoBotao2 = document.querySelector("#botao2Circuito4");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;

    if(estadoBotaoValor2 == "1") {
        console.log("É 1");
        estadoBotaoValor2 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor2 = "1";
    }
    
    estadoBotao2.innerHTML = estadoBotaoValor2;

    LogicaLigaDesligaLedCircuito4();
}

function LogicaLigaDesligaLedCircuito4() {
    var estadoBotao1 = document.querySelector("#botao1Circuito4");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    var estadoBotao2 = document.querySelector("#botao2Circuito4");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;
    var led;
    
    if(estadoBotaoValor1 == "0" && estadoBotaoValor2 == "0") {
        led = "0";
    } else {
        led = "1";
    }

    if(led == "1") {
        CriaCircuito4();
        CriaLed(1, 552, 47, "#canvasCircuito4");
    } else {
        CriaCircuito4();
        CriaLed(0, 552, 47, "#canvasCircuito4");
    }
}

function CriaCircuito4() {
    var tela = document.querySelector("#canvasCircuito4");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "green";
    pincel.fillRect(0, 25, 245, 3);
    pincel.fillRect(0, 125, 245, 3);

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(260, 75);
    pincel.lineTo(240, 5);
    pincel.lineTo(330, 75);
    pincel.lineTo(240, 145);
    pincel.lineTo(260, 75);
    pincel.fill();

    pincel.fillStyle = "green";
    pincel.fillRect(328, 74, 225, 3);
}

// ----------- Circuito 5 --------------

function Botao1BoleanoCircuito5() {
    var estadoBotao1 = document.querySelector("#botao1Circuito5");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    if(estadoBotaoValor1 == "1") {
        console.log("É 1");
        estadoBotaoValor1 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor1 = "1";
    }
    
    estadoBotao1.innerHTML = estadoBotaoValor1;

    LogicaLigaDesligaLedCircuito5();
}

function Botao2BoleanoCircuito5() {
    var estadoBotao2 = document.querySelector("#botao2Circuito5");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;

    if(estadoBotaoValor2 == "1") {
        console.log("É 1");
        estadoBotaoValor2 = "0";
    } else {
        console.log("É 0");
        estadoBotaoValor2 = "1";
    }
    
    estadoBotao2.innerHTML = estadoBotaoValor2;

    LogicaLigaDesligaLedCircuito5();
}

function LogicaLigaDesligaLedCircuito5() {
    var estadoBotao1 = document.querySelector("#botao1Circuito5");
    var estadoBotaoValue1 = estadoBotao1.innerHTML;
    var estadoBotaoValor1 = estadoBotaoValue1;

    var estadoBotao2 = document.querySelector("#botao2Circuito5");
    var estadoBotaoValue2 = estadoBotao2.innerHTML;
    var estadoBotaoValor2 = estadoBotaoValue2;
    var led;
    
    if(estadoBotaoValor1 == "0" && estadoBotaoValor2 == "0") {
        led = "1";
    } else {
        led = "0";
    }

    if(led == "1") {
        CriaCircuito5();
        CriaLed(1, 552, 47, "#canvasCircuito5");
    } else {
        CriaCircuito5();
        CriaLed(0, 552, 47, "#canvasCircuito5");
    }
}

function CriaCircuito5() {
    var tela = document.querySelector("#canvasCircuito5");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "green";
    pincel.fillRect(0, 25, 245, 3);
    pincel.fillRect(0, 125, 245, 3);

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(260, 75);
    pincel.lineTo(240, 5);
    pincel.lineTo(330, 75);
    pincel.lineTo(240, 145);
    pincel.lineTo(260, 75);
    pincel.fill();

    pincel.beginPath();
    pincel.arc(340, 75, 10, 2 * Math.PI, 0);
    pincel.fill();

    pincel.fillStyle = "green";
    pincel.fillRect(350, 74, 203, 3);
}