const numAleatorio = () =>{
    const numeros = {}
    for (let i = 0; i < 10000; i++) {
        const element = Math.floor((Math.random() * 10) + 1);
        if(!numeros[element]){
            numeros[element] = 1
        } else {
            numeros[element]++
        }
    }
    console.log(numeros)
}
numAleatorio()
