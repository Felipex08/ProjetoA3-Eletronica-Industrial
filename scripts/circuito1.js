function CalculaCircuito1() {
    var resistor1 = document.querySelector("#resistor1");
    var resistor2 = document.querySelector("#resistor2");
    var resistor3 = document.querySelector("#resistor3");
    var resistor4 = document.querySelector("#resistor4");
    var resistor5 = document.querySelector("#resistor5");
    var resistor6 = document.querySelector("#resistor6");
    var gerador = document.querySelector("#gerador");
    var receptor = document.querySelector("#receptor");

    var resistor1Value = resistor1.value;
    var resistor2Value = resistor2.value;
    var resistor3Value = resistor3.value;
    var resistor4Value = resistor4.value;
    var resistor5Value = resistor5.value;
    var resistor6Value = resistor6.value;
    var geradorValue = gerador.value;
    var receptorValue = receptor.value;

    var resistor1Valor = parseFloat(ConverteVirgulaEmPonto(resistor1Value));
    var resistor2Valor = parseFloat(ConverteVirgulaEmPonto(resistor2Value));
    var resistor3Valor = parseFloat(ConverteVirgulaEmPonto(resistor3Value));
    var resistor4Valor = parseFloat(ConverteVirgulaEmPonto(resistor4Value));
    var resistor5Valor = parseFloat(ConverteVirgulaEmPonto(resistor5Value));
    var resistor6Valor = parseFloat(ConverteVirgulaEmPonto(resistor6Value));
    var geradorValor = parseFloat(ConverteVirgulaEmPonto(geradorValue));
    var receptorValor = parseFloat(ConverteVirgulaEmPonto(receptorValue));

    // Kirchoff:
    /*geradorValor - resistor1Valor * i - resistor2Valor * i - resistor3Valor * i - resistor4Valor * i - resistor5Valor * i - resistor6Valor * i - receptorValor == 0;
    i * (resistor1Valor - resistor2Valor - resistor3Valor - resistor4Valor - resistor5Valor - resistor6Valor) == -(geradorValor - receptorValor) */
    var I = (receptorValor - geradorValor) / (-resistor1Valor - resistor2Valor - resistor3Valor - resistor4Valor - resistor5Valor - resistor6Valor);
    //var I = Math.abs(i);
    console.log(I);

    //var resistenciaRecptor = receptorValor / i;

    // Corrente total no circuito:
    var U = geradorValor;
    //var R = resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor + resistor5Valor + resistor6Valor;
    //var I = U / R;

    var correnteTotal = I.toFixed(2).replace(".", ",");

    // Corrente em cada resistor:
    // I = I1 = I2 = I3 ....
    var I1 = I;
    var I2 = I;
    var I3 = I;
    var I4 = I;
    var I5 = I;
    var I6 = I;

    var correnteResistor1 = I1.toFixed(2).replace(".", ",");
    var correnteResistor2 = I2.toFixed(2).replace(".", ",");
    var correnteResistor3 = I3.toFixed(2).replace(".", ",");
    var correnteResistor4 = I4.toFixed(2).replace(".", ",");
    var correnteResistor5 = I5.toFixed(2).replace(".", ",");
    var correnteResistor6 = I6.toFixed(2).replace(".", ",");

    // Potência consumida em cada elemento do circuito:
    var U1 = I * resistor1Valor;
    var U2 = I * resistor2Valor;
    var U3 = I * resistor3Valor;
    var U4 = I * resistor4Valor;
    var U5 = I * resistor5Valor;
    var U6 = I * resistor6Valor;
    var UReceptor = receptorValor;

    //var UT = U1 + U2 + U3 + U4 + U5 + U6 + UReceptor;
    //console.log(UT);

    var P1 = U1 * I;
    var P2 = U2 * I;
    var P3 = U3 * I;
    var P4 = U4 * I;
    var P5 = U5 * I;
    var P6 = U6 * I;
    var PReceptor = UReceptor * I;

    var PotenciaResistor1 = P1.toFixed(2).replace(".", ",");
    var PotenciaResistor2 = P2.toFixed(2).replace(".", ",");
    var PotenciaResistor3 = P3.toFixed(2).replace(".", ",");
    var PotenciaResistor4 = P4.toFixed(2).replace(".", ",");
    var PotenciaResistor5 = P5.toFixed(2).replace(".", ",");
    var PotenciaResistor6 = P6.toFixed(2).replace(".", ",");
    var PotenciaReceptor = PReceptor.toFixed(2).replace(".", ",");

    // Potência produzida pelo gerador:
    var PGerador = U * I;
    var PotenciaGerador = PGerador.toFixed(2).replace(".", ",");

    document.querySelector("#respostaCorrenteTotal").innerHTML = "Resultado: O valor da Corrente Total do circuito é: " + correnteTotal + " A.";
    document.querySelector("#respostaCorrenteCadaResistor").innerHTML = "Resultado: Resistor 1: " + correnteResistor1 + " A. | " + "Resistor 2: " + correnteResistor2 + " A. | " + "Resistor 3: " + correnteResistor3 + " A. | " + "Resistor 4: " + correnteResistor4 + " A. | " + "Resistor 5: " + correnteResistor5 + " A. | " + "Resistor 6: " + correnteResistor6 + " A.";
    document.querySelector("#respostaPotenciaCadaElemento").innerHTML = "Resultado: O valor da Potência no Resistor 1: " + PotenciaResistor1 + " W. | " + "Resistor 2: " + PotenciaResistor2 + " W. | " + "Resistor 3: " + PotenciaResistor3 + " W. | " + "Resistor 4: " + PotenciaResistor4 + " W. | " + "Resistor 5: " + PotenciaResistor5 + " W. | " + "Resistor 6: " + PotenciaResistor6 + " W. | " + "Receptor: " + PotenciaReceptor + " W.";
    document.querySelector("#respostaPotenciaGerador").innerHTML = "Resultado: O valor da Potência produzida pelo Gerador é: " + PotenciaGerador + " W.";
}

function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}