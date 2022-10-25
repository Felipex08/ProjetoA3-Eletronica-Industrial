function CalculaCircuito2() {
    const tensaoSilicio = 0.7;
    const tensaoGermanio = 0.3;

    var gerador = document.querySelector("#geradorCircuito2");
    var transformadorN1 = document.querySelector("#transformador1");
    var transformadorN2 = document.querySelector("#transformador2");
    var quantidadeDiodo = document.querySelector("#quantidadeDiodo");
    var tipoDiodo = document.querySelector('input[name="Diodo"]:checked');
    var capacitor = document.querySelector("#capacitor");
    var resistenciaCapacitor = document.querySelector("#resistenciaCapacitor");
    var frequenciaCarga = document.querySelector("#frequenciaCarga");

    var geradorValue = gerador.value;
    var transformadorN1Value = transformadorN1.value;
    var transformadorN2Value = transformadorN2.value;
    var quantidadeDiodoValue = quantidadeDiodo.value;
    var tipoDiodoValue = tipoDiodo.value;
    var capacitorValue = capacitor.value;
    var resistenciaCapacitorValue = resistenciaCapacitor.value;
    var frequenciaCargaValue = frequenciaCarga.value;

    var geradorValor = parseFloat(ConverteVirgulaEmPonto(geradorValue));
    var transformadorN1Valor = parseInt(ConverteVirgulaEmPonto(transformadorN1Value));
    var transformadorN2Valor = parseInt(ConverteVirgulaEmPonto(transformadorN2Value));
    var quantidadeDiodoValor = parseInt(ConverteVirgulaEmPonto(quantidadeDiodoValue));
    var capacitorValor = parseFloat(ConverteVirgulaEmPonto(capacitorValue));
    var resistenciaCapacitorValor = parseFloat(ConverteVirgulaEmPonto(resistenciaCapacitorValue));
    var frequenciaCargaValor = parseFloat(ConverteVirgulaEmPonto(frequenciaCargaValue));

    var tensaoRetificador = geradorValor * transformadorN2Valor / transformadorN1Valor;

    // Tensão de pico no capacitor:
    var tensaoPicoSecundario = Math.sqrt(2) * tensaoRetificador;

    if(tipoDiodoValue == "silicio") {
        var tensaoPicoCapacitor = (tensaoPicoSecundario / 2) - (quantidadeDiodoValor * tensaoSilicio);
    }
    else {
        var tensaoPicoCapacitor = (tensaoPicoSecundario / 2) - (quantidadeDiodoValor * tensaoGermanio);
    }

    var Vcp = tensaoPicoCapacitor.toFixed(2).replace(".", ",");

    // Tensão de Ripple:
    var correnteMedia = tensaoPicoCapacitor / resistenciaCapacitorValor;
    var tensaoRipple = correnteMedia / (capacitorValor * 2 * frequenciaCargaValor);

    var Von = tensaoRipple.toFixed(2).replace(".", ",");

    // Tensão média na carga:
    var tensaoMax = tensaoPicoCapacitor;
    var tensaoMin = tensaoPicoCapacitor - tensaoRipple;
    var tensaoMedia = (tensaoMax + tensaoMin) / 2;

    var Vmedia = tensaoMedia.toFixed(2).replace(".", ",");

    document.querySelector("#respostaTensaoPicoCapacitor").innerHTML = "Resultado: O valor da Tensão de pico no Capacitor é: " + Vcp + " V.";
    document.querySelector("#respostaTensaoRipple").innerHTML = "Resultado: O valor da Tensão de Ripple é: " + Von + " V.";
    document.querySelector("#respostaTensaoMediaNaCarga").innerHTML = "Resultado: O valor da Tensão média na carga é: " + Vmedia + " V.";
}

function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}