const setValorVision = (array) => {
    const longitud = array.length;
    let valores = []
    for (let i = 0; i < longitud; i++) {
        const rango = array[i];
        let valorVision = 0;

        for (let indice = i - rango; indice <= i + rango; indice++) {
            if (indice >= 0 && indice < longitud && indice !== i) {
                valorVision += array[indice];
            }
        }
        valores.push({value: array[i], valorVision})
    }
    return valores;
}


const range_vision = (num) => {
    if (isNaN(num)) return 'Ingrese un número válido';
    if (num < 0 || num % 1 !== 0) return 'Ingrese un número entero positivo';

    const digitos = num.toString().split('').map(Number);
    
    const valores = setValorVision(digitos);

    valores.sort((a, b) => {
        if (a.valorVision === b.valorVision) {
          return a.value - b.value;
        } else {
          return a.valorVision - b.valorVision;
        }
      });
      
    return valores[0].value === 1
}
console.log(range_vision(954814))