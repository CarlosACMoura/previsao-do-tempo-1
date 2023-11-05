

const key = "50cbe4d8e9a6dc37da00dd4c20135fb4"

function colocarDadosNaTela(dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em" + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsão").innerHTML = dados.weather[0].description
    document.querySelector(".Umidade").innerHTML = (dados.main.humidity) + "%"
    document.querySelector(".image-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}

async function buscarcidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)




}


function clicknobotão() {
    const cidade = document.querySelector(".input-cidade").value


    buscarcidade(cidade)

}