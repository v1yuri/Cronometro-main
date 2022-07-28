var segundos = 0
var minutos = 0
var horas = 0
var cronometro
var status

function iniciar() {
    if(status == "rodando") return alert('Cronometro já iniciado!')
    timer()
    status = 'rodando'
}
function timer() {
    cronometro = setInterval(() => {
        segundos = segundos + 1
        var format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
        document.querySelector('h1').innerText = format
        if (segundos == 59) {
            segundos = 0
            minutos = minutos + 1
        }
        if (minutos == 59) {
            minutos = 0
            horas = horas + 1
        }
    }, 1000)
}
function parar() {
    status = "parado"
    clearInterval(cronometro)
}
function reniciar() {
    status = "parado"
    clearInterval(cronometro)
    segundos = 0
    minutos = 0
    horas = 0
    var format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
    document.querySelector('h1').innerText = format
}
