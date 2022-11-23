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

    // Malha 1:
    // i1 == i2 + i3;
    // resistor1Valor * i1 + resistor2Valor * i3 + resistor3Valor * i1 + resistor4Valor * i1 - geradorValor == 0;
    // i1 * (resistor1Valor + resistor3Valor + resistor4Valor) + resistor2Valor * i3 == geradorValor
    
    // Malha 2:
    // resistor5Valor * i2 - resistor2Valor * i3 + resistor6Valor * i2 + receptorValor == 0;
    // i2 * (resistor5Valor + resistor6Valor) - resistor2Valor * i3 == -receptorValor
    
    // Sistema de equações do Kirchoff:
    // i1 - i2 == i3

    // i1 * (resistor1Valor + resistor3Valor + resistor4Valor) + resistor2Valor * (i1 - i2) == geradorValor
    // i1 * (resistor1Valor + resistor3Valor + resistor4Valor) + resistor2Valor * i1 - resistor2Valor * i2 == geradorValor
    // i1 * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) - resistor2Valor * i2 == geradorValor
    // i1 * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) == geradorValor + resistor2Valor * i2
    // i1 == (geradorValor + resistor2Valor * i2) / (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)

    // i2 * (resistor5Valor + resistor6Valor) - resistor2Valor * (i1 - i2) == -receptorValor
    // i2 * (resistor5Valor + resistor6Valor) - resistor2Valor * i1 + resistor2Valor * i2 == -receptorValor
    // i2 * (resistor5Valor + resistor6Valor + resistor2Valor) - resistor2Valor * i1 == -receptorValor
    // i2 * (resistor5Valor + resistor6Valor + resistor2Valor) - resistor2Valor * (geradorValor + resistor2Valor * i2) / (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) == -receptorValor
    // (i2 * (resistor5Valor + resistor6Valor + resistor2Valor)) - (resistor2Valor * (geradorValor + resistor2Valor * i2) / (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)) == -receptorValor

    // i2 * (resistor5Valor + resistor6Valor + resistor2Valor) * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) - resistor2Valor * (geradorValor + resistor2Valor * i2) / (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) == -receptorValor
    // i2 * (resistor5Valor + resistor6Valor + resistor2Valor) * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) - resistor2Valor * (geradorValor + resistor2Valor * i2) == -receptorValor * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)
    // i2 * (resistor5Valor + resistor6Valor + resistor2Valor) * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) - resistor2Valor * geradorValor - resistor2Valor * resistor2Valor * i2 == -receptorValor * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)
    // i2 * (((resistor5Valor + resistor6Valor + resistor2Valor) * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)) - resistor2Valor * resistor2Valor) - resistor2Valor * geradorValor == -receptorValor * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)
    // i2 * (((resistor5Valor + resistor6Valor + resistor2Valor) * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)) - resistor2Valor * resistor2Valor) == -receptorValor * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) + resistor2Valor * geradorValor
    // i2 == (-receptorValor * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) + resistor2Valor * geradorValor) / (((resistor5Valor + resistor6Valor + resistor2Valor) * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)) - resistor2Valor * resistor2Valor);

    var i2SemArredondamento = (-receptorValor * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor) + resistor2Valor * geradorValor) / (((resistor5Valor + resistor6Valor + resistor2Valor) * (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor)) - resistor2Valor * resistor2Valor);
    var i1SemArredondamento = (geradorValor + resistor2Valor * i2SemArredondamento) / (resistor1Valor + resistor2Valor + resistor3Valor + resistor4Valor);
    
    var i2 = i2SemArredondamento.toFixed(2);
    var i1 = i1SemArredondamento.toFixed(2);

    var i3 = i1 - i2;

    console.log(i1);
    console.log(i2);
    console.log(i3);

    // Corrente total no circuito:
    var U = geradorValor;

    var iTotal = i1;
    var correnteTotal = iTotal.replace(".", ",");

    // Corrente em cada resistor:
    // It = I1 + I2 + I3....
    var I1 = i1;
    var I2 = i3;
    var I3 = i1;
    var I4 = i1;
    var I5 = i2;
    var I6 = i2;
    var IReceptor = i2;
    var IGerador = i1;

    var correnteResistor1 = I1.toString().replace(".", ",");
    var correnteResistor2 = I2.toString().replace(".", ",");
    var correnteResistor3 = I3.toString().replace(".", ",");
    var correnteResistor4 = I4.toString().replace(".", ",");
    var correnteResistor5 = I5.toString().replace(".", ",");
    var correnteResistor6 = I6.toString().replace(".", ",");

    // Potência consumida em cada elemento do circuito:
    var U1 = I1 * resistor1Valor;
    var U2 = I2 * resistor2Valor;
    var U3 = I3 * resistor3Valor;
    var U4 = I4 * resistor4Valor;
    var U5 = I5 * resistor5Valor;
    var U6 = I6 * resistor6Valor;
    var UReceptor = receptorValor;

    var P1 = U1 * I1;
    var P2 = U2 * I2;
    var P3 = U3 * I3;
    var P4 = U4 * I4;
    var P5 = U5 * I5;
    var P6 = U6 * I6;
    var PReceptor = UReceptor * IReceptor;

    var PotenciaResistor1 = P1.toFixed(2).replace(".", ",");
    var PotenciaResistor2 = P2.toFixed(2).replace(".", ",");
    var PotenciaResistor3 = P3.toFixed(2).replace(".", ",");
    var PotenciaResistor4 = P4.toFixed(2).replace(".", ",");
    var PotenciaResistor5 = P5.toFixed(2).replace(".", ",");
    var PotenciaResistor6 = P6.toFixed(2).replace(".", ",");
    var PotenciaReceptor = PReceptor.toFixed(2).replace(".", ",");

    // Potência produzida pelo gerador:
    var PGerador = U * IGerador;
    var PotenciaGerador = PGerador.toString().replace(".", ",");

    document.querySelector("#respostaCorrenteTotal").innerHTML = "Resultado: O valor da Corrente Total do circuito é: " + correnteTotal + " A.";
    document.querySelector("#respostaCorrenteCadaResistor").innerHTML = "Resultado: Resistor 1: " + correnteResistor1 + " A. | " + "Resistor 2: " + correnteResistor2 + " A. | " + "Resistor 3: " + correnteResistor3 + " A. | " + "Resistor 4: " + correnteResistor4 + " A. | " + "Resistor 5: " + correnteResistor5 + " A. | " + "Resistor 6: " + correnteResistor6 + " A.";
    document.querySelector("#respostaPotenciaCadaElemento").innerHTML = "Resultado: O valor da Potência no Resistor 1: " + PotenciaResistor1 + " W. | " + "Resistor 2: " + PotenciaResistor2 + " W. | " + "Resistor 3: " + PotenciaResistor3 + " W. | " + "Resistor 4: " + PotenciaResistor4 + " W. | " + "Resistor 5: " + PotenciaResistor5 + " W. | " + "Resistor 6: " + PotenciaResistor6 + " W. | " + "Receptor: " + PotenciaReceptor + " W.";
    document.querySelector("#respostaPotenciaGerador").innerHTML = "Resultado: O valor da Potência produzida pelo Gerador é: " + PotenciaGerador + " W.";
}

function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}