function CalculaCircuito2() {
    const tensaoSilicio = 0.7;

    var gerador = document.querySelector("#geradorCircuito2");
    var tipoRetificador = document.querySelector('input[name="Retificador"]:checked');
    var transformadorN1 = document.querySelector("#transformador1");
    var transformadorN2 = document.querySelector("#transformador2");
    var capacitor = document.querySelector("#capacitor");
    var resistenciaCapacitor = document.querySelector("#resistenciaCapacitor");
    var frequenciaCarga = document.querySelector("#frequenciaCarga");

    var geradorValue = gerador.value;
    var tipoRetificadorValue = tipoRetificador.value;
    var transformadorN1Value = transformadorN1.value;
    var transformadorN2Value = transformadorN2.value;
    var capacitorValue = capacitor.value;
    var resistenciaCapacitorValue = resistenciaCapacitor.value;
    var frequenciaCargaValue = frequenciaCarga.value;

    var geradorValor = parseFloat(ConverteVirgulaEmPonto(geradorValue));
    var transformadorN1Valor = parseInt(ConverteVirgulaEmPonto(transformadorN1Value));
    var transformadorN2Valor = parseInt(ConverteVirgulaEmPonto(transformadorN2Value));
    var capacitorValor = parseFloat(ConverteVirgulaEmPonto(capacitorValue));
    var resistenciaCapacitorValor = parseFloat(ConverteVirgulaEmPonto(resistenciaCapacitorValue));
    var frequenciaCargaValor = parseFloat(ConverteVirgulaEmPonto(frequenciaCargaValue));

    var tensaoRetificador = geradorValor * transformadorN2Valor / transformadorN1Valor;

    // Tensão de pico no capacitor:
    var tensaoPicoSecundario = Math.sqrt(2) * tensaoRetificador;

    if(tipoRetificadorValue == "meia-onda") {
        var tensaoPicoCapacitor = tensaoPicoSecundario - tensaoSilicio;
    }
    else if(tipoRetificadorValue == "onda-completa") {
        var tensaoPicoCapacitor = tensaoPicoSecundario - (2 * tensaoSilicio);
    } 
    else {
        var tensaoPicoCapacitor = (tensaoPicoSecundario / 2) - tensaoSilicio;
    }

    var Vcp = tensaoPicoCapacitor.toFixed(2).replace(".", ",");

    // Tensão de Ripple:
    var correnteMedia = tensaoPicoCapacitor / resistenciaCapacitorValor;

    if(tipoRetificadorValue == "meia-onda") {
        var tensaoRipple = correnteMedia / (capacitorValor * frequenciaCargaValor);
    } 
    else {
        var tensaoRipple = correnteMedia / (capacitorValor * 2 * frequenciaCargaValor);
    }

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