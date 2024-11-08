// Hora do desafio

function obterTemperatura(temperatura){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            console.log("Espera de 3s")
            resolve(temperatura)
        },3000)
    })
}



async function verificarClima(temperatura){
    console.log("Verificando a temperatura... ")

    const temp = await obterTemperatura(temperatura)
    console.log("A temperatura é:" , temp)
}

verificarClima(25)